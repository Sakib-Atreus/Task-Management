import { BiTimeFive } from "react-icons/bi";
import { FcBusinessman } from "react-icons/fc";
import { FiAlertCircle } from "react-icons/fi";
import { BsShare } from "react-icons/bs";
import SocialShare from "./SocialShare";
import { Link, useLoaderData, useNavigate } from "react-router-dom";
import { FaRegEdit } from "react-icons/fa";
import { useState } from "react";
import { TiTick } from "react-icons/ti";
import { FaRegCircle } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";
import Swal from "sweetalert2";

const SingleTask = ({ item }) => {
  const [tasks, setTasks] = useState([]);
  const navigate = useNavigate();
  const data = useLoaderData();
  const id = data?._id;
  const { _id, title, description, date, name } = item;
  const [cardColor, setCardColor] = useState("");

  //   For mark as completed
  const handleButtonClick = () => {
    setCardColor(cardColor === "teal" ? "" : "teal");
  };

  //   For delete the task
  const handleDelete = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to recover it!",
      textColor: "#ff580e",
      icon: "warning",
      iconColor: "#ff580e",
      background: "black",
      Color: "#ff580e",
      showCancelButton: true,
      confirmButtonColor: "#ff580e",
      cancelButtonColor: "#gray",
      confirmButtonText: "Delete ",
      confirmButtonTextColor: "black",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(
          `https://task-management-server-neon-six.vercel.app/task/${item?._id}`,
          {
            method: "DELETE",
          }
        )
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire({
                position: "top-center",
                icon: "",
                iconColor: "#ff580e",
                color: "#ff580e",
                background: "black",
                title: "Task Deleted",
                showConfirmButton: false,
                timer: 1500,
              });
              navigate("/dashboard/myTask");
              const remainingTasks = tasks.filter((task) => task._id !== _id);
              setTasks(remainingTasks);
            }
          });
      }
    });
  };

  return (
    <div className="">
      <div
        className="card  w-full lg:p-2 bg-sky-300 shadow-xl"
        style={{ backgroundColor: cardColor }}
      >
        <div className="card-body">
          <h2 className="card-title text-orange-500 text-2xl">
            <button
              onClick={handleButtonClick}
              style={{
                backgroundColor: "slate",
                color: "white",
                padding: "2px 2px",
                borderRadius: "5px",
                cursor: "pointer",
                border: "none",
              }}
            >
              {cardColor === "" ? <FaRegCircle /> : <TiTick />}
              {/* <CiSquareCheck /> */}
            </button>
            {title}
          </h2>

          <div>
            {description}
            <hr className="mt-2" />
          </div>

          <div className="flex items-center gap-1 ">
            <BiTimeFive className="text-xl font-black" />
            Due : {date}
          </div>
          <p className="flex gap-1 items-center">
            <FcBusinessman className="text-xl  " />
            Author Name: {name}
          </p>

          <hr className="mt-2" />

          <div className="card-actions justify-between items-center">
            <div className="flex gap-5 mt-1 items-center ">
              <button
                className=""
                onClick={() =>
                  document.getElementById("my_modal_4").showModal()
                }
              >
                <FiAlertCircle className=" text-orange-500 rounded p-1 text-3xl" />
              </button>
              <dialog id="my_modal_4" className="modal">
                <div className="modal-box bg-[#050816]">
                  <h3 className="font-bold text-lg  italic text-orange-500">
                    Important
                  </h3>
                  <p className="mt-3 text-orange-500 ">
                    Copyright in Canada As of 2023, copyright in Canada applies
                    to your work automatically and lasts the author’s lifetime
                    plus 70 years past their death. Previously, the protection
                    only lasted for 50 years past the author’s death.{" "}
                  </p>
                </div>
                <form method="dialog" className="modal-backdrop">
                  <button>close</button>
                </form>
              </dialog>

              <button
                className=""
                onClick={() =>
                  document.getElementById("my_modal_2").showModal()
                }
              >
                <BsShare className=" text-violet-700  rounded p-1 text-2xl" />
              </button>
              <dialog id="my_modal_2" className="modal">
                <div className="modal-box bg-[#050816]">
                  <h3 className="font-bold text-lg text-orange-600   italic">
                    Share Your Blog ...
                  </h3>
                  <p className="mt-3 ">
                    <SocialShare></SocialShare>
                  </p>
                </div>
                <form method="dialog" className="modal-backdrop">
                  <button>close</button>
                </form>
              </dialog>

              <Link to={`/dashboard/editTask/${_id}`}>
                <FaRegEdit className="text-xl text-gray-700 " />
              </Link>
              <Link>
                <button
                  onClick={() => handleDelete(_id)}
                  className="text-2xl mt-2 text-red-700"
                >
                  <RiDeleteBin6Line />
                </button>{" "}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleTask;
