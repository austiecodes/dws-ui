import { useState } from "react";
import { usePopper } from "react-popper";
import { CSSTransition } from "react-transition-group";

const Popover = ({ popoverTarget, popoverContent }) => {
	const [referenceElement, setReferenceElement] = useState(null);
	const [popperElement, setPopperElement] = useState(null);
	const { styles, attributes } = usePopper(referenceElement, popperElement);

	const [showPopover, setShowPopover] = useState(false);

	const togglePopover = () => {
		setShowPopover(!showPopover);
	};

	return (
		<>
			<button
				ref={setReferenceElement}
				onClick={togglePopover}
				type="button"
				className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
			>
				{popoverTarget}
			</button>

			<CSSTransition
				in={showPopover}
				timeout={300}
				classNames="popover"
				unmountOnExit
			>
				<div
					ref={setPopperElement}
					style={styles.popper}
					{...attributes.popper}
					className="bg-white border p-3 rounded shadow-lg"
				>
					{popoverContent}
				</div>
			</CSSTransition>
		</>
	);
};

export default Popover;
