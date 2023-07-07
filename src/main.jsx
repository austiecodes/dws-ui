import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./routes/error-page.jsx";
import Index from "./pages/Index.jsx";
import Register from "./pages/Register.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import GPUInfo from "./pages/GPUInfo.jsx";
import AllUsers from "./pages/AllUsers.jsx";
import Toggle from "./components/Toggle.jsx";

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
				element: <GPUInfo/>,
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
