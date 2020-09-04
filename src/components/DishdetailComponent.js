import React, { Component } from 'react';
import { Card, CardBody, CardText, CardImg, CardTitle } from 'reactstrap';

class DishDetail extends Component {
    
    constructor(props){
        super(props);
        this.renderDish = this.renderDish.bind(this);
        this.renderComments = this.renderComments.bind(this);
    }
    renderComments(dish){
        if(dish != null)
        {
            const comments = dish.comments.map((com) => {     

                return(
                    <div key={com.id}>
                        <p>
                            {com.comment}
                        </p>
                        <p>
                            --{com.author} , { com.date}
                        </p>
                    </div>
                );
            })

            return(
                <div>
                    <h4>Comments</h4>
                    {comments}
                </div>
            );
        }
        else
            return (
                <div></div>
            )
      
    }


    renderDish(dish){
        if (dish != null)
        return(
            <Card>
                <CardImg top src={dish.image} alt={dish.name} />
                <CardBody>
                  <CardTitle>{dish.name}</CardTitle>
                  <CardText>{dish.description}</CardText>
                </CardBody>
            </Card>

        );
        else
            return(
                <div></div>
            );
    }

    render(){

        return(


                <div className="row">
                  <div  className="col-12 col-md-5 m-1">
                    {this.renderDish(this.props.selected)}
                  </div>
                  <div  className="col-12 col-md-5 m-1">
                    {this.renderComments(this.props.selected)}
                  </div>
                </div>


        );
    }
}

export default DishDetail;