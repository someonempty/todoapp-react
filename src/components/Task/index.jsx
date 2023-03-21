import React from 'react';
import './index.css'

const Task = () => {
	return (
		<div className='task'>
			<div className='element-container'>
                <input type="checkbox" className='checkbox-style'/>
                <div className='task-text'>i</div>
            </div>
		</div>
	);
};

export default Task;
