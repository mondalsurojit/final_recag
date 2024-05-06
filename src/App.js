import './nutrify.css';
import Home from './pages/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Code from './pages/Codepage/Code';
import { AppProvider } from './pages/context/context';
import Datasets from './pages/Datasetpage/Datasets';
import Models from './pages/Modelpage/Models';
import Learn from './pages/Learnpage/Learn';
import Competitions from './pages/Competitionpage/Competitions';
import Blog from "./pages/Blog/Blog"
import Hostcomp from "./pages/Host Competition/Host"

import Discussions from './pages/Discussions Page/Discussions';
import Document from "./pages/Docs/Docs"
import Privacy from "./pages/Privacy/Privacy"
import Ranking from "./pages/Rankings/Rankings"
import Dashboard from './pages/Dashboard/Dashboard.jsx';
import Community from './pages/Discussions Page/Community.jsx';
function App() {
  return (
    <div className="App">
      <AppProvider>

        <BrowserRouter>
          <Routes>
            {/* <div className="App w-[100%] "> */}
              {/* <Home/> */}
              <Route path="/" element={<Home />} />
            {/* </div> */}
            <Route path='/code' element={<Code />} />
            <Route path="/dataset" element={<Datasets />} />
            <Route path='/model' element={<Models />} />
            <Route path='/courses' element={<Learn />} />
            <Route path='/competition' element={<Competitions />} />
            <Route path='/dashboard' element={<Dashboard />} />
            <Route path='/blog' element={<Blog />} />
            <Route path="/hostcomp" element={<Hostcomp />} />
            <Route path='/discussions' element={<Discussions />} />
            <Route path='/discussions/community' element={<Community />} />
            <Route path='/documentation' element={<Document />} />
            <Route path='/privacy' element={<Privacy />} />
            <Route path="/rankings" element={<Ranking />} />
          </Routes>
        </BrowserRouter>
      </AppProvider>
    </div>
  );
}

export default App;
