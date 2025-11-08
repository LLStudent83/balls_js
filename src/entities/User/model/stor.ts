import { create } from "zustand";
import { combine, devtools } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";
import { createSelectors } from "./userStorUtils";

export interface User {
	userId: number;
	nickName: string;
	email?: string;
}

interface State {
	user: User | null;
}

interface Actions {
	setUser: (newUser: User) => void;
}

const user = {
	user: null,
};

const useUserStoreBase = create(
	devtools(
		immer(
			combine<State, Actions>(user, (set) => ({
				setUser: (newUser: User) => {
					set({ user: newUser });
				},
			})),
		),
	),
);

export const useUserStore = createSelectors(useUserStoreBase);
