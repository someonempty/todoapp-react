import React from 'react';

const SidebarListElement = ({id, text, count, onDeleteList}) => {
	return (
		<div className='sidebar-list-element' onClick={(e) => {
			e.stopPropagation()
		}}>
			<div className='sidebar-list-element-text'>{text}</div>
			<div className='sidebar-list-button-container'>
				<span>{count}</span>
				<button className='edit-list-button'></button>
				<button className='delete-list-button' onClick={() => onDeleteList(id)}></button>
			</div>
		</div>
	);
};

export default SidebarListElement;
