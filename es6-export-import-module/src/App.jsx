import { Suspense } from "react";
import "./App.css";
import Bottles from "./components/bottles/Bottles";

const bottlesPromise = fetch("bottles.json").then((res) => res.json());

function App() {
  // const bottles = [
  //   {id: 1, name: 'pink nike bottle', price: 250, color: 'pink'},
  //   {id: 2, name: 'pink nike bottle', price: 250, color: 'pink'},
  //   {id: 3, name: 'pink nike bottle', price: 250, color: 'pink'},
  //   {id: 4, name: 'pink nike bottle', price: 250, color: 'pink'},

  // ]

  return (
    <>
      <h1>Buy awesome water bottle</h1>
      <Suspense fallback={<h3>Bottles are loading...</h3>}>
        <Bottles bottlesPromise={bottlesPromise}></Bottles>
        
      </Suspense>
    </>
  );
}

export default App;
