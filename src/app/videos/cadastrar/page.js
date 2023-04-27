'use client';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

const Cadastrar = () => {
	const router = useRouter();
	const [video, setVideo] = useState({});
	const [videos, setVideos] = useState([]);
	const [autores, setAutores] = useState([]);

	useEffect(() => {
		if (typeof window !== 'undefined') {
			const listaDeVideos = localStorage.getItem('videos');
			const listaDeAutores = localStorage.getItem('autores');

			if (listaDeAutores !== null) {
				try {
					setAutores(JSON.parse(listaDeAutores));
				} catch (error) {
					console.error(error);
				}
			}
			if (listaDeVideos !== null) {
				try {
					setVideos(JSON.parse(listaDeVideos));
				} catch (error) {
					console.error(error);
				}
			}
		}
	}, []);

	const handleOnChange = (e) => {
		const { id, value } = e.target;
		setVideo({
			...video,
			[id]: value
		});
	};

	const handleSave = (e) => {
		e.preventDefault();
		const updateVideos = [...videos];
		updateVideos.push({
			id: Math.random().toString(36).slice(2, 7),
			...video
		});
		setVideos(updateVideos);
		localStorage.setItem('videos', JSON.stringify(updateVideos));
		alert(`${video.titulo} cadastrado com sucesso!`);
		setVideo({});
	};
	return (
		<>
			<h2 className="font-semibold text-2xl self-center">Cadastro de Vídeo</h2>
			<form
				className="flex flex-col gap-5 w-full self-center max-w-2xl mt-10"
				onSubmit={(e) => handleSave(e)}
			>
				<div className="">
					<label
						htmlFor="titulo"
						className="block text-zinc-400 text-sm font-bold mb-2"
					>
						Título
					</label>
					<input
						autoFocus
						className="bg-white/5 appearance-none rounded w-full py-2 px-4 text-zinc-200 leading-tight focus:outline-none focus:bg-black/20 transition-colors"
						type="text"
						id="titulo"
						placeholder="Título do vídeo"
						value={video.titulo || ''}
						onChange={(e) => handleOnChange(e)}
						required
					/>
				</div>
				<div className="">
					<label
						htmlFor="descricao"
						className="block text-zinc-400 text-sm font-bold mb-2"
					>
						Descrição
					</label>
					<textarea
						className="bg-white/5 appearance-none rounded w-full py-2 px-4 text-zinc-200 leading-tight focus:outline-none focus:bg-black/20 transition-colors"
						rows={4}
						id="descricao"
						placeholder="Descrição do vídeos"
						value={video.descricao || ''}
						onChange={(e) => handleOnChange(e)}
						required
					/>
				</div>
				<div className="">
					<label
						htmlFor="urlCapaVideo"
						className="block text-zinc-400 text-sm font-bold mb-2"
					>
						URL da capa do Vídeo
					</label>
					<input
						className="bg-white/5 appearance-none rounded w-full py-2 px-4 text-zinc-200 leading-tight focus:outline-none focus:bg-black/20 transition-colors"
						type="text"
						id="urlCapaVideo"
						placeholder="URL da capa do vídeo"
						value={video.urlCapaVideo || ''}
						onChange={(e) => handleOnChange(e)}
						required
					/>
				</div>
				<div className="">
					<label
						htmlFor="urlVideo"
						className="block text-zinc-400 text-sm font-bold mb-2"
					>
						URL do Vídeo
					</label>
					<input
						className="bg-white/5 appearance-none rounded w-full py-2 px-4 text-zinc-200 leading-tight focus:outline-none focus:bg-black/20 transition-colors"
						type="text"
						id="urlVideo"
						placeholder="URL do vídeo no Youtube"
						value={video.urlVideo || ''}
						onChange={(e) => handleOnChange(e)}
						required
					/>
				</div>
				<div className="">
					<label
						htmlFor="linguagem"
						className="block text-zinc-400 text-sm font-bold mb-2"
					>
						Linguagem
					</label>
					<select
						className="bg-white/5 rounded w-full py-2 px-4 text-zinc-200 leading-tight focus:outline-none focus:bg-black/20 focus:text-zinc-500 transition-colors"
						id="linguagem"
						placeholder="Linguagem/framework/biblioteca principal do conteúdo do vídeo"
						value={video.linguagem || ''}
						onChange={(e) => handleOnChange(e)}
						required
					>
						<option value="" disabled>
							Selecione uma linguagem, framework ou biblioteca
						</option>
						<option value="html">HTML</option>
						<option value="css">CSS</option>
						<option value="javascript">JavaScript</option>
						<option value="typescript">TypeScript</option>
						<option value="java">Java</option>
						<option value="reactjs">Reac.js</option>
						<option value="nextjs">Next.js</option>
					</select>
				</div>

				<div className="">
					<label
						htmlFor="autores"
						className="block text-zinc-400 text-sm font-bold mb-2"
					>
						Autor/Canal
					</label>
					<select
						className="bg-white/5 rounded w-full py-2 px-4 text-zinc-200 leading-tight focus:outline-none focus:bg-black/20 focus:text-zinc-500 transition-colors"
						id="autores"
						placeholder="Endereço da foto do video no Youtube"
						value={video.autores || ''}
						onChange={(e) => handleOnChange(e)}
						required
					>
						<option value="" disabled>
							Selecione um autor/canal
						</option>
						{autores.map((item) => {
							return (
								<option key={item.id} value={item.id}>
									{item.nome}
								</option>
							);
						})}
					</select>
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
