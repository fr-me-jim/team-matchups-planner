import _ from "lodash";
import Swal from "sweetalert2";

export const allowOnlyNumericNumbers = (
	event?: React.KeyboardEvent<HTMLInputElement>
): boolean => {
	if (!event) return false;

	if (
		event.key === " " ||
		(event.key !== "Backspace" && isNaN(Number(event.key)))
	) {
		event.preventDefault();
		return false;
	}

	return true;
};

export const allowIntervalInputValue = (
	event: React.KeyboardEvent<HTMLInputElement>,
	max: number,
	min?: number
) => {
	if (min && Number(event.currentTarget.value + event.key) < min) {
		event.preventDefault();
	}

	if (Number(event.currentTarget.value + event.key) > max) {
		event.preventDefault();
	}
};

export const errorPopupModalHandler = async (error: Error) => {
	const regex = /auth\/(.*?)\)/;
	const match = (error as Error).message.match(regex);
	const formatMsg = match && match[1].toString().replaceAll("-", " ");
	const message = formatMsg && _.capitalize(formatMsg);

	return await Swal.fire({
		icon: "error",
		titleText: "Error",
		text: message || error.message || "Oops! Something went wrong.",
		confirmButtonText: "Confirmar",
		confirmButtonColor: "#2b6ca7",
	});
};
