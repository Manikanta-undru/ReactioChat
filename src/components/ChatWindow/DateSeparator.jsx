/* eslint-disable react/prop-types */
const DateSeparator = ({ date }) => {
  return (
    <div className="text-center m-2 text-gray-400 text-[10px]">
      {formatDate(date)}
    </div>
  );
};

const formatDate = (dateString) => {
  const today = new Date().toDateString();
  const yesterday = new Date();
  yesterday.setDate(yesterday.getDate() - 1);

  if (dateString === today) {
    return "Today";
  } else if (dateString === yesterday.toDateString()) {
    return "Yesterday";
  } else {
    return dateString;
  }
};

export default DateSeparator;
