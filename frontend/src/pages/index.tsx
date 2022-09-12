import Image from "next/image";
import type { NextPage } from "next";

import { HomeContainer, WrapperHome } from "../components/home/styles";
import { Navbar } from "../components/home/Navbar";
import { Card } from "../components/home/Card";
import { About } from "../components/home/About";
import { Footer } from "../components/home/Footer";

const Home: NextPage = () => {
  return (
    <HomeContainer>
      <Navbar />
      <WrapperHome>
        <Card />
        <About />
      </WrapperHome>
      <Footer />
    </HomeContainer>
  );
};

export default Home;
