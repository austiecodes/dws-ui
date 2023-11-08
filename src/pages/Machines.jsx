import { useEffect, useState } from "react";
import MachineInfoGroup from "../components/Machines/MachineInfoGroup";
import MachineInfoCard from "../components/Machines/MachineInfoCard";

const Machines = () => {
	const backendUrl = import.meta.env.VITE_BACKEND_URL;
	const [allMachineInfo, setAllMachineInfo] = useState([]);
	const intervalTime = 5000;
	const myGpuInfo = {
		utilization: 75,
		memory_used: 4,
		memory_total: 8
	  };

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await fetch (
					backendUrl + "api/machines/info",
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
				setAllMachineInfo(data);
			} catch (error) {
				console.error(error);
			}
		};
		fetchData();

		const interval = setInterval(() => {fetchData();
		}, intervalTime);

		return () => clearInterval(interval);
	}, []);

	return (
		<div className="flex-row">
			<div>
				{/* {allMachineInfo.length > 0 && allMachineInfo.map((machineInfo, index) => (
					<MachineInfoGroup
						machineIndex={index}
						machineInfo={machineInfo}
						key={index}
					/>
				))} */}
				<MachineInfoCard machineIndex={0} gpuIndex={0} gpuInfo={myGpuInfo}/>
			</div>
		</div>
	);
};

export default Machines;
