import Task from './components/Task';
import MainHeader from './components/MainHeader';
import MainInput from './components/MainInput';
import TaskAddingButton from './components/TaskAddingButton';
import { useState } from 'react';

function App() {

	return (
		<div className='container'>
			<MainHeader/>
			<div className='wrapper'>
				<MainInput tasks/>
				<TaskAddingButton/>
			</div>
			<div className='tasks-list'>
			</div>
		</div>
	);
}

export default App;
