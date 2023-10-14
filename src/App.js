import {
  About,
  Assistant,
  Header,
  Hero,
  OurValues,
  OurWorks,
  Motivator,
  Openings,
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
        <Motivator>
          Startups create a world that actually is better. Any problem that can
          be solved, will be solved by a startup, and that is a huge
          opportunity.
        </Motivator>
        <Openings />
      </main>
    </>
  );
};
