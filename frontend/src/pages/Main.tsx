import InfiniteCardCarousel from '../components/InfiniteCardCarousel';
import Navbar from '../components/Navbar';
import Staticinfo from '../components/Staticinfo';

function Main() {
  return (
    <div className="min-h-screen bg-black text-white pt-6 item">
      <Navbar />
      <div>
        <Staticinfo />
      </div>
      <div className='items-center'>
        <InfiniteCardCarousel/>
      </div>
    </div>
  );
}

export default Main;
