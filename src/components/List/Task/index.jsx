import React from 'react';
import './index.css'

const Task = ({id, text, deleteTask}) => {
	return (
		<div className='task'>
			<div className='element-container'>
                <input type="checkbox" className='checkbox-style'/>
                <div className='task-text'>{text}</div>
            </div>
			<button className='delete-button' onClick={() => deleteTask(id)}/>
		</div>
	);
};

export default Task;
