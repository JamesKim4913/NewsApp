import React, { useEffect, useState } from 'react';

// To express the time of the news release by changing it to a few hours ago, a few minutes ago

const TimeAgo = ({ timestamp }) => {
  const [timeAgo, setTimeAgo] = useState('');

  useEffect(() => {
    const calculateTimeAgo = () => {
      const currentTime = new Date().getTime();
      const previousTime = new Date(timestamp).getTime();
      const timeDifference = currentTime - previousTime;

      const minuteInMs = 60 * 1000;
      const hourInMs = 60 * minuteInMs;
      const dayInMs = 24 * hourInMs;
      const monthInMs = 30 * dayInMs;
      const yearInMs = 365 * dayInMs;

      if (timeDifference < minuteInMs) {
        setTimeAgo('Just now');
      } else if (timeDifference < hourInMs) {
        const minutes = Math.floor(timeDifference / minuteInMs);
        setTimeAgo(`${minutes} minute${minutes > 1 ? 's' : ''} ago`);
      } else if (timeDifference < dayInMs) {
        const hours = Math.floor(timeDifference / hourInMs);
        setTimeAgo(`${hours} hour${hours > 1 ? 's' : ''} ago`);
      } else if (timeDifference < monthInMs) {
        const days = Math.floor(timeDifference / dayInMs);
        setTimeAgo(`${days} day${days > 1 ? 's' : ''} ago`);
      } else if (timeDifference < yearInMs) {
        const months = Math.floor(timeDifference / monthInMs);
        setTimeAgo(`${months} month${months > 1 ? 's' : ''} ago`);
      } else {
        const years = Math.floor(timeDifference / yearInMs);
        setTimeAgo(`${years} year${years > 1 ? 's' : ''} ago`);
      }
    };

    calculateTimeAgo();

    // Update the time every minute to keep the "ago" text accurate
    const intervalId = setInterval(calculateTimeAgo, 60000);

    return () => clearInterval(intervalId);
  }, [timestamp]);

  return <span>{timeAgo}</span>;
};

export default TimeAgo;
