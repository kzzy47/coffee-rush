import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Hero from "@/components/sections/Hero";
import Story from "@/components/sections/Story";
import Personality from "@/components/sections/Personality";
import Values from "@/components/sections/Values";
import Personas from "@/components/sections/Personas";
import Menu from "@/components/sections/Menu";
import GuestExperience from "@/components/sections/GuestExperience";
import StoreEnvironment from "@/components/sections/StoreEnvironment";
import OperatorProgram from "@/components/sections/OperatorProgram";
import Locations from "@/components/sections/Locations";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex flex-1 flex-col">
        <Hero />
        <Story />
        <Personality />
        <Values />
        <Personas />
        <Menu />
        <GuestExperience />
        <StoreEnvironment />
        <OperatorProgram />
        <Locations />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
