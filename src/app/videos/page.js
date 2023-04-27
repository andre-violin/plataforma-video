'use client';
import CardVideo from '@/components/CardVideo';
import { useEffect, useState } from 'react';

const Listar = () => {
	const [videos, setVideos] = useState([]);

	useEffect(() => {
		if (typeof window !== 'undefined') {
			const listaDeVideos = localStorage.getItem('videos');
			if (listaDeVideos !== null) {
				try {
					setVideos(JSON.parse(listaDeVideos));
				} catch (error) {
					console.error(error);
				}
			}
		}
	}, []);
	return (
		<>
			<h2 className="font-semibold text-2xl self-center">Lista de Videos</h2>

			<section className="grid grid-cols-5 gap-6 mt-10">
				{videos.map((item) => {
					return <CardVideo key={item.id} video={item} />;
				})}
			</section>
		</>
	);
};

export default Listar;
