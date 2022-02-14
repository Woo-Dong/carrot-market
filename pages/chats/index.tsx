import type { NextPage } from "next";
import Layout from "../../components/layout";

const Chats: NextPage = () => {
  return (
    <Layout title="Chat" hasTabBar>
      <div className="py-10 divide-y-[1px]">
        {[1, 1, 1, 1, 1].map((_, i) => (
          <div
            className="px-4 flex cursor-pointer py-3 items-center space-x-3"
            key={i}
          >
            <div className="w-12 h-12 rounded-full bg-slate-300" />
            <div>
              <p className="text-gray-700">Steve Jebs</p>
              <p className="text-sm font-medium text-gray-500">
                See you tommorow in the corner at 2pm!
              </p>
            </div>
          </div>
        ))}
      </div>
    </Layout>
  );
};

export default Chats;
