import React, { Component } from "react";
import { IoMdImages } from "react-icons/io";
import Rating from "./Rating";
import { Card } from "react-bootstrap";
class Product extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <Card>
          <img
            width={80}
            height={80}
            className="mr-3"
            src={this.props.data.imageUrl}
            alt="Image"
          />
          <Card.Body>
            <h5>{this.props.data.productName}</h5>
            {this.props.data.releasedDate}
            <Rating
              rating={this.props.data.rating}
              numOfReviews={this.props.data.numOfReviews}
            />
            <p>{this.props.data.description}</p>
          </Card.Body>
        </Card>
      </div>
    );
  }
}
export default Product;
