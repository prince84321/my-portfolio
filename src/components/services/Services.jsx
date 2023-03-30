import React from "react";
import { BiCheck } from "react-icons/bi";
import "./services.css";

function Services() {
  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>UI/UX Design</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icons" />
              <p>
                Organizing information and content to create a clear and
                intuitive navigation structure.
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icons" />
              <p>
                {" "}
                Creating low-fidelity representations of user interfaces to
                visualize the layout and functionality of screens.
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icons" />
              <p>
                Building interactive prototypes to test and refine user
                experience and functionality.
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icons" />
              <p>
                Designing interfaces that work seamlessly across a variety of
                devices and screen sizes.
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icons" />
              <p>
                Analyzing and optimizing user flows to improve the user
                experience.
              </p>
            </li>
          </ul>
        </article>

        {/* =========END OF UI/UX============= */}

        {/* ===============WEB DEVELOPMENT ============= */}
        <article className="service">
          <div className="service__head">
            <h3>Web Development</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icons" />
              <p>
                Developing frontend web applications using React, HTML, CSS,
                Material UI and JavaScript.
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icons" />
              <p>
                Developing reusable React components to improve code
                maintainability and scalability.
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icons" />
              <p>
                Using state management tools like Redux/Redux toolkit to manage
                data and application state.
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icons" />
              <p>
                {" "}
                Creating responsive web interfaces that adapt to different
                screen sizes and devices.
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icons" />
              <p>
                Integrating web applications with RESTful APIs to provide data
                and functionality to the frontend.
              </p>
            </li>
          </ul>
        </article>
        {/* ===============CONTENT CREATION ============= */}
        <article className="service">
          <div className="service__head">
            <h3>Content Creation</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icons" />
              <p>
                Developing a content strategy that aligns with the goals and
                objectives of the business or brand.
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icons" />
              <p>
                Optimizing content for search engines to improve visibility and
                organic traffic.
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icons" />
              <p>
                Reviewing and editing content for grammar, punctuation, and
                style consistency.
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icons" />
              <p>
                Designing and creating visual content, such as infographics, to
                communicate complex information in a visually appealing way.
              </p>
            </li>
          </ul>
        </article>
        {/* =============== END OF CONTENT CREATION ============= */}
      </div>
    </section>
  );
}

export default Services;
