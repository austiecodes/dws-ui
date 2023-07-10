import CircleProgressCard from "../Base/Progress/CircleProgressCard";
import WaitQueueCard from "../WaitQueue/WaitQueueCard";

const GPUStatusCard = ({ machineIndex, gpuIndex, gpuInfo }) => {
	const utilization = gpuInfo.utilization;
	const memory_used = gpuInfo.memory_used;
	const memory_total = gpuInfo.memory_total;
	const memory_usage = ((memory_used / memory_total) * 100).toFixed(0);

	return (
		<div className="p-4 bg-white border border-gray-200 rounded-lg shadow-sm 2xl:col-span-2 dark:border-gray-700 sm:p-6 dark:bg-gray-800">
			<div className="flex items-center justify-between mb-4">
				<div className="flex-shrink-0">
					<span className="text-xl font-bold leading-none text-gray-900 sm:text-2xl dark:text-white">
						Machine {machineIndex}
					</span>
					<h3 className="text-base font-light text-gray-500 dark:text-gray-400">
						GPU {gpuIndex}: {gpuInfo.type}
					</h3>
				</div>
				<div className="flex items-center justify-end flex-1 text-base font-medium text-red-600 dark:text-red-600">
					Occupied
				</div>
			</div>
			<div className="flex items-center justify-between mb-4">
				<CircleProgressCard title="GPU Utilization" percents={utilization} />
				<CircleProgressCard title="GPU Memory" percents={memory_usage} />
			</div>
			<div className="">
				<WaitQueueCard machineIndex={machineIndex} gpuIndex={gpuIndex} />
			</div>

		</div>
	);
};

export default GPUStatusCard;
