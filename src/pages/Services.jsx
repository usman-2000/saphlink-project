import "../styles/service.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHammer,
  faBrowser,
  faTrashCan,
  faTable,
  faViruses,
  faWrench,
} from "@fortawesome/free-solid-svg-icons";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Particle from "../components/Particle";

export default function Service() {
  return (
    <>
      <Particle />
      <Navbar />
      <section>
        <div className="heading-container">
          <h2 className="section-heading">What can we do for you?</h2>
          <h2 className="section-sub-heading">Our services include:</h2>
        </div>
        {/* <div className="row">
        </div> */}
        <div className="row">
          <div className="column">
            <div className="card">
              <div className="icon-wrapper">
                <FontAwesomeIcon icon={faHammer} />
              </div>
              <h3>Web Design & Web Development</h3>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Quisquam consequatur necessitatibus eaque.
              </p>
            </div>
          </div>
          <div className="column">
            <div className="card">
              <div className="icon-wrapper">
                <FontAwesomeIcon icon={faTable} />
              </div>
              <h3>Application Development</h3>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Quisquam consequatur necessitatibus eaque.
              </p>
            </div>
          </div>
          <div className="column">
            <div className="card">
              <div className="icon-wrapper">
                <FontAwesomeIcon icon={faViruses} />
              </div>
              <h3>IT Services Outsourcing</h3>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Quisquam consequatur necessitatibus eaque.
              </p>
            </div>
          </div>
          <div className="column">
            <div className="card">
              <div className="icon-wrapper">
                <FontAwesomeIcon icon={faWrench} />
              </div>
              <h3>Social Media Management</h3>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Quisquam consequatur necessitatibus eaque.
              </p>
            </div>
          </div>
          <div className="column">
            <div className="card">
              <div className="icon-wrapper">
                <FontAwesomeIcon icon={faWrench} />
              </div>
              <h3>Graphic Design Services</h3>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Quisquam consequatur necessitatibus eaque.
              </p>
            </div>
          </div>
          <div className="column">
            <div className="card">
              <div className="icon-wrapper">
                <FontAwesomeIcon icon={faWrench} />
              </div>
              <h3>Virtual Assistant Recruitment</h3>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Quisquam consequatur necessitatibus eaque.
              </p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
