const Progress = ({percents}) => {
	return (
		<div>
			<div class="flex justify-between mb-1">
				<span class="text-base font-medium text-blue-700 dark:text-white">
					Flowbite
				</span>
				<span class="text-sm font-medium text-blue-700 dark:text-white">
					{percents}%
				</span>
			</div>
			<div class="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
			<div className="bg-blue-600 h-2.5 rounded-full" style={{width: `${percents}%`}}></div>
			</div>
		</div>
	);
};

export default Progress;
