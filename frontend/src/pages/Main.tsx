import ElementList from '../components/ElementList';
import Footer from '../components/footer';
import InfiniteCardCarousel from '../components/InfiniteCardCarousel';
import Marketplace from '../components/MainMarketplace';
import Navbar from '../components/Navbar';
import Staticinfo from '../components/Staticinfo';

function Main() {
  return (
    <div className="min-h-screen bg-black text-white pt-6">
      <Navbar />
      <div className="container mx-auto px-4">
        <Staticinfo />
      </div>
      <div className="items-center mt-10">
        <InfiniteCardCarousel />
      </div>
      
      <div className="container mx-auto px-4 mt-10 mb-16"> {/* Added mb-16 for spacing */}
        <Marketplace />
        <ElementList/>
      </div>
      <Footer />
    </div>
  );
}

export default Main;
