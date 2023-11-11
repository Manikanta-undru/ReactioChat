/* eslint-disable react/prop-types */
import ProfilePic from "../ProfilePic";

const ChatItem = ({ imageUrl, name, timestamp, lastMessage, active }) => {
  return (
    <div
      className={`flex text-gray-600 p-4 cursor-pointer hover:bg-gray-50 ${
        active ? "border-l-2 bg-secondary-100 border-l-primary" : ""
      }`}
    >
      <ProfilePic imageUrl={imageUrl} size={40} />
      <div className="flex flex-col ml-3 grow">
        <div className="flex justify-between items-center w-full">
          <span className="font-semibold text-sm">{name}</span>
          <span className="text-[10px] text-gray-400 font-medium">
            {timestamp}
          </span>
        </div>
        <div>
          <span className="text-gray-400 text-sm font-medium">
            {lastMessage}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ChatItem;
