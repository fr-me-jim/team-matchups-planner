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
