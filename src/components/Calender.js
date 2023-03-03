import React, { useState } from "react";

function Calender() {
  const [year, setYear] = useState(new Date().getFullYear());
  const [month, setMonth] = useState(new Date().getMonth() + 1);

  const handlePrevMonth = () => {
    setMonth((prevMonth) => {
      const newMonth = prevMonth - 1;
      if (newMonth < 1) {
        setYear((prevYear) => prevYear - 1);
        return 12;
      }
      return newMonth;
    });
  };

  const handleNextMonth = () => {
    setMonth((prevMonth) => {
      const newMonth = prevMonth + 1;
      if (newMonth > 12) {
        setYear((prevYear) => prevYear + 1);
        return 1;
      }
      return newMonth;
    });
  };

  const getDaysInMonth = (year, month) => {
    return new Date(year, month, 0).getDate();
  };

  const getFirstDayOfMonth = (year, month) => {
    return new Date(`${year}-${month}-01`).getDay();
  };

  const daysInMonth = getDaysInMonth(year, month);
  const firstDayOfMonth = getFirstDayOfMonth(year, month);

  const calendarRows = [];
  let daysInWeek = 0;
  let row = [];

  for (let i = 1; i <= firstDayOfMonth; i++) {
    row.push("");
    daysInWeek++;
  }

  for (let i = 1; i <= daysInMonth; i++) {
    row.push(i);
    daysInWeek++;

    if (daysInWeek === 7) {
      calendarRows.push(row);
      row = [];
      daysInWeek = 0;
    }
  }

  if (daysInWeek > 0) {
    for (let i = daysInWeek; i < 7; i++) {
      row.push("");
    }
    calendarRows.push(row);
  }

  return (
    <div className="calendar">
      <div className="header">
        <h1>
          {year}년 {month}월
        </h1>
      </div>
      <div className="but">
        <button onClick={handlePrevMonth}>이전 달</button>
        <button onClick={handleNextMonth}>다음 달</button>
      </div>
      <table className="weekdays">
        <thead className="days">
          <tr>
            <th>일</th>
            <th>월</th>
            <th>화</th>
            <th>수</th>
            <th>목</th>
            <th>금</th>
            <th>토</th>
          </tr>
        </thead>
        <tbody>
          {calendarRows.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {row.map((cell, cellIndex) => (
                <td key={cellIndex}> {cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Calender;
