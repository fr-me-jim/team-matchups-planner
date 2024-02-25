import { useEffect, useCallback } from "react";
import { useAppSelector } from "./redux.hooks";
import { useDispatchContext } from "src/context/Dispatch.context";

export const useFetchUserPlayers = () => {
	// get state
	const { userData, loading } = useAppSelector((state) => state.auth);

	// context
	const getUserPlayers = useDispatchContext().PlayersDispatcher.getUserPlayers;

	useEffect(() => {
		const getAllUserPlayers = () => {
			if (userData) getUserPlayers(userData.id);
		};

		if (!loading) getAllUserPlayers();
	}, [loading, userData, getUserPlayers]);
};
