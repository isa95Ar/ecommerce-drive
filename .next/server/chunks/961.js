"use strict";
exports.id = 961;
exports.ids = [961];
exports.modules = {

/***/ 961:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "j": () => (/* binding */ useCart)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

function useCart() {
    const { 0: cart , 1: setCart  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
        products: [],
        total: 0
    });
    const sumTotals = (products)=>{
        let totalCart = 0;
        products.map((product)=>totalCart += product.total
        );
        return totalCart;
    };
    const addProduct = (product1, qty)=>{
        const productCart = {
            code: product1.code,
            name: product1.name,
            qty,
            price: product1.price,
            minimum: product1.minimum,
            total: product1.price * qty
        };
        let products = cart.products;
        if (products.find((product)=>product.code == productCart.code
        )) {
            products = products.map((cartProduct)=>{
                if (cartProduct.code == productCart.code) {
                    return productCart;
                } else {
                    return cartProduct;
                }
            });
        } else {
            products.push(productCart);
        }
        updateProducts(products);
    };
    const removeProduct = (product)=>{
        const products = cart.products.filter((cartProduct)=>cartProduct.code !== product.code
        );
        updateProducts(products);
    };
    const updateProducts = (products)=>{
        setCart({
            total: sumTotals(products),
            products
        });
        localStorage.setItem("cart", JSON.stringify({
            total: sumTotals(products),
            products
        }));
    };
    const removeCart = ()=>{
        setCart({
            products: [],
            total: 0
        });
        localStorage.removeItem("cart");
    };
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        const actualCart = localStorage.getItem("cart");
        if (actualCart) {
            setCart(JSON.parse(actualCart));
        }
    }, []);
    return {
        Cart: cart,
        addProduct,
        removeProduct,
        removeCart
    };
}


/***/ })

};
;