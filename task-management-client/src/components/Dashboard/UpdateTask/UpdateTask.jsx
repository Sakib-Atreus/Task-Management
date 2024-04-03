import { useState } from "react";
import { Link, useLoaderData, useNavigate } from "react-router-dom";
import { RiDeleteBin6Line } from "react-icons/ri";
import Swal from "sweetalert2";

const UpdateTask = () => {
  const [tasks, setTasks] = useState([]);
  const navigate = useNavigate();
  const data = useLoaderData();
  const id = data?._id;

  //   console.log(id);
  //   console.log(data);

  const handleUpdate = (event) => {
    event.preventDefault();
    const form = event.target;
    const date = form.date.value;
    const title = form.title.value;
    const name = form.name.value;
    const email = form.email.value;
    const description = form.description.value;
    console.log(date, email, description, title, name);
    form.reset();
    console.log(data.name);

    const update = { date, email, description, title, name };

    fetch(
      `https://task-management-server-neon-six.vercel.app/task/${data?._id}`,
      {
        method: "PATCH",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(update),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          Swal.fire({
            position: "top-center",
            icon: "success",
            iconColor: "#ff580e",
            color: "#ff580e",
            background: "black",
            title: "Task Added",
            showConfirmButton: false,
            timer: 1500,
          });
          navigate("/dashboard/myTask");
        }
      });
  };

  const handleDelete = (_id) => {
    console.log(_id);
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
      // cancelButtonAriaLabel:'white',
      confirmButtonText: "Delete ",
      confirmButtonTextColor: "black",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://task-management-server-neon-six.vercel.app/task/${id}`, {
          method: "DELETE",
        })
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
              const remaining = tasks.filter((task) => task._id !== _id);
              setTasks(remaining);
            }
          });
      }
    });
  };

  return (
    <div className="mb-12 ">
      <h1 className="text-center p-4 font-black text-4xl  text-orange-500  rounded-full">
        Update Task
      </h1>
      <form
        onSubmit={handleUpdate}
        className=" max-w-7xl mx-auto  w-full lg:ps-1 md:ps-2 p-4"
      >
        <div className="flex justify-between">
          <div>
            <h2 className="font-bold text-4xl mt-3  mb-5 ps-3 ">Title : </h2>
          </div>
          <div className="grid grid-cols-2 lg:gap-2 md:gap-1">
            <Link>
              <button
                onClick={() => handleDelete(tasks._id)}
                className="btn mt-3 bg-black text-xl text-orange-500 "
              >
                <RiDeleteBin6Line />
              </button>{" "}
            </Link>

            <input
              className="btn text-white mt-3 bg-orange-500 font-bold text-xl rounded-3xl py-1 lg:ms-0  w-full "
              type="submit"
              value="Save"
            />
          </div>
        </div>

        <input
          type="text"
          name="title"
          defaultValue={data?.title}
          placeholder="Type here"
          className="p-2  w-full "
        />

        <hr className="border w-1/4 border-black mb-3" />
        <h2 className=" font-bold text-xl mt-5">Author Name :</h2>
        <input
          type="text"
          name="name"
          defaultValue={data?.name}
          placeholder="Type here"
          className="p-3  lg:w-1/4 md:w-1/4    rounded-3xl"
        />
        <hr className="border w-1/4 border-black mb-3" />

        <br />
        <h2 className=" font-bold text-xl mt-5">Email :</h2>
        <input
          type="text"
          name="email"
          defaultValue={data?.email}
          placeholder="Type here"
          className="p-3  lg:w-1/4 md:w-1/4 border-primary-focus rounded-3xl"
        />
        <hr className="border w-1/4 border-black  mb-3" />

        <br />
        <h2 className=" font-bold text-xl ">Date :</h2>
        <input
          type="date"
          name="date"
          defaultValue={data?.date}
          placeholder="Type here"
          className="p-3   lg:w-1/4 md:w-1/4  rounded-3xl"
        />
        <hr className="border w-1/4 border-black mb-3" />

        <br />

        <h2 className=" font-bold text-xl">Description</h2>
        <input
          type="text"
          name="description"
          defaultValue={data?.description}
          placeholder="Type here"
          className=" mt-3 w-full items-start pb-12  p-2     rounded-lg "
        />
        <hr className="border w-4/4 border-black mb-3" />
      </form>
    </div>
  );
};
export default UpdateTask;
