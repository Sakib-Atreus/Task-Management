import { useContext, useEffect, } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { AuthContext } from "../../../Providers/AuthProvider";

const Profile = () => {

    const { user , } = useContext(AuthContext);

    useEffect(() => {
        AOS.init({ duration: 3000, mirror: true })
    }, [])


    return (
        <div>
            <div className="lg:text-4xl font-black text-center">
                <h1 className="lg:text-4xl md:text-3xl text-2xl text-orange-500 lg:hidden md:hidden block"><span className="text-black">Hi</span> {user?.displayName}!</h1>
                {/* <p className="lg:text-2xl text-2xl mt-8">Email : {user?.email}</p> */}
                <div className="text-2xl mt-8 mb-16 items-center text-center flex justify-center gap-4">
                    <img className="w-48 h-48 rounded-full" src={user?.photoURL} alt="" />
                    <h1 className="lg:text-4xl md:text-3xl text-2xl text-orange-500 hidden md:block lg:block"><span className="text-black">Hi</span> {user?.displayName}!</h1>
                </div>
                <h2 className="text-2xl">Welcome to your task management dashboard!</h2>
            </div>
            <div data-aos="fade-up" className="grid lg:grid-cols-3 md:grid-cols-3 grid-cols-1 mt-12 gap-28 text-center mb-48 lg:mb-0 md:mb-24">
                <div className="card lg:w-48 md:w-48 h-20 bg-black  shadow-xl image-full">
                    <div className="card-body ">
                        <h2 className="text-3xl font-black text-orange-500 text-center ">1 </h2>
                        <p className="font-bold pt-1">Individual or Team by Organizing related tasks and handle carefully to complete projects</p>
                    </div>
                </div>
                <div className="card lg:w-48 md:w-48 h-20 bg-black shadow-xl image-full">
                    <div className="card-body ">
                        <h2 className="text-3xl font-black text-orange-500 text-center  ">2 </h2>
                        <p className="font-bold pt-1">Planning, organizing, leading, and controlling to Complete whole Process for projects</p>
                    </div>
                </div>
                <div className="card lg:w-48 md:w-48 h-20 bg-black  shadow-xl image-full">
                    <div className="card-body ">
                        <h2 className="text-3xl font-black text-orange-500 text-center  ">3</h2>
                        <p className="font-bold pt-1">Create an account on the website. Add task, Set due date and Complete Task within due date</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;