import React, { useState } from 'react';
import './index.css';
import SidebarListElement from './SidebarListElement/SidebarListElement';

const Sidebar = ({ lists, count, onAddList, INBOX_LIST_ID, onDeleteList}) => {

	return (
		<aside className='sidebar'>
			<div className='sidebar-list-container'>
				<h1 className='todoapp-header'>ToDoApp</h1>
				<div className='sidebar-list'>
					<div className='sidebar-list-element sidebar-list-element-active' id={INBOX_LIST_ID}>
						<div className='sidebar-list-element-text'>Inbox</div>
						<div className='sidebar-list-button-container'>
							<span>{count}</span>
						</div>
					</div>
					{lists.map((list) => (
						<SidebarListElement key={list.id} id={list.id} lists={lists} text={list.text} count={count} onDeleteList={onDeleteList}/>
					))}
				</div>
			</div>
			<button className='sidebar-button' onClick={() => onAddList(Math.random())}>New List</button>
		</aside>
	);
};

export default Sidebar;
