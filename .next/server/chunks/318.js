"use strict";
exports.id = 318;
exports.ids = [318];
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

/***/ 6893:
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
    const sumTotals = (products)=>products.reduce((total, product)=>product.total + total
        , 0)
    ;
    const updateLocalStorage = (newCart)=>localStorage.setItem("cart", JSON.stringify(newCart))
    ;
    const updateProduct = (productToUpdate)=>{
        const products = cart.products.map((product)=>{
            if (product.code === productToUpdate.code) {
                return {
                    ...productToUpdate,
                    total: productToUpdate.price * productToUpdate.qty
                };
            }
            return product;
        });
        const newCart = {
            products,
            total: sumTotals(products)
        };
        setCart(newCart);
        updateLocalStorage(newCart);
    };
    const addProduct = (productToAdd)=>{
        let products = cart.products;
        if (productExists(productToAdd.code)) {
            products = products.map((product)=>{
                if (product.code === productToAdd.code) {
                    const newQuantity = product.qty + productToAdd.qty;
                    return {
                        ...productToAdd,
                        qty: newQuantity,
                        total: productToAdd.price * newQuantity
                    };
                }
                return product;
            });
        } else {
            products.push({
                ...productToAdd,
                total: productToAdd.price * productToAdd.qty
            });
        }
        const newCart = {
            products,
            total: sumTotals(products)
        };
        setCart(newCart);
        updateLocalStorage(newCart);
    };
    const deleteProduct = (productToDelete)=>{
        const products = cart.products.filter((product)=>product.code !== productToDelete.code
        );
        const newCart = {
            products,
            total: sumTotals(products)
        };
        setCart(newCart);
        updateLocalStorage(newCart);
    };
    const productExists = (code)=>cart.products.find((product)=>product.code === code
        )
    ;
    const removeCart = ()=>{
        setCart({
            products: [],
            total: 0
        });
        localStorage.removeItem("cart");
    };
    const updateCart = (sessionCart)=>{
        if (sessionCart.products && !cart.products.length) {
            localStorage.setItem("cart", JSON.stringify(cart));
            setCart({
                products: sessionCart.products,
                total: sessionCart.total
            });
        }
    };
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        const localCart = localStorage.getItem("cart");
        if (localCart) setCart(JSON.parse(localCart));
    }, []);
    return {
        ...cart,
        updateProduct,
        addProduct,
        deleteProduct,
        removeCart,
        updateCart
    };
}


/***/ })

};
;