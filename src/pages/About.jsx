import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Particle from "../components/Particle";
import "../styles/about.css";
export default function About() {
  return (
    <>
      <Particle />
      <Navbar />
      <section>
        <div className="container-about">
          <h2 className="heading-about">About Us</h2>
          <p className="para-about">
            SaphLink is composed of individuals possessing numerous decades of
            experience in the fields of marketing and software, each of us
            having supported complex projects for some of the largest
            organizations across the financial services, high-tech, logistics,
            aviation, and consumer packaged goods industries. We are on a
            mission to bring life to the dreams or ideas of the most passionate
            and motivated individuals or organizations.
          </p>
          <p className="para-about">
            At our agency we believe that the right to creative expression,
            through the implementation of technology and the cultivation of an
            entrepreneurial spirit, should be accessible to all. While working
            with businesses of all sizes, we specialize in improving the
            operations and supporting the bottom line of small to medium sized
            businesses which still have room for exponential growth.
          </p>
          <p className="para-about">
            We always strive to, and always succeed in, disrupting the way our
            clients currently do business to execute innovative strategies that
            fundamentally bolster performance. While the impact we have on the
            business operations of our clients may vary, our commitment and
            ability to deliver results for our customers will never change.
          </p>
        </div>
      </section>
      <Footer />
    </>
  );
}
