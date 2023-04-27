import Image from 'next/image';
import Link from 'next/link';

export default function CardAutor({ autor, children }) {
	return (
		<div className="bg-white/5 flex w-full rounded overflow-hidden">
			<Link
				href={`/autores/${autor.id}`}
				className="bg-white/5 flex items-center gap-4 hover:bg-white/10 transition-colors flex-1"
			>
				<div className="relative w-24 h-24">
					<Image
						src={autor.url_foto_autor}
						className="object-cover"
						fill
						sizes="100vw, 100vw, 100vw"
						alt={`Foto de ${autor.nome}`}
						priority
					/>
				</div>
				<strong>{autor.nome}</strong>
			</Link>
			{children}
		</div>
	);
}
