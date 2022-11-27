import { useState } from 'react';

function Header({ title }) {
	return <h1>{title ? title : 'Default title'}</h1>;
}

export default function HomePage() {
	const names = ['Kofi', 'Ama', 'Adwoa'];
	const [likes, setLikes] = useState(0);

	function handleClick() {
		setLikes(likes + 1);
	}

	return (
		<div>
			<Header title="Tutorial for my students, nextjs 🚀" />
			<ul>
				{names.map((name) => (
					<li key={name}>{name}</li>
				))}
			</ul>

			<button onClick={handleClick}>Like ({likes})</button>
		</div>
	);
}