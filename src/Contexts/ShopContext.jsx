// import React, { createContext, useState } from "react";
// import all_product from '../Components/Assets/all_product'

// export const ShopContext = createContext(null);

// const getDefaultCart = () => {
//     let cart = {};
//     for (let index = 0; index < all_product.length; index++) {
//         cart[index] = 0;
//     }
//     return cart;
// }

// const ShopContextProvider = (props) => {

//     const [cartItems, setCartItems] = useState(getDefaultCart())

//     const addToCart = (itemId) => {
//         setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
//     }

//     const removeFromCart = (itemId) => {
//         setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }))
//     }

//     const getTotalCartAmount = () => {
//         let totalAmount = 0;
//         for (const item in cartItems) {
//             if (cartItems[item] > 0) {
//                 let itemInfo = all_product.find((product) => product.id === Number(item))
//                 totalAmount += itemInfo.new_price * cartItems[item];
//             }
//         }
//         return totalAmount;
//     }

//     const getTotalCartItems = () => {
//         let totalItems = 0;
//         for (const item in cartItems) {
//             if (cartItems[item] > 0) {
//                 totalItems += cartItems[item]
//             }
//         }
//         return totalItems;
//     }


//     const contextValue = { all_product, cartItems, addToCart, removeFromCart, getTotalCartAmount, getTotalCartItems }

//     return (
//         <ShopContext.Provider value={contextValue}>
//             {props.children}
//         </ShopContext.Provider>
//     )
// }

// export default ShopContextProvider;




import React, { createContext, useState } from "react";
import all_product from '../Components/Assets/all_product';

export const ShopContext = createContext(null);

// Hàm khởi tạo giỏ hàng mặc định
const getDefaultCart = () => {
    let cart = {};
    for (let index = 0; index < all_product.length; index++) {
        cart[all_product[index].id] = {
            quantity: 0,
            size: null,  // Lưu kích cỡ
        };
    }
    return cart;
};

const ShopContextProvider = (props) => {

    const [cartItems, setCartItems] = useState(getDefaultCart());

    // Hàm thêm sản phẩm vào giỏ hàng với size
    const addToCart = (itemId, size) => {
        setCartItems((prev) => {
            const updatedCart = { ...prev };
            const currentItem = updatedCart[itemId];

            // Nếu chưa có size, đặt size người dùng đã chọn
            if (!currentItem.size && size) {
                currentItem.size = size;
            }
            currentItem.quantity += 1;  // Tăng số lượng sản phẩm

            return updatedCart;
        });
    };

    // Hàm xóa sản phẩm khỏi giỏ hàng
    const removeFromCart = (itemId) => {
        setCartItems((prev) => {
            const updatedCart = { ...prev };
            const currentItem = updatedCart[itemId];

            if (currentItem.quantity > 1) {
                currentItem.quantity -= 1;
            } else {
                currentItem.quantity = 0;
                currentItem.size = null;  // Xóa kích cỡ nếu sản phẩm không còn trong giỏ
            }

            return updatedCart;
        });
    };

    // Tính tổng giá trị giỏ hàng
    const getTotalCartAmount = () => {
        let totalAmount = 0;
        for (const item in cartItems) {
            if (cartItems[item].quantity > 0) {
                const itemInfo = all_product.find((product) => product.id === Number(item));
                totalAmount += itemInfo.new_price * cartItems[item].quantity;
            }
        }
        return totalAmount;
    };

    // Tính tổng số lượng sản phẩm trong giỏ
    const getTotalCartItems = () => {
        let totalItems = 0;
        for (const item in cartItems) {
            if (cartItems[item].quantity > 0) {
                totalItems += cartItems[item].quantity;
            }
        }
        return totalItems;
    };

    const contextValue = {
        all_product,
        cartItems,
        addToCart,
        removeFromCart,
        getTotalCartAmount,
        getTotalCartItems,
    };

    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    );
};

export default ShopContextProvider;
