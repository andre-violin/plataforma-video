'use client';
import CardAutor from '@/components/CardAutor';
import CardVideo from '@/components/CardVideo';
import { useEffect, useState } from 'react';
import { data } from './utils';

const Home = () => {
	const [autores, setAutores] = useState([]);
	const [videos, setVideos] = useState([]);

	useEffect(() => {
		const listaDeAutores = localStorage.getItem('autores') || null;
		const listaDeVideos =
			localStorage.getItem('videos') ||
			localStorage.setItem('videos', JSON.stringify(data));
		if (listaDeVideos !== null) {
			try {
				setVideos(JSON.parse(listaDeVideos));
			} catch (error) {
				console.error(error);
			}
		}
		if (listaDeAutores !== null) {
			try {
				setAutores(JSON.parse(listaDeAutores));
			} catch (error) {
				console.error(error);
			}
		}
	}, []);
	return (
		<>
			<h2 className="font-semibold text-2xl">Últimos Autores Adicionados</h2>
			<section className="grid grid-cols-3 gap-6 mt-4">
				{autores.map((item, index, array) => {
					if (array.length - index <= 6) {
						return <CardAutor key={item.id} autor={item} />;
					}
					return '';
				})}
			</section>

			<h2 className="font-semibold text-2xl mt-10">
				Últimos Vídeos Adicionados
			</h2>
			<section className="grid grid-cols-3 gap-6 mt-4">
				{videos.map((item, index, array) => {
					if (array.length - index <= 6) {
						return <CardVideo key={item.id} video={item} />;
					}
					return '';
				})}
			</section>
		</>
	);
};

export default Home;
