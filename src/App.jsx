import { useState } from "react";
import List from "./components/List";
import Task from "./components/List/Task";

// const addTask = () => {
	// 	setTasks([...tasks, {}])
	// }

function App() {
	const [tasks, setTasks] = useState('');

	const addTask = () => {
		if (tasks) {
			return <Task text={tasks.text}/>
		}
	}

	return (
		<>
		<List tasks={tasks} setTasks={setTasks} addTask={addTask}/>
		</>
	);
}


export default App;