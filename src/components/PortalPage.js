import PortalPageCSS from './PortalPage.module.css'
import {Link} from 'react-router-dom';

const PortalPage = () => 
{

return (

<div>

  <div className = {PortalPageCSS.titleScreen}>
    <h2>Your Donation Portal</h2>
  </div>

    <div className = {PortalPageCSS.portalBox}>

      <div className = {PortalPageCSS.trackDonations}>
        <h1><Link to = "/PreviousDonations">Track previous donations</Link></h1>
      </div>

      <div className = {PortalPageCSS.newDonation}>
        <h1><Link to = "/CreateDonation">Begin a new donation</Link></h1>
      </div>

      <div className = {PortalPageCSS.statistics}>
        <h1><Link to = "/DonationStatistics">View your donation statistics</Link></h1>
      </div>

    </div>
  </div>

  );
};
  
export default PortalPage;
