import BookLists from "./Components/BookLists";
import Navbar from "./Components/Navbar";
import ThemeContextProvider from "./Contexts/ThemeContext";

function App() {
  return (
    <div className="App">
      <ThemeContextProvider>
        <Navbar />
        <BookLists />
        </ThemeContextProvider>
    </div>
  );
}

export default App;
