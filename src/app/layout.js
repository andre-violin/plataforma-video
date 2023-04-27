import Header from '@/components/Header';
import Sidebar from '@/components/Sidebar';
import './globals.css';

export const metadata = {
	title: 'video.dev',
	description: 'Watch the video.'
};

export default function RootLayout({ children }) {
	return (
		<html lang="pt-br">
			<body className="bg-zinc-900 text-zinc-50">
				<div className="h-screen flex flex-col">
					<Header />
					<div className="flex flex-1 mt-20">
						<Sidebar />
						<main className="flex flex-col flex-1 p-6 ml-72">{children}</main>
					</div>
				</div>
			</body>
		</html>
	);
}
