import React, { Fragment, Component} from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
// import { saveData } from "../../../Services/api-service"
import "./ContentItem.css";
import '@fortawesome/fontawesome-free/js/all.js';

class ContentItem extends Component {
    render() {
      
        const { Id, name, price, descriptions, images, category, seller, stock, salePrice, numOfReviews, numOfPurchase } = this.props;      
        // const Images = this.props.images.map(img => {
        //     return img.url
        // })

// console.log("img", images)
        return(
            <Fragment>  
                <div className="col-3 poduct_info">
                    <img src={images[0].url}></img> 
                        <h2><Link to="/single-page" >{name}</Link></h2>
                        <p><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="far fa-star"></i> {numOfReviews} Reviews </p>
                        <h3>UAH {price}</h3>
                        <p className="stock">In stock {stock} <i className="fas fa-cart-plus"></i></p>
                        
                        <div>
                            {/* <Link to="/editProduct" onClick={onEdit} className="table-link"> */}
                            <Link to="/" className="table">
                                <span className="fa-stack">
                                <i className="fas fa-edit"></i>
                                </span>
                            </Link>
                            {/* <a href="#" onClick={onDelete} className="table-link danger"> */}
                            {/* <a href="#" onClick={this.onDeleteProduct} className="table-link danger"> */}
                            <Link to="/" className="table danger">
                                <span className="fa-stack">
                                    <i className="fas fa-trash-alt"></i>
                                </span>
                            </Link>
                        </div>
                </div>
            </Fragment>
        ) }}

const mapStateToProps = ({shopReducer}) => {
    const { List } = shopReducer;
    return { List }
}
const mapDispatchToProps = {

}
export default connect(mapStateToProps, mapDispatchToProps)(ContentItem);
