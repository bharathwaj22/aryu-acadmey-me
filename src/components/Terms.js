import React from "react";
import Header from "./Header.js";
import Footer from "./Footer.js";
import "../assests/css/float.css";

function Aryu_terms() {
  return (
    <>
      <section className="">
        <Header />
        <section>
          <div className="pt-5">
            <div className=" text-center type-of-course ">
              Terms Of
              <span className="type-of-course-create "> Conditions</span>
            </div>
          </div>
          <div className="policy-padd">
            <div>
              {/* <div className="policy-heading">Privacy Policy</div> */}
              <p className="policy-content mt-2">
                Welcome to Aryu Academy! We thank you for choosing us as your
                learning partner for professional software training in Chennai.
                Our mission is to empower students with career-oriented
                training, life skills, and placement assistance to prepare them
                for the competitive job market.
              </p>
              <p className="policy-content mt-2">
                By enrolling in our courses, you agree to abide by the following
                terms and conditions:
              </p>
            </div>
            <div>
              <div className="policy-heading mt-5">Placement Assistance</div>
              {/* <p className="policy-content mt-2">
                We value your trust and are dedicated to ensuring the
                confidentiality of the information you share with us. This
                policy explains:
              </p> */}
              <ul className="policy-content mt-2">
                <li>
                  Aryu Academy provides placement assistance but does not
                  guarantee job placement
                </li>
                <li>
                  Placement services include resume building, portfolio
                  creation, mock interview preparation, and access to exclusive
                  job opportunities.
                </li>
              </ul>
            </div>
            <div>
              <div className="policy-heading mt-5">
                Refund & Cancellation Policy
              </div>

              <p className="policy-content mt-2">
                For detailed information, please refer to our refund policy.
                Refund requests must be submitted directly.
              </p>
            </div>
            <div>
              <div className="policy-heading mt-5">Student Behavior</div>
              <ul>
                <li>
                  Students are expected to maintain professional behavior and
                  follow the institute’s rules.
                </li>
                <li>
                  Disruptive behavior in classes may lead to disciplinary
                  action, including termination of the course without a refund.
                </li>
              </ul>
            </div>
            {/*  */}
            <div>
              <div className="policy-heading mt-5">Punctuality</div>

              <p className="policy-content mt-2">
                Students must attend classes on time. Persistent lateness may
                result in a warning from the trainer.
              </p>
            </div>
            {/*  */}
            <div>
              <div className="policy-heading mt-5">Use of Facilities</div>
              <p className="policy-content mt-3">
                <ul>
                  <li>
                    Students are encouraged to make the best use of the lab
                    facilities. However, any external devices or software
                    installations require prior approval from the institute’s
                    staff.
                  </li>
                  <li>
                    Aryu Academy is not responsible for the loss or damage of
                    personal belongings on its premises.
                  </li>
                </ul>
              </p>
            </div>
            {/*  */}

            <div>
              <div className="policy-heading mt-5">Course Attendance</div>
              <p className="policy-content mt-3">
                <ul>
                  <li>
                    Regular attendance is required to complete the course
                    successfully.
                  </li>
                  <li>
                    In case of unavoidable circumstances, like staff issues,
                    postponed classes will be rescheduled.
                  </li>
                  
                </ul>
              </p>
            </div>
            {/*  */}
            <div>
              <div className="policy-heading">Data Protection</div>
              <p className="policy-content mt-2">
                Aryu Academy ensures the confidentiality of your personal data.
                Information collected during enrollment will be used solely for
                educational and promotional purposes.
              </p>
            </div>
            {/*  */}
            <div>
              <div className="policy-heading  mt-5">
                Chennai-Specific Policy
              </div>
              <p className="policy-content mt-2">
                These terms and conditions are subject to Indian legal
                jurisdiction. Any disputes shall be subject to the exclusive
                jurisdiction of the courts located in Chennai, Tamil Nadu.
              </p>
            </div>
            {/*  */}
            {/* <div>
              <div className="policy-heading mt-5">
                {" "}
                Income Sharing Agreement (ISA)
              </div>
              <p className="policy-content mt-3">
                <ul>
                  <li>
                    Candidates who benefit from Aryu Academy’s placement
                    services agree to an Income Sharing Agreement (ISA),
                    contributing 8% of their CTC (plus GST) as a placement fee.
                  </li>
                  <li>
                    Compliance with the ISA and timely payment of placement fees
                    is mandatory.
                  </li>
                  <li></li>
                </ul>
              </p>
            </div> */}
            <div>
              <div className="policy-heading mt-5">Public Holidays</div>

              <p className="policy-content mt-2">
                Classes will not be conducted on public holidays unless
                otherwise informed in advance for special cases.
              </p>
            </div>
            <div>
              <div className="policy-heading mt-5">
                Resume and Portfolio Building
              </div>

              <p className="policy-content mt-2">
                Aryu Academy assists students in developing professional resumes
                and portfolios to enhance employability.{" "}
              </p>
            </div>
          </div>
        </section>
        <Footer />
      </section>
    </>
  );
}

export default Aryu_terms;
