import type { NextPage } from "next";
import Message from "../../components/message";

const ChatDetail: NextPage = () => {
  return (
    <div className="px-4 py-16 space-y-4">
      {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((_, i) => (
        <div key={i} className="space-y-4">
          <Message message="Hi how much are you selling them for?" />
          <Message message="I want $200" reversed />
          <Message message="Crazy??" />
        </div>
      ))}
      <div className="fixed w-full mx-auto max-w-md bottom-2 inset-x-0">
        <div className="flex relative items-center">
          <input
            type="text"
            className="shadow-sm rounded-full w-full border-gray-300 focus:ring-orange-500 focus:outline-none pr-12 focus:border-orange-500"
          />
          <div className="absolute inset-y-0 flex py-1.5 pr-1.5 right-0">
            <button className="flex focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 items-center bg-orange-500 rounded-full px-3 hover:bg-orange-600 text-sm text-white">
              &rarr;
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatDetail;
