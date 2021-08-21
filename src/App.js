import './App.css';
import {
  BrowserRouter,
  Route,
} from "react-router-dom";

import HeaderComponent from './components/HeaderComponent/HeaderComponent';
import HomeComponent from './components/HomeComponent/HomeComponent';
import VitaComponent from './components/VitaComponent/VitaComponent';
import AgendaComponent from './components/AgendaComponent/AgendaComponent';
import FotoComponent from './components/FotosComponent/FotosComponent';
import AudioComponent from './components/AudioComponent/AudioComponent';
import PressVoiceComponent from './components/PressVoiceComponent/PressVoiceComponent';
import RepertoireComponent from './components/RepertoireComponent/RepertoireComponent';
import LessonComponent from './components/LessonComponent/LessonComponent';
import ContactComponent from './components/ContactComponent/ContactComponent';
import FooterComponent from './components/FooterComponent/FooterComponent';

function App() {
  return (
    <div className="page-container">
      <BrowserRouter class='main'>
        <HeaderComponent class='header' />
        <Route exact path="/vita">
        <VitaComponent/>
        </Route>

        <Route exact path="/agenda">
        <AgendaComponent/>
        </Route>

        <Route exact path="/fotos">
        <FotoComponent/>
        </Route>

        <Route exact path="/audio">
        <AudioComponent/>
        </Route>

        <Route exact path="/press">
        <PressVoiceComponent/>
        </Route>

        <Route exact path="/repertoire">
        <RepertoireComponent/>
        </Route>

        <Route exact path="/lessons">
        <LessonComponent/>
        </Route>

        <Route exact path="/contact">
        <ContactComponent/>
        </Route>

        <Route exact path="/">
        <HomeComponent/>
        </Route>

      </BrowserRouter>
      <FooterComponent class='footer'/>
    </div>
  );
}

export default App;
