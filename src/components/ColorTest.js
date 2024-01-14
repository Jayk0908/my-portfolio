import React, { useState, useEffect, useMemo } from 'react';

const ColorTest = () => {
  const [barHeights, setBarHeights] = useState([]);
  const barColors = ['#FFFF00', '#0000FF', '#FF0000', '#008000', '#808080']; // Hexadecimal values for yellow, blue, red, green, and gray

  // Memoize the values array to prevent unnecessary re-renders
  const values = useMemo(() => [12, 18, 21, 22, 18], []);

  // Array of words corresponding to each color
  const colorWords = [
    ['Sunny', 'Bright', 'Optimistic'],
    ['Calm', 'Trustworthy', 'Serene'],
    ['Energetic', 'Passionate', 'Intense'],
    ['Harmonious', 'Balanced', 'Friendly'],
    ['Neutral', 'Subtle', 'Mature'],
  ];

  // Function to calculate bar height
  const calculateBarHeight = (value) => {
    const maxHeight = 100; // Maximum height of the bars
    return (value / 25) * maxHeight; // Adjust as needed based on your scale
  };

  useEffect(() => {
    setBarHeights(values.map(calculateBarHeight));
  }, [values]);

  return (
    <div className="z-10 relative mt-10 w-full h-64 bg-white">
      {/* Horizontal Lines */}
      {[0, 5, 10, 15, 20, 25].map((line, index) => (
        <div key={index} className="absolute w-[95%] border-t border-gray-400 ml-10" style={{ bottom: `${(line / 25) * 100}%` }}>
          {/* Value Label */}
          <div className="absolute font-bold px-5 top-1/2 left-0 transform -translate-y-1/2 -translate-x-full">
            <p className="">{line}</p>
          </div>
        </div>
      ))}

      {/* Vertical Bars */}
      {barHeights.map((height, index) => (
        <div
          key={index}
          className={`absolute w-16 lg:w-24`}
          style={{
            height: `${height}%`,
            left: `${(index * 20) + 8}%`,
            bottom: 0,
            backgroundColor: barColors[index],
          }}
        >
          {/* Words */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white">
            {colorWords[index].map((word, wordIndex) => (
              <p key={wordIndex} className="text-xs text-black text-center lg:text-sm">{word}</p>
            ))}
          </div>
        </div>
      ))}

      {/* Bar Labels */}
      {values.map((value, index) => (
        <div key={index} className="absolute pl-12 lg:pl-20 font-bold" style={{ bottom: `${(calculateBarHeight(value) / 100) * 100 + 2}%`, left: `${(index * 20) + 9}%`, transform: 'translateX(-50%)' }}>
          {value}
        </div>
      ))}
    </div>
  );
};

export default ColorTest;
