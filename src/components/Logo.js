import React from "react";

const Logo = () => {
  const imageLogo = {
    position: "relative",
    bottom: "87px",
    right: "163px",
  };
  return (
    <div>
      <h1>MovieApp</h1>
      <div style={imageLogo}>
        {" "}
        <img
          className="imageLogo"
          style={{ width: "110px", height: "115px" }}
          src="https://yt3.ggpht.com/a/AATXAJytEjBvs4FFce9cQm5lO3jvdRu3UsXe_8NLuQNYVQ=s900-c-k-c0xffffffff-no-rj-mo"
          alt=" logo"
        />
      </div>
    </div>
  );
};

export default Logo;
