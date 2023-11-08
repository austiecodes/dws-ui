import { useEffect } from "react";
import ContainerCard from "../components/Containers/ContainerCard";
import io from "socket.io-client";

const backendURL = import.meta.env.TEST_URL;
export const socket = io(backendURL);

const Containers = () => {
	const [isConnected, setIsConnected] = useState(socket.connected);

	useEffect(() => {
		function onConnect() {
			setIsConnected(true);
		}

		socket.on("connect", onConnect);
	
		return () => {
			socket.off("connect", onConnect);
		};
	}, []);

	return (
		<div className="px-4 pt-10">
			<div className="grid w-full grid-cols-1 gap-4 mt-4 xl:grid-cols-2 2xl:grid-cols-3">
				<ContainerCard name="Test" initialStatus={true} />
			</div>
		</div>
	);
};

export default Containers;
