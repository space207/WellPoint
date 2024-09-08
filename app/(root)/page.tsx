import React from "react";
import HeaderBox from "@/components/HeaderBox";
import TotalBalanceBox from "@/components/TotalBalanceBox";
import { getLoggedInUser } from "@/lib/actions/user.actions";

const Home = async () => {
  const loggedIn = await getLoggedInUser();
  return (
    <section className="home">
      <div className="home-content">
        <header className="home-header">
          <HeaderBox
            type="greeting"
            title="Welcome "
            user={loggedIn?.name || "Guest"}
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
