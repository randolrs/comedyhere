import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

function Show(props) {
	return (
		<div className={'show' + (props.stacked ? ' stacked' : '')}>
			<div className="show__content">
				<Link to={'/show/' + (props.show.id ? props.show.id : 'xyz' )} className="clear-link">
					<div className="show__content__img">img</div>
				</Link>
				<div className="show__content__data">
					<Link to={'/show/' + (props.show.id ? props.show.id : 'xyz' )} className="clear-link">
						<span>Title</span>
					</Link>
					<Link to={'/show/edit/' + (props.show.id ? props.show.id : 'xyz' )} className="clear-link">
						<span>Edit</span>
					</Link>
				</div>
			</div>
		</div>
	);
}

export default Show;
