import React, { useState } from "react";
import "./App.css";
import MyButton from "./components/MyButton";
import ProfileCard from "./components/ProfileCard";
import profiles from "./fakeData";

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1 style={{ color: "red" }}>{count}</h1>
      <div style={{ display: "flex" }}>
        <button onClick={() => setCount(count - 1)}>-</button>
        <button onClick={() => setCount(count + 1)}>+</button>
        <MyButton title="BUY" color="red"></MyButton>
        <MyButton title="SELL" color="green"></MyButton>
      </div>
      {profiles.map((profile) => (
        <ProfileCard
          image={profile.image}
          title={profile.title}
          name={profile.name}
          description={profile.description}
        />
      ))}
    </>
  );
}

// how to create your own component (MyButton.js)
// props
// jsx fragments
// how to make a functional component
// variables
// console logging
//
