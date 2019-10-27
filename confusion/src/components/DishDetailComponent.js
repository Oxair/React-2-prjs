import React, { Component } from 'react';

import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';

class DishDetail extends Component {
	constructor(props) {
		super(props);

		this.state = {}
    }

	renderDish(dish) {
		if ( dish != null ) {
			return (
				<div className="col-12 col-md-5 m-1">
					<Card>
						<CardImg width="100%" object src={dish.image} alt={dish.name} />
						<CardBody>
							<CardTitle>{dish.name}</CardTitle>
							<CardText>{dish.description}</CardText>
						</CardBody>
					</Card>
				</div>
			)
		} else {
			return (
				<div></div>
			)
		}
	}

	renderComments(dish) {
		if ( dish != null && dish.comments != null ) {
			var comm = dish.comments.map((comment) => {
				return (
					<div key={comment.id}>
						<p>{comment.comment}</p>
						<p>--{comment.author}, {comment.date}</p>
					</div>
				);
			});

			return (
				<div className="col-12 col-md-5 m-1">
					<h4>Comments</h4>
					{comm}
				</div>
			)
		} else {
			return (
				<div></div>
			)
		}
	}
	

	render() {
		return (
			<div className="row">
				{this.renderDish(this.props.dish)}
				{this.renderComments(this.props.dish)}
			</div>
		)
	}
}

export default DishDetail;