import React from 'react';

const VideoIncorporado = ({ url, titulo }) => {
	return (
		<iframe
			className="w-full h-full"
			src={url}
			title={titulo}
			allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
			allowFullScreen
		></iframe>
	);
};
export default VideoIncorporado;
