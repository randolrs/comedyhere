import React from 'react';

function Show(props) {
	return (
		<div className={'show' + (props.stacked ? ' stacked' : '')}>
			<div className="show__content">
				<div className="show__content__img">img</div>
				<div className="show__content__data">
					data
				</div>
			</div>
		</div>
	);
}

export default Show;
