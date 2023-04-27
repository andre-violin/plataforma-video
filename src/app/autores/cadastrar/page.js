'use client';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

const Cadastrar = () => {
	const router = useRouter();
	const [autor, setAutor] = useState({});
	const [autores, setAutores] = useState([]);

	useEffect(() => {
		if (typeof window !== 'undefined') {
			const listaDeAutores = localStorage.getItem('autores');
			if (listaDeAutores !== null) {
				try {
					setAutores(JSON.parse(listaDeAutores));
				} catch (error) {
					console.error(error);
				}
			}
		}
	}, []);

	const handleOnChange = (e) => {
		const { id, value } = e.target;
		setAutor({
			...autor,
			[id]: value
		});
	};

	const handleSave = (e) => {
		e.preventDefault();
		const updateAutores = [...autores];
		updateAutores.push({
			id: Math.random().toString(36).slice(2, 7),
			...autor
		});
		setAutores(updateAutores);
		localStorage.setItem('autores', JSON.stringify(updateAutores));
		alert(`${autor.nome} cadastrado com sucesso!`);
		setAutor({});
	};
	return (
		<>
			<h2 className="font-semibold text-2xl self-center">
				Cadastro de Autor/Canal
			</h2>
			<form
				className="flex flex-col gap-5 w-full self-center max-w-2xl mt-10"
				onSubmit={(e) => handleSave(e)}
			>
				<div className="">
					<label
						htmlFor="nome"
						className="block text-zinc-400 text-sm font-bold mb-2"
					>
						Nome Completo
					</label>
					<input
						className="bg-white/5 appearance-none rounded w-full py-2 px-4 text-zinc-200 leading-tight focus:outline-none focus:bg-black/20 transition-colors"
						type="text"
						id="nome"
						placeholder="Nome e Sobrenome"
						value={autor.nome || ''}
						onChange={(e) => handleOnChange(e)}
						required
					/>
				</div>
				<div className="">
					<label
						htmlFor="canal"
						className="block text-zinc-400 text-sm font-bold mb-2"
					>
						Canal
					</label>
					<input
						className="bg-white/5 appearance-none rounded w-full py-2 px-4 text-zinc-200 leading-tight focus:outline-none focus:bg-black/20 transition-colors"
						type="text"
						id="canal"
						placeholder="Nome do canal de vídeos"
						value={autor.canal || ''}
						onChange={(e) => handleOnChange(e)}
						required
					/>
				</div>
				<div className="">
					<label
						htmlFor="url_canal"
						className="block text-zinc-400 text-sm font-bold mb-2"
					>
						URL do Canal
					</label>
					<input
						className="bg-white/5 appearance-none rounded w-full py-2 px-4 text-zinc-200 leading-tight focus:outline-none focus:bg-black/20 transition-colors"
						type="text"
						id="url_canal"
						placeholder="Endereço do canal no Youtube"
						value={autor.url_canal || ''}
						onChange={(e) => handleOnChange(e)}
						required
					/>
				</div>
				<div className="">
					<label
						htmlFor="url_foto_autor"
						className="block text-zinc-400 text-sm font-bold mb-2"
					>
						URL da foto do Autor
					</label>
					<input
						className="bg-white/5 appearance-none rounded w-full py-2 px-4 text-zinc-200 leading-tight focus:outline-none focus:bg-black/20 transition-colors"
						type="text"
						id="url_foto_autor"
						placeholder="Endereço da foto do autor no Youtube"
						value={autor.url_foto_autor || ''}
						onChange={(e) => handleOnChange(e)}
						required
					/>
				</div>

				<div className="flex gap-4 mt-8 justify-end">
					<button className="flex-shrink-0 bg-teal-600 hover:bg-teal-800 border-teal-600 hover:border-teal-800 text-base border-4 text-white py-1 px-2 rounded">
						Adicionar
					</button>
					<button
						type="button"
						onClick={() => router.push('/')}
						className="flex-shrink-0 text-teal-300 hover:text-teal-500 text-base py-1 px-2 rounded"
					>
						Cancelar
					</button>
				</div>
			</form>
			{/* </div> */}
		</>
	);
};

export default Cadastrar;
