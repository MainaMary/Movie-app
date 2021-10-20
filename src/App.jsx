import MovieApi from "./components/MovieApi";
import "./App.css";
import { ThemeProvider } from "styled-components";

function App() {
  return (
    <ThemeProvider theme={{}}>
      
      <div className="App">
        <MovieApi />
      </div>
    </ThemeProvider>
  );
}

export default App;
