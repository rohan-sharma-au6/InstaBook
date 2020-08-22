import React from 'react';
import { Switch, Route, Redirect } from "react-router-dom"
import './App.css';
import Navbar from './components/Navbar.jsx';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Upload from './pages/UploadMain';
import Home from './pages/Home';
import Profile from './pages/Profile';
import UserProfile from "./pages/UserProfile"
import Saved from './pages/Saved';
import Explore from "./pages/Explore"
import CurrentuserContext from './contexts/currentuserContext';
import Uploadstory from './pages/UploadStory';
import Stories from "./components/Stories"
import ThemeContextProvider from "./contexts/ThemeContext"
import LandingPage from './pages/LandingPage';
import EditProfile from './pages/EditProfile';
import ResetPassword from './pages/ResetPassword';
import NewPassword from "./pages/NewPassword"


function App() {
    const user = localStorage.getItem("jwt")
    // const {isLightTheme, light,dark} = useContext(ThemeContext)
    // const theme = isLightTheme ? light :dark
    return (<div className="App"  >
        <CurrentuserContext>
            <ThemeContextProvider>
            <Navbar />         
            <Switch >
                <Route path="/" exact component={LandingPage}/>
                <Route path="/explore" exact component={Explore} />
                <Route path="/profile" exact component={Profile} />
                <Route path="/signup" exact component={Signup} />
                <Route path="/login" exact component={Login} />
                <Route path="/upload" exact component={Upload} />
                <Route path="/user/:id" exact component={UserProfile} />
                <Route path="/home" exact>{!user?<Redirect to="/login"/>:<Home/>}</Route>
                <Route path="/saved" exact component={Saved} />
                <Route path="/addstory" exact component={Uploadstory}/>
                <Route path="/seestory" exact component={Stories}/>
                <Route path="/edit" exact component={EditProfile}/>
                <Route path ="/reset" exact component={ResetPassword}/>
                <Route path="/reset/:token" exact component={NewPassword}/>
            </Switch>
            </ThemeContextProvider>
        </CurrentuserContext>
    </div>
    );
}

export default App;