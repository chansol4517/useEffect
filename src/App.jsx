import { useState, useEffect } from 'react';

function App() {
	console.log('App Render');
	const [Members, setMembers] = useState([]);

	//아래와 같이 useEffect를 처리하지 않은 상태에서 서버에서 fetching한 데이터를 state에 담으면 무한로딩 발생
	// fetch("/member.json")
	// 	.then(data => data.json())
	// 	.then(json => {
	// 		console.log(json.members);
	// 		setMembers(json.members);
	// 	});

	useEffect(() => {
		//의존성 배열이 비어있는 useEffect문의 콜백함수는 아무리 해당 컴포넌트가 재랜더링되더라도
		//처음 마운트시 한번만 호출되므로 fetch함수가 처음 한번만 데이터를 가져오고 더이상 무한호출에 빠지지 않음
		//실무에서 React-Query를 쓰기 전까지는 제일 많이 쓰이는 리액트 개발 패턴 (중요)
		fetch('/member.json')
			.then(data => data.json())
			.then(json => {
				setMembers(json.members);
			});
	}, []);

	return (
		<>
			<h1>useEffect</h1>
			{Members.map((data, idx) => (
				<h2 key={idx}>{data.name}</h2>
			))}
		</>
	);
}

export default App;
