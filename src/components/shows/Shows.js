import React from 'react';
import Show from './Show.js'

function Shows(props) {
	return (
		<div className="shows-container">
			<div className={'shows' + (props.stacked ? ' stacked' : '')}>
				{
					props.shows.map((elem, index) => {
						return <Show show={elem} stacked={props.stacked} key={index} />
					})
				}
			</div>
		</div>
	);
}

export default Shows;
