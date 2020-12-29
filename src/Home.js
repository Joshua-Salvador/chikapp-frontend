import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import ChikaInput from "./components/ChikaInput";
import Header from "./components/Header";
import ChikaFeed from "./components/ChikaFeed";
import { UserContext } from "./components/UserContext";
import AccountControls from "./components/AccountControls";

function Home() {
  const context = useContext(UserContext);

  const { account } = useParams();

  return (
    <div className="home">
      <Header />
      <AccountControls />
      <ChikaInput />
      <ChikaFeed />
    </div>
  );
}

export default Home;
