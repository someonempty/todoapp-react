import { useState } from 'react';
import List from './components/List';
import Sidebar from './components/Sidebar';

function App() {
	const [tasks, setTasks] = useState([]);

	const [lists, setLists] = useState([]);

	const addTask = (id, text) => {
		if (text) {
			let newTasks = [...tasks, { id: id, text: text, checked: false }];
			setTasks(newTasks);
		}
	};

	const deleteTask = (id) => {
		let newTasks = [...tasks].filter((task) => task.id != id);
		setTasks(newTasks);
		console.log('deleted');
	};

	const toggleTask = (id) => {
		let newTasks = [...tasks].map((task) => {
			if (task.id == id) {
				task.checked = !task.checked;
			}
			return task;
		});
		setTasks(newTasks);
	};

	const addList = (id) => {
		let newLists = [...lists, { id: id, text: 'New List' }];
		setLists(newLists);
	};

	return (
		<main>
			<Sidebar lists={lists} onAddList={addList} />
			<List
				tasks={tasks}
				setTasks={setTasks}
				onAddTask={addTask}
				onDeleteTask={deleteTask}
				onToggleTask={toggleTask}
			/>
		</main>
	);
}

export default App;
