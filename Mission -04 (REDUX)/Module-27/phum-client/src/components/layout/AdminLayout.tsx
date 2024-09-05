import { Outlet } from "react-router-dom";

const AdminLayout = () => {
  return (
    <div>
      <h1>Test layout for understanding</h1>
      <Outlet></Outlet>
    </div>
  );
};

export default AdminLayout;
