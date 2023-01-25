import { useState } from 'react';
import './App.css';

function App() {
	const [count, setCount] = useState(0);

	const increment = () => {
		setCount((prev) => prev + 1);
	};

	return (
		<div className='App'>
			<p className='bg-red-200 text-center mt-16 cursor-pointer' onClick={increment}>
				{count}
			</p>
		</div>
	);
}
 
export default App;
