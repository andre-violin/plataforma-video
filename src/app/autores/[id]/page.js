'use client';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';

const Autor = ({ params }) => {
	const [autor, setAutor] = useState(() => {
		const data = JSON.parse(localStorage.getItem('autores')) || null;
		if (data !== null) {
			return data.find((item) => item.id === params.id);
		}
		return {};
	});
	return (
		<>
			<div className="flex gap-6">
				<figure className="relative w-36 h-36 rounded-full">
					<Image
						src={autor.url_foto_autor}
						className="rounded-full object-cover"
						fill
						sizes="100vw"
						alt="Foto do autor 1"
					/>
				</figure>
				<div>
					<h2 className="font-semibold text-2xl">{autor.nome}</h2>
					<p className="text-zinc-500 text-sm mt-2">{autor.canal}</p>
					<p className="mt-4 mb-4">{autor.url_canal}</p>
					<Link
						href="/autores"
						className="flex-shrink-0 text-teal-300 hover:text-teal-500 text-base"
					>
						Voltar
					</Link>
				</div>
			</div>
		</>
	);
};

export default Autor;
