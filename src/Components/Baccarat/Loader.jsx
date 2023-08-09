import React from "react";

import "./loader.css";

export const Loader = () => {
  const loadingAnim = "/videos/loader_anim.gif?v=" + new Date().getMilliseconds();
  return (
    <div className="loader-wrap">
      <img src={loadingAnim} alt="" role="presentation" />
    </div>
  );
};
