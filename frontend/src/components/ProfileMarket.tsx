import React, { useState } from 'react';
import ProfileEvolvePok from './ProfileEvolvePok';

const ProfileMarket: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'evolving'>('evolving');

  return (
    <div className="h-[750px] w-[80%] max-w-[2000px] mx-auto p-5 bg-gray-900 text-white font-pixel shadow-lg rounded-lg"> {/* Adjusted width to 80% */}
      {/* Tabs Section */}
      <div className="flex border-b border-gray-600 mb-4">
        <div
          onClick={() => setActiveTab('evolving')}
          className="cursor-pointer p-3 flex-1 text-center rounded-t-lg bg-gradient-to-r from-green-600 to-green-800 text-white"
        >
          <span className="text-lg font-semibold">My Evolving Cards</span>
        </div>
      </div>

      {/* Content */}
      <div className="flex-grow overflow-auto">
        <ProfileEvolvePok />
      </div>
    </div>
  );
};

export default ProfileMarket;
