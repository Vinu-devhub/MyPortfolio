import { findAllByAltText } from "@testing-library/react";
import React, { useState } from "react";
import "./header.css";
import Mobile from "./mobile";
import Web from "./web";
function Header() {
  const [isSidebarOpen, setisSidebarOpen] = useState(false);
  return (
    <div className="header">
      <div className="logo">Overreacted</div>
      <div className="menu">
        <div className="web-menu">
          <Web />
        </div>
        <div className="mobile-menu">
          <div onClick={() => setisSidebarOpen(!isSidebarOpen)}>
            <i class="fi fi-rr-apps menu-icon"></i>
          </div>
          {isSidebarOpen && (
            <Mobile
              isSidebarOpen={isSidebarOpen}
              setisSidebarOpen={setisSidebarOpen}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default Header;
