import MachineInfoCard from "./MachineInfoCard";

const MachineInfoSegment = ({ machineIndex, gpuInfos, systemInfos }) => {
	var gpuInfoArray = Object.values(gpuInfos);
	// console.log("gpuInfoArray", gpuInfoArray);
	return (
		<>
			{gpuInfoArray.map((gpuInfo, index) => (
				<MachineInfoCard
					key={index}
					machineIndex={machineIndex}
					gpuIndex={index}
					gpuInfo={gpuInfo}
				/>
			))}
		</>
	);
};

export default MachineInfoSegment;
