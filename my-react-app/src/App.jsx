import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Todo from "./Todo";
import Man from "./Man";
import Professionals from "./Professionals";
import Books from "./Books";

function App() {
  const mans = ["Hamid", "Shofik", "Karim", "Rayhan"];
  const professionals = [
    { name: undefined, age: 19, profession: "Software Engineer" },
    { name: "Abul Kalam", age: 50, profession: undefined },
    { name: "Shorif", age: undefined, profession: "Video Editor" },
  ];
  const books = [
    { name: "Physics", price: 500 },
    { name: "Biology", price: 600 },
    { name: "Chemistry", price: 700 },
  ];
  return (
    <div>
      <h1>React + vite</h1>

      <Books bookList={books} list />

      {/* {professionals.map((professional, index) => (
        <Professionals
          key={index}
          name={professional.name}
          age={professional.age}
          profession={professional.profession}
        />
      ))}

      {mans.map((man, i) => (
        <Man key={i} personName={man}></Man>
      ))} */}
      {/* <Man personName="Abdul Hamid" />
      <Man personName="Rayhan Ahmed" /> */}
      {/* 
      <Person name="Hamid" age="19" />
      <Person name="Raihan" age="20" />
      <Person name="Shofik" age="25" />
      <Person />
      <Person />
      <Person />
      <Person />
      <Student />
      <Developer></Developer> */}
      {/* <Todo task="Learn React" isDone={true}></Todo>
      <Todo task="Learn Vite" isDone={false}></Todo>
      <Todo task="Learn JavaScript" isDone={true}></Todo> */}
    </div>
  );
}

function Person({ name = "Unknown", age = "0" }) {
  return (
    <h3>
      I am {name} and I am {age} years old!
    </h3>
  );
}

function Student() {
  return (
    <>
      <h1 className="student">This is a student</h1>
    </>
  );
}

function Developer() {
  const devStyle = {
    padding: "50px",
    border: "10px solid yellow",
    fontFamily: "Arial Black",
  };

  return (
    <>
      <h3 style={devStyle}>I am a Developer</h3>
      <p style={{ border: "1px solid white", padding: "100px" }}>This is a paragraph</p>
    </>
  );
}

export default App;
