import React, { useState, useEffect } from "react";
import { usePokemonContext } from "./PokemonContext"; // Update path if necessary
import { FaTimes } from "react-icons/fa"; // Import the cross icon from react-icons
import { useNavigate } from "react-router-dom"; // Import useNavigate from react-router-dom

const NftCarousel: React.FC = () => {
  const { stages } = usePokemonContext();
  const [currentStage, setCurrentStage] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [userBid, setUserBid] = useState<number | "">(""); // Store user bid
  const [currentBid, setCurrentBid] = useState<number>(0); // Current highest bid
  const [timeLeft, setTimeLeft] = useState<number>(3600); // Simulate 1-hour timer (in seconds)
  const [biddingStatus, setBiddingStatus] = useState<string>(""); // Bid result status

  const navigate = useNavigate(); // Initialize navigate

  // Loading state check
  useEffect(() => {
    if (timeLeft <= 0) {
      if (userBid && userBid > currentBid) {
        setBiddingStatus("You won the bid!");
      } else {
        setBiddingStatus("You lost the bid.");
      }
    }
  }, [timeLeft, currentBid, userBid]);

  // Timer for countdown
  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  if (!stages || stages.length === 0) {
    return (
      <div className="p-6 bg-gray-800 rounded-lg h-[800px] flex flex-col items-center justify-center text-white shadow-lg border-2 border-green-500">
        <h2 className="text-3xl font-pixel mb-6 text-green-300 text-center">
          Pokémon Carousel
        </h2>
        <p className="text-center mb-4 font-pixel text-xl leading-relaxed">
          It is always better to know your Pokémon before taking a step to buy
          them.
        </p>
        <p className="text-center font-pixel text-xl leading-relaxed">
          Choose a Pokémon and click on the{" "}
          <span className="text-yellow-400">"Know More"</span> button to get the
          details of that respective Pokémon, stage-wise.
        </p>
      </div>
    );
  }

  const handlePrevious = () => {
    setCurrentStage((prevStage) =>
      prevStage > 0 ? prevStage - 1 : stages.length - 1
    );
  };

  const handleNext = () => {
    setCurrentStage((prevStage) =>
      prevStage < stages.length - 1 ? prevStage + 1 : 0
    );
  };

  const stage = stages[currentStage];

  const handleBuyClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleBidChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserBid(Number(event.target.value));
  };

  const handleBidSubmit = () => {
    // Check if the user bid is valid and higher than the current bid
    if (userBid && userBid > currentBid) {
      setCurrentBid(userBid); // Update the current bid
      setIsModalOpen(false); // Close the modal after a successful bid
      setUserBid(""); // Clear the bid input after submission
      setBiddingStatus(""); // Reset bidding status
      setTimeLeft(3600); // Reset timer
    } else {
      // Handle invalid bids (if user tries to bid lower than current bid or no bid at all)
      alert("Please place a valid bid higher than the current highest bid.");
    }
  };

  const handleProceed = () => {
    setIsModalOpen(false);
    navigate("/myprofile"); // Navigate to Myprofile.tsx
  };

  return (
    <div className="p-2 bg-gray-800 bg-opacity-80 rounded-lg h-[900px] flex flex-col items-center">
      {/* Stage Indicator */}
      <h2 className="text-2xl font-pixel mb-3 text-green-300 text-center">
        Stage {stage.stage}
      </h2>

      {/* Image Section */}
      <div className="w-56 h-56 bg-gray-900 mb-9 flex items-center justify-center relative overflow-hidden rounded-md">
        <img
          src={stage.image}
          alt={`Stage ${stage.stage}`}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Name and Short Description */}
      <h3 className="text-lg font-pixel font-semibold text-white mb-1.5 text-center">
        {stage.name}
      </h3>

      {/* Long Description */}
      <div className="p-4 rounded-lg mb-4">
        <h4 className="text-md font-pixel font-semibold text-green-300 mb-2 text-center">
          Detailed Description
        </h4>
        <ul className="list-disc list-inside text-gray-300 font-pixel text-sm">
          {stage.longDescription.map((desc, index) => (
            <li key={index}>{desc}</li>
          ))}
        </ul>
      </div>

      {/* Highest Bid and Timer */}
      <div className="w-full mb-4">
        <h4 className="text-md font-pixel font-semibold text-green-300 text-center mb-2">
          Highest bid: {currentBid} Apt
        </h4>
        <div className="text-center mb-4">
          <p className="text-white font-pixel">
            Time Left: {Math.floor(timeLeft / 60)}:{String(timeLeft % 60).padStart(2, '0')}
          </p>
        </div>
        <div className="flex justify-between items-center space-x-4 mb-4">
          <button
            onClick={handlePrevious}
            disabled={currentStage === 0}
            className={`w-1/2 py-2 ${
              currentStage === 0
                ? "bg-blue-950 cursor-not-allowed"
                : "bg-blue-950 hover:bg-gray-900"
            } font-pixel text-white rounded-lg transition`}
          >
            Previous
          </button>
          <button
            onClick={handleNext}
            disabled={currentStage === stages.length - 1}
            className={`w-1/2 py-2 ${
              currentStage === stages.length - 1
                ? "bg-blue-950 cursor-not-allowed"
                : "bg-blue-950 hover:bg-gray-900"
            } font-pixel text-white rounded-lg transition`}
          >
            Next
          </button>
        </div>
      </div>

      {/* Buy Button */}
      <button
        onClick={handleBuyClick}
        className="w-full py-2 bg-green-600 text-white rounded-lg font-pixel font-bold hover:bg-green-500 transition"
      >
        BID NOW !!
      </button>

      {/* Modal for Buy NFT */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg max-w-md w-full relative">
            <button
              onClick={handleCloseModal}
              className="absolute top-2 right-2 text-gray-400 hover:text-white transition"
            >
              <FaTimes size={24} />
            </button>

            <h2 className="text-2xl font-pixel mb-4 text-green-300 text-center">
              Bid for {stage.name} (Stage {stage.stage})
            </h2>

            {/* Image and Bid Section */}
            <div className="flex flex-col items-center justify-center mb-4">
              <img
                src={stage.image}
                alt={`Stage ${stage.stage} Pokémon`}
                className="w-52 h-52 object-cover rounded-sm mb-4"
              />
              <p className="text-yellow-400 text-center font-pixel mb-4">
                When you bid, you are placing an offer to purchase this Pokémon.
              </p>
            </div>

            {/* Bid Input */}
            <div className="flex items-center justify-center mb-4">
              <span className="text-white font-pixel mr-2">Enter your bid:</span>
              <input
                type="number"
                value={userBid}
                onChange={handleBidChange}
                min={currentBid + 1}
                className="p-2 w-24 rounded-lg border border-gray-600 bg-gray-700 text-white text-center focus:outline-none focus:ring-2 focus:ring-green-500"
              />
              <span className="text-white font-pixel ml-2">Apt</span>
            </div>

            {/* Place Bid Button */}
            <button
              onClick={handleBidSubmit}
              className="w-full py-2 bg-green-600 text-white rounded-lg font-pixel hover:bg-green-500 transition"
            >
              Place Bid
            </button>

            {/* Bidding Status */}
            {biddingStatus && (
              <p className="mt-4 text-center font-pixel text-yellow-400">
                {biddingStatus}
              </p>
            )}

            {/* Proceed Button */}
            <button
              onClick={handleProceed}
              className="w-full py-2 bg-blue-600 text-white rounded-lg font-pixel hover:bg-blue-500 transition mt-4"
            >
              Proceed to Profile
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default NftCarousel;
