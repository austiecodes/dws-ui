import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./routes/ErrorPage.jsx";
import Dashboard from "./routes/Dashboard.jsx";
import Machines from "./pages/Machines.jsx";
import AllUsers from "./pages/Admin/AllUsers.jsx";
import Toggle from "./components/Base/Toggle.jsx";
import Features from "./pages/Admin/Features.jsx";

const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
		errorElement: <ErrorPage />,
	},
	{
		path: "/dashboard",
		element: <Dashboard />,
		children: [
			{
				path: "gpuinfo",
				element: <Machines />,
			},
			{
				path: "allusers",
				element: <AllUsers />,
			},
			{
				path: "features",
				element: <Features />,
			},
		],
	},
	{
		path: "/test",
		element: <Toggle />,
	},
]);

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
