import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./routes/error-page.jsx";
import Index from "./pages/Index.jsx";
import Register from "./pages/Register.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import ProgressCard from "./components/ProgressCard.jsx";
import GPUInfo from "./pages/GPUInfo.jsx";
import UserItem from "./components/UserItem.jsx";
import AllUsers from "./pages/AllUsers.jsx";
import Sample from "./pages/SampleDashboard.jsx";

const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
		errorElement: <ErrorPage />,
	},
	{
		path: "/index",
		element: <Index />,
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
				element: <Sample />,
			},
			{
				path: "allusers",
				element : <AllUsers/>,
			}
		],
	},
	{
		path: "/test",
		element: < Sample/>,
	},
]);

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
