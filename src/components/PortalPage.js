import PortalPageCSS from './PortalPage.module.css'
import {Link} from 'react-router-dom';

const PortalPage = () => 
{

return (

<div className = {PortalPageCSS.body}>

  <div className = {PortalPageCSS.yourportaltext}>
    <h1>Your Donation Portal</h1>
    <h2>Welcome to the donation portal. Donation has never been simpler, and this is the heart of your donations! 
      Choose an option to get started</h2>
  </div>

    <div className = {PortalPageCSS.portalBox}>

      <div className = {PortalPageCSS.trackDonations}>
        <button><Link to = "/PreviousDonations">Track previous donations</Link></button>
      </div>

      <div className = {PortalPageCSS.newDonation}>
        <button><Link to = "/CreateDonation">Begin a new donation</Link></button>
      </div>

      <div className = {PortalPageCSS.statistics}>
        <button><Link to = "/DonationStatistics">View your donation statistics</Link></button>
      </div>

    </div>
  </div>

  );
};
  
export default PortalPage;
