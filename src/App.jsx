import { useState, useEffect } from 'react';
import Modal from './Modal';

function App() {
	console.log('App Render');

	let [IsOpen, setIsOpen] = useState(false);

	//의존성 배열에 IsOpen state를 등록해서
	//모달창 출력 유무의 정보값이 변경될때에만 전용함수인 body요소의 스크롤바 제거, 생성의 기능을 선별적으로 호출
	useEffect(() => {
		if (IsOpen) {
			document.body.style.overflow = 'hidden';
		} else {
			document.body.style.overflow = 'auto';
		}
	}, [IsOpen]);

	return (
		<main className='h-[300vh] w-full'>
			<h1>useEffect</h1>
			<button onClick={() => setIsOpen(!IsOpen)}>모달창 토글</button>
			{IsOpen && <Modal />}
		</main>
	);
}

export default App;
