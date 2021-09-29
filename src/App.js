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
      let isAdmin = true;
      if(user === undefined) isAdmin = false;
      if(user?.uid == null) isAdmin = false;
      if(isAdmin) {
        isAdmin = admins.includes(user.uid);
        user.isAdmin = isAdmin;
        if(!isAdmin) {
          return null;
        }
      }  
      return user;
    }

    //there is aswell a settup in the firebase store rule tab which only allows those users to write!
    const admins = [
      'wIvn6nVvq6ROQDIrUqYYsIFGhF12',
      'CrHA7cUo26VXdVtiPoIaeBdZ4jg2'
    ]
    auth.onAuthStateChanged((user) => {
      if(user) UserIsAdmin(user);
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
