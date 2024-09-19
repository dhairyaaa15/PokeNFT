import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import AdminMint from '../components/AdminMint';

const AdminPage = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-900 text-gray-200">
      {/* Navbar */}
      <Navbar />

      {/* Main content (Minting) */}
      <main className="flex-grow">
        <AdminMint />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default AdminPage;
