import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/RootLayout";
import ErrorPg from "../pages/Error/ErrorPg";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Registration from "../pages/Registation/Registration";
import TaskBoard from "../pages/TaskBoard/TaskBoard";
import PrivateRoutes from "./PrivateRoutes";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPg />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/registration",
        element: <Registration></Registration>,
      },
      {
        path: "/taskbroad",
        element: (
          <PrivateRoutes>
            <TaskBoard />
          </PrivateRoutes>
        ),
      },
      {
        path: "/todo",
        element: (
          <PrivateRoutes>
            <TaskBoard />
          </PrivateRoutes>
        ),
      },
      {
        path: "/ongoing",
        element: (
          <PrivateRoutes>
            <TaskBoard />
          </PrivateRoutes>
        ),
      },
      {
        path: "/complete",
        element: (
          <PrivateRoutes>
            <TaskBoard />
          </PrivateRoutes>
        ),
      },
    ],
  },
  // {
  //   path: "/dashboard",
  //   element: (
  //     <PrivateRoutes>
  //       <Dashboard></Dashboard>
  //     </PrivateRoutes>
  //   ),
  //   errorElement: <ErrorPg />,
  //   children: [
  //     {
  //       path: "/dashboard/adminProfile",
  //       element: (
  //         <PrivateRoutes>
  //           <AdminProfile />
  //         </PrivateRoutes>
  //       ),
  //     },
  //     {
  //       path: "/dashboard/manageUser",
  //       element: (
  //         <PrivateRoutes>
  //           <ManageUser />
  //         </PrivateRoutes>
  //       ),
  //     },
  //     {
  //       path: "/dashboard/addMeals",
  //       element: (
  //         <PrivateRoutes>
  //           <AddMeals />
  //         </PrivateRoutes>
  //       ),
  //     },
  //     {
  //       path: "/dashboard/allMeals",
  //       element: (
  //         <PrivateRoutes>
  //           <AllMeals />
  //         </PrivateRoutes>
  //       ),
  //     },
  //     {
  //       path: "/dashboard/reviews",
  //       element: (
  //         <PrivateRoutes>
  //           <AllReviews />
  //         </PrivateRoutes>
  //       ),
  //     },
  //     {
  //       path: "/dashboard/servedMeals",
  //       element: (
  //         <PrivateRoutes>
  //           <ServeMeals />
  //         </PrivateRoutes>
  //       ),
  //     },
  //     {
  //       path: "/dashboard/upcomingMeals",
  //       element: (
  //         <PrivateRoutes>
  //           <UpcomingMeals />
  //         </PrivateRoutes>
  //       ),
  //     },
  //     {
  //       path: "/dashboard/allMeals/updateMeal/:id",
  //       element: (
  //         <PrivateRoutes>
  //           <UpdateMeals />
  //         </PrivateRoutes>
  //       ),
  //     },
  //   ],
  // },
]);

export default router;
