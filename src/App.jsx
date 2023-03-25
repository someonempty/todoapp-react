import { useState } from "react";
import List from "./components/List";

function App() {
	const [tasks, setTasks] = useState([])

	console.log(tasks);

	return (
		<>
		<List tasks={tasks} setTasks={setTasks}/>
		</>
	);
}


export default App;