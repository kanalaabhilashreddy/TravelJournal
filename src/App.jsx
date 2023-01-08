import { useState } from "react";
import "./App.css";
import Card from "./components/Card";
import Nav from "./components/Nav";
import data from "./data";

const cards = data.map((item) => {
  return <Card key={item.id} item={item} />;
})
function App() {
  return (
    <div className="App">
      <Nav />
      {cards}
    </div>
  );
}

export default App;
