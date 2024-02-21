import React from "react";
import profiles from "../fakeData";

console.log(profiles);

const ProfileCard = ({ image, name, title, description }) => {
  return (
    <div
      style={{
        backgroundColor: "white",
        margin: 10,
        padding: 3,
        borderRadius: 15,
      }}
    >
      <div style={{ display: "flex", justifyContent: "center" }}>
        <img height={50} src={image} alt="" style={{ borderRadius: 10 }}></img>
        <div>
          <h2 style={{ marginLeft: "10px" }}>{name}</h2>
          <h5 style={{ marginLeft: "10px" }}>{title}</h5>
        </div>
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <p style={{ fontSize: "10px", padding: 5 }}>
          Description: {description}
        </p>
      </div>
    </div>
  );
};

export default ProfileCard;
