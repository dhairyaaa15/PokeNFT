import React from "react";
import ProfileNav from "../components/ProfileNav";
import ProfileMarket from "../components/ProfileMarket";
import ProfileElement from "../components/ProfileElement";

const MyProfile: React.FC = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navbar at the top */}
      <ProfileNav />

      {/* Main profile content */}
      <div className="p-6 h-auto flex flex-col items-center text-white pt-6 w-full">
        <h1 className="text-4xl font-pixel text-green-300 mb-6">My Profile</h1>
        <p className="text-lg font-pixel text-center mb-6">
          Welcome to your profile! Here you can manage your NFTs and view your purchase history.
        </p>

        {/* Render ProfileMarket and ProfileElement horizontally */}
        <div className="w-full flex justify-center space-x-1">
          {/* ProfileMarket takes 2x more space with rounded border */}
          <div className="flex-[2] max-w-full rounded-lg overflow-hidden">
            <ProfileMarket />
          </div>
          {/* ProfileElement takes less space */}
          <div className="flex-[1] max-w-full">
            <ProfileElement />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
