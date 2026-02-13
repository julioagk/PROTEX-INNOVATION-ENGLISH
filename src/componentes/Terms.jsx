import React from 'react';
import Footer from './Footer';

export default function Terms() {
  return (
    <>
      <div className="bg-white min-h-screen">
        <div className="container mx-auto px-6 py-12 md:py-20">
          {/* Header */}
          <div className="max-w-4xl mx-auto mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Terms and Conditions
            </h1>
            <p className="text-gray-600 text-lg">
              Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
            </p>
          </div>

          {/* Content */}
          <div className="max-w-4xl mx-auto space-y-8">
            {/* Agreement to Terms */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Agreement to Terms</h2>
              <p className="text-gray-700 leading-relaxed">
                By accessing and using this website, you accept and agree to be bound by the terms 
                and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
              </p>
            </section>

            {/* Products and Services */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Products and Services</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We offer industrial electrical products including circuit breakers, load centers, 
                and protection devices. We reserve the right to:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li>Modify or discontinue any product without notice</li>
                <li>Change prices at any time without prior notice</li>
                <li>Limit quantities available for purchase</li>
                <li>Refuse service to anyone for any reason at any time</li>
              </ul>
            </section>

            {/* Orders and Payment */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Orders and Payment</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                When you place an order with us, you agree to the following:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li>All prices are in USD and subject to applicable taxes (8.25% Texas sales tax)</li>
                <li>You are responsible for providing accurate order information</li>
                <li>We reserve the right to cancel any order if payment is declined or suspected of fraud</li>
                <li>Order confirmation does not guarantee product availability</li>
                <li>A $9.99 shipping fee applies to all orders</li>
              </ul>
            </section>

            {/* Shipping and Delivery */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Shipping and Delivery</h2>
              <p className="text-gray-700 leading-relaxed">
                We ship products within the United States. Delivery times are estimates and not guaranteed. 
                We are not responsible for delays caused by shipping carriers, customs, weather, 
                or other circumstances beyond our control. Risk of loss and title for items purchased pass to you 
                upon delivery to the carrier.
              </p>
            </section>

            {/* Returns and Refunds */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Returns and Refunds</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Our return policy includes:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li>Products must be returned within 30 days of delivery</li>
                <li>Items must be unused and in original packaging</li>
                <li>Customer is responsible for return shipping costs unless the item is defective</li>
                <li>Refunds will be issued to the original payment method within 5-10 business days</li>
                <li>Certain products may be non-returnable due to safety or hygiene reasons</li>
              </ul>
            </section>

            {/* Product Warranties */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Product Warranties</h2>
              <p className="text-gray-700 leading-relaxed">
                Products sold may be covered by manufacturer warranties. We are not responsible 
                for manufacturer warranties, and any warranty claims should be directed to the manufacturer. We make 
                no representations or warranties of any kind, express or implied, about the completeness, accuracy, 
                reliability, suitability or availability of products.
              </p>
            </section>

            {/* Limitation of Liability */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Limitation of Liability</h2>
              <p className="text-gray-700 leading-relaxed">
                To the fullest extent permitted by applicable law, we shall not be liable for any 
                indirect, incidental, special, consequential or punitive damages, or any loss of profits or revenues, 
                whether incurred directly or indirectly, or any loss of data, use, goodwill, or other intangible losses 
                resulting from your use of our products or services.
              </p>
            </section>

            {/* Intellectual Property */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Intellectual Property</h2>
              <p className="text-gray-700 leading-relaxed">
                All content on this website, including text, graphics, logos, images, and software, is our property or its content suppliers and is protected by international copyright laws. You may not 
                reproduce, distribute, or create derivative works from any content on this site without our express 
                written permission.
              </p>
            </section>

            {/* User Conduct */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">User Conduct</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                You agree not to:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li>Use the site for any unlawful purpose</li>
                <li>Attempt to gain unauthorized access to our systems</li>
                <li>Interfere with or disrupt the site or servers</li>
                <li>Impersonate any person or entity</li>
                <li>Collect or store personal data about other users</li>
              </ul>
            </section>

            {/* Governing Law */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Governing Law</h2>
              <p className="text-gray-700 leading-relaxed">
                These Terms and Conditions shall be governed by and construed in accordance with the laws of the 
                State of Texas, United States, without regard to its conflict of law provisions. Any disputes arising 
                from these terms shall be resolved in the courts of Houston, Texas.
              </p>
            </section>

            {/* Changes to Terms */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Changes to Terms</h2>
              <p className="text-gray-700 leading-relaxed">
                We reserve the right to modify these terms at any time. Changes will be effective immediately upon 
                posting to the website. Your continued use of the site after changes are posted constitutes your 
                acceptance of the modified terms.
              </p>
            </section>

            {/* Contact Information */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Information</h2>
              <p className="text-gray-700 leading-relaxed">
                If you have any questions about these Terms and Conditions, please contact us:
              </p>
              <div className="mt-4 space-y-2">
                <p className="text-gray-700">
                  <strong>Email:</strong> <a href="mailto:info_sales@protexinnovations.com" className="text-blue-600 hover:text-blue-700">info_sales@protexinnovations.com</a>
                </p>
                <p className="text-gray-700">
                  <strong>Phone:</strong> <a href="tel:+17138057630" className="text-blue-600 hover:text-blue-700">+1 (713)-805-7630</a>
                </p>
                <p className="text-gray-700">
                  <strong>Address:</strong> Houston, Texas, USA
                </p>
                <p className="text-gray-700">
                  <strong>Business Hours:</strong> Monday - Friday: 9:00 AM - 5:00 PM, Saturday: 9:00 AM - 2:00 PM (CST)
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
