import React, { useState } from 'react';

const SidebarListElement = ({ id, text, count, selectedList, onDeleteList, onChangeListName }) => {
	const [isTrue, setIsTrue] = useState(false);
	const [newValue, setNewValue] = useState('');
	return (
		<div
			className={`sidebar-list-element ${selectedList === id && 'sidebar-list-element-active'}`}
			onClick={(e) => {
				e.stopPropagation();
			}}
		>
			<div className='sidebar-list-element-text'>
				{text}
				{isTrue && <input value={newValue}
					placeholder='New list'
					onChange={(e) => {
						setNewValue(e.target.value);
					}}/>
				}
			</div>
			<div className='sidebar-list-button-container'>
				<span>{count}</span>
				<button
					className='edit-list-button'
					onClick={() => {
						setIsTrue(true);
					}}
				></button>
				<button className='delete-list-button' onClick={() => onDeleteList(id)}></button>
			</div>
		</div>
	);
};

export default SidebarListElement; 
