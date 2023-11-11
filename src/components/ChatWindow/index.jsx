import ChatBox from "./ChatBox"
import Header from "./Header"
import MessageInput from "./MessageInput"

const ChatWindow = () => {
    return (
      <div className=" bg-white border border-gray-200 border-l-0  h-full flex flex-col w-3/4 relative">
        <Header/>
        <ChatBox/>
        <div className=" absolute bottom-0 left-0 right-0">
        <MessageInput/>
        </div>
      </div>
    )
  }
  
  export default ChatWindow