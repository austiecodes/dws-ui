import { useState } from "react";


const ProgressCard = ({titile, percents}) => {

  const [dashArray, setDashArray] = useState(`${percents} ${100 - percents}`);

  const circleStyle = {
    strokeWidth: '10',
    fill: 'transparent',
    r: '50',
    cx: '60',
    cy: '60',
    strokeDasharray: dashArray,
    strokeLinecap: 'round',
  };

  return(
    <>
<div className="py-20 px-5 bg-gray-100 w-2/4 min-w-fit">
  <div className="grid grid-cols-1 gap-1s">
    <div className="flex items-center justify-content mx-auto flex-wrap max-w-md px-10 bg-white shadow-xl rounded-2xl h-20">
          <div className="flex items-center justify-center -m-6 overflow-hidden bg-white rounded-full">
            <svg className="w-32 h-32 transform translate-x-1 translate-y-1" x-cloak aria-hidden="true">
              <circle
                className="text-gray-300"
                stroke-width="10"
                stroke="currentColor"
                fill="transparent"
                r="50"
                cx="60"
                cy="60"
                />
              <circle className="text-blue-600" stroke="currentColor" strokeLinecap="round" {...circleStyle} />
                

            </svg>
            <span className="absolute text-2xl text-blue-700" x-text="`${percent}%`"></span>
          </div>
          <p className="ml-10 font-medium text-gray-600 sm:text-xl">{titile}</p>
          <span className="ml-3 text-xl font-medium text-blue-600 hidden sm:block">{percents}%</span>
      </div>
  </div>
</div>

</>
  )
}


export default ProgressCard;