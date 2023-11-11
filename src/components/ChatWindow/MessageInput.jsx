import { AiOutlineCloseCircle } from "react-icons/ai";
import { BsPaperclip } from "react-icons/bs";
import { PiPaperPlaneRightFill } from "react-icons/pi";
import { useState } from "react";

const MessageInput = () => {
  const [message, setMessage] = useState("");
  const [attachment, setAttachment] = useState(null);

  const handleSendMessage = () => {
    // Implement logic to send the message
    console.log("Message sent:", message);
  };

  const handleAttachmentChange = (e) => {
    const file = e.target.files[0];
    setAttachment(file);

    // You may implement additional logic here, such as previewing the attachment
  };

  const handleRemoveAttachment = () => {
    setAttachment(null);
  };
  const renderAttachmentPreview = () => {
    if (!attachment) return null;

    const isImage = attachment.type.startsWith("image");
    const isPdf = attachment.type === "application/pdf";

    if (isImage) {
      return (
        <div className=" w-24 max-h-[200px] ">
          <img
            src={URL.createObjectURL(attachment)}
            alt="Attachment Preview"
            className="max-w-full h-auto"
          />
        </div>
      );
    } else if (isPdf) {
      // You can replace the following line with a PDF file icon component
      return <div className="pdf-icon">PDF Icon</div>;
    } else {
      // For other file types, you can add more conditions and icons as needed
      return <div className="generic-file-icon">File Icon</div>;
    }
  };
  return (
    <div className="w-full px-4 py-2 border-t bg-white">
      {attachment && (
        <div className="mb-2 relative">
          <button
            className="text-white absolute -top-2 right-0 bg-red-500 rounded-full hover:text-red-700"
            onClick={handleRemoveAttachment}
          >
            <AiOutlineCloseCircle />
          </button>
          <div className="mt-2">{renderAttachmentPreview()}</div>
        </div>
      )}

      <div className="flex items-center">
        <label htmlFor="file-upload" className="mr-2 cursor-pointer">
          <BsPaperclip size={20} className=" text-gray-400" />
          <input
            type="file"
            id="file-upload"
            accept="image/*, application/pdf" // Adjust the accepted file types
            onChange={handleAttachmentChange}
            className="hidden"
          />
        </label>

        <input
          type="text"
          placeholder="Type a message..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="flex-1 text-sm font-medium p-2 bg-transparent focus-within:outline-none text-gray-400 "
        />

        <button
          onClick={handleSendMessage}
          className=" text-secondary-100 py-2"
        >
          <PiPaperPlaneRightFill className="text-primary text-2xl" />
        </button>
      </div>
    </div>
  );
};

export default MessageInput;
