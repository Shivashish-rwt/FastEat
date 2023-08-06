import React, { createContext, useReducer } from "react";
import reducer from "../reducers/sidebarReducer";
import { OPEN_SIDEBAR, CLOSE_SIDEBAR } from "../actions/actions";
import { Value } from "sass";

const initialState = {
	isSidebarOpen: false,
};

const SidebarContext = createContext({});

export const SidebarProvider = ({ children }) => {
	const [state, dispatch] = useReducer(reducer, initialState);

	const openSidebar = () => {
		dispatch({ type: OPEN_SIDEBAR });
	};

	const closeSidebar = () => {
		dispatch({ type: CLOSE_SIDEBAR });
	};

	return (
		<SidebarContext.Provider
			value={{
				...state,
				openSidebar,
				closeSidebar,
			}}
		>
			{children}
		</SidebarContext.Provider>
	);
};

export default SidebarContext;