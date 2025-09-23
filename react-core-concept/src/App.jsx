import Counter from "./Counter";
import Batsman from "./Batsman"
import Summary from "./summary";
import "./App.css";

function App() {
  function handleClick() {
    alert("I am clicked.");
  }

  const handleClick3 = () => {
    alert("clicked 3");
  };

  const handleAdd5 = (num) => {
    const newNum = num + 5;
    alert (newNum);
  }

  return (
    <>
      <h1>Vite + React</h1>
      <Summary></Summary>
      <Batsman></Batsman>
      <Counter></Counter>
      {/* <button onclick="handleClick()">Click Me</button> */}
      <button onClick={handleClick()}>Click Me</button>
      <button
        onClick={function handleClick2() {
          alert("clicked 2");
        }}
      >
        Click Me2
      </button>

      <button onClick={handleClick3}>Click me 3</button>
      <button onClick={() => alert('click me 4')}>Click me 4</button>

      <button onClick={() => handleAdd5(10)}>Click Add 5</button>
    </>
  );
}

export default App;
