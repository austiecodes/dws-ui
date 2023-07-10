import GPUCard from "../components/GPU/GPUCard";
import { useEffect, useState } from "react";

const MachineInfo = () => {
	const gpuInfo = {
		gpuNumber: "0",
		gpuName: "RTX 3090",
		utilization: 45,
		memory: "60",
	};

	// const [machineInfo, setMachineInfo] = useState([]);
	const [machineInfo, setMachineInfo] = useState([]);
	const [eachMachineData, setEachMachineData] = useState([]);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await fetch(
					"http://192.168.120.128:10000/api/machines/info",
					{
						method: "GET",
						mode: "cors",
						headers: {
							"Content-Type": "application/json",
							Authorization: "Bearer " + localStorage.getItem("access_token"),
						},
					}
				);

				if (!response.ok) {
					throw new Error("Network response was not ok");
				}
				const data = await response.json();
				setMachineInfo(data);
			} catch (error) {
				console.error(error);
			}
		};
		fetchData();
	}, []);

	// useEffect(() => {

	// }, [machineInfo]);


	return (
		<div className="flex-row">
			<div>
				{machineInfo.map((machine, index) => (
					<GPUCard gpuInfo={machine.gpu} key={index} />
				))}
				{/* // <GPUCard gpuInfo={gpuData} /> */}
			</div>
		</div>
	);
};

export default MachineInfo;
