import { Link } from "react-router-dom";
import { AuthContext } from "../../../Providers/AuthProvider";
import { useContext } from "react";
import { getAuth } from "firebase/auth";
import app from "../../../firebase/firebase.config";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
    // console.log(user);
    const auth = getAuth(app);
    const handleLogOut = () => {
      logOut(auth)
        .then(result => {
          localStorage.removeItem('set-token-for-user');
          result;
        })
        .catch(error => {
          console.log(error);
        });
    };
  return (
    <div className="navbar bg-base-300 text-base-content font-medium lg:px-4 md:px-4">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a href="/home">Home</a>
            </li>
            {
            user ? <li>
            <a href="/dashboard/myTask">My Task</a>
            </li> : <li className="hidden"></li>
            }
            <li>
              <a href="/about">About</a>
            </li>
            <li>
              <a href="/blog">Blog</a>
            </li>
            <li>
              <a href="/contact">Contact</a>
            </li>
            {
            user ? <li>
            <a href="/dashboard">Dashboard</a>
            </li> : <li className="hidden"></li>
            }
          </ul>
        </div>
        <Link to="/home" className="lg:text-3xl text-2xl font-bold first-letter:text-orange-500 first-letter:text-4xl">Task Management</Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <a href="/home">Home</a>
          </li>
          {
            user ? <li>
            <a href="/dashboard/myTask">My Task</a>
          </li> : <li className="hidden"></li>
          }
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/blog">Blog</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
          {
            user ? <li>
            <a href="/dashboard">Dashboard</a>
          </li> : <li className="hidden"></li>
          }
        </ul>
      </div>
      <div className="navbar-end">
      <p className="hidden lg:block md:block lg:px-2"><span className="text-orange-500">Hi !</span> {user?.displayName} </p>
          {
            user ?
            <Link to={"/login"} onClick={handleLogOut} className="btn rounded-xl bg-orange-500 text-white  font-bold">LogOut</Link>
            :
            <Link to={"/login"} className="btn rounded-xl bg-orange-500 text-white font-bold">Login</Link>
          }
      </div>
    </div>
  );
};

export default Navbar;
