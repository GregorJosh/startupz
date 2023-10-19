import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { scrollToSection as scrollTo } from "redux/slice";

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

if (
  window.location.hostname !== "gregorjosh.github.io" &&
  window.location.hostname !== "localhost:3000"
) {
  window.location.href = "https://github.com/GregorJosh/startupz";
}

export const App = () => {
  const dispatch = useDispatch();
  const isAssistantVisible = useSelector((state) => state.isAssistantVisible);
  const scrollToSection = useSelector((state) => state.scrollToSection);

  useEffect(() => {
    if (scrollToSection !== "") {
      const section = document.getElementById(scrollToSection);

      section.scrollIntoView({ behavior: "smooth" });
      dispatch(scrollTo(""));
    }
  }, [scrollToSection, dispatch]);

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
