import React from "react";

import { GlobalProvider } from "./context/GlobalState";
import Header from "./components/Header";
import List from "./components/List";
import AddTask from "./components/AddTask";

import "./App.css";

function App() {
  return (
    <GlobalProvider>
      <Header />
      <div className="container">
        <List />
        <AddTask />
      </div>
    </GlobalProvider>
  );
}

export default App;
