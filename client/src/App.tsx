
import { BrowserRouter, Route, Routes} from 'react-router-dom'
import MainPage from './pages/main';
import Status from './pages/status';
import Register from './pages/register';
import History from './pages/history';
import Signin from './pages/signin';
function App() {
  return (
    <BrowserRouter>
      <Routes>       
        <Route path="/" element={<MainPage />}  />
       {/*  <Route path="/sigin" element={ <Signin />} />
        <Route path="/register" element={<Register />} />
        <Route path="/Status" element={<Status />} />
        <Route path="/history" element={<History />} /> */}
      </Routes>
    </BrowserRouter>

  );
}

export default App;
