"use strict";
exports.id = 164;
exports.ids = [164];
exports.modules = {

/***/ 5634:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nextui_org_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6735);
/* harmony import */ var _nextui_org_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nextui_org_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);



const QuantityControls = ({ addProduct , deleteProduct , qty  })=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_nextui_org_react__WEBPACK_IMPORTED_MODULE_1__.Text, {
                className: "quantity-border",
                onClick: deleteProduct,
                children: "-"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_nextui_org_react__WEBPACK_IMPORTED_MODULE_1__.Text, {
                className: "quantity",
                children: qty
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_nextui_org_react__WEBPACK_IMPORTED_MODULE_1__.Text, {
                className: "quantity-border",
                onClick: addProduct,
                children: "+"
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (QuantityControls);


/***/ }),

/***/ 961:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "j": () => (/* binding */ useCart)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

function useCart(userCart) {
    const { 0: cart , 1: setCart  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
        products: [],
        total: 0
    });
    const sumTotals = (products)=>{
        let totalCart = 0;
        products.map((product)=>totalCart = Number((totalCart + product.total).toFixed(2))
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
            total: product1.price * qty,
            picture: product1.picture
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
    const getCartProductQty = (code)=>{
        const product2 = cart.products.find((product)=>{
            return product.code === code;
        });
        if (!product2) {
            return 1;
        }
        return product2.qty;
    };
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        const actualCart = localStorage.getItem("cart");
        let products = [];
        if (actualCart) {
            const storedCart = JSON.parse(actualCart);
            products = products.concat(storedCart.products);
        }
        if (userCart && userCart.products) {
            products = products.concat(userCart.products);
        }
        products.map((product)=>addProduct(product, product.qty)
        );
    }, []);
    return {
        ...cart,
        data: cart,
        addProduct,
        removeProduct,
        removeCart,
        updateProducts,
        getCartProductQty
    };
}


/***/ })

};
;