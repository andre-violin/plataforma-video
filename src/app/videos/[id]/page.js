'use client';
import VideoIncorporado from '@/components/VideoIncorporado';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';

const Video = ({ params }) => {
	const [video, setVideo] = useState(() => {
		const data = JSON.parse(localStorage.getItem('videos')) || null;
		if (data) {
			return data.find((item) => item.id === params.id);
		}
		return {};
	});
	const [autor, setAutor] = useState(() => {
		const data = JSON.parse(localStorage.getItem('autores')) || null;
		if (data) {
			return data.find((item) => item.id === video.autor);
		}
		return {};
	});

	return (
		<>
			<div className="flex flex-col flex-1 gap-6">
				<VideoIncorporado url={video.urlVideo} titulo={video.titulo} />
				<div>
					<h2 className="font-semibold text-2xl">{video.titulo}</h2>
					<Link
						href={`/autores/${autor.id}`}
						className="text-zinc-500 flex items-center gap-2 mt-2"
					>
						<figure className="relative w-12 h-12 rounded-full">
							<Image
								src={autor.url_foto_autor}
								className="rounded-full object-cover"
								fill
								sizes="100vw"
								alt="Foto do autor 1"
							/>
						</figure>
						<strong>{autor.nome}</strong>
					</Link>
					<p className="bg-zinc-800 p-4 rounded text-zinc-400 text-sm mt-4 mb-4">
						{video.descricao}
					</p>
					<Link
						href="/videos"
						className="flex-shrink-0 text-teal-300 hover:text-teal-500 text-base"
					>
						Voltar
					</Link>
				</div>
			</div>
		</>
	);
};

export default Video;
