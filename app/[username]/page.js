//app/[username]/page.js
import UserPayment from '@/components/UserPayment'

export default async function Username({ params }) {
   const { username } = await params;
  return <UserPayment username={username} />
}
export async function generateMetadata({ params }) {
  const { username } = await params; // destructure for clarity
  return {
    title: `Support ${username} - Get Me A Chai`,
  };
}