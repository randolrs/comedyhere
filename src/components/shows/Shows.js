import React from 'react';
import Show from './Show.js'
import styles from './shows.sass'

function Shows(props) {
	return (
		<div className="shows-container">
			<span>Shows</span>
			<div className="shows">
				<Show />
				<Show />
				<Show />
			</div>
		</div>
	);
}

export default Shows;
