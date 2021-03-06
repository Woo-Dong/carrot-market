import type { NextPage } from "next";

const EditProfile: NextPage = () => {
  return (
    <div className="py-10 px-4 space-y-4">
      <div className="flex items-center space-x-3">
        <div className="w-14 h-14 rounded-full bg-slate-400" />
        <div>
          <label
            htmlFor="picture"
            className="cursor-pointer py-2 px-3 border border-gray-300 hover:border-orange-400 rounded-md shadow-sms text-sm font-medium hover:ring-2 hover:ring-offset-2 hover:ring-orange-500 text-gray-700"
          >
            Change photo
            <input accept="image" id="picture" type="file" className="hidden" />
          </label>
        </div>
      </div>
      <div className="space-y-1">
        <label htmlFor="email" className="text-sm font-medium text-gray-700">
          Email Address
        </label>
        <input
          id="email"
          type="email"
          className="apppearance-none w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placehodler-gray-400 focus:outline-none focus:ring-orange-500 focus:border-orange-500"
          required
        />
      </div>
      <div className="space-y-1">
        <label htmlFor="phone" className="text-sm font-medium text-gray-700">
          Phone number
        </label>
        <div className="flex rounded-md shadow-sm">
          <span className="flex items-center justify-center px-3 rounded-l-lg border border-r-0 border-gray-300 bg-gray-50 text-gray-500 select-none text-sm">
            +82
          </span>
          <input
            id="phone"
            type="number"
            className="apppearance-none w-full px-3 py-2 border border-gray-300 rounded-md rounded-l-none shadow-sm placehodler-gray-400 focus:outline-none focus:ring-orange-500 focus:border-orange-500"
            required
          />
        </div>
      </div>
      <button className="mt-5 w-full bg-orange-500 hover:bg-orange-600 text-white py-2 px-4 border-transparent rounded-md shadow-sm font-medium focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 focus:outline-none ">
        Update profile
      </button>
    </div>
  );
};

export default EditProfile;
