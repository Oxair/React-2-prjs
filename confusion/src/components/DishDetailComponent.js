import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';

class DishDetailComponent extends Component{
    constructor(props) {
        super(props);
        this.state ={}
    }

    render() {
        return(
            <div className="col-12 col-md-5 mt-1">
                <Card>
                    <CardImg width="100%" src={ this.props.dish.image } alt={ this.props.dish.name } />
                    <CardBody>
                        <CardTitle>{ this.props.dish.name }</CardTitle>
                        <CardText> { this.props.dish.description }</CardText>
                    </CardBody>
                </Card>
            </div>
        )
    }
}

export default DishDetailComponent;