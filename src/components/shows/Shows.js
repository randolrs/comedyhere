import React from 'react';
import Show from './ShowComp.js'

function Shows(props) {
	return (
		<div className="shows-container">
			<div className={'shows' + (props.stacked ? ' stacked' : '')}>
				{
					props.shows.map((elem, index) => {
						return <Show show={elem} stacked={props.stacked} key={elem._id} />
					})
				}
			</div>
		</div>
	);
}

export default Shows;
