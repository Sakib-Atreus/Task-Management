import { useContext } from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../../Providers/AuthProvider";

const CreateTask = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    fetch("https://task-management-server-neon-six.vercel.app/task", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          //bg-[#5c771e]
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
        } else {
          console.log("Data error with inserted: ", data);
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <div className="max-w-7xl mx-auto">
      <div className="max-w-7xl mx-auto">
        <form className="" onSubmit={handleSubmit(onSubmit)}>
          <div>
            <h5 className="font-black text-4xl  ps-3 ">Title </h5>
            <input
              className="p-2  w-full text-black bg  "
              defaultValue=""
              placeholder="Create your own task   ..."
              {...register("title")}
            />
          </div>
          <hr className="border border-primary-focus" />
          <div className="grid lg:grid-cols-4 md:grid-cols-4 grid-cols-1 mt-9 ps3 gap-5">
            <div>
              <h5 className="font-bold  ">Author - Email :</h5>
              <input
                className="p-3  w-full border border-primary-focus 
                         rounded-3xl"
                placeholder="#email"
                defaultValue={user?.email}
                {...register("email", { required: true })}
              />
            </div>
            <div>
              <h5 className="font-black  ">Author - Name :</h5>
              <input
                className="p-3  w-full border border-primary-focus  
                         rounded-3xl"
                placeholder="Your Name"
                defaultValue=""
                {...register("name")}
              />
            </div>
            <div>
              <h5 className="font-black ">Due Date :</h5>
              <input
                className="p-3 w-full border border-primary-focus  rounded-3xl"
                type="date"
                {...register("date")}
              />
            </div>
          </div>
          <h5 className=" text-2xl mt-3 ps-3 mb-3 font-black"> Description </h5>
          <div className="text-left m-1">
            <input
              className=" w-full items-start pb-48 border border-primary-focus   p-4 rounded-lg placeholder:"
              defaultValue=""
              placeholder="Write here . . ."
              {...register("description")}
            />
          </div>
          <div></div>
          <div className="md:grid md:grid-cols-1 lg:grid grid-cols-1 mt-3 p-2">
            {errors.exampleRequired && <span>This field is required</span>}

            <input
              className="btn mb-20 mt-5 bg-orange-500  text-white text-lg  rounded-3xl py-1 lg:ms-72  w-1/2 "
              type="submit"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateTask;
