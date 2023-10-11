import { About, Assistant, Header, Hero } from "components";

export const App = () => {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Assistant />
      </main>
    </>
  );
};
