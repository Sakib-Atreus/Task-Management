import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";
import SingleTask from "./SingleTask/SingleTask";
import AOS from "aos";
import "aos/dist/aos.css";

const MyTask = () => {
  const { user } = useContext(AuthContext);
  const [Task, setTask] = useState([]);
  const [searchText, setSearchText] = useState("");

  console.log(user.email);

  useEffect(() => {
    fetch(
      `https://task-management-server-neon-six.vercel.app/task/${user?.email}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setTask(data);
      });
  }, [user]);

  const handleSearch = () => {
    fetch(
      `https://task-management-server-neon-six.vercel.app/searchText/${searchText}`
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setTask(data);
      });
  };

  useEffect(() => {
    AOS.init({ duration: 2000, mirror: true });
  }, []);

  return (
    <div className="">
      <div className="search-box  text-center ps-2">
        <h1 className="text-orange-500 font-black text-3xl  items-center">
          My Task
        </h1>
        <input
          onChange={(e) => setSearchText(e.target.value)}
          type="text"
          className="ps-3 p-1 mt-5 rounded-lg bg-gray-300 text-black"
          placeholder="Search Task "
        />{" "}
        <button
          onClick={handleSearch}
          className="btn btn-sm items-center  bg-orange-400 text-white m-4 "
        >
          Search
        </button>
      </div>

      <div
        data-aos="fade-up"
        data-aos-mirror="true"
        className="mt-1 mb-16 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 lg:p-12 md:p-12"
      >
        {Task?.map((item) => (
          <>
            <SingleTask key={item._id} item={item}></SingleTask>
          </>
        ))}
      </div>
    </div>
  );
};

export default MyTask;
