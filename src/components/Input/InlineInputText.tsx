import { forwardRef } from "react";

// interfaces
import { IInlineInputProps } from "src/interfaces/app.interfaces";

export default forwardRef<HTMLInputElement, IInlineInputProps>(
	function InlineInputText(props: IInlineInputProps, forwardedRef) {
		return (
			<input
				{...props}
				ref={forwardedRef}
				type="text"
				className={`border-solid rounded-md app-input md:w-auto w-[100%] font-semibold py-2 text-xl ${props.className}`}
			/>
		);
	}
);
