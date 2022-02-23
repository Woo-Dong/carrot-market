import type { NextPage } from "next";
import Button from "@components/button";

const Create: NextPage = () => {
  return (
    <div className="py-10 space-y-5 px-4">
      <div>
        <label
          htmlFor="name"
          className="mb-1 text-sm font-medium text-gray-700"
        >
          Name
        </label>
        <div className="rounded-md flex items-center shadow-sm">
          <input
            className="apppearance-none w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placehodler-gray-400 focus:outline-none focus:ring-orange-500 focus:border-orange-500"
            id="name"
            type="text"
            placeholder="Name"
          />
        </div>
      </div>
      <div>
        <label
          htmlFor="price"
          className="mb-1 text-sm font-medium text-gray-700"
        >
          Price
        </label>
        <div className="rounded-md relative flex items-center shadow-sm">
          <div className="absolute left-0 pl-3 pointer-events-none flex items-center justify-center">
            <span className="text-gray-500 text-sm">$</span>
          </div>
          <input
            className="apppearance-none pl-7 w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placehodler-gray-400 focus:outline-none focus:ring-orange-500 focus:border-orange-500"
            id="price"
            type="text"
            placeholder="0.00"
          />
          <div className="absolute right-0 pointer-events-none pr-3 flex items-center">
            <span className="text-gray-500">USD</span>
          </div>
        </div>
      </div>
      <div>
        <label className="mb-1 text-sm font-medium text-gray-700">
          Description
        </label>
        <div>
          <textarea
            className="mt-1 shadow-sm w-full focus:ring-orange-500 rounded-md border-gray-300 focus:border-orange-500"
            rows={4}
          />
        </div>
      </div>
      <Button text="Go live" large />
    </div>
  );
};

export default Create;
