import React from 'react';
import './index.css'

const Task = ({text}) => {
	return (
		<div className='task'>
			<div className='element-container'>
                <input type="checkbox" className='checkbox-style'/>
                <div className='task-text'>{text}</div>
            </div>
		</div>
	);
};

export default Task;
