import React from 'react';
import "./topBar.css";

export default function Topbar() {
    return (
      <div className='topbar'>
         <div className="topbarWrapper">
          <div className="topLeft">
            <span className="logo">Touchak</span>
          </div>

          <div className="topRight">
            <div className="topbarIcons">
            <span class="material-symbols-outlined">
              notifications
            </span>
            </div>
          </div>
         </div>
      </div>
    )
  }