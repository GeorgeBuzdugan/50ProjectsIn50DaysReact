import './App.scss';

import { HashRouter, Route, Routes } from 'react-router-dom';

import ExpandingCards from './pages/ExpandingCards/ExpandingCards';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import ProgressSteps from './pages/ProgressSteps/ProgressSteps';
import RotatingNavigationAnimation from './pages/RotatingNavigationAnimation/RotatingNavigationAnimation';

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ExpandingCards" element={<ExpandingCards />} />
        <Route path="/ProgressSteps" element={<ProgressSteps />} />
        <Route
          path="/RotatingNavigationAnimation"
          element={<RotatingNavigationAnimation />}
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
