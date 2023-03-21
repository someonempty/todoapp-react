import { useState } from "react";
import List from "./components/List";
import Task from "./components/List/Task";

function App() {
	const [tasks, setTasks] = useState();

	const addTask = () => {
		if (tasks) {
			return <Task text={tasks}/>
		} else {
			console.log('bober')
		}
		
	}
	return (
		<>
		<List tasks={tasks} setTasks={setTasks} addTask={addTask}/>
		</>
	);
}

export default App;