import React from 'react';

const SidebarListElement = ({ text }) => {
	return (
		<div className='sidebar-list-element'>
			<div className='sidebar-list-element-text'>{text}</div>
			<div className='sidebar-list-button-container'>
				<button className='edit-list-button'></button>
				<button className='delete-list-button'></button>
			</div>
		</div>
	);
};

export default SidebarListElement;
