import './App.scss';

import { HashRouter, Route, Routes } from 'react-router-dom';

import AnimatedNavigation from './pages/AnimatedNavigation/AnimatedNavigation';
import BackgroundSlider from './pages/BackgroundSlider/BackgroundSlider';
import BlurryLoading from './pages/BlurryLoading/BlurryLoading';
import DadJokes from './pages/DadJokes/DadJokes';
import DrinkWater from './pages/DrinkWater/DrinkWater';
import EventKeyCodes from './pages/EventKeyCodes/EventKeyCodes';
import ExpandingCards from './pages/ExpandingCards/ExpandingCards';
import FaqCollapse from './pages/FaqCollapse/FaqCollapse';
import FormInputWave from './pages/FormInputWave/FormInputWave';
import HiddenSearch from './pages/HiddenSearch/HiddenSearch';
import Home from './pages/Home';
import IncrementingCounter from './pages/IncrementingCounter/IncrementingCounter';
import MovieApp from './pages/MovieApp/MovieApp';
import NotFound from './pages/NotFound';
import ProgressSteps from './pages/ProgressSteps/ProgressSteps';
import RandomChoicePicker from './pages/RandomChoicePicker/RandomChoicePicker';
import RotatingNavigationAnimation from './pages/RotatingNavigationAnimation/RotatingNavigationAnimation';
import ScrollAnimation from './pages/ScrollAnimation/ScrollAnimation';
import SoundBoard from './pages/SoundBoard/SoundBoard';
import SplitLandingPage from './pages/SplitLandingPage/SplitLandingPage';
import ThemeClock from './pages/ThemeClock/ThemeClock';

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
        <Route path="HiddenSearch" element={<HiddenSearch />} />
        <Route path="BlurryLoading" element={<BlurryLoading />} />
        <Route path="ScrollAnimation" element={<ScrollAnimation />} />
        <Route path="SplitLandingPage" element={<SplitLandingPage />} />
        <Route path="FormInputWave" element={<FormInputWave />} />
        <Route path="SoundBoard" element={<SoundBoard />} />
        <Route path="DadJokes" element={<DadJokes />} />
        <Route path="EventKeyCodes" element={<EventKeyCodes />} />
        <Route path="FaqCollapse" element={<FaqCollapse />} />
        <Route path="RandomChoicePicker" element={<RandomChoicePicker />} />
        <Route path="AnimatedNavigation" element={<AnimatedNavigation />} />
        <Route path="IncrementingCounter" element={<IncrementingCounter />} />
        <Route path="DrinkWater" element={<DrinkWater />} />
        <Route path="*" element={<NotFound />} />
        <Route path="MovieApp" element={<MovieApp />} />
        <Route path="BackgroundSlider" element={<BackgroundSlider />} />
        <Route path="ThemeClock" element={<ThemeClock />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
