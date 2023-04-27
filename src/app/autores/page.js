'use client';
import CardAutor from '@/components/CardAutor';
import { useEffect, useState } from 'react';

const Listar = () => {
	const [autores, setAutores] = useState([]);

	useEffect(() => {
		const listaDeAutores = localStorage.getItem('autores') || null;
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
			<h2 className="font-semibold text-2xl self-center">Lista de Autores</h2>

			<section className="flex flex-col gap-6 w-full self-center max-w-2xl mt-10">
				{autores.map((item) => {
					return (
						<CardAutor key={item.id} autor={item}>
							<div className="bg-white/10 flex flex-col h-full">
								<button className="h-1/2">Alterar</button>
								<button className="h-1/2 bg-red-900">Excluir</button>
							</div>
						</CardAutor>
					);
				})}
			</section>
		</>
	);
};

export default Listar;
