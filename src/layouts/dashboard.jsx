import { Routes, Route } from "react-router-dom";
import { Cog6ToothIcon, PlusIcon, XMarkIcon  } from "@heroicons/react/24/solid";
import { useState } from "react";

import { IconButton } from "@material-tailwind/react";
import {
  Sidenav,
  DashboardNavbar,
  Footer,
} from "@/widgets/layout";
import routes from "@/routes";
import { useMaterialTailwindController, setOpenConfigurator } from "@/context";
import { Configurator } from "@/widgets/layout";

export function Dashboard() {
  const [open, setOpen] = useState(1); 
  const [controller, dispatch] = useMaterialTailwindController();
  const { sidenavType } = controller;

  return (
    <div className="min-h-screen -mt-10 bg-blue-gray-50/50">
      <Sidenav
        routes={routes}
        brandImg={
          sidenavType === "dark" ? "/img/logo-ct.png" : "/img/logo-ct-dark.png"
        }
      /> 
      <div className="p-4 xl:ml-80">


      <IconButton
        size="large"
        color={open === 2 ? "error" : "inherit"} // Change color based on state
        style={{
          position: "relative",
          top:"50px",
           // Keep this fixed from the bottom
          left: '20px',  // Keep this fixed from the right
          zIndex: 100 // Ensure it appears above other elements
        }}
        className="rounded-full shadow-lg px-5 py-5 w-full  shadow-blue-gray-900/10"
        onClick={() => setOpen(open === 2 ? 1 : 2)} // Toggle state
      >
        {open === 2 ? (
        <XMarkIcon className="w-7 h-7"/>
        ) : (
        <PlusIcon className="w-7 h-7"/>
        )}
      </IconButton>
  

      {open === 2 ? <Configurator /> : <p></p>}



      
        <Routes>
          {routes.map(
            ({ layout, pages }) =>
              layout === "dashboard" &&
              pages.map(({ path, element }) => (
                <Route exact path={path} element={element} />
              ))
          )}
        </Routes>
        <div className="text-blue-gray-600">
         
        </div>
      </div>
    </div>
  );
}

Dashboard.displayName = "/src/layout/dashboard.jsx";

export default Dashboard;
