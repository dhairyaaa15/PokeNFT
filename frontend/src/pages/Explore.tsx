import backgroundImage from '../assets/bg3.jpeg';
import MarketplaceIntro from '../components/MarketplaceIntro';

function Explore() {
  return (
    <div
      className="relative flex flex-col min-h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <MarketplaceIntro/>
    </div>
  );
}

export default Explore;