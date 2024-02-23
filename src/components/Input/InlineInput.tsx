import React from "react";

// utils
import {
	allowIntervalInputValue,
	allowOnlyNumericNumbers,
} from "src/utils/form.utils";

// interfaces
import { IInlineInputProps } from "src/interfaces/app.interfaces";

export default function InlineInput(props: IInlineInputProps) {
	const handleKeyDownValue = (event: React.KeyboardEvent<HTMLInputElement>) => {
		if (!allowOnlyNumericNumbers(event)) return;

		allowIntervalInputValue(event, 100, 1);
	};

	return (
		<input
			{...props}
			onKeyDown={props.type === "number" ? handleKeyDownValue : undefined}
			className={`border-solid rounded-md app-input md:w-auto w-[100%] font-semibold py-2 text-xl ${props.className}`}
		/>
	);
}
