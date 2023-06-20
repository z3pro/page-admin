import Admin from "../pages/Admin/Admin";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import User from "../pages/User/User";

export const publicRoutes = [
  { path: "/login", component: Login, layout: null },
  {path: "/register",component: Register,layout: null},
  { path: "/", component: Home },
];
export const privateRoutes = [
  { path: "/admin", component: Admin },
  { path: "/user", component: User },
];
