import { useState } from "react";
import "./App.css";
import CakeView from "./components/CakeView";
import IceCreamView from "./components/IceCreamView";
import UserView from "./components/UserView";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <CakeView />
      <IceCreamView />
      <UserView />
    </>
  );
}

export default App;
