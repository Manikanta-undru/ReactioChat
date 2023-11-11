import ChatItem from "./ChatItem";
import Search from "./Search";
import user1 from "../../assets/img/pexels-amusan-john-7745573.jpg";
import user2 from "../../assets/img/pexels-carol-wd-3454298.jpg";
import user3 from "../../assets/img/pexels-cottonbro-studio-8090137.jpg";
import user4 from "../../assets/img/pexels-নাওমী-মাহজাবিন-3444087.jpg";
const ChatList = () => {
  const chatList = [
    {
      id: 1,
      imageUrl: user1,
      name: "Steve Roberts",
      timestamp: "11:00 AM",
      lastMessage: "I will take care of it.",
    },
    {
      id: 2,
      imageUrl: user2,
      name: "John Doe",
      timestamp: "11:00 AM",
      lastMessage: "Hello",
    },
    {
      id: 3,
      imageUrl: user3,
      name: "Kristein Stewart",
      timestamp: "11:00 AM",
      lastMessage: "Whats app!",
    },
    {
      id: 4,
      imageUrl: user4,
      name: "Robert Pattison",
      timestamp: "01:00 AM",
      lastMessage: "I am good!",
    },
    {
      id: 5,
      imageUrl: user4,
      name: "Robert Pattison",
      timestamp: "01:00 AM",
      lastMessage: "I am good!",
    },
    {
      id: 6,
      imageUrl: user4,
      name: "Robert Pattison",
      timestamp: "01:00 AM",
      lastMessage: "I am good!",
    },
    {
      id: 7,
      imageUrl: user4,
      name: "Robert Pattison",
      timestamp: "01:00 AM",
      lastMessage: "I am good!",
    },
    {
      id: 8,
      imageUrl: user1,
      name: "Steve Roberts",
      timestamp: "11:00 AM",
      lastMessage: "I will take care of it.",
    },
    {
      id: 9,
      imageUrl: user2,
      name: "John Doe",
      timestamp: "11:00 AM",
      lastMessage: "Hello",
    },
    {
      id: 10,
      imageUrl: user1,
      name: "Steve Roberts",
      timestamp: "11:00 AM",
      lastMessage: "I will take care of it.",
    },
    {
      id: 11,
      imageUrl: user2,
      name: "John Doe",
      timestamp: "11:00 AM",
      lastMessage: "Hello",
    },
  ];
  return (
    <div className="  bg-white border border-gray-200 h-full flex flex-col  w-1/4 ">
      <div className="p-4">
        <Search />
      </div>
      <div className="mt-1 overflow-y-scroll">
        {chatList.map((chat) => (
          <ChatItem
            active={chat.id === 1}
            key={chat.id}
            imageUrl={chat.imageUrl}
            name={chat.name}
            timestamp={chat.timestamp}
            lastMessage={chat.lastMessage}
          />
        ))}
      </div>
    </div>
  );
};

export default ChatList;
