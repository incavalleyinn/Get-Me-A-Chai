import connectToDatabase from "@/lib/mongodb";
import Contribution from "@/models/Contribution";
import User from "@/models/User";

export async function GET() {
  await connectToDatabase();
  // Aggregate total amount per creatorEmail
  const top = await Contribution.aggregate([
    { $group: { _id: "$creatorEmail", total: { $sum: "$amount" } } },
    { $sort: { total: -1 } },
    { $limit: 4 }
  ]);
  // Get user info for each top creator
  const creators = await Promise.all(
    top.map(async (item) => {
      const user = await User.findOne({ email: item._id });
      return user
        ? {
            username: user.username,
            profilePicture: user.profilePicture,
            total: item.total,
          }
        : null;
    })
  );
  return Response.json(creators.filter(Boolean), { status: 200 });
}