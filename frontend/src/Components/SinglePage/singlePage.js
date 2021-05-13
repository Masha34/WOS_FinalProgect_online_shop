import React, {Component, useEffect} from "react";
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import {getOneProduct} from "../../Services/api-service";
import {onlyOneProduct} from "../../Actions/shopActions";

import SingleItem from "../SinglePage/singlePageItem/singlePageItem";
// import SingleItem from "./singlePageItem";


const SinglePage = ({OneIdProduct, SingleProduct, onlyOneProduct, Loader}) => {
    const prod = OneIdProduct;
    // const productItem = []

    useEffect(() => {
        getOneProduct(prod).then(data => {
            // console.log("=>>>>>",data.product)            
            onlyOneProduct(data.product);                       
        })        
    }, [])          
    
 
 console.log("OneIdProduct", OneIdProduct)  
 console.log("SingleProduct", SingleProduct)  

    return(
        <div className="container-fluid">
            <div className="container">
                <div className="row">
                   
                    <SingleItem Id={SingleProduct._id} Category={SingleProduct.category} Created={SingleProduct.createdAt} Description={SingleProduct.descriptions} Images={SingleProduct.images} Name={SingleProduct.name} NumOfPurchase={SingleProduct.numOfPurchase} NumOfReviews={SingleProduct.numOfReviews} Price={SingleProduct.price} SalePrice={SingleProduct.salePrice} Seller={SingleProduct.seller} Stock={SingleProduct.stock}/>   

                    {/* <SingleItem Id={SingleProduct._Id} Category={SingleProduct.Category} Created={SingleProduct.CreatedAt} Description={SingleProduct.Descriptions} Images={SingleProduct.Images} Name={SingleProduct.Name} NumOfPurchase={SingleProduct.NumOfPurchase} NumOfReviews={SingleProduct.NumOfReviews} Price={SingleProduct.Price} SalePrice={SingleProduct.SalePrice} Seller={SingleProduct.Seller} Stock={SingleProduct.Stock}/>    */}

                </div> 
            </div>
        </div>
    )
}

const mapStateToProps = ({shopReducer}) => {
    // console.log("mapstatetoprops", shopReducer)  
    const { OneIdProduct, SingleProduct, Loader } = shopReducer;
    return { OneIdProduct, SingleProduct, Loader }
}

const mapDispatchToProps = {
    onlyOneProduct,
    getOneProduct
}

export default connect(mapStateToProps, mapDispatchToProps)(SinglePage);






// import React, { Fragment, Component} from "react";
// import { Link } from "react-router-dom";
// import { connect } from "react-redux";
// import { Redirect } from "react-router-dom";

// import "./singlePage.css";

// class SinglePage extends Component {
//     state = {
//         "name": this.props.List.name,
//         "isRedirect": false
// }
// getName = (event) => {
//     this.setState({
//         name: event.target.value
//     })
// }
//     render() {
      
//         const { Id, name, price, descriptions, images, category, seller, stock, salePrice, numOfReviews, numOfPurchase,  isRedirect } = this.props;      
//         const {  } = this.state;

//         if (isRedirect) {     
//             return (
//                 <Redirect to="/" />
//             )
//         }

// console.log("img", images)
//         return(
//             <Fragment>  
//                 <div className="container">
//                     <div className="row">
//                         <div className="col-6 single_product_block">
//                             <img src={images[0].url}></img> 
//                         </div>
//                         <div className="col-6 single_product_block">
//                                 <h2>{name}</h2>
//                                 <p><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="far fa-star"></i> {numOfReviews} Reviews</p>
//                                 <h3>UAH {price}</h3>
//                                 <p className="stock">In stock {stock} <i class="fas fa-cart-plus"></i></p>
                                
//                                 <div>
//                                     <Link to="/editProduct" onClick={onEdit} className="table-link">
//                                     <Link to="/" className="table">
//                                         <span className="fa-stack">
//                                         <i class="fas fa-edit"></i>
//                                         </span>
//                                     </Link>
//                                     <a href="#" onClick={onDelete} className="table-link danger">
//                                     <a href="#" onClick={this.onDeleteProduct} className="table-link danger">
//                                     <Link to="/" className="table danger">
//                                         <span className="fa-stack">
//                                             <i class="fas fa-trash-alt"></i>
//                                         </span>
//                                     </Link>
//                                 </div>
//                         </div>
//                     </div>
//                 </div>
//             </Fragment>

//         ) }}

//         const mapStateToProps = ({ shopReducer }) => {
//             const {List} = shopReducer;
//             return {List}
//         }
//         const mapDispatchToProps = {
 
//         }
// export default connect(mapStateToProps, mapDispatchToProps)(SinglePage);