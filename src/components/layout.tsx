import { Outlet, Link } from "react-router-dom";
import DenseAppBar from "./navbar";
import "./layout.css";

const Layout = () => {
	return (
		<>
			<div className='ImageBgc'>
				<DenseAppBar></DenseAppBar>
			</div>
			<Outlet />
		</>
	);
};

export default Layout;
