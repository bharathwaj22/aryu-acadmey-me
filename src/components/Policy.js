import React from "react";
import Header from "./Header.js";
import Footer from "./Footer.js";
import "../assests/css/float.css";

function Aryu_policy() {
  return (
    <>
      <section className="">
        <Header />
        <section>
          <div className="pt-5">
            <div className=" text-center type-of-course ">
              Privacy
              <span className="type-of-course-create "> Policy</span>
            </div>
          </div>
          <div className="policy-padd">
            <div>
              <div className="policy-heading">Privacy Policy</div>
              <p className="policy-content mt-2">
                At Aryu Academy, your privacy is important to us. This Privacy
                Policy explains how we collect, use, and protect your personal
                information when you visit our website or use our services. By
                accessing our website, you agree to the terms outlined below.
              </p>
            </div>
            <div>
              <div className="policy-heading mt-5">
                Our Commitment to Your Privacy
              </div>
              <p className="policy-content mt-2">
                We value your trust and are dedicated to ensuring the
                confidentiality of the information you share with us. This
                policy explains:
              </p>
              <ul>
                <li>The type of data we collect.</li>
                <li>How your data is used.</li>
                <li>Steps we take to keep your information secure.</li>
              </ul>
              <p className="policy-content mt-2">
                By accessing our Website or enrolling in our programs, you agree
                to the practices outlined below.
              </p>
            </div>
            <div>
              <div className="policy-heading mt-5">Data We Collect</div>

              <div className="policy-heading-inter mt-2">
                Personal Information
              </div>
              <p className="policy-content mt-2">
                We collect details you voluntarily provide, such as your:
              </p>
              <ul>
                <li>Name</li>
                <li>Email address</li>
                <li>
                  Any additional details submitted through forms or inquiries
                </li>
              </ul>
              <div className="policy-heading-inter mt-2">
                Personal Information
              </div>
              <p className="policy-content mt-2">
                We also gather information like your IP address, browser type,
                pages viewed, and visit duration. This data helps us optimize
                our Website and improve your browsing experience.
              </p>
            </div>
            <div>
              <div className="policy-heading mt-5">
                How We Use Your Information
              </div>
              <p className="policy-content mt-2">We use your information to:</p>
              <ul>
                <li>Respond to your queries or provide course details.</li>
                <li>
                  Process registrations and deliver our training programs.
                </li>
                <li>Send updates on policies, courses, or services.</li>
                <li>Improve our website and learning experience.</li>
              </ul>
            </div>
            {/*  */}
            <div>
              <div className="policy-heading mt-5">Data Sharing Policy</div>

              <ul className="mt-3">
                <li>
                  <span className="policy-heading-li">
                    No Third-Party Sharing:
                  </span>
                  <span className="policy-content">
                    {" "}
                    Your information will not be sold, rented, or shared for
                    marketing purposes.
                  </span>
                </li>
                <li>
                  <span className="policy-heading-li">Service Providers:</span>
                  <span className="policy-content">
                    {" "}
                    We may share data with trusted partners (e.g., payment
                    processors or email services) for operational purposes,
                    ensuring they follow strict confidentiality agreements.
                  </span>
                </li>
                <li>
                  <span className="policy-heading-li">Legal Requirements:</span>
                  <span className="policy-content">
                    {" "}
                    Information may be shared to comply with legal obligations
                    or protect rights.
                  </span>
                </li>
              </ul>
            </div>
            {/*  */}
            <div>
              <div className="policy-heading mt-5">
                Course Materials and Updates
              </div>
              <p className="policy-content mt-3">
                <ul>
                  <li>
                    All course content is developed by Aryu Academy and is for
                    personal learning only.{" "}
                  </li>
                  <li>
                    Reproduction or distribution without permission is
                    prohibited.
                  </li>
                  <li>
                    We may update course materials to align with industry trends
                    and standards.
                  </li>
                </ul>
              </p>
            </div>
            {/*  */}

            <div>
              <div className="policy-heading mt-5">Data Security Measures</div>
              <p className="policy-content mt-2">
                We use advanced security measures to protect your information
                from unauthorized access or misuse. However, no online platform
                is completely secure. We encourage you to avoid sharing
                sensitive details unnecessarily.
              </p>
            </div>
            {/*  */}
            <div>
              <div className="policy-heading">Cookies</div>
              <p className="policy-content mt-2">
                We use cookies to enhance your browsing experience by saving
                your preferences and analyzing website performance. You can
                disable cookies in your browser settings, but some features may
                not work as intended.
              </p>
            </div>
            {/*  */}
            <div>
              <div className="policy-heading  mt-5">External Links</div>
              <p className="policy-content mt-2">
                Our website may include links to external third-party sites.
                Please note that we do not have control over their content or
                privacy practices and cannot be held responsible for how they
                handle your information.Be sure to familiarize yourself with
                their policies before providing any personal information.
              </p>
            </div>
            {/*  */}
            <div>
              <div className="policy-heading mt-5">Policy Updates</div>
              <p className="policy-content mt-2">
                We may revise this Privacy Policy as needed to reflect changes
                in our practices or legal requirements.The most recent version
                of our Privacy Policy will be accessible on our website, along
                with the date it was last updated, ensuring you’re always
                informed of any changes.
              </p>
            </div>
            <div>
              <div className="policy-heading mt-5">Contact Us</div>

              <p className="policy-content mt-2">
                If you have any questions or concerns about this policy or your
                data, contact us:
              </p>
              <div className="policy-heading-inter mt-3">Aryu Academy</div>
              <h1 className="policy-content mt-2">
                No 33/ 14 , Ground floor, Jayammal St, Ayyavoo Colony,
                Aminjikarai,
              </h1>
              <h1 className="policy-content ">Chennai, Tamil Nadu 600029</h1>
              <div>
                <span className="policy-heading-inter">Email: </span>
                <span className="policy-content-num"> <a
                      href="mailto:info@aryuacademy.com"
                      className="terms-number"
                    >
                      info@aryuacademy.com
                    </a></span>
              </div>
              <div>
                <span className="policy-heading-inter">Phone: </span>
                <span className="policy-content"><a href="tel:+918122869706" className="terms-number">
                      +91 8122869706
                    </a></span>
              </div>

              <p className="policy-content mt-2">
                We are here to address your concerns and protect your privacy.
              </p>
            </div>
          </div>
        </section>
        <Footer/>
      </section>
    </>
  );
}

export default Aryu_policy;
