import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";
import Footer from "./components/Footer/Footer";
import RecipeList from "./components/RecipeList/RecipeList";
import Error from "./components/Error/Error";
import About from "./components/About/About";

function App() {
  return (
    <div>
      <Navbar />
      <div className="Container">
        <Sidebar />
        <RecipeList />
      </div>
      <Footer />
      <Error />
      <About />
    </div>
  );
}

export default App;
