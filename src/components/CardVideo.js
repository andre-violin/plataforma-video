import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export default function CardVideo({ video, children }) {
	const [autor, setAutor] = useState(() => {
		const data = JSON.parse(localStorage.getItem('autores')) || null;
		if (data !== null) {
			return data.find((item) => item.id === video.autor);
		}
		return {};
	});
	return (
		<>
			<Link
				href={`/videos/${video.id}`}
				className="bg-white/5 flex flex-col p-3 w-full h-80 rounded overflow-hidden hover:bg-white/10 transition-colors flex-1"
			>
				<div className="relative w-full h-3/5">
					<Image
						src={video.urlCapaVideo}
						className="object-cover rounded"
						fill
						sizes="100vw, 100vw, 100vw"
						alt={`Foto de capa do video ${video.titulo}`}
						priority
					/>
				</div>
				<strong className="text-sm font-semibold mt-4">{video.titulo}</strong>
				<span className="text-sm text-zinc-500 mt-2">{autor.nome}</span>
			</Link>
			{children}
		</>
	);
}
