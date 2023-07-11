import { useEffect, useState } from "react";

const CircleProgressCard = ({ title, percents, subtitle }) => {
	const radius = 50;
	const circumference = 2 * Math.PI * radius;
	const [dashArray, setDashArray] = useState(circumference);
	const [dashOffset, setDashOffset] = useState(circumference);

	useEffect(() => {
		setDashOffset(circumference - (percents / 100) * circumference);
	}, [percents]);

	const circleStyle = {
		strokeWidth: "10",
		fill: "transparent",
		r: "50",
		cx: "60",
		cy: "60",
		strokeDasharray: dashArray,
		strokeDashoffset: dashOffset,
		strokeLinecap: "round",
	};

	const pressure = (percents) => {
		if (percents < 51) {
			return "text-green-500";
		} else if (percents >= 51 && percents < 80) {
			return "text-yellow-400";
		} else {
			return "text-red-600";
		}
	};

	return (
		<>
			<div className="py-20 px-5 w-2/4 min-w-fit">
				<div className="grid grid-cols-1 gap-1s">
					<div className="flex items-center justify-content mx-auto flex-wrap max-w-md px-10 bg-white shadow-xl rounded-2xl h-20 border">
						<div className="flex items-center justify-center -m-6 overflow-hidden bg-white rounded-full">
							<svg
								className="w-32 h-32 transform translate-x-1 translate-y-1"
								// x-cloak
								aria-hidden="true"
								style={{ transform: "rotate(90deg)" }}
							>
								<circle
									className="text-gray-300"
									strokeWidth="10"
									stroke="currentColor"
									fill="transparent"
									r="50"
									cx="60"
									cy="60"
								/>
								<circle
									className={`${pressure(percents)} `}
									stroke="currentColor"
									strokeLinecap="round"
									{...circleStyle}
								/>
							</svg>
							<span className="absolute text-2xl text-blue-700 ml-2">
								{" "}
								{percents}%
							</span>
						</div>
						<p className="ml-10 font-medium text-gray-600 sm:text-xl">
							{title}
						</p>
						<span className="ml-3 text-xl font-medium text-blue-600 hidden sm:block">
							{subtitle}
						</span>
					</div>
				</div>
			</div>
		</>
	);
};

export default CircleProgressCard;
