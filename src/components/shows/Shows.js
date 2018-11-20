import React from 'react';
import Show from './Show.js'

function Shows(props) {
	return (
		<div className="shows-container">
			<div className={'shows' + (props.stacked ? ' stacked' : '')}>
				{
					props.shows.map((elem) => {
						return <Show show={elem} stacked={props.stacked} />
					})
				}
			</div>
		</div>
	);
}

export default Shows;
