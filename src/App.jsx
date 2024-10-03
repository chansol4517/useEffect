import { Link, Route, Routes } from 'react-router-dom';
import PageA from './PageA';
import PageB from './PageB';

function App() {
	return (
		<>
			<h1>useEffect</h1>
			<ul>
				<li>
					<Link to='/'>pageA</Link>
				</li>
				<li>
					<Link to='/b'>pageB</Link>
				</li>
			</ul>

			<Routes>
				<Route path='/' element={<PageA />} />
				<Route path='/b' element={<PageB />} />
			</Routes>
		</>
	);
}

export default App;
