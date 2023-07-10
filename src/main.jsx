import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./routes/error-page.jsx";
import Register from "./routes/Register.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import MachineInfo from "./pages/MachineStatus.jsx";
import AllUsers from "./pages/AllUsers.jsx";
import Toggle from "./components/Toggle.jsx";

const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
		errorElement: <ErrorPage />,
	},
	{
		path: "/register",
		element: <Register />,
	},
	{
		path: "/dashboard",
		element: <Dashboard />,
		children: [
			{
				path: "gpuinfo",
				element: <MachineInfo/>,
			},
			{
				path: "allusers",
				element : <AllUsers/>,
			},
			// {
			// 	path: "containers",
			// 	element: <Containers/>,
			// }
		],
	},
	{
		path: "/test",
		element: < Toggle/>,
	},
]);

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
