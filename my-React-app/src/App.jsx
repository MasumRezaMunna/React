import "./App.css";

function App() {
  return (
    <>
      <h1>React Core Concepts</h1>
      <Student></Student>
      <Student></Student>
      <Person></Person>
      <Developer name="Mozumder" tech= "JS"></Developer>
      <Developer name="Rajon" tech = "python"></Developer>
      <Developer name="Shabana" tech = "Java"></Developer>
    </>
  );
}

function Developer(props) {
  console.log(props);
  return (
    <div
      style={{
        border: "2px solid green",
        borderRadius: "20px",
      }}
    >
      <h3>Developer: {props.name}</h3>
      <p>Technology: {props.tech}</p>
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
