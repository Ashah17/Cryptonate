import logo from './logo.svg';
import './App.css';
import AccountInfo from './components/AccountInfo';
import Contact from './components/Contact';
import CreateDonation from './components/CreateDonation';
import Home from './components/Home';
import Navigation from './components/Navigation';
import SpecificDonation from './components/SpecificDonation';
import TeamPage from './components/TeamPage';
import PortalPage from './components/PortalPage';
import PreviousDonations from './components/PreviousDonations';
import DonationStatistics from './components/DonationStatistics';
import signin from './components/signin';
import signup from './components/signup';
import donationlisst from './components/donationlisst';
import { Route, Link } from 'react-router-dom';
import createAuth0Client from '@auth0/auth0-spa-js';
import newSignIn from './components/newSignIn';
import newSignUp from './components/newSignUp';


function App() {
  return <div className="App">
      <Navigation />
      <Route exact path="/" component = {Home} />
      <Route exact path="/contact" component = {Contact} />
      <Route exact path="/teampage" component = {TeamPage} />
      <Route exact path="/accountinfo" component = {AccountInfo} />
      <Route exact path="/specificdonation" component = {SpecificDonation} />
      <Route exact path="/signin" component = {signin} />
      <Route exact path="/signup" component = {signup} />
      <Route exact path="/donationlisst" component = {donationlisst} />
      <Route exact path="/portalpage" component = {PortalPage} />
      <Route exact path ="/createdonation" component = {CreateDonation}/>
      <Route exact path ="/previousdonations" component = {PreviousDonations}/>
      <Route exact path ="/donationstatistics" component = {DonationStatistics}/>
      <Route exact path ="/newSignIn" component = {newSignIn}/>
      <Route exact path ="/newSignUp" component = {newSignUp}/>
      
    </div>
};

export default App;
