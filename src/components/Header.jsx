import React from "react";
import { FiPlus, FiUpload } from "react-icons/fi"; 

const Header = () => {
  return (
    <div className="bg-white border-b border-gray-200 shadow-sm p-6 flex flex-col items-end space-y-4 relative">
     
      <div className="absolute left-4 top-1/3 transform -translate-y-1/2 text-black font-bold text-lg z-10">
        Project 1
      </div>

      <div className="absolute pt-4 left-4 top-1/2 transform -translate-y-1/2 text-black font-bold opacity-50 text-lg z-0">
        Manage all projects in the list
      </div>

      <div className="flex space-x-2 z-10">
       
        <button className="bg-gray-white hover:bg-blue-500 text-gray px-6 py-3 rounded-md text-sm flex items-center space-x-2">
          <FiUpload className="text-black" /> 
          <span>Import Project</span>
        </button>
        <button className="bg-blue-500 hover:bg-blue-500 text-black px-6 py-3 rounded-md text-sm flex items-center space-x-2">
          <FiPlus className="text-black" /> 
          <span> Create Project</span>
        </button>
      </div>
      
      <div className="flex space-x-2 z-10">
        <input
          type="text"
          className="border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 flex-1"
          placeholder="Search project"
        />
        <button className="bg-white hover:bg-blue-500 text-black px-6 py-3 rounded-md text-sm">
          Filters
        </button>
      </div>
    </div>
  );
};

export default Header;
