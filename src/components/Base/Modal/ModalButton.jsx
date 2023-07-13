import { Button, Modal } from "flowbite-react";
import { useState } from "react";

export default function ModalButton({ title, buttonIcon }) {
	const [openModal, setOpenModal] = useState();
	const props = { openModal, setOpenModal };

	const [selectedFile, setSelectedFile] = useState();
	const [selectedFileUrl, setSelectedFileUrl] = useState();

	const onDragOver = (event) => {
		event.preventDefault();
	};

	const onDrop = (e) => {
		e.preventDefault();

		let files = [...e.dataTransfer.files];
		if (files && files.length > 0) {
			setSelectedFile(files[0]);
			let file = files[0];
			console.log("File type:", file.type);
			if (file.type === "image/png" || file.type === "image/jpeg") {
				setSelectedFile(file);
				let url = URL.createObjectURL(file);
				setSelectedFileUrl(url);
			} else {
				alert("Invalid file type. Please upload a PNG or JPG image.");
			}
		}
	};

	const onComfirm = async () => {
		const formData = new FormData();
		formData.append("file", selectedFile);

		const response = await fetch(backendURL + "api/auth/register", {
			method: "POST",
			mode: "cors",
			body: formData,
			headers: {
				Authorization: `Bearer ${localStorage.getItem("token")}`,
			},
		}).then((response) => response.json());
	};

	return (
		<>
			<button
				type="button"
				className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
				onClick={() => props.setOpenModal("dismissible")}
				onDrop={onDrop}
			>
				{buttonIcon}
				{title}
			</button>
			<Modal dismissible show={props.openModal === "dismissible"}>
				<Modal.Body>
					{!setSelectedFileUrl && (
						<div
							className="flex items-center justify-center w-full mt-1 p-2"
							onClose={() => props.setOpenModal(undefined)}
							onDragOver={onDragOver}
							onDrop={onDrop}
						>
							<label
								htmlFor="dropzone-file"
								className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
							>
								<div className="flex flex-col items-center justify-center pt-5 pb-6">
									<svg
										className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
										aria-hidden="true"
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 20 16"
									>
										<path
											stroke="currentColor"
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth="2"
											d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
										/>
									</svg>
									<p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
										<span className="font-semibold">Click to upload</span> or
										drag and drop
									</p>
									<p className="text-xs text-gray-500 dark:text-gray-400">
										PNG, JPG (MAX. 800x400px)
									</p>
								</div>
								<input id="dropzone-file" type="file" className="hidden" />
							</label>
						</div>
					)}

					{/* {selectedFileUrl && <img src={selectedFileUrl} alt="Preview" className="rounded border"/>} */}
					{selectedFileUrl && (
						<div className="flex item-cneter justify-center mt-4 mb-4">
							<img
								src={selectedFileUrl}
								alt="Preview"
								className="rounded-full border"
							/>
						</div>
					)}

					<div className="flex justify-end justify-between mt-2">
						<button
							type="button"
							className="items-center px-3 py-2 text-sm font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 ml-auto"
							onClick={() => {
								props.setOpenModal(undefined);
								onComfirm();
							}}
						>
							Confirm
						</button>
						<button
							type="button"
							className="py-2 px-3 ml-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
							onClick={() => {
								props.setOpenModal(undefined);
								setSelectedFile;
							}}
						>
							Cancel
						</button>
					</div>
				</Modal.Body>
			</Modal>
		</>
	);
}
