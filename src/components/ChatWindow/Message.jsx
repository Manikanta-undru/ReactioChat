/* eslint-disable react/prop-types */

const Message = ({
  variant,
  corner = false,
  timestamp,
  content,
  isSending,
}) => {
  const dateObject = new Date(timestamp);

  const timeString = dateObject.toLocaleTimeString("en-US", {
    hour12: true,
    hour: "2-digit",
    minute: "2-digit",
  });

  const isLeft = variant === "left";
  const isRight = variant === "right";

  const getContainerClasses = () => {
    const commonClasses = "p-3 rounded-lg mb-3";
    if (isLeft) {
      return `${commonClasses} bg-secondary-100  text-gray-500 self-start ${
        corner ? "rounded-ss-none" : ""
      }`;
    } else if (isRight) {
      return `${commonClasses} bg-primary self-end ${
        corner ? "rounded-ee-none" : ""
      }`;
    }
  };

  return (
    <div
      className={` ${getContainerClasses()} text-sm font-medium max-w-lg leading-5 ${
        isSending ? "animate-blink" : ""
      }`}
    >
      <div className="flex flex-col relative">
        <span>{content}</span>
        <span
          className={`${
            isLeft ? "text-gray-400" : "text-white"
          } font-bold text-[8px] self-end`}
        >
          {timeString}
        </span>
      </div>
    </div>
  );
};

export default Message;
