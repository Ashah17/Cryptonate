import logo from './logo.svg';
import './App.css';
import AccountInfo from './AccountInfo';
import Contact from './Contact';
import CreateDonation from './CreateDonation';
import Home from './Home';
import Navigation from './Navigation';
import SpecificDonation from './SpecificDonation';
import TeamPage from './TeamPage';
import PortalPage from './PortalPage';
import PreviousDonations from './PreviousDonations';
import DonationStatistics from './DonationStatistics';
import signin from './signin';
import signup from './signup';
import donationlisst from './donationlisst';
import { Route, Link } from 'react-router-dom';

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
      
    </div>
};

export default App;
