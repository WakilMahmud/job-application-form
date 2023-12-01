import { Outlet } from "react-router-dom";
import Header from "../pages/shared/Header";
import Progress from "../components/Progress";

const Main = () => {
	return (
		<div>
			<Header></Header>
			<Progress></Progress>
			<Outlet></Outlet>
		</div>
	);
};

export default Main;
