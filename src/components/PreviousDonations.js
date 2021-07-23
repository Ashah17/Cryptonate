import PreviousDonationsCSS from './PreviousDonations.module.css';

const PreviousDonations = () => 
{
  return (

<div>
  
  <div className= {PreviousDonationsCSS.yourDonationTracker}>
    <h1>Your donation tracker</h1>
  </div>

  <div className={PreviousDonationsCSS.mapBox}>
    <img src="simple map .jpeg"/> 
  </div>

</div>

  );
};

export default PreviousDonations
