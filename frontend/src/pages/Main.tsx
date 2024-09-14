import ElementList from '../components/ElementList';
import Footer from '../components/Footer';
import InfiniteCardCarousel from '../components/InfiniteCardCarousel';
import Marketplace from '../components/MainMarketplace';
import Navbar from '../components/Navbar';
import NftCarousel from '../components/NftCarousel';
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
      
      
      <div className="flex flex-row justify-center items-start container mx-auto px-2 mt-3 mb-16"> {/* Added mb-16 for spacing */}
        <div className='w-6/10'>
        <Marketplace />
        </div>
        <div className='w-3/10 mt-10 ml-14'>
        <ElementList/>
        <NftCarousel/>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Main;
