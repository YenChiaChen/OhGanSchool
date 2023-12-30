import { useState } from 'react';

export const useTimeController = () => {
  const timeSegments = ['清晨', '上午', '中午', '下午', '晚上', '深夜'];
  const [currentTime, setCurrentTime] = useState(timeSegments[0]);
  const [currentDate, setCurrentDate] = useState(new Date(100, 0, 1));

  const goToNextTimeSegment = () => {
    const currentIndex = timeSegments.indexOf(currentTime);
    const nextIndex = (currentIndex + 1) % timeSegments.length;
    const nextTimeSegment = timeSegments[nextIndex];

    if (currentTime === '深夜' && nextTimeSegment === '清晨') {
      setCurrentDate(prevDate => {
        const newDate = new Date(prevDate);
        newDate.setDate(newDate.getDate() + 1);
        return newDate;
      });
    }

    setCurrentTime(nextTimeSegment);
  };

  const formatDate = (date: Date) => {
    return `${date.getFullYear()}年${date.getMonth() + 1}月${date.getDate()}日`;
  };

  return { currentTime, currentDate, goToNextTimeSegment, formatDate };
};
