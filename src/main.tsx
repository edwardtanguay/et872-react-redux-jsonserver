import ReactDOM from "react-dom/client";
import App from "./app/App";
import {
	createBrowserRouter,
	Navigate,
	RouterProvider,
} from "react-router-dom";
import "./app/index.scss";
import { PageWelcome } from "./common/pages/PageWelcome.tsx";
import { PageAbout } from "./common/pages/PageAbout.tsx";
import { Page404 } from "./common/pages/Page404.tsx";
import { AppProvider } from "./AppContext.tsx";
import { PageTechBooks } from "./common/pages/PageTechBooks.tsx";

const children = [
	{
		path: "welcome",
		element: <PageWelcome />,
	},
	{
		path: "techbooks",
		element: <PageTechBooks />,
	},
	{
		path: "about",
		element: <PageAbout />,
	},
	{
		path: "/",
		element: <Navigate to="/welcome" replace />,
	},
];

const router = createBrowserRouter([
	{
		path: "/",
		errorElement: <Page404 />,
		element: <App />,
		children,
	},
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
	<AppProvider>
		<RouterProvider router={router} />
	</AppProvider>
);
