import { Link } from "react-router-dom";
import contactBanner from "../../../assets/contactus.png";

const Contact = () => {
  return (
    <div className="max-w-7xl mx-auto grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 justify-center items-center lg:text-left md:text-left text-center lg:py-12 md:py-10 py-2">
        <div>
          <img src={contactBanner} alt="" />
        </div>
        <div>
            <h1 className="uppercase lg:text-6xl md:text-4xl text-2xl font-semibold">Contact Us</h1>
            <h2 className="lg:text-xl md:text-xl text-md text-orange-500 ps-2">Concept Loading...</h2>
            <p className="py-6">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam porro provident dolorem eaque reprehenderit maxime voluptate ad, autem nam. Fugit ducimus cumque placeat temporibus illum ipsa aut blanditiis similique accusamus minima, nobis iusto maxime corporis iure sapiente quis voluptatum quod!
          </p>
          <Link to="/home"><button className="btn bg-orange-500 text-white">Get Started</button></Link>
        </div>
    </div>
  );
};

export default Contact;
