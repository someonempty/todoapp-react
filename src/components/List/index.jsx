import React, { useState } from 'react';
import Task from './Task';
import './index.css';

const List = ({ tasks, setTasks, addTask }) => {
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
							console.log(tasks);
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
			<div className='tasks-list'>{addTask()}</div>
		</div>
	);
};

export default List;
