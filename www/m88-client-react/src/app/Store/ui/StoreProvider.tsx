import { ReactNode } from "react";
import { Provider } from "react-redux";

import { storeConfig } from "../config/store";

interface StoreProviderProps {
	children: ReactNode;
}

const StoreProvider = (props: StoreProviderProps) => {
	const { children } = props;
	return <Provider store={storeConfig}>{children}</Provider>;
};

export { StoreProvider };
