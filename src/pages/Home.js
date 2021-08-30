import "../App.css";
import HeroSection from "../components/Hero";
import BreakingNews from "../components/BreakingNews";
import HomeNews from "../components/HomeNews";
import EditorPicks from "../components/EditorPicks";
// import { useEffect, useState } from "react";

const HomePage = () => {
  // const [login, setLogin] = useState(false);
  // const localStorageCheck = localStorage.getItem("user");
  // if (localStorageCheck) {
  //   setLogin(true);
  // }
  return (
    <>
      <title>home | NBC News</title>
      <HeroSection />
      <BreakingNews />
      <HomeNews />
      <EditorPicks />
    </>
  );
};

export default HomePage;
