import React from "react";
import "./scss/app.scss";
import keyboards from "./assets/keyboards.json";

import Kboard from "./components/kboard";
import Sort from "./components/sort";

console.log(keyboards);

function App() {
  return (
    <>
      <h1>#1 Keyboard Store</h1>
      <Sort />
      <div className="container">
        {keyboards.map((obj) => (
          <Kboard
            title={obj.title}
            imageUrl={obj.imageUrl}
            switches={obj.switches}
            price={obj.price}
          />
        ))}
      </div>
    </>
  );
}

export default App;
