import { Outlet } from "react-router-dom";

function RootRoute() {
  return (
    <div>
      <p>root header</p>
      <Outlet />
      <p>root footer</p>
    </div>
  );
}
export default RootRoute;
