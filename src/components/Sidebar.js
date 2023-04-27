import {
	Home as HomeIcon,
	ListVideo,
	PlayCircle,
	UserPlus,
	Users
} from 'lucide-react';
export default function Sidebar() {
	return (
		<aside className="w-72 bg-zinc-950 py-6 fixed h-full">
			<nav>
				<a
					href="/"
					className="flex items-center gap-3 text-sm font-semibold text-zinc-400 hover:text-zinc-100 px-6 py-4"
				>
					<HomeIcon />
					Home
				</a>
				<a
					href="/autores"
					className="flex items-center gap-3 text-sm font-semibold text-zinc-400 hover:text-zinc-100 px-6 py-4"
				>
					<Users />
					Autores
				</a>
				<a
					href="/autores/cadastrar"
					className="flex items-center gap-3 text-sm font-semibold text-zinc-400 hover:text-zinc-100 px-6 py-4"
				>
					<UserPlus />
					Adicionar Autor
				</a>
				<a
					href="/videos"
					className="flex items-center gap-3 text-sm font-semibold text-zinc-400 hover:text-zinc-100 px-6 py-4"
				>
					<ListVideo />
					Vídeos
				</a>
				<a
					href="/videos/cadastrar"
					className="flex items-center gap-3 text-sm font-semibold text-zinc-400 hover:text-zinc-100 px-6 py-4"
				>
					<PlayCircle />
					Adicionar Vídeo
				</a>
			</nav>
		</aside>
	);
}
