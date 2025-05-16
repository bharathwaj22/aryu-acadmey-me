import React from "react";
import Header from "./Header.js";
import Footer from "./Footer.js";
import "../assests/css/float.css";

function Aryu_refund() {
  return (
    <>
      <section className="">
        <Header />
        <section>
          <div className="pt-5">
            <div className=" text-center type-of-course ">
              Refund
              <span className="type-of-course-create "> Policy</span>
            </div>
          </div>
          <div className="policy-padd">
            <div>
              <div className="policy-heading">Refund Policy</div>
              <p className="policy-content mt-2">
                Thank you for enrolling in our courses at Aryu Academy. We are
                committed to providing a rewarding learning experience and
                ensuring that our students receive the best quality education.
                Please take a moment to review our refund policy, which outlines
                the terms for cancellation and refunds.
              </p>
              <p className="policy-content mt-2">
                By purchasing a course at Aryu Academy, you agree to our Privacy
                Policy, Terms & condition, and Refund Policy.
              </p>
            </div>
            <div>
              <div className="policy-heading mt-5">
                Our refund policy is as follows:
              </div>
              <div className="policy-heading-inter mt-2">
                Refunds for Full Payment:
              </div>
              <p className="policy-content mt-2 ">
                Strictly no refunds will be provided once payment has been made.
              </p>
              {/* <div className="policy-heading-inter mt-2">
                Refunds for Paid Installments:
              </div>
              <p className="policy-content mt-2 mx-2">
                If the payment is made in installments, no refund will be
                provided once any installment has been paid.
              </p> */}
            </div>
            <div>
              <div className="policy-heading mt-5">
                Refunds for Paid Installments:
              </div>

              <p className="policy-content mt-2">
                If the payment is made in installments, no refund will be
                provided for the first installment.{" "}
              </p>
            </div>
            <div>
              <div className="policy-heading mt-5">
                Refunds for Loans (e.g., Bajaj Finserv):
              </div>
              <p className="policy-content mt-2">
                If a loan was used to pay for the course, we are not responsible
                for refunding the loan amount. The loan terms will apply as per
                the agreement with the loan provider.
              </p>
            </div>
            {/*  */}
            <div>
              <div className="policy-heading mt-5">
                Cancellation Requests:
              </div>
              <p className="policy-content mt-2">
                Course cancellations are allowed; however, the course is
                non-transferable and cannot be assigned to another individual.
              </p>
            </div>
            {/*  */}
            <div>
              <div className="policy-heading mt-5">
                Refunds for Duplicate Payments:
              </div>
              <p className="policy-content mt-3">
                If a duplicate payment is made, the refund will be processed
                through the original payment method within 7 to 10 working days
                after the customer notifies us.
              </p>
            </div>
            <div>
              <div className="policy-heading mt-5">Note:</div>
              <p className="policy-content mt-3">
                No refunds are provided once payment is made, except for
                duplicate payments, which will be refunded within 7 to 10
                working days.
              </p>
            </div>
            {/*  */}
          </div>
        </section>
        <Footer />
      </section>
    </>
  );
}

export default Aryu_refund;
