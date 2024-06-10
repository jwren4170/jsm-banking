import HeaderBox from "@/components/HeaderBox";
import TotalBalanceBox from "@/components/TotalBalanceBox";
import Image from "next/image";

const Home = () => {
  const loggedIn = { firstName: "James" };
  return (
    <section className="utilities">
      <div className="home-content">
        <header className="home-header">
          <HeaderBox
            type="greeting"
            title="Welcome back"
            user={loggedIn?.firstName || "Guest"}
            subtext="Access and manage your account and transactions"
          />
          <TotalBalanceBox
            accounts={[]}
            totalBanks={1}
            totalCurrentBalance={2500.34}
          />
        </header>
      </div>
    </section>
  );
};

export default Home;
