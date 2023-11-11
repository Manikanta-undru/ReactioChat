import DateSeparator from "./DateSeparator";
import Message from "./Message";
import React from "react";
import pic from "../../assets/img/pexels-carol-wd-3454298.jpg";
const ChatBox = () => {
  const messages = [
    {
      id: 1,
      variant: "left",
      timestamp: "2023-11-09T10:00:00",
      content: "Hi there!",
    },
    {
      id: 2,
      variant: "left",
      timestamp: "2023-11-09T10:15:00",
      content: "How are you doing?",
    },
    {
      id: 3,
      variant: "right",
      timestamp: "2023-11-09T10:30:00",
      content: "Hey! I'm good, thanks.",
    },
    {
      id: 4,
      variant: "right",
      timestamp: "2023-11-10T11:00:00",
      content: "What about you?",
    },
    {
      id: 5,
      variant: "left",
      timestamp: "2023-11-10T11:30:00",
      content: "I'm doing well too. Any plans for today?",
    },
    {
      id: 6,
      variant: "left",
      timestamp: "2023-11-11T11:30:00",
      content: "I'm doing well too. Any plans for today?",
    },
    {
      id: 7,
      variant: "right",
      timestamp: "2023-11-11T10:30:00",
      content: "Hey! I'm good, thanks.",
    },
    {
      id: 8,
      variant: "right",
      timestamp: "2023-11-11T12:45:00",
      content: "Thinking of grabbing lunch soon. Any suggestions?",
    },
    {
      id: 9,
      variant: "left",
      timestamp: "2023-11-11T13:15:00",
      content:
        "How about trying that new Italian place downtown? I heard their pasta is amazing!",
    },
    {
      id: 10,
      variant: "right",
      timestamp: "2023-11-11T14:00:00",
      content: "That sounds great! Let's meet there at 1:30 PM.",
    },
    {
      id: 11,
      variant: "left",
      timestamp: "2023-11-11T15:30:00",
      content: "Perfect! See you there. I'm craving some good pasta.",
    },
    {
      id: 12,
      variant: "left",
      timestamp: "2023-11-11T16:45:00",
      content:
        "By the way, have you seen the latest movie? It's getting really good reviews!",
    },
    {
      id: 13,
      variant: "right",
      timestamp: "2023-11-11T17:30:00",
      content:
        "Not yet, but I've heard about it. Let's plan to watch it together this weekend.",
    },
    {
      id: 14,
      variant: "left",
      timestamp: "2023-11-11T09:00:00",
      content: "Sounds like a plan! I'll check the showtimes and let you know.",
      isSending: true,
    },
    {
      id: 15,
      variant: "left",
      timestamp: "2023-11-11T09:00:00",
      content: "She is cute, isn't she?",
      attachment: {
        type: "image",
        url: pic,
      },
    },
  ];

  const renderMessagesWithSeparators = () => {
    let currentDate = null;

    return messages.map((message, index) => {
      const previousMessage = index > 0 ? messages[index - 1] : null;
      const nextMessage =
        index < messages.length - 1 ? messages[index + 1] : null;
      const currentMessageDate = new Date(message.timestamp).toDateString();
      let corner;
      if (message.variant === "left") {
        corner = !previousMessage
          ? true
          : previousMessage.variant === message.variant
          ? false
          : true;
      } else {
        corner = !nextMessage
          ? true
          : nextMessage.variant === message.variant
          ? false
          : true;
      }
      if (currentMessageDate !== currentDate) {
        currentDate = currentMessageDate;

        return (
          <React.Fragment key={index}>
            <DateSeparator date={currentDate} />
            <Message key={message.id} {...message} corner={corner} />
          </React.Fragment>
        );
      }

      return <Message key={message.id} {...message} corner={corner} />;
    });
  };

  return (
    <div
      className={`p-4 grow-1 flex flex-col ${
        false ? "pb-60" : "pb-20"
      }  w-full overflow-y-scroll`}
    >
      {renderMessagesWithSeparators()}
    </div>
  );
};

export default ChatBox;
