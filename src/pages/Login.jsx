import { useState } from "react";
import { useNavigate } from "react-router-dom";
import CryptoJS from "crypto-js";
import Popover from "../components/PopoverButton";

function Login() {
	let navigate = useNavigate();
	const [isRegistering, setRegistering] = useState(false);
	const [confirmedPassword, setConfirmedPassword] = useState("");
	const handleRegister = () => {
		setRegistering(!isRegistering);
	};
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");

	const handleLogin = async (event) => {
		event.preventDefault();
		const hashedPassword = CryptoJS.SHA256(password).toString();
		const response = await fetch("http://127.0.0.1:9998/api/auth/login", {
			method: "POST",
			mode: "cors",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({ username: username, password: hashedPassword }),
		});

		const data = await response.json();
		if (response.ok) {
			navigate("/index");
		} else {
			alert(data.message);
		}
	};

	const confirmRegister = async (event) => {
		event.preventDefault();
		const isPasswordSame = password === confirmedPassword;
		if (isPasswordSame) {
			const hashedPassword = CryptoJS.SHA256(password).toString();
			const response = await fetch("http://127.0.0.1:9998/api/auth/register", {
				method: "POST",
				mode: "cors",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({ username: username, password: hashedPassword }),
			});

			if (response.ok) {
				console.log("ok");
				navigate("/dashboard");
			} else {
				console.log("not ok");
				alert("Something went wrong!");
			}
		} else {
			alert("Passwords do not match!");
		}
	};

	return (
		<div className="flex min-h-full flex-1 flex-col justify-center items-center px-6 py-12 lg:px-8 mt-40">
			<div className="sm:mx-auto sm:w-full sm:max-w-sm">
				<img
					className="mx-auto h-10 w-auto"
					src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
					alt="DWS"
				/>
				<h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
					Sign in to your account
				</h2>
			</div>

			<div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
				<form className="space-y-6" action="#" method="POST">
					<div>
						<label
							htmlFor="text"
							className="block text-sm font-medium leading-6 text-gray-900 text-left"
						>
							Username
						</label>
						<div className="mt-2">
							<input
								id="username"
								name="username"
								type="text"
								autoComplete="text"
								required
								className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
								onChange={(e) => setUsername(e.target.value)}
								placeholder={isRegistering ? "jeffdean" : ""}
							/>
						</div>
					</div>

					<div>
						<div className="flex items-center justify-between">
							<label
								htmlFor="password"
								className="block text-sm font-medium leading-6 text-gray-900"
							>
								Password
							</label>
							{!isRegistering && (
								<div className="text-sm">
									<a className="font-semibold text-indigo-600 hover:text-indigo-500">
										Forgot password?
									</a>
								</div>
							)}
						</div>
						<div className="mt-2">
							<input
								id="password"
								name="password"
								type="password"
								autoComplete="current-password"
								required
								className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
								onChange={(e) => setPassword(e.target.value)}
								placeholder={
									isRegistering ? "tensorflowisbetterthanpytorch" : ""
								}
							/>
						</div>
					</div>

					{isRegistering && (
						<div>
							<div className="flex items-center justify-between">
								<label
									htmlFor="password"
									className="block text-sm font-medium leading-6 text-gray-900"
								>
									Confirm Password
								</label>
								{!isRegistering && (
									<div className="text-sm">
										<a className="font-semibold text-indigo-600 hover:text-indigo-500">
											Forgot password?
										</a>
									</div>
								)}
							</div>
							<div className="mt-2">
								<input
									id="confirmed-password"
									name="confirmed-password"
									type="password"
									autoComplete="current-password"
									required
									className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
									onChange={(e) => setConfirmedPassword(e.target.value)}
									placeholder={
										isRegistering ? "tensorflowisbetterthanpytorch" : ""
									}
								/>
							</div>
						</div>
					)}

					{!isRegistering && (
						<div>
							<button
								type="submit"
								className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
								onClick={handleLogin}
							>
								Sign in
							</button>
						</div>
					)}

					{isRegistering && (
						<div>
							<button
								type="submit"
								className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
								onClick={confirmRegister}
							>
								Register
							</button>
						</div>
					)}
				</form>

				<p className="mt-10 text-center text-sm text-gray-500">
					<a
						className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
						onClick={handleRegister}
					>
						{!isRegistering ? "Register Now" : "Back to Login"}
					</a>
				</p>
			</div>
		</div>
	);
}

export default Login;
