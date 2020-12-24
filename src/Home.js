import React, { useContext } from "react";
import { UserContext } from "./components/UserContext";
import ChikaInput from "./components/ChikaInput";
import Header from "./components/Header";
import ChikaFeed from "./components/ChikaFeed";

function Home() {
  const context = useContext(UserContext);
  return (
    <div className="home">
      <Header />
      <ChikaInput />
      <ChikaFeed />
    </div>
  );
}

export default Home;
