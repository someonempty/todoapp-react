import { useState } from "react";
import List from "./components/List";
import Task from "./components/List/Task";

function App() {
	const [tasks, setTasks] = useState([
		{
			id: 1,
			text: 'first task',
			checked: false
		},
		{
			id: 2,
			text: 'second task',
			checked: false
		},
		{
			id: 3,
			text: 'third task',
			checked: false
		}
	]);

	return (
		<>
		<List tasks={tasks} setTasks={setTasks}/>
		</>
	);
}


export default App;