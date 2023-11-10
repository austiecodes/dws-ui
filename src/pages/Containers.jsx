import { useEffect, useState} from "react";
import ContainerCard from "../components/Containers/ContainerCard";


const Containers = () => {
	const [isConnected, setIsConnected] = useState(false);
    const [containers, setContainers] = useState([]);

    useEffect(() => {
        const backendURL = "ws://127.0.0.1:8080/ws";
        const socket = new WebSocket(backendURL);

        socket.onopen = () => {
            setIsConnected(true);
            console.log("Connected to server");
        };

        socket.onmessage = (event) => {
            const containerInfo = JSON.parse(event.data);
            console.log("Message received", containerInfo);
            // Append new container info to the existing list
            setContainers(prevContainers => [...prevContainers, containerInfo]);
        };

        socket.onerror = (event) => {
            // Logging the error message
            console.error("WebSocket error observed:", event.message);
        };

        return () => {
            socket.close();
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
