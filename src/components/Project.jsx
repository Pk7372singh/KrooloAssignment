import React from "react";
import { FiUser, FiCalendar , FiFolder, FiPlus} from "react-icons/fi"; 

const ProjectTable = () => {
  

  return (
    <div className="bg-white shadow-sm p-6 mt-6 overflow-x-auto">
      <table className="w-full table-auto">
        <thead>
          <tr className="border-b border-gray-200">
            <th className="py-2 text-left text-gray-600 font-medium">Project name</th>
            <th className="py-2 text-left text-gray-600 font-medium">Status</th>
            <th className="py-2 text-left text-gray-600 font-medium">Priority</th>
            <th className="py-2 text-left text-gray-600 font-medium">Start date</th>
            <th className="py-2 text-left text-gray-600 font-medium">End date</th>
            <th className="py-2 text-left text-gray-600 font-medium">Task Progress</th>
            <th className="py-2 text-left text-gray-600 font-medium">Owner</th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-b border-gray-200 hover:bg-gray-100">
          <td className="py-4 text-gray-800 font-medium">
  <FiFolder className="inline mr-2" />
  Demo Project
</td>
            <td className="py-4 text-gray-800">
              <span className="bg-green-300 rounded-full text-green-800 px-2 py-1 rounded-full text-black">
                On Track
              </span>
            </td>
            <td className="py-4 text-gray-800">
              <span className="bg-red-300 rounded-full text-red-800 px-2 py-1 rounded-full text-black">
                High
              </span>
            </td>
            <td className="py-4 text-gray-800">
              <FiCalendar className="inline mr-1 text-gray-600" />
            </td>
            <td className="py-4 text-gray-800">
              <FiCalendar className="inline mr-1 text-gray-600" />
            </td>
            <td className="py-4 text-gray-100">
              <div className="w-1/2 bg-gray-200 rounded-full h-2 relative"> 
                <span
                  className="absolute top-3 right-0 text-gray-600 text-sm font-semibold"
                  style={{ marginRight: '-40px', transform: 'translateY(-100%)' }}
                >
                 0%
                </span>
              </div>
            </td>
            <td className="py-4 text-gray-800">
              <FiUser className="inline mr-1 text-gray-600" />
            </td>
            <td className="py-4 text-gray-800">
              <span>...</span>
            </td>
          </tr>
        </tbody>
      </table>
      <button className="bg-white-500 hover:bg-wite-500 text-black px-6 py-3 rounded-md text-gray flex items-center space-x-2">
          <FiPlus className="text-black" /> 
          <span> Create Project</span>
        </button>
    </div>
  );
};

export default ProjectTable;
