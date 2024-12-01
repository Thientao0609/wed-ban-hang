// import React, { useState, useContext } from 'react';
// import './ProductDisplay.css';
// import star_icon from '../Assets/star_icon.png';
// import star_dull_icon from '../Assets/star_dull_icon.png';
// import { ShopContext } from '../../Contexts/ShopContext';

// const ProductDisplay = (props) => {
//     const { product } = props;
//     const { addToCart } = useContext(ShopContext);

//     // State để lưu trữ kích cỡ đã chọn
//     const [selectedSize, setSelectedSize] = useState('');

//     // Hàm xử lý chọn kích cỡ
//     const handleSizeSelect = (size) => {
//         setSelectedSize(size);
//     };

//     return (
//         <div className='productdisplay'>
//             <div className="productdisplay-left">
//                 <div className="productdisplay-img-list">
//                     <img src={product.image} alt="" />
//                     <img src={product.image} alt="" />
//                     <img src={product.image} alt="" />
//                     <img src={product.image} alt="" />
//                 </div>
//                 <div className="productdisplay-img">
//                     <img className='productdisplay-main-img' src={product.image} alt="" />
//                 </div>
//             </div>
//             <div className="productdisplay-right">
//                 <h1>{product.name}</h1>
//                 <div className="productdisplay-right-star">
//                     <img src={star_icon} alt="" />
//                     <img src={star_icon} alt="" />
//                     <img src={star_icon} alt="" />
//                     <img src={star_icon} alt="" />
//                     <img src={star_dull_icon} alt="" />
//                     <p>(122)</p>
//                 </div>
//                 <div className="productdisplay-right-prices">
//                     <div className="productdisplay-right-price-old">${product.old_price}</div>
//                     <div className="productdisplay-right-price-new">${product.new_price}</div>
//                 </div>
//                 <div className="productdisplay-right-description">
//                     A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.
//                 </div>
//                 <div className="productdisplay-right-size">
//                     <h1>Select Size</h1>
//                     <div className="productdisplay-right-sizes">
//                         {['S', 'M', 'L', 'XL', 'XXL'].map(size => (
//                             <div 
//                                 key={size} 
//                                 className={`size-option ${selectedSize === size ? 'selected' : ''}`} 
//                                 onClick={() => handleSizeSelect(size)}
//                             >
//                                 {size}
//                             </div>
//                         ))}
//                     </div>
//                 </div>
//                 <button 
//                     onClick={() => { 
//                         if (selectedSize) {
//                             addToCart(product.id); 
//                             alert(`Added size ${selectedSize} to cart!`);
//                         } else {
//                             alert('Please select a size before adding to cart.');
//                         }
//                     }}
//                 >
//                     ADD TO CART
//                 </button>
//                 <p className='productdisplay-right-category'><span>Category: </span>Wonen, TShirt, CropTop</p>
//                 <p className='productdisplay-right-category'><span>Tags: </span>Mordenm Latest</p>
//             </div>
//         </div>
//     );
// };

// export default ProductDisplay;





import React, { useContext, useState } from 'react';
import './ProductDisplay.css';
import { ShopContext } from '../../Contexts/ShopContext';

const ProductDisplay = (props) => {
    const { product } = props;
    const { addToCart } = useContext(ShopContext);
    const [selectedSize, setSelectedSize] = useState(null);

    const handleAddToCart = () => {
        if (selectedSize) {
            addToCart(product.id, selectedSize);
        } else {
            alert('Please select a size');
        }
    };

    return (
        <div className='productdisplay'>
            <div className="productdisplay-left">
                <div className="productdisplay-img-list">
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                </div>
                <div className="productdisplay-img">
                    <img className='productdisplay-main-img' src={product.image} alt="" />
                </div>
            </div>

            <div className="productdisplay-right">
                <h1>{product.name}</h1>
                <div className="productdisplay-right-star">
                    {/* Stars and ratings */}
                </div>
                <div className="productdisplay-right-prices">
                    <div className="productdisplay-right-price-old">${product.old_price}</div>
                    <div className="productdisplay-right-price-new">${product.new_price}</div>
                </div>
                <div className="productdisplay-right-description">
                    A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves.
                </div>
                <div className="productdisplay-right-size">
                    <h1>Select Size</h1>
                    <div className="productdisplay-right-sizes">
                        {['S', 'M', 'L', 'XL', 'XXL'].map(size => (
                            <div
                                key={size}
                                className={`size-option ${selectedSize === size ? 'selected' : ''}`}
                                onClick={() => setSelectedSize(size)}
                            >
                                {size}
                            </div>
                        ))}
                    </div>
                </div>
                <button onClick={handleAddToCart}>ADD TO CART</button>
                <p className='productdisplay-right-category'><span>Category: </span>Women, TShirt, CropTop</p>
                <p className='productdisplay-right-category'><span>Tags: </span>Modern, Latest</p>
            </div>
        </div>
    );
};

export default ProductDisplay;






