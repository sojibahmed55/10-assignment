import { createBrowserRouter } from "react-router";
import Mainlayout from "../layout/Mainlayout";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Roommate from "../pages/Roommate";
import RoommateDetails from "../components/RoommateDetails";
import MyListings from "../components/MyListings";
import BrowseListing from "../components/BrowseListing";
import AllDetails from "../components/AllDetails";
import PrivateRoute from "../Private/PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Mainlayout,
    children: [
      {
        index: true,
        loader: () => fetch("http://localhost:5000/roommates?limit=6"),
        Component: Home,
      },
      {
        path: "/login",
        Component: Login,
      },
      {
        path: "/register",
        Component: Register,
      },
      {
        path: "/roommate",
        Component: Roommate,
      },
      {
        path: "/roommate-details/:id",
        loader: ({ params }) =>
          fetch(`http://localhost:5000/roommates/${params.id}`),
        Component: RoommateDetails,
      },
      {
        path: "my-listings",
        Component: MyListings,
      },
      
      {
        path: "/browse-listings",
        loader: () => fetch("http://localhost:5000/roommates"),
        Component: BrowseListing,
      },
      {
        path: "/all-details/:id",
        loader: ({ params }) =>
          fetch(`http://localhost:5000/roommates/${params.id}`),
        element:
        <PrivateRoute>
          <AllDetails/>
        </PrivateRoute> ,
      },
    ],
  },
]);

export default router;
