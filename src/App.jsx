import Footer from "./components/Footer";
import Section from "./components/Section";
function App() {
  return (
    <>
      <main className="space-y-20 overflow-hidden">
        <Section name="intro" />
        <Section name="editor" />
        <Section name="phones" />
        <Section name="laptop" />
      </main>
      <Footer />
    </>
  );
}

export default App;
