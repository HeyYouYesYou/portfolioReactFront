import { Outlet } from "react-router-dom";

import Sidebar from "./Sidebar";
import Header from "./Header";

export default function Layout() {
  return (
    <>
      <div className=" list-none w-full">
        <div className=" flex justify-center bg-grayLight ">
          <div className="w-[1280px] ">
            <Header />
            <div className="flex ">
              <Sidebar />
              <main className="bg-white min-h-fit w-full  overflow-x-hidden">
                <Outlet />
              </main>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
