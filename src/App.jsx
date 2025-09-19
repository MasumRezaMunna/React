// import React from "/react";

import "./App.css";
import ToDo from "./todo";
import Actor from "./Actor";
import Singer from "./singer";

// const time = 50;

function App() {
  const actors = [
    "Bappa Raj",
    "Omar Sunny",
    "salman shah",
    "jasim",
    "anwar",
    "Rajjak",
  ];

  const Singers = [{ id: 1, name: "Dr. Mahfuz", age: 68 }

  ];

  return (
    <>
      <h1>React Core Concepts</h1>

      {
        Singers.map(singer => <Singer key={singer.id} singer = {singer}></Singer> )
      }

      {/* {actors.map((actor) => (
        <Actor actor={actor}></Actor>
      ))} */}

      {/* <ToDo task="Learn React" isDone={true} time={time}></ToDo>
      <ToDo task="Revise JS" isDone={false}></ToDo>
      <ToDo task="Take a Shower" isDone={true} time="100"></ToDo> */}

      {/* <Student></Student>
      <Student></Student>
      <Person></Person>
      <Developer name="Mozumder" tech="JS"></Developer>
      <Developer name="Rajon" tech="python"></Developer>
      <Developer name="Shabana" tech="Java"></Developer>
      <Player name="tamim" runs="5000"></Player>
      <Player name="mushi" runs="2000"></Player>
      <Salami event="Roja Eid" amount = "20"></Salami>
      <Salami event="Graduation"></Salami> */}
    </>
  );
}

function Salami({ event, amount = 0 }) {
  return (
    <div className="student">
      <p>Salami For: {event}</p>
      <p>Amount {amount}</p>
    </div>
  );
}

// const {name, runs} = {name: 'tamim', runs: '5000'}

function Player({ name, runs }) {
  return (
    <div className="student">
      <h3>Name : {name}</h3>
      <p>Runs : {runs}</p>
    </div>
  );
}

// const {name, tech} = {name: "Mozumder", tech: 'JS'}

function Developer({ name, tech }) {
  return (
    <div
      style={{
        border: "2px solid green",
        borderRadius: "20px",
      }}
    >
      <h3>Developer: {name}</h3>
      <p>Technology: {tech}</p>
    </div>
  );
}

function Person() {
  const age = 17;
  const name = "Jolil";
  const personStyle = {
    color: "red",
    textAlign: "right",
  };
  return (
    <p id="" title="tooltip" style={personStyle}>
      I am a person: {name} {age}
    </p>
  );
}

function Student() {
  return (
    <div className="student">
      <p>Name:</p>
      <p>Dept: </p>
    </div>
  );
}
export default App;
