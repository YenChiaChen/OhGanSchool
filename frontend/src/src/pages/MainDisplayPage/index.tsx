import React, { useState } from 'react';
import { useTimeController } from '../../utils/useTimeController';

const MainDisplayPage = () => {
  const { currentTime, currentDate, goToNextTimeSegment, formatDate } = useTimeController();
  const [activity, setActivity] = useState('');

  type TimeSegment = '清晨' | '上午' | '中午' | '下午' | '晚上' | '深夜';
  type Activities = Record<TimeSegment, string[]>;

  const activitiesByTimeSegment: Activities = {
    '清晨': ['晨跑', '瑜伽', '看书'],
    '上午': ['上班', '购物', '看电影'],
    '中午': ['吃午饭', '午休', '散步'],
    '下午': ['开会', '下午茶', '继续工作'],
    '晚上': ['健身', '晚餐', '看电视'],
    '深夜': ['夜读', '睡觉', '网上冲浪']
  };

  const handleActivity = (newActivity: string) => {
    setActivity(newActivity);
    goToNextTimeSegment();
  };

  const currentActivities = activitiesByTimeSegment[currentTime as TimeSegment] || [];

  return (
    <>
      <div>{currentTime}</div>
      <div>當前日期：{formatDate(currentDate)}</div>
      <button onClick={goToNextTimeSegment}>下一個時間段</button>
      {currentActivities.map((act, index) => (
        <button 
          key={index}
          className='w-full my-2 border text-center p-2'
          onClick={() => handleActivity(act)}
        >
          {act}
        </button>
      ))}
      {activity && <div className='dialogue-box'>您剛剛做了：{activity}</div>}
    </>
  );
};

export default MainDisplayPage;
