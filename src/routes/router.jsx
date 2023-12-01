import { createBrowserRouter } from "react-router-dom";
import { EDUCATION_INFO, ROOT, WORK_EXPERIENCE_INFO } from "./routes";
import ErrorPage from "../pages/shared/ErrorPage";
import Main from "../layout/Main";
import App from "../App";
import EducationInfo from "../pages/EducationInfo/EducationInfo";
import WorkingInfo from "../pages/WorkingInfo/WorkingInfo";

const router = createBrowserRouter([
	{
		path: ROOT,
		element: <Main></Main>,
		errorElement: <ErrorPage />,
		children: [
			{
				path: ROOT,
				element: <App />,
			},
			{
				path: EDUCATION_INFO,
				element: <EducationInfo />,
			},
			{
				path: WORK_EXPERIENCE_INFO,
				element: <WorkingInfo />,
			},
		],
	},
]);

export default router;
