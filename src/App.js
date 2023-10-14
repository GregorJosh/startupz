import {
  About,
  Assistant,
  Header,
  Hero,
  OurValues,
  OurWorks,
} from "components";

export const App = () => {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Assistant />
        <OurValues />
        <OurWorks />
      </main>
    </>
  );
};
