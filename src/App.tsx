import Home from './pages/Home';
import { withRouter } from 'react-router';
import { AppProps } from './typings';

function App() {
  return (
    <div  className="App">
      <Home/>
    </div>
  );
}

export default App;
