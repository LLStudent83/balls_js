import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import type { ReactElement } from "react";

const queryClient = new QueryClient();

interface PropsI {
	children: ReactElement;
}

export default function ApiProvider({ children }: PropsI) {
	return (
		<QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
	);
}
