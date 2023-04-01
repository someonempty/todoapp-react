import React, { useState } from 'react';
import './index.css';
import SidebarListElement from './SidebarListElement/SidebarListElement';

const Sidebar = ({ lists, count, onAddList, INBOX_LIST_ID, selectedList, onSelectList, onDeleteList, onChangeListName }) => {
	return (
		<aside className='sidebar'>
			<div className='sidebar-list-container'>
				<h1 className='todoapp-header'>ToDoApp</h1>
				<div className='sidebar-list'>
					<div 
					className={`sidebar-list-element ${selectedList === INBOX_LIST_ID && 'sidebar-list-element-active'}`}
					 id={INBOX_LIST_ID}
					 onClick={() => {
						onSelectList(INBOX_LIST_ID);
					 }}
					 >
						<div className='sidebar-list-element-text'>Inbox</div>
						<div className='sidebar-list-button-container'>
							<span>{count}</span>
						</div>
					</div>
					{lists.map((list) => (
						<SidebarListElement
							key={list.id}
							id={list.id}
							lists={lists}
							text={list.text}
							count={count}
							selectedList={selectedList}
							onSelectList={onSelectList}
							onDeleteList={onDeleteList}
							onChangeListName={onChangeListName}
						/>
					))}
				</div>
			</div>
			<button className='sidebar-button' onClick={() => onAddList(Math.random())}>
				New List
			</button>
		</aside>
	);
}; 

export default Sidebar;
