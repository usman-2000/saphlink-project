import "../styles/operate.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fa1 } from "@fortawesome/free-solid-svg-icons";
import { fa2 } from "@fortawesome/free-solid-svg-icons";
import { fa3 } from "@fortawesome/free-solid-svg-icons";
export default function Operate() {
  return (
    <>
      {/* <div className="container">
        <h2 className="main-heading">This is how we operate</h2>
        <h1>
          ------------------------------------------------------------------------------------------
        </h1> */}
      <div className="sub-container">
        <div className="heading-cont">
          <h2 className="main-heading">This is how we operate</h2>
        </div>

        <div className="card-container">
          <div className="card-op">
            <FontAwesomeIcon className="digit" icon={fa1} />
            <h2 className="heading">Schedule a Free Discovery Call</h2>
            <p className="para">
              This is where we get the opportunity to learn about your company,
              problems, or goals. Then we identify what we can do to help.
            </p>
          </div>
          <div className="card-op">
            <FontAwesomeIcon className="digit" icon={fa2} />
            <h2 className="heading">Strategize & Quote</h2>
            <p className="para">
              Our discovery call will dictate our course of action for achieving
              your desired results. We will be creating a tailored approach to
              meet your, or your organizations needs.
            </p>
          </div>
          <div className="card-op">
            <FontAwesomeIcon className="digit" icon={fa3} />
            <h2 className="heading">Kick Off & Delivery</h2>
            <p className="para">
              Within 3-4 business we will provide a quoted price on the services
              being offered. Following our agreement on scope of work and
              expected deliverables, we will begin executing our strategic plan
              designed for you or your company.
            </p>
          </div>
        </div>
      </div>
      {/* </div> */}
    </>
  );
}
