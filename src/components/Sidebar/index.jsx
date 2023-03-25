import React, { useState } from 'react';
import './index.css';
import SidebarListElement from './SidebarListElement/SidebarListElement';

const Sidebar = ({ lists, onAddList }) => {
	const INBOX_LIST_ID = 1;

	// const [selectedList, setSelectedList] = useState()

	return (
		<aside className='sidebar'>
			<div className='sidebar-list-container'>
				<h1 className='todoapp-header'>ToDoApp</h1>
				<div className='sidebar-list'>
					<div className='sidebar-list-element sidebar-list-element-active' id={INBOX_LIST_ID}>
						<div className='sidebar-list-element-text'>Inbox</div>
					</div>
					{lists.map((list) => (
						<SidebarListElement text={list.text} />
					))}
				</div>
			</div>
			<button className='sidebar-button' onClick={() => onAddList(Math.random())}>New List</button>
		</aside>
	);
};

export default Sidebar;
