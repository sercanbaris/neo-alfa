import Exams from "./components/Exams";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Tanitim from "./components/Tanitim";
import VideoCall from "./components/VideoCall";
import Warrant from "./components/Warrant";
import "./css/app.css";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Warrant />
      <Exams />
      <VideoCall />
      <Tanitim />
    </>
  );
}

export default App;
