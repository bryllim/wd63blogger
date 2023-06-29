import { Outlet } from "react-router-dom";

function Layout() {


  return (
    <div className="m-2 p-5 border rounded">
      <Outlet />
    </div>
  );
}

export default Layout;
