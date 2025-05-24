import { createBrowserRouter } from "react-router";
import Mainlayout from "../layout/Mainlayout";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import RoommateDetails from "../components/RoommateDetails";
import MyListings from "../components/MyListings";
import BrowseListing from "../components/BrowseListing";
import AllDetails from "../components/AllDetails";
import PrivateRoute from "../Private/PrivateRoute";
import Roommate from "../pages/Roommate";
import RoommateUpdate from "../components/RoommateUpdate";
import ErrorPage from "../components/ErrorPage";

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
        element: (
          <PrivateRoute>
            <Roommate />
          </PrivateRoute>
        ),
      },
      {
        path: "/roommate-details/:id",
        loader: ({ params }) =>
          fetch(`http://localhost:5000/roommates/${params.id}`),
        element: (
          <PrivateRoute>
            <RoommateDetails currentUser={{ email: "user@example.com" }} />
          </PrivateRoute>
        ),
      },
      {
        path: "my-listings",
        element: <PrivateRoute>
          <MyListings/>
        </PrivateRoute>,
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
        element: (
          <PrivateRoute>
            <AllDetails />
          </PrivateRoute>
        ),
      },
      {
        path: '/roommate-update/:id',
        loader: ({params}) => fetch(`http://localhost:5000/roommates/${params.id}`),
        Component: RoommateUpdate,
      },
      {
        path: '*',
        Component: ErrorPage,
      }
    ],
  },
]);

export default router;
