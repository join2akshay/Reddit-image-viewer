
// import './App.css';
import Home from './Page/Home';
import { DataContextProvider } from './ContextAPI/ContextAPI';

function App() {
  return (
    <DataContextProvider>

    <div className="App">
     <Home/>
    </div>
    </DataContextProvider>
  );
}

export default App;
