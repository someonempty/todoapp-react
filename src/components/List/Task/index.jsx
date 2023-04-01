import React, { useState } from 'react';
import './index.css'

const Task = ({id, text, onDeleteTask, onToggleTask, checked}) => {

	return (
		<div className='task'>
			<div className='element-container'>
                <input type="checkbox" checked={checked} onChange={() => onToggleTask(id)} className='checkbox-style'/> 
                <div className={`task-text ${checked && 'checkbox-checked'}`}>{text}</div>
            </div>
			<button className='delete-button' onClick={() => onDeleteTask(id)}/>
		</div>
	);
};

export default Task; 
