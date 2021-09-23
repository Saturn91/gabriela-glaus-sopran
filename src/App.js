import './App.css';
import {
  BrowserRouter,
  Route,
} from "react-router-dom";
import { useEffect, useState } from 'react';
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
import AdminLogin from './components/AdminLogin/AdminLogin';
import { testConnection } from './services/firebase-connection.service';
import { auth } from './components/AdminLogin/LoggedInUserInfo/Login/Login.service';

function App() {
  testConnection((entries) => {
    if(entries[0].data.field) {
      entries[0].data.field === "works" ? console.log("connection to server established!"): console.error("connection to server failed!")
    }
  });

  const [loggedInUser, setUser] = useState(null);

  useEffect(() => {
    const UserIsAdmin = (user) => {
      if(user === undefined) return false;
      if(user?.uid == null) return false;
      return admins.includes(user.uid);
    }

    const admins = [
      'wIvn6nVvq6ROQDIrUqYYsIFGhF12',
    ]
    auth.onAuthStateChanged((user) => {
      if(user) user.isAdmin = UserIsAdmin(user);
      setUser(user);
    });
  },[]); 

  return (
    <div className="page-container">
      <BrowserRouter>
        <HeaderComponent/>
        <Route exact path="/vita">
          <VitaComponent user={loggedInUser}/>
        </Route>

        <Route exact path="/agenda">
          <AgendaComponent user={loggedInUser}/>
        </Route>

        <Route exact path="/fotos">
          <FotoComponent user={loggedInUser}/>
        </Route>

        <Route exact path="/audio">
          <AudioComponent user={loggedInUser}/>
        </Route>

        <Route exact path="/press">
          <PressVoiceComponent user={loggedInUser}/>
        </Route>

        <Route exact path="/repertoire">
          <RepertoireComponent user={loggedInUser}/>
        </Route>

        <Route exact path="/lessons">
          <LessonComponent user={loggedInUser}/>
        </Route>

        <Route exact path="/contact">
          <ContactComponent user={loggedInUser}/>
        </Route>

        <Route exact path="/admin-login">
          <AdminLogin user={loggedInUser}/>
        </Route>

        <Route exact path="/">
          <HomeComponent user={loggedInUser}/>
        </Route>

      </BrowserRouter>
      <FooterComponent class='footer'/>
    </div>
  );
}

export default App;
