import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../components/Home/Home/Home";
import MainHome from "../components/Home/MainHome/MainHome";
import Dashboard from "../components/Dashboard/Dashboard/Dashboard";
import Login from "../components/Login/Login";
import SignUp from "../components/SignUp/SignUp";
import CreateTask from "../components/Dashboard/CreateTask/CreateTask";
import MyTask from "../components/Dashboard/MyTask/MyTask";
import PrivateRoute from "../Providers/PrivateRoute";
import Profile from "../components/Dashboard/DashboardProfile/Profile";
import UpdateTask from "../components/Dashboard/UpdateTask/UpdateTask";
import About from "../components/Home/About/About";
import Blog from "../components/Home/Blog/Blog";
import Contact from "../components/Home/Contact/Contact";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/home",
        element: <MainHome></MainHome>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signUp",
        element: <SignUp></SignUp>,
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <Dashboard></Dashboard>
      </PrivateRoute>
    ),
    children: [
      {
        path: "/dashboard",
        element: <Profile></Profile>,
      },
      {
        path: "/dashboard/createTask",
        element: (
          <PrivateRoute>
            <CreateTask></CreateTask>
          </PrivateRoute>
        ),
      },
      {
        path: "/dashboard/myTask",
        element: (
          <PrivateRoute>
            <MyTask></MyTask>
          </PrivateRoute>
        ),
      },
      {
        path: "/dashboard/editTask/:id",
        element: (
          <PrivateRoute>
            <UpdateTask></UpdateTask>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://task-management-server-neon-six.vercel.app/editTask/${params.id}`
          ),
      },
    ],
  },
]);

export default router;
