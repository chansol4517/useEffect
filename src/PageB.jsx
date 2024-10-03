import { useEffect } from 'react';

function PageB() {
	useEffect(() => {
		console.log('PageB Mounted');

		//clean-up function : 컴포넌트가 소멸될떄 실행되는 함수
		return () => {
			console.log('PageB UnMounted');
		};
	}, []);
	return <h2>PageB</h2>;
}

export default PageB;
