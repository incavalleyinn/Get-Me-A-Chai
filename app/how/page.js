import Link from "next/link";

export const metadata = {
  title: 'How It Works - GetMeAChai',
}

export default function HowItWorks() {
  return (
    <div className="min-h-screen bg-[var(--bg-color)]  px-6 py-16">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-5xl font-extrabold mb-12 text-center leading-tight">
          How It Works & How to Get Started
        </h1>

        {/* Section: How Get Me A Chai Works */}
        <section className="mb-16 bg-white shadow-md rounded-xl p-8 text-black">
          <h2 className="text-3xl font-bold mb-6  flex items-center">
            🛠️ <span className="ml-3">How Get Me A Chai Works</span>
          </h2>
          <p className="text-lg  mb-6">
            Get Me A Chai is a simple way for fans to support the creators they love with small donations — like buying them a chai. It&apos;s fast, secure, and personal.
          </p>
          <ol className="list-decimal list-inside  space-y-3 text-base pl-4 text-black" >
            <li><strong>Creators</strong> sign up and set up their profile.</li>
            <li><strong>Fans</strong> visit their page and send a &quot;Drink&quot; of their choice (a small donation).</li>
            <li>Each donation can include a message of support to the creator.</li>
            <li>Creators receive the funds directly into their connected UPI account.</li>
          </ol>
        </section>

        {/* Divider */}
        <div className="border-t border-gray-300 my-12"></div>

        {/* Section: How to Get Started */}
        <section className="bg-white shadow-md rounded-xl p-8 text-black">
          <h2 className="text-3xl font-bold mb-6  flex items-center">
            🚀 <span className="ml-3">How to Get Started</span>
          </h2>
          <p className="text-lg  mb-8">
            Whether you&apos;re a creator or a fan, getting started is easy:
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {/* For Creators */}
            <div>
              <h3 className="text-xl font-bold mb-3 text-gray-800">👩‍🎨 For Creators</h3>
              <ul className="list-disc list-inside  space-y-2">
                <li>Click on “Sign-in”</li>
                <li>Create your profile with a short Username , Profile picture.</li>
                <li>Connect your UPI ID (we use UPI for secure payments).</li>
                <li>Share your Get Me A Chai link with your audience!</li>
              </ul>
            </div>

            {/* For Fans */}
            <div>
              <h3 className="text-xl font-bold mb-3 text-gray-800">🙋 For Fans</h3>
              <ul className="list-disc list-inside  space-y-2">
                <li>Find your favorite creator&apos;s page.</li>
                <li>Fill their &quot;Get Me A Chai&quot; form.</li>
                <li>Choose how much you want to give and leave a message (optional).</li>
                <li>Pay using UPI securely — and make their day!</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <p className=" text-lg">
            Still have questions?{' '}
            <Link href="/about" className=" font-semibold underline">contact us</Link>.
          </p>
        </div>
      </div>
    </div>
  );
}
