import React, { useState } from 'react';
import './index.css';
import SidebarListElement from './SidebarListElement/SidebarListElement';

const Sidebar = ({ lists, onAddList, INBOX_LIST_ID, onSelectList}) => {

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
						<SidebarListElement key={list.id} lists={lists} text={list.text} onSelectList={onSelectList}/>
					))}
				</div>
			</div>
			<button className='sidebar-button' onClick={() => onAddList(Math.random())}>New List</button>
		</aside>
	);
};

export default Sidebar;
