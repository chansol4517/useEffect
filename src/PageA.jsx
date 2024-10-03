import { useEffect } from 'react';

function PageA() {
	const handleResize = () => {
		console.log('Resize Event on PageA');
	};

	useEffect(() => {
		console.log('PageA Mounted');
		window.addEventListener('resize', handleResize);

		//clean-up function : 컴포넌트가 소멸될떄 실행되는 함수
		return () => {
			console.log('PageA UnMounted');
			window.removeEventListener('resize', handleResize);
		};
	}, []);

	return <h2>PageA</h2>;
}

export default PageA;
