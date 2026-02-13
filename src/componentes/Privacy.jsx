import React from 'react';
import Footer from './Footer';

export default function Privacy() {
  return (
    <>
      <div className="bg-white min-h-screen">
        <div className="container mx-auto px-6 py-12 md:py-20">
          {/* Header */}
          <div className="max-w-4xl mx-auto mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Privacy Policy
            </h1>
            <p className="text-gray-600 text-lg">
              Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
            </p>
          </div>

          {/* Content */}
          <div className="max-w-4xl mx-auto space-y-8">
            {/* Introduction */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Introduction</h2>
              <p className="text-gray-700 leading-relaxed">
                We respect your privacy and are committed to protecting your personal data. 
                This privacy policy will inform you about how we look after your personal data when you visit our 
                website and tell you about your privacy rights and how the law protects you.
              </p>
            </section>

            {/* Information We Collect */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Information We Collect</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We may collect, use, store and transfer different kinds of personal data about you:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li><strong>Identity Data:</strong> First name, last name, username or similar identifier</li>
                <li><strong>Contact Data:</strong> Email address, telephone numbers, and billing/delivery addresses</li>
                <li><strong>Transaction Data:</strong> Details about payments and products you have purchased from us</li>
                <li><strong>Technical Data:</strong> Internet protocol (IP) address, browser type and version, time zone setting, and location</li>
                <li><strong>Usage Data:</strong> Information about how you use our website and products</li>
              </ul>
            </section>

            {/* How We Use Your Information */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">How We Use Your Information</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We will only use your personal data when the law allows us to. Most commonly, we will use your 
                personal data in the following circumstances:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li>To process and deliver your order</li>
                <li>To manage our relationship with you, including notifying you about changes to our terms or privacy policy</li>
                <li>To improve our website, products, and services</li>
                <li>To respond to your inquiries and provide customer support</li>
                <li>To send you marketing communications (with your consent)</li>
              </ul>
            </section>

            {/* Data Security */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Data Security</h2>
              <p className="text-gray-700 leading-relaxed">
                We have put in place appropriate security measures to prevent your personal data from being 
                accidentally lost, used, or accessed in an unauthorized way. We limit access to your personal data 
                to those employees and other third parties who have a business need to know.
              </p>
            </section>

            {/* Your Legal Rights */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Your Legal Rights</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Under certain circumstances, you have rights under data protection laws in relation to your personal data, including the right to:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li>Request access to your personal data</li>
                <li>Request correction of your personal data</li>
                <li>Request erasure of your personal data</li>
                <li>Object to processing of your personal data</li>
                <li>Request restriction of processing your personal data</li>
                <li>Request transfer of your personal data</li>
                <li>Right to withdraw consent</li>
              </ul>
            </section>

            {/* Cookies */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Cookies</h2>
              <p className="text-gray-700 leading-relaxed">
                Our website uses cookies to distinguish you from other users of our website. This helps us to provide 
                you with a good experience when you browse our website and also allows us to improve our site. 
                You can set your browser to refuse all or some browser cookies, or to alert you when websites set or 
                access cookies.
              </p>
            </section>

            {/* Third-Party Links */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Third-Party Links</h2>
              <p className="text-gray-700 leading-relaxed">
                Our website may include links to third-party websites, plug-ins, and applications. Clicking on those 
                links or enabling those connections may allow third parties to collect or share data about you. We do 
                not control these third-party websites and are not responsible for their privacy statements.
              </p>
            </section>

            {/* Contact Us */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Us</h2>
              <p className="text-gray-700 leading-relaxed">
                If you have any questions about this privacy policy or our privacy practices, please contact us:
              </p>
              <div className="mt-4 space-y-2">
                <p className="text-gray-700">
                  <strong>Email:</strong> <a href="mailto:info_sales@protexinnovations.com" className="text-blue-600 hover:text-blue-700">info_sales@protexinnovations.com</a>
                </p>
                <p className="text-gray-700">
                  <strong>Phone:</strong> <a href="tel:+17032017630" className="text-blue-600 hover:text-blue-700">+1 (703) 201-7630</a>
                </p>
                <p className="text-gray-700">
                  <strong>Address:</strong> Houston, Texas, USA
                </p>
              </div>
            </section>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
