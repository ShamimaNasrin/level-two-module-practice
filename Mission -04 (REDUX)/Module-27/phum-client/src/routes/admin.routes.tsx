import { ReactNode } from "react";
import AdminDashboard from "../pages/admin/AdminDashboard";
import CreateAdmin from "../pages/admin/CreateAdmin";
import CreateFaculty from "../pages/admin/CreateFaculty";
import CreateStudent from "../pages/admin/CreateStudent";

type TRoute = {
  path: string;
  element: ReactNode;
};

//combine array for route and side menu items
const adminPaths = [
  {
    name: "Dashboard",
    path: "admin/dashboard",
    element: <AdminDashboard />,
  },
  {
    name: "User Management",
    children: [
      {
        name: "Create Admin",
        path: "admin/create-admin",
        element: <CreateAdmin />,
      },
      {
        name: "Create Faculty",
        path: "admin/create-faculty",
        element: <CreateFaculty />,
      },
      {
        name: "Create Student",
        path: "admin/create-student",
        element: <CreateStudent />,
      },
    ],
  },
];

//* Programatical way
export const adminRoutes = adminPaths.reduce((acc: TRoute[], item) => {
  if (item.path && item.element) {
    acc.push({
      path: item.path,
      element: item.element,
    });
  }

  if (item.children) {
    item.children.forEach((child) => {
      acc.push({
        path: child.path,
        element: child.element,
      });
    });
  }

  return acc;
}, []);

//! Hard coded way

// export const adminPaths = [
//   {
//     index: true, // if we want to load AdminDashboard for both /admin and /admin/dashboard routes
//     element: <AdminDashboard />,
//   },
//   {
//     path: "dashboard", // if we want to load AdminDashboard for both /admin and /admin/dashboard routes
//     element: <AdminDashboard />,
//   },
//   {
//     path: "create-admin",
//     element: <CreateAdmin />,
//   },
//   {
//     path: "create-faculty",
//     element: <CreateFaculty />,
//   },
//   {
//     path: "create-student",
//     element: <CreateStudent />,
//   },
// ];
