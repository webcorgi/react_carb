import 'css/App.css';
import Home from 'pages/Home';
import {
  Routes,
  Route,
  BrowserRouter,
} from 'react-router-dom';
import ScrollTop from 'include/ScrollTop';
import Wrapper from 'include/Wrapper';

function App() {

  return (
    <BrowserRouter>
      <Wrapper>
        <ScrollTop />
        <Routes>
          <Route path="/" element={<Home />} exact />
        </Routes>
      </Wrapper>
    </BrowserRouter>
  );
}

export default App;