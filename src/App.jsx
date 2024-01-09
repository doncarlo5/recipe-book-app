import "./App.css";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import Page from "./components/Page";
import Error from "./components/Error";
import About from "./components/About";

function App() {
  return (
    <div>
      <Navbar />
      <Sidebar />
      <Page />
      <Footer />
      <Error />
      <About />
    </div>
  );
}

export default App;
