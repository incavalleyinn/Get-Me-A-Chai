export const metadata = {
  title: 'Privacy Policy - GetMeAChai',
}

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen background1 text-text-primary px-6 py-12">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">Privacy Policy</h1>
        
        <p className="text-lg mb-4 text-text-secondary">
          Your privacy is important to us. At Get Me A Chai, we collect the minimum data necessary to provide you with a great experience. This policy outlines what we collect and how we use it.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-2">1. Information We Collect</h2>
        <div className="text-text-secondary mb-4">
          - Email address (if you sign up)<br />
          - Payment information (handled securely by our payment processors)<br />
          - Usage data (anonymous analytics to improve the platform)
        </div>

        <h2 className="text-2xl font-semibold mt-8 mb-2">2. How We Use Your Information</h2>
        <div className="text-text-secondary mb-4">
          We use your data to:
          <ul className="mt-2">
            <li>Provide and maintain our services</li>
            <li>Communicate with you (if you opt in)</li>
            <li>Improve the platform based on anonymous usage trends</li>
          </ul>
        </div>

        <h2 className="text-2xl font-semibold mt-8 mb-2">3. Third-Party Services</h2>
        <div className="text-text-secondary mb-4">
          We use trusted services like UPI for payments. We don’t sell your data. Ever.
        </div>

        <h2 className="text-2xl font-semibold mt-8 mb-2">4. Your Rights</h2>
        <div className="text-text-secondary mb-4">
          You can request to delete your data or account anytime by <a href="https://github.com/CodzHorizon" target="_blank" rel="noopener noreferrer" className="font-bold hover:text-sky-500 underline underline-offset-2">GITHUB</a> or emailing us at kshitizsh.8@gmail.com.
        </div>

        <h2 className="text-2xl font-semibold mt-8 mb-2">5. Changes to This Policy</h2>
        <div className="text-text-secondary mb-4">
          We may update this policy occasionally. When we do, we’ll notify users via in-app notice.
        </div>

        <div className="text-sm text-text-secondary mt-8">
          Last updated: September 6, 2025
        </div>
      </div>
    </div>
  );
}
