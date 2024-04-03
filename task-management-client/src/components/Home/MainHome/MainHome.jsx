import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

const MainHome = () => {
  useEffect(() => {
    AOS.init({ duration: 3000, mirror: true });
  }, []);
  return (
    <div className="max-w-7xl mx-auto">
      <section data-aos="zoom-in" className="text-center mt-24">
        <h1 className="lg:text-7xl md:text-7xl text-5xl font-semibold text-orange-500">Welcome</h1>
        <p className="lg:text-5xl md:text-5xl text-4xl font-semibold my-6">to</p>
        <h2 className="lg:text-6xl md:text-6xl text-4xl font-semibold">
          Task <span className="text-orange-500">M</span>anagement System
        </h2>

        <Link
          to={"/dashboard"}
          className="relative inline-flex items-center justify-start px-6 py-3 my-12 overflow-hidden font-medium transition-all bg-white border-1 border-orange-500 rounded hover:bg-white group"
        >
          <span className="w-48 h-48 rounded rotate-[-40deg] bg-orange-600 absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
          <span className="relative w-full text-left text-orange-500 text-xl transition-colors duration-300 ease-in-out group-hover:text-white flex items-center gap-2">
            Go For Task <FaArrowRight />
          </span>
        </Link>
      </section>

      <section
        data-aos="fade-up"
        className="grid lg:grid-cols-3 md:grid-cols-3 grid-cols-1 lg:mt-12 md:mt-10 mt-4 gap-28 lg:gap-6 text-center ms-16 mb-36 lg:mb-0 md:mb-24"
      >
        <div className="card w-72 h-20 bg-black shadow-xl image-full mb-12">
          <div className="card-body ">
            <h2 className="text-3xl font-black text-orange-500 text-center  ">
              1
            </h2>
            <p className="font-bold pt-1">
              Individual or Team by Organizing related tasks and
              handle carefully to complete projects
            </p>
          </div>
        </div>
        <div className="card w-72 h-20 bg-black  shadow-xl image-full mb-12">
          <div className="card-body ">
            <h2 className="text-3xl font-black text-orange-500 text-center  ">
              2
            </h2>
            <p className="font-bold pt-1">
              Planning, organizing, leading, and controlling to Complete whole
              Process for projects
            </p>
          </div>
        </div>
        <div className="card w-72 h-20 bg-black shadow-xl image-full mb-12">
          <div className="card-body ">
            <h2 className="text-3xl font-black text-orange-500 text-center  ">
              3
            </h2>
            <p className="font-bold pt-1">
              Create an account on the website. Add task, Set due date and
              Complete the Task within due date
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MainHome;
