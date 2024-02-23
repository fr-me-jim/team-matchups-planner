import store from "src/store";
import { createContext, FC, useContext } from "react";

import GeneralDispatcher from "src/models/GeneralDispatcher.model";

const Dispatcher = new GeneralDispatcher(store.dispatch);
export const DispatchContext = createContext<GeneralDispatcher>(Dispatcher);

export const DispatchProvider: FC<{ children: JSX.Element[] }> = ({
	children,
}) => {
	return (
		<DispatchContext.Provider value={Dispatcher}>
			{children}
		</DispatchContext.Provider>
	);
};

export const useDispatchContext = () => useContext(DispatchContext);
