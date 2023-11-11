import ChatList from "./ChatList"
import ChatWindow from "./ChatWindow"

const ChatScreen = () => {
  return (
    <div className="bg-white w-full h-[800px] flex ">
        <ChatList/>
        <ChatWindow/>
    </div>
  )
}

export default ChatScreen