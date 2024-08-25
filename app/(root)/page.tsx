import React from "react";
import HeaderBox from "@/components/HeaderBox";
import TotalBalanceBox from "@/components/TotalBalanceBox";

const Home = () => {
  const loggedIn = { firstName: "Dave" };
  return (
    <section className="home">
      <div className="home-content">
        <header className="home-header">
          <HeaderBox
            type="greeting"
            title="Welcome "
            user={loggedIn?.firstName || "Guest"}
            subtext="Access and manage your accouns and transactions effortlessly."
          />
          <TotalBalanceBox
            accounts={[]}
            totalCurrentBalance={1235.12}
            totalBanks={1}
          />
        </header>
      </div>
    </section>
  );
};

export default Home;
