import GPUStatusCard from "./MachineInfoSegment";

const MachineInfoGroup = ({ machineIndex, machineInfo }) => {
	// console.log("machineInfo", machineInfo);
	// let machineInfoArray = Object.entries(machineInfo)
	// console.log("machineInfoArray", machineInfoArray);
	const gpuInfos = machineInfo.gpu
	const diskInfos = machineInfo.disk
	const memoryInfos = machineInfo.memory
	// console.log("gpuInfos", gpuInfos);
	return (
		<>
			<div className="relative mt-20 w-full h-full overflow-y-auto bg-gray-50  dark:bg-gray-900">
				<div className="px-4 pt-6">
					<GPUStatusCard machineIndex={machineIndex} gpuInfos={gpuInfos}/>
				</div>
			</div>
		</>
	);
};

export default MachineInfoGroup;
