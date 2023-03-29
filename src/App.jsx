import { useState } from 'react';
import List from './components/List';
import Sidebar from './components/Sidebar';

function App() {
	const INBOX_LIST_ID = 1;
	const [tasks, setTasks] = useState([]);
	const [lists, setLists] = useState([]);
	const [selectedList, setSelectedList] = useState(INBOX_LIST_ID)

	const addTask = (id, text) => {
		if (text) {
			let newTasks = [...tasks, { id: id, text: text, checked: false, selectedList: id }];
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

	const selectList = (id) => {
		let newLists = [...lists].forEach(list => {
		  if (list.id === id) {
			selectedList = list;
		  }
		});

	  }

	// const changeList = (id, text) => {
	// 	let newLists = [...lists].forEach(list => {
	// 		if(list.id === id) {
	// 			list.text = text
	// 		}
	// 	})
	// 	setLists(newLists);
	// }

	return (
		<main>
			<Sidebar lists={lists} onAddList={addList} INBOX_LIST_ID={INBOX_LIST_ID} onSelectList={selectList}/>
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
