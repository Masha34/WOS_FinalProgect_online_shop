import React, {Component, Fragment} from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class SingleItem extends Component {
    render() {
        const { Id, Category, Created, Description, Name, NumOfPurchase, NumOfReviews, Price, SalePrice, Seller, Stock } = this.props;

        
        
        return (
            <Fragment>
                <div className="col-6 single_product_block">
                    {/* <img src={images[0].url}></img>  */}
                </div>
                <div className="col-6 single_product_block">
                    <h2>{Name}</h2>
                    <p><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="far fa-star"></i> {NumOfReviews} Reviews</p>
                    <h3>UAH {Price}</h3>
                    <p className="stock">In stock {Stock} <i className="fas fa-cart-plus"></i></p>
                    <div>
                        {/* <Link to="/editProduct" onClick={onEdit} className="table-link"> */}
                        <Link to="/" className="table">
                            <span className="fa-stack">
                                <i className="fas fa-edit"></i>
                            </span>
                        </Link>
                            {/* <a href="#" onClick={onDelete} className="table-link danger">
                            <a href="#" onClick={this.onDeleteProduct} className="table-link danger">                                      */}
                        <Link to="/" className="table danger">
                            <span className="fa-stack">
                                <i className="fas fa-trash-alt"></i>
                            </span>
                        </Link>
                    </div>
                </div>
            </Fragment>            
        )
    }
}

const mapStateToProps = ({shopReducer}) => { 
    const { SingleProduct } = shopReducer;
    return { SingleProduct }
}
// const mapDispatchToProps = {
    
// }

export default connect(mapStateToProps)(SingleItem);
