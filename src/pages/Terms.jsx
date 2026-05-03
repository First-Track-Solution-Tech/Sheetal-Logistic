import React from 'react'

const Terms = () => {
  return (
    <section className="w-full py-16 font-inter">
      <div className="max-w-5xl mx-auto px-4 space-y-8">

        <h1 className="text-3xl font-semibold text-center">
          Terms & Conditions
        </h1>

        <p className="text-gray-700">
          Welcome to <strong>Quick Courier</strong>. By accessing or using our
          website and services, you agree to comply with and be bound by the
          following Terms & Conditions. Please read them carefully before using
          our services.
        </p>

        <div className="space-y-6">

          <div>
            <h2 className="text-xl font-semibold">1. Acceptance of Terms</h2>
            <p className="text-gray-700">
              By using Quick Courier’s website or services, you confirm that you
              accept these Terms & Conditions. If you do not agree, please do
              not use our services.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold">2. Services Provided</h2>
            <p className="text-gray-700">
              Quick Courier offers logistics and courier solutions including
              shipment booking, parcel tracking, and delivery management. The
              scope of services may change or improve over time.
            </p>
            </div>

          <div>
            <h2 className="text-xl font-semibold">3. User Responsibilities</h2>
            <p className="text-gray-700">
              Users are responsible for providing accurate shipment details,
              contact information, and ensuring that parcels comply with
              applicable laws. Any misuse of the platform may result in service
              suspension.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold">4. Prohibited Items</h2>
            <p className="text-gray-700">
              Quick Courier does not allow the shipment of illegal, hazardous,
              restricted, or prohibited items. The sender is fully responsible
              for the contents of the shipment.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold">5. Limitation of Liability</h2>
            <p className="text-gray-700">
              Quick Courier is not liable for delays or damages caused by factors
              beyond our control, including weather conditions, customs issues,
              or third-party service disruptions.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold">6. Intellectual Property</h2>
            <p className="text-gray-700">
              All website content, logos, designs, and materials belong to
              Quick Courier and may not be copied, reused, or distributed
              without prior permission.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold">7. Termination of Services</h2>
            <p className="text-gray-700">
              Quick Courier reserves the right to suspend or terminate access to
              services if these terms are violated or if misuse is detected.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold">8. Changes to Terms</h2>
            <p className="text-gray-700">
              These Terms & Conditions may be updated from time to time. Any
              changes will be posted on this page, and continued use of the
              services implies acceptance of the updated terms.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold">9. Governing Law</h2>
            <p className="text-gray-700">
              These terms are governed by and interpreted in accordance with
              applicable laws of India.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold">10. Contact Information</h2>
            <p className="text-gray-700">
              If you have any questions regarding these Terms & Conditions,
              please contact us at{" "}
              <a
                href="mailto:info@shipycourier.com"
                className="text-blue-600 underline"
              >
                info@shipycourier.com
              </a>
              .
            </p>
          </div>

        </div>

        
      </div>
    </section>
  )
}

export default Terms