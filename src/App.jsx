/*
	useEffect
	리액트 컴포넌트마다의 생명주기를 관리하기 위한 hook
	생명주기 : 컴포넌트의 생성(Mount), 변경(ReRender), 소멸(UnMount)를 의미
	- useEffect는 컴포넌트의 생성, 변경, 소멸의 시점에 맞춰 등록된 콜백함수 호출 가능
	- 각 컴포넌트의 중요한 생명주기 시점마다 원하는 기능을 연결가능

	실무에서 자주 활용되는 생명주기 사례
	- Mount : Data fetching, window객체에 이벤트핸들러 연결
	- ReRender : 특정 State값 변경될때만 실행해야 되는 핸들러 연결
	- UnMount : window객체에 이벤트 핸들러 제거

	useEffect(callback, dependency Array)
*/
import { useEffect, useState } from 'react';

function App() {
	console.log('App Render');
	let [Num, setNum] = useState(0);

	useEffect(() => {
		//의존성 배열이 비어있을때는 해당 컴포넌트가 마운트시 한번만 호출됨
		console.log('의존성 배열이 비어있을때의 콜백함수');
	}, []);

	return (
		<>
			<h1>useEffect</h1>
			<h2>{Num}</h2>
			<button onClick={() => setNum(Num + 1)}>+</button>
		</>
	);
}

export default App;
