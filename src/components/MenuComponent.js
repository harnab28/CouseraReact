import React, { Component } from 'react';
import { Card, CardImgOverlay, CardImg, CardTitle } from 'reactstrap';
import  DishDetail  from './DishdetailComponent';

class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedDish : null
        }

        this.onDishSelect = this.onDishSelect.bind(this);
    } //End of constructor


    onDishSelect(dish){
        this.setState({ selectedDish: dish })
    }

    render(){
        const menu = this.props.dishes.map((dish) => {
            //console.log(dish.id);
            return (
                <div className="col-12 col-md-5 m-1">
                    <div key={dish.id}>
                        <Card  onClick={() => { this.onDishSelect(dish) }}>
                            <CardImg width="100%" src={dish.image} alt={dish.name} />
                            <CardImgOverlay>
                                <CardTitle>{dish.name}</CardTitle>
                            </CardImgOverlay>
                        </Card>   
                    </div>
                     
                </div>

            );
        });
        return(
            <div className="container">
                <div className="row">
                    { menu }
                </div>

                <DishDetail selected = {this.state.selectedDish}/>
            </div>

        );

    }

}

export default Menu;