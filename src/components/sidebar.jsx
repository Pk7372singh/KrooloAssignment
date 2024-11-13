import React, { useState } from 'react';
import { FiInbox, FiMessageCircle, FiCheckSquare, FiCpu, FiMessageSquare, FiClock, FiFolder, FiTarget, FiFileText, FiHash, FiUsers, FiCalendar, FiPackage, FiGlobe } from 'react-icons/fi';

const Sidebar = () => {
  const [showDemoText, setShowDemoText] = useState(false);

  const handleProjectClick = () => {
    setShowDemoText(true);
  };

  const handleOtherClick = () => {
    setShowDemoText(false);
  };

  return (
    <div className="bg-white border-r border-gray-200 shadow-md p-4 w-64">
      <h2 className="text-gray font-bold mb-0 text-gray-900">Workspace</h2>
      <h2 className="text-xl font-bold mb-6 text-gray-900 flex items-center">
        <FiGlobe className="mr-2" /> Kroolo Space
      </h2>
      <ul className="space-y-2">
        <li className="text-gray-800 font-bold hover:text-gray-500 cursor-pointer flex items-center" onClick={handleOtherClick}>
          <FiInbox className="mr-2" /> Inbox
        </li>
        <li className="text-gray-800 font-bold hover:text-gray-500 cursor-pointer flex items-center" onClick={handleOtherClick}>
          <FiMessageCircle className="mr-2" /> Direct Messages
        </li>
        <li className="text-gray-800 font-bold hover:text-gray-500 cursor-pointer flex items-center" onClick={handleOtherClick}>
          <FiCheckSquare className="mr-2" /> My Tasks
        </li>
        <li className="text-gray-800 font-bold hover:text-gray-500 cursor-pointer flex items-center" onClick={handleOtherClick}>
          <FiCpu className="mr-2" /> AI Agents
        </li>
        <li className="text-gray-800 font-bold hover:text-gray-500 cursor-pointer flex items-center" onClick={handleOtherClick}>
          <FiMessageSquare className="mr-2" /> Chat with Anything
        </li>
        <li className="text-gray-800 font-bold hover:text-gray-500 cursor-pointer flex items-center" onClick={handleOtherClick}>
          <FiClock className="mr-2" /> Track Time
        </li>
        <li className="text-gray-800 font-bold hover:text-gray-500 cursor-pointer flex items-center" onClick={handleProjectClick}>
          <FiFolder className="mr-2" /> Projects
        </li>
        {showDemoText && (
          <li className="text-gray-800 font-bold pl-4 flex items-center">
            <FiFolder className="mr-2" /> Demo Project
          </li>
        )}
        <li className="text-gray-800 font-bold hover:text-gray-500 cursor-pointer flex items-center" onClick={handleOtherClick}>
          <FiTarget className="mr-2" /> Goals
        </li>
        <li className="text-gray-800 font-bold hover:text-gray-500 cursor-pointer flex items-center" onClick={handleOtherClick}>
          <FiFileText className="mr-2" /> Docs
        </li>
        <li className="text-gray-800 font-bold hover:text-gray-500 cursor-pointer flex items-center" onClick={handleOtherClick}>
          <FiHash className="mr-2" /> Channels
        </li>
        <li className="text-gray-800 font-bold hover:text-gray-500 cursor-pointer flex items-center" onClick={handleOtherClick}>
          <FiUsers className="mr-2" /> Teams
        </li>
        <li className="text-gray-800 font-bold hover:text-gray-500 cursor-pointer flex items-center" onClick={handleOtherClick}>
          <FiCalendar className="mr-2" />
          Meetings
          <span className="bg-red-300 text-red-800 px-2 py-1 rounded-md text-white ml-2">Soon</span>
        </li>
      </ul>
      <div className="mt-6 gap-1 fixed bottom-8 border-t border-blue-200 pt-6 flex flex-col items-start w-64">
        <span className="text-gray-800 font-bold flex items-center">
          Starter Plan
        </span>
        <span className="text-gray-500 font-bold pl-2 mt-2 flex items-center">
          <FiPackage className="mr-2" /> Upgrade Plan
        </span>
      </div>
    </div>
  );
};

export default Sidebar;
