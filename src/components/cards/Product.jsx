import React from 'react';
import styles from './Product.module.css';
const Product = ({ imgSrc, name, collection, price, tag }) => {
    return (
        <div className="col-6 col-md-6 col-lg-4">
            <a href="javascript:void(0)" className="item">
                {tag && <span className="tag">{tag}</span>}
                <img src={imgSrc} alt={name} className="img-fluid" />
                <div className="item-info">
                    <span className="collection d-block">{collection}</span>
                    <strong className="price">${price.toFixed(2)}</strong>
                </div>
            </a>
        </div>
    );
};

export default Product;
