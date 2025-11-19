import Header from '@/app/components/header'
export const metadata = {
  title: 'Privacy Policy | Dr. Jan Duffy',
  description: 'Privacy policy for Dr. Janet Duffy real estate website.',
}
export default function PrivacyPolicyPage() {
  return (
    <>
      <Header />
      <div className="min-h-screen bg-gray-50">
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto prose prose-lg">
              <h1 className="text-4xl md:text-5xl font-black mb-8">
                Privacy Policy
              </h1>
              <div className="space-y-8">
                <div>
                  <h2 className="text-2xl font-bold mb-4">Information We Collect</h2>
                  <p>
                    We collect information that you provide directly to us, including:
                  </p>
                  <ul>
                    <li>Name, email address, and phone number</li>
                    <li>Property address (if provided)</li>
                    <li>Information about your HOME THAT DIDN'T SELL</li>
                    <li>Any other information you choose to provide</li>
                  </ul>
                </div>
                <div>
                  <h2 className="text-2xl font-bold mb-4">How We Use Your Information</h2>
                  <p>We use the information we collect to:</p>
                  <ul>
                    <li>Respond to your inquiries and provide services</li>
                    <li>Send you marketing communications (with your consent)</li>
                    <li>Improve our website and services</li>
                    <li>Comply with legal obligations</li>
                  </ul>
                </div>
                <div>
                  <h2 className="text-2xl font-bold mb-4">Information Sharing</h2>
                  <p>
                    We do not sell your personal information. We may share your information only:
                  </p>
                  <ul>
                    <li>With service providers who assist in our operations</li>
                    <li>When required by law or to protect our rights</li>
                    <li>With your explicit consent</li>
                  </ul>
                </div>
                <div>
                  <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
                  <p>
                    If you have questions about this privacy policy, please contact us at:
                  </p>
                  <p>
                    <strong>Dr. Janet Duffy</strong>
                    <br />
                    Phone: <a href="tel:7025001064" className="text-primary">(702) 500-1064</a>
                    <br />
                    Email: <a href="mailto:drjan@drjanduffy.com" className="text-primary">drjan@drjanduffy.com</a>
                  </p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">
                    Last updated: November 2026
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
