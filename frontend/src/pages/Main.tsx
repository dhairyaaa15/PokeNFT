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
      <div className="container mx-auto px-4 text-center">
        <Staticinfo />
      </div>
      <div className="container mx-auto px-4 mt-10">
        <InfiniteCardCarousel />
      </div>

      <div className="container mx-auto px-2 mt-10 flex justify-center">
        <div className="w-full max-w-screen-xl flex flex-row justify-between items-start space-x-8">
          <div className="w-7.5/10"> {/* Adjusted width */}
            <Marketplace />
          </div>
          <div className="w-2.5/10 flex flex-col space-y-8 mt-9"> {/* Adjusted width and spacing */}
            <ElementList />
            <NftCarousel />
          </div>
        </div>
      </div>
      <div className='mt-7'>
      <Footer />
      </div>
    </div>
  );
}

export default Main;
