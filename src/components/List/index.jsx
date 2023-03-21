import React, { useState } from 'react';
import Task from './Task';
import './index.css';

const List = ({ tasks, setTasks, addTask}) => {
	const [value, setValue] = useState('');

	console.log(tasks)
	const TaskRender = () => {
		console.log('rendering task')
	}
	return (
		<div className='container'>
			<h1 className='todolist-header'>Inbox</h1>
			<div className='wrapper'>
				<input value={value} placeholder='New task' onChange={(e) => setValue(e.target.value)} type='text' className='task-input' />
				<button
				 onClick={() => {
					setTasks(value)
					TaskRender()
				 } } className='adding-button'>
					Add
				</button>
			</div>
			<div className='tasks-list'>
				{addTask()}
			</div>
		</div>
	);
};

export default List;
