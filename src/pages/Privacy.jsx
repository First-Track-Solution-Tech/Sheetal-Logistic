import React from "react";

const Privacy = () => {
  return (
    <section className="w-full py-16 font-inter">
      <div className="max-w-5xl mx-auto px-4 space-y-8">

        <h1 className="text-3xl font-semibold text-center">
          Privacy Policy
        </h1>

        <p className="text-gray-700">
          At <strong>Quick Courier</strong>, your privacy is important to us.
          This Privacy Policy explains how we collect, use, and protect your
          personal information when you use our website and services.
        </p>

        <div className="space-y-6">

          <div>
            <h2 className="text-xl font-semibold">1. Information We Collect</h2>
            <p className="text-gray-700">
              We may collect personal details such as your name, email address,
              phone number, pickup and delivery information, and shipment details
              when you interact with our services or contact us.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold">2. How We Use Your Information</h2>
            <p className="text-gray-700">
              Your information is used to process shipments, provide tracking
              updates, respond to inquiries, improve our services, and ensure
              smooth communication related to deliveries.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold">3. Data Security</h2>
            <p className="text-gray-700">
              Quick Courier uses reasonable technical and organizational measures
              to protect your personal data from unauthorized access, loss, or
              misuse. We regularly review our security practices to maintain
              data safety.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold">4. Sharing of Information</h2>
            <p className="text-gray-700">
              We do not sell your personal information. Data may be shared only
              with trusted partners or service providers when required to
              complete deliveries or comply with legal obligations.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold">5. Cookies</h2>
            <p className="text-gray-700">
              Our website may use cookies to enhance user experience, analyze
              website traffic, and improve functionality. You can manage cookie
              preferences through your browser settings.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold">6. Your Rights</h2>
            <p className="text-gray-700">
              You have the right to access, update, or request deletion of your
              personal information. If you wish to exercise these rights, please
              contact us using the details below.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold">7. Policy Updates</h2>
            <p className="text-gray-700">
              Quick Courier may update this Privacy Policy periodically. Any
              changes will be posted on this page, and continued use of our
              services indicates acceptance of the updated policy.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold">8. Contact Us</h2>
            <p className="text-gray-700">
              If you have any questions about this Privacy Policy or how we
              handle your data, you can reach us at{" "}
              <a
                href="mailto:info@shipycourier.com"
                className="text-blue-600 underline"
              >
                info@quickcourier.in
              </a>
              .
            </p>
          </div>

        </div>


      </div>
    </section>
  );
};

export default Privacy;
