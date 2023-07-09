const PressureBar = ({ title, percentage, subtitle }) => {
	const pressure = (percentage) => {
		if (percentage < 51) {
			return "bg-green-500";
		} else if (percentage >= 51 && percentage < 80) {
			return "bg-yellow-400";
		} else {
			return "bg-red-600";
		}
	};

	return (
		<div className="mt-8">
			<div className="flex justify-between mb-1">
				<div className="text-lg font-medium dark:text-white">{title}</div>
				<div className="text-md font-medium text-right dark:text-white">
					{subtitle}
				</div>
			</div>

			<div className="w-full h-6 bg-gray-200 rounded-full dark:bg-gray-700">
				<div
					className={`h-6 rounded-full dark:bg-blue-500 text-center text-white ${pressure(
						percentage
					)}`}
					style={{ width: `${percentage}%` }}
				>
					{percentage}%
				</div>
			</div>
		</div>
	);
};

export default PressureBar;
