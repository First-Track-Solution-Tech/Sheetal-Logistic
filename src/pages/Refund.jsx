import React from 'react'

const Refund = () => {
  return (
    <section className="w-full bg-white py-16">
      <div className="max-w-5xl mx-auto px-6">
        <h1 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-8">
          Refund & Cancellation Policy
        </h1>

        <div className="space-y-8 text-gray-700 text-sm md:text-base leading-relaxed">
          <p>
            This Refund & Cancellation Policy explains how order cancellations,
            refunds, and related requests are handled by Quick Courier. By using
            our services, you agree to the terms described below.
          </p>

          <div>
            <h2 className="font-semibold text-lg mb-2">
              1. Shipment Cancellation
            </h2>
            <p>
              Orders can be canceled only before the shipment is picked up. Once
              a package has been collected or dispatched, cancellation requests
              will no longer be accepted.
            </p>
            <ul className="list-disc ml-6 mt-2 space-y-1">
              <li>
                Cancellation requests must be submitted through the website or
                customer support.
              </li>
              <li>
                Service charges applied before cancellation may not be eligible
                for refund.
              </li>
            </ul>
          </div>

          <div>
            <h2 className="font-semibold text-lg mb-2">
              2. Refund Eligibility
            </h2>
            <p>
              Refunds may be considered under the following conditions:
            </p>
            <ul className="list-disc ml-6 mt-2 space-y-1">
              <li>
                The order was canceled successfully before shipment pickup.
              </li>
              <li>
                A payment was processed incorrectly due to a system error.
              </li>
              <li>
                The service could not be fulfilled due to operational limitations.
              </li>
            </ul>
          </div>

          <div>
            <h2 className="font-semibold text-lg mb-2">
              3. Non-Refundable Cases
            </h2>
            <p>
              Refunds will not be provided in the following situations:
            </p>
            <ul className="list-disc ml-6 mt-2 space-y-1">
              <li>
                Shipments that are already in transit or completed.
              </li>
              <li>
                Delays caused by weather conditions, customs procedures, or
                regulatory requirements.
              </li>
              <li>
                Incorrect or incomplete shipment information provided by the
                customer.
              </li>
              <li>
                Actions taken by authorities or third-party logistics partners.
              </li>
            </ul>
          </div>

          <div>
            <h2 className="font-semibold text-lg mb-2">
              4. Refund Processing Time
            </h2>
            <p>
              Approved refunds are typically processed within 7 to 10 business
              days. Refunds are issued to the original payment method used during
              booking.
            </p>
          </div>

          <div>
            <h2 className="font-semibold text-lg mb-2">
              5. Lost or Damaged Shipments
            </h2>
            <p>
              In the event of a lost or damaged shipment, Quick Courier may review
              the case for possible compensation. Claims are assessed based on
              shipment value, supporting documents, and investigation outcomes.
            </p>
            <p className="mt-2">
              Compensation, if applicable, is subject to service terms and
              carrier policies.
            </p>
          </div>

          <div>
            <h2 className="font-semibold text-lg mb-2">
              6. Policy Changes
            </h2>
            <p>
              Quick Courier reserves the right to update this policy at any time.
              Any changes will take effect immediately once published on this
              page.
            </p>
          </div>

          <div>
            <h2 className="font-semibold text-lg mb-2">
              7. Contact Information
            </h2>
            <p>
              For questions regarding refunds or cancellations, please contact us
              at
              <span className="text-emerald-600 font-medium">
                {" "}quickcourier.in
              </span>.
            </p>
          </div>

          
        </div>
      </div>
    </section>
  )
}

export default Refund