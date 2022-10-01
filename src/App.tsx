import ImageBgc from "./components/layout";
import "./App.css";
import DenseAppBar from "./components/navbar";
import { UseDebounce } from "./components/useDebounce";

function App() {
	return (
		<div>
			<ImageBgc>
				<DenseAppBar></DenseAppBar>
			</ImageBgc>
		</div>
	);
}

export default App;
