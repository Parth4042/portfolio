'use client';

import Nav from "../../components/navbar";
import Header from "../../components/header";
import AboutMe from "../../components/aboutme";
import Project from "../../components/project";
import Tech from "../../components/tech"
import Footer from "../../components/footer"
import Exp from "../../components/exp"
import AchievementSection from "../../components/achivements";

export default function Home() {
  return (
    <>
      <Nav />
      <Header />
      <AboutMe />
      <AchievementSection/>
      <Tech/>
      <Project />
      <Exp/>
      <Footer/>
     
    </>
      
  );
}
