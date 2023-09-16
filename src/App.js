import './App.css';
import {BrowserRouter as Router , Routes , Route , Link} from "react-router-dom"
import { QueryClient, QueryClientProvider } from "react-query";
import Home from './pages/Home';
import Author from './components/Author';

function App() {
  const client = new QueryClient()

  return (
    <QueryClientProvider client={client}>
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/author' element={<Author />} />
        <Route path='*' element={<h1>Not Found</h1>} />
      </Routes>
      
    </Router>
    </QueryClientProvider>
  );
}

export default App;
