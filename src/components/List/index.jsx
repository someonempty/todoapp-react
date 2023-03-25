import React, { useState } from 'react';
import './index.css';
import Task from './Task';

const List = ({ tasks, onAddTask, onDeleteTask, onToggleTask }) => {
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
							onAddTask(Math.random(), value);
							setValue('');
						}
					}}
					onChange={(e) => {
						setValue(e.target.value);
					}}
					className='task-input'
				/>
				<button
					onClick={() => {
						onAddTask(Math.random(), value);
						setValue('');
					}}
					className='adding-button'
				>
					Add
				</button>
			</div>
			<div className='tasks-list'>
				{tasks.map((task) => (
					<Task key={task.id} id={task.id} text={task.text} onDeleteTask={onDeleteTask} onToggleTask={onToggleTask} checked={task.checked}/>
				))}
			</div>
		</div>
	);
};
 
export default List;
