import React, { useState } from 'react';
import './index.css';
import Task from './Task';

const List = ({tasks, setTasks}) => {

	const deleteTask = (id) => {
		let newTasks = [...tasks].filter(task => task.id!=id)
		setTasks(newTasks)
		console.log('deleted')
	}

	const [value, setValue] = useState('');
	return (
		<div className='container'>
			<h1 className='todolist-header'>Inbox</h1>
			<div className='wrapper'>
				<input
					value={value}
					placeholder='New task'
					onKeyDown={(e) => {
						if (e.keyCode === 13) {
							setTasks({ text: value });
							setValue('');
						}
					}}
					onChange={(e) => {
						setValue(e.target.value);
					}}
					type='text'
					className='task-input'
				/>
				<button
					onClick={() => {
						setTasks({ text: value });
						setValue('');
					}}
					className='adding-button'
				>
					Add
				</button>
			</div>
			<div className='tasks-list'>
				{
					tasks.map(task => (
						<Task id={task.id} text={task.text} deleteTask={deleteTask}/>
					))
				}
			</div>
		</div>
	);
};

export default List;
