import { Outlet } from "react-router";

const MainLayout = () => {
  return (
    <div className="p-0 m-0 flex flex-col justify-between h-screen w-screen">
      <main className="flex-1">
        <Outlet />
      </main>
    </div>
  );
};

export default MainLayout;
