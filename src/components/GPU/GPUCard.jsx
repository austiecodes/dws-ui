import GPUStatusCard from "./GPUStatusCard";
import WaitQueueCard from "../WaitQueue/WaitQueueCard";



const GPUCard = ({ gpuInfo, waitQueue}) => {
	return (
		<>
			<div className="relative mt-20 w-full h-full overflow-y-auto bg-gray-50  dark:bg-gray-900">
				<div className="px-4 pt-6">
					<div className="grid gap-4 xl:grid-cols-2 2xl:grid-cols-3">
						<GPUStatusCard gpuInfo={gpuInfo}/>
						<WaitQueueCard waitQueue={waitQueue}/>
					</div>
				</div>
			</div>
		</>
	);
};

export default GPUCard;
