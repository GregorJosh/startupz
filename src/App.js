import {
  About,
  Assistant,
  Header,
  Hero,
  OurValues,
  OurWorks,
  Motivator,
} from "components";

export const App = () => {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Motivator>We love solving problems!</Motivator>
        <Assistant />
        <OurValues />
        <OurWorks />
      </main>
    </>
  );
};
