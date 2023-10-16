import { useSelector } from "react-redux";

import {
  About,
  Assistant,
  Header,
  Hero,
  OurValues,
  OurWorks,
  Motivator,
  Openings,
  OnBoarding,
  Footer,
} from "components";

export const App = () => {
  const isAssistantVisible = useSelector((state) => state.isAssistantVisible);

  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Motivator>We love solving problems!</Motivator>
        {isAssistantVisible && <Assistant />}
        <OurValues />
        <OurWorks />
        <Motivator>
          Startups create a world that actually is better. Any problem that can
          be solved, will be solved by a startup, and that is a huge
          opportunity.
        </Motivator>
        <Openings />
        <OnBoarding />
      </main>
      <Footer />
    </>
  );
};
