"use strict";
(() => {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 5434:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Home),
  "getServerSideProps": () => (/* binding */ getServerSideProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./pages/layout.tsx
var layout = __webpack_require__(1713);
// EXTERNAL MODULE: external "@nextui-org/react"
var react_ = __webpack_require__(6735);
;// CONCATENATED MODULE: ./components/cards/LoginCard.tsx


function LoginCard() {
    return /*#__PURE__*/ jsx_runtime_.jsx(react_.Grid, {
        className: "login",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Grid.Container, {
            justify: "center",
            alignContent: "center",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx(react_.Grid, {
                    xs: 12,
                    xl: 12,
                    children: /*#__PURE__*/ jsx_runtime_.jsx(react_.Image, {
                        src: "/img/logoCoop.png",
                        alt: "Default Image"
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(react_.Grid, {
                    xs: 12,
                    xl: 3,
                    sm: 6,
                    md: 3,
                    lg: 3,
                    children: /*#__PURE__*/ jsx_runtime_.jsx(react_.Button, {
                        className: "google-button",
                        onClick: ()=>location.href = "/api/login"
                        ,
                        children: "  Ingres\xe1 con Google"
                    })
                })
            ]
        })
    });
};

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "@fortawesome/react-fontawesome"
var react_fontawesome_ = __webpack_require__(7197);
// EXTERNAL MODULE: external "@fortawesome/free-solid-svg-icons"
var free_solid_svg_icons_ = __webpack_require__(6466);
;// CONCATENATED MODULE: ./components/cards/ProductCard.tsx





function ProductCard({ item , addProduct  }) {
    const { 0: quantity , 1: setQuantity  } = (0,external_react_.useState)(1);
    return /*#__PURE__*/ jsx_runtime_.jsx(react_.Grid, {
        xs: 12,
        sm: 12,
        md: 12,
        lg: 12,
        xl: 12,
        children: /*#__PURE__*/ jsx_runtime_.jsx(react_.Card, {
            css: {
                margin: 0
            },
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Card.Body, {
                className: "product-container",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Row, {
                        className: "text-container",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(react_.Grid, {
                                sm: 7,
                                xs: 7,
                                lg: 6,
                                md: 6,
                                xl: 6,
                                justify: "center",
                                children: /*#__PURE__*/ jsx_runtime_.jsx(react_.Avatar, {
                                    css: {
                                        width: 100,
                                        height: 100
                                    },
                                    className: "product-image",
                                    src: "https://s3-alpha-sig.figma.com/img/1a50/6114/accaeeb408d6dfb78fad323b25d00302?Expires=1662940800&Signature=Z8l8tNl7-LjlkbXM79cDGZGhKjLUw49mS3yn~iuOANWb-CewZF6E0Eo3U3lqLtRsk2V4I5y74~pXTiw-P88HPP2cUf3BUCfm3LGUnk0TsZ9kQflS0BaP2lldIA174tZpUo82eHnIPZENYjeT7dcXj7siOGMAEYS26JVT7WbrHZZcmteXs01Fpy4xU-NYQjnxEIsUEd0BZftl-yiAZgjWNU8uJU71eIiJqc5HhsxBj0izH-AKkI5OIi7454TRm-CsOgB93WgACpWxCATgU2m0lR5G1qYkGJfr5kA97De-Wgm6khozCXc1BlfSbFIJxvgFsHGoCRVAwHzEMIMDrnf6IA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Grid, {
                                className: "details-container",
                                lg: 6,
                                md: 6,
                                xl: 6,
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx(react_.Text, {
                                        className: "product-name",
                                        children: item.name
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(react_.Text, {
                                        className: "product-reference",
                                        children: item.minium
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Text, {
                                        className: "product-supplier",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx(react_fontawesome_.FontAwesomeIcon, {
                                                icon: free_solid_svg_icons_.faFaceLaughBeam
                                            }),
                                            item.seller
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Text, {
                                        className: "product-price",
                                        children: [
                                            "$",
                                            item.price
                                        ]
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Row, {
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Grid, {
                                sm: 7,
                                xs: 7,
                                lg: 6,
                                md: 6,
                                xl: 6,
                                className: "product-quantity",
                                justify: "center",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx(react_.Text, {
                                        className: "quantity-border",
                                        onClick: ()=>{
                                            if (quantity > 1) setQuantity((prev)=>prev - 1
                                            );
                                        },
                                        children: "-"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(react_.Text, {
                                        className: "quantity",
                                        children: quantity
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(react_.Text, {
                                        className: "quantity-border",
                                        onClick: ()=>{
                                            setQuantity((prev)=>prev + 1
                                            );
                                        },
                                        children: "+"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(react_.Grid, {
                                sm: 3,
                                xs: 3,
                                lg: 6,
                                md: 6,
                                xl: 6,
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Popover, {
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx(react_.Popover.Trigger, {
                                            children: /*#__PURE__*/ jsx_runtime_.jsx(react_.Button, {
                                                onClick: ()=>addProduct(item, quantity)
                                                ,
                                                className: "button-text",
                                                color: "warning",
                                                auto: true,
                                                flat: true,
                                                children: "Agregar"
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx(react_.Popover.Content, {
                                            children: /*#__PURE__*/ jsx_runtime_.jsx(react_.Text, {
                                                css: {
                                                    p: "$10"
                                                },
                                                children: "Agregado exitosamente!"
                                            })
                                        })
                                    ]
                                })
                            })
                        ]
                    })
                ]
            })
        })
    });
};

;// CONCATENATED MODULE: ./helpers/content.ts
const getProducts = async (page = 1, category = null)=>{
    let url = "/api/products";
    if (category) {
        url += "/" + category;
    }
    let products = await fetch(`${url}?page=${page}`).then((data)=>data.json()
    );
    return products;
};
const getCategories = async ()=>{
    let categories = await fetch("/api/categories").then((data)=>data.json()
    );
    return categories;
};
const getCartStatus = async ()=>{
    let cartStatus = await fetch("/api/cart/status").then((data)=>data.json()
    );
    return cartStatus;
};

// EXTERNAL MODULE: ./components/Header.tsx + 1 modules
var Header = __webpack_require__(5141);
;// CONCATENATED MODULE: ./components/CategorySelector.tsx



const CategorySelector = ({ categories , category , setCategory ,  })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "selector-container",
        children: categories.length > 1 && /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Dropdown, {
            triggerType: "listbox",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx(react_.Dropdown.Button, {
                    className: "selector",
                    children: category.name
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(react_.Dropdown.Menu, {
                    "aria-label": "Dynamic Actions",
                    items: categories,
                    selectedKeys: category.key,
                    onAction: (val)=>{
                        setCategory(categories.find((option)=>option.key === val
                        ));
                    },
                    children: categories.map((item)=>/*#__PURE__*/ jsx_runtime_.jsx(react_.Dropdown.Item, {
                            color: item.key === "delete" ? "error" : "default",
                            children: item.name
                        }, item.key)
                    )
                })
            ]
        })
    });
};
/* harmony default export */ const components_CategorySelector = (CategorySelector);

// EXTERNAL MODULE: ./src/hooks/CartHook.ts
var CartHook = __webpack_require__(961);
;// CONCATENATED MODULE: ./components/Products.tsx








function Products(props) {
    const cart = (0,CartHook/* useCart */.j)();
    const { 0: products , 1: setProducts  } = (0,external_react_.useState)([]);
    const { 0: categories , 1: setCategories  } = (0,external_react_.useState)([
        {
            key: "",
            name: "Todos"
        }
    ]);
    const { 0: category1 , 1: setCategory  } = (0,external_react_.useState)({
        key: "",
        name: "Todos"
    });
    const { 0: totalPages , 1: setTotalPages  } = (0,external_react_.useState)(1);
    const { 0: currentPage , 1: setCurrentPage  } = (0,external_react_.useState)(1);
    const { 0: loading , 1: setLoading  } = (0,external_react_.useState)(true);
    const addProductToCart = (product, qty)=>{
        cart.addProduct(product, qty);
    };
    (0,external_react_.useEffect)(()=>{
        getProducts().then((res)=>{
            setProducts(res.products);
            setTotalPages(res.totalPages);
            setLoading(false);
        });
        getCategories().then((res)=>{
            let categoriesParsed = [];
            res.map((category)=>categoriesParsed.push({
                    key: category.slug,
                    name: category.name
                })
            );
            setCategories([
                {
                    key: "",
                    name: "Todos"
                },
                ...categoriesParsed
            ]);
        });
    }, []);
    const fetchData = (page, category)=>{
        getProducts(page, category.key).then((res)=>{
            setCurrentPage(page);
            setTotalPages(res.totalPages);
            setProducts(res.products);
        });
    };
    (0,external_react_.useEffect)(()=>{
        setCurrentPage(1);
        fetchData(1, category1);
    }, [
        category1
    ]);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(Header/* default */.Z, {
                title: "Eleg\xed el rubro y encontr\xe1 tus productos",
                user: props.user,
                cart: cart.Cart
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Container, {
                css: {
                    backgroundColor: "#fff"
                },
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(react_.Row, {
                        css: {
                            backgroundColor: "#fff"
                        },
                        children: /*#__PURE__*/ jsx_runtime_.jsx(components_CategorySelector, {
                            categories: categories,
                            setCategory: (val)=>setCategory(val)
                            ,
                            category: category1
                        })
                    }),
                    loading ? /*#__PURE__*/ jsx_runtime_.jsx(react_.Loading, {
                        css: {
                            margin: "auto",
                            width: "100%",
                            paddingTop: "10vh"
                        },
                        color: "warning",
                        children: "Cargando..."
                    }) : /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(react_.Grid.Container, {
                                gap: 2,
                                css: {
                                    padding: 0,
                                    backgroundColor: "#fff"
                                },
                                children: products.map((item)=>/*#__PURE__*/ jsx_runtime_.jsx(react_.Grid, {
                                        xs: 12,
                                        sm: 12,
                                        md: 6,
                                        lg: 4,
                                        xl: 4,
                                        children: /*#__PURE__*/ jsx_runtime_.jsx(ProductCard, {
                                            addProduct: (product, qty)=>addProductToCart(product, qty)
                                            ,
                                            item: item
                                        }, item.code)
                                    }, item.code)
                                )
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(react_.Grid.Container, {
                                gap: 2,
                                css: {
                                    padding: 0
                                },
                                children: /*#__PURE__*/ jsx_runtime_.jsx(react_.Grid, {
                                    justify: "center",
                                    md: 12,
                                    lg: 12,
                                    xl: 12,
                                    xs: 12,
                                    sm: 12,
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(react_.Pagination, {
                                        initialPage: 1,
                                        total: totalPages,
                                        onChange: (page)=>fetchData(page, category1)
                                        ,
                                        color: "warning",
                                        page: currentPage
                                    })
                                })
                            })
                        ]
                    })
                ]
            })
        ]
    });
};

;// CONCATENATED MODULE: external "tsyringe"
const external_tsyringe_namespaceObject = require("tsyringe");
;// CONCATENATED MODULE: ./src/exceptions/ApiExeption.ts
class ApiException extends Error {
    constructor(message){
        super(message);
        Object.setPrototypeOf(this, ApiException.prototype);
    }
    jsonOutPut() {
        return {
            error: true,
            message: this.message
        };
    }
}
/* harmony default export */ const ApiExeption = (ApiException);

;// CONCATENATED MODULE: external "mongoose"
const external_mongoose_namespaceObject = require("mongoose");
var external_mongoose_default = /*#__PURE__*/__webpack_require__.n(external_mongoose_namespaceObject);
;// CONCATENATED MODULE: ./src/models/Config.ts

const Config = new external_mongoose_namespaceObject.Schema({
    openDate: {
        type: Date || null
    },
    closeDate: {
        type: Date || null
    }
});
Config.statics.getCartStatus = async function() {
    const currentConfig = await this.findOne({});
    const openTime = currentConfig.openDate ? currentConfig.openDate.getTime() : null;
    const closeTime = currentConfig.closeDate ? currentConfig.closeDate.getTime() : null;
    const today = new Date();
    const isOpen = today.getTime() >= openTime && today.getTime() <= closeTime;
    let status = "";
    if (!openTime || !closeTime) {
        status = "closed";
    } else if (isOpen) {
        status = "open";
    } else if (today.getTime() < openTime) {
        status = "toOpen";
    } else {
        status = "closed";
    }
    const formatDate = (date)=>{
        const day = date.getUTCDate();
        let formattedDay = day.toString();
        const month = date.getUTCMonth() + 1;
        let formattedMonth = month.toString();
        if (formattedDay.length === 1) {
            formattedDay = "0" + formattedDay;
        }
        if (formattedMonth.length === 1) {
            formattedMonth = "0" + formattedMonth;
        }
        return `${formattedDay}/${formattedMonth}`;
    };
    const openDate = formatDate(currentConfig.openDate);
    const closeDate = formatDate(currentConfig.closeDate);
    return {
        openDate,
        closeDate,
        status
    };
};
Config.statics.updateDates = async function(openDate, closeDate) {
    await this.findOneAndUpdate({
        openDate,
        closeDate
    });
};
if (!(external_mongoose_default()).models.Config) {
    (0,external_mongoose_namespaceObject.model)("Config", Config);
}
/* harmony default export */ const models_Config = ((external_mongoose_default()).models.Config);

;// CONCATENATED MODULE: ./src/services/BaseService.ts
var _class;


var _dec = typeof Reflect !== "undefined" && typeof Reflect.metadata === "function" && Reflect.metadata("design:paramtypes", []), _dec1 = typeof Reflect !== "undefined" && typeof Reflect.metadata === "function" && Reflect.metadata("design:type", Function), _dec2 = (0,external_tsyringe_namespaceObject.singleton)();
let BaseService = _class = _dec2(_class = _dec1(_class = _dec((_class = class BaseService {
    constructor(){
        this.mongoInit().then((res)=>{
            console.log(`mongo db connection actual Status ${res}`);
        }).catch((e)=>console.log(e)
        );
    }
    async mongoInit() {
        return new Promise(async (resolve, reject)=>{
            try {
                if (this.isDbConnected) return;
                const db = await (0,external_mongoose_namespaceObject.connect)("mongodb://localhost:27017/almargen");
                this.isDbConnected = db.connections[0].readyState;
                console.log(`connected succesfully =)`);
                resolve(db.connections[0].readyState);
            } catch (e) {
                reject(e);
            }
        });
    }
}) || _class) || _class) || _class) || _class;
/* harmony default export */ const services_BaseService = (BaseService);

;// CONCATENATED MODULE: ./src/services/ConfigService.ts
var ConfigService_class;




var ConfigService_dec = typeof Reflect !== "undefined" && typeof Reflect.metadata === "function" && Reflect.metadata("design:paramtypes", []), ConfigService_dec1 = typeof Reflect !== "undefined" && typeof Reflect.metadata === "function" && Reflect.metadata("design:type", Function), ConfigService_dec2 = (0,external_tsyringe_namespaceObject.singleton)();
let ConfigService = ConfigService_class = ConfigService_dec2(ConfigService_class = ConfigService_dec1(ConfigService_class = ConfigService_dec((ConfigService_class = class ConfigService extends services_BaseService {
    constructor(){
        super();
    }
    async getCartStatus() {
        try {
            const status = await models_Config.getCartStatus();
            return status;
        } catch (e) {
            throw new ApiExeption(e);
        }
    }
    async setDates(openDate, closeDate) {
        try {
            await models_Config.updateDates(openDate, closeDate);
            return {
                error: false
            };
        } catch (e) {
            throw new ApiExeption(e);
        }
    }
}) || ConfigService_class) || ConfigService_class) || ConfigService_class) || ConfigService_class;
/* harmony default export */ const services_ConfigService = (ConfigService);

;// CONCATENATED MODULE: ./components/landing/Links.tsx





function Links() {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                style: {
                    display: "flex",
                    flexDirection: "row"
                },
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(react_fontawesome_.FontAwesomeIcon, {
                        icon: free_solid_svg_icons_.faArrowRight,
                        color: "white",
                        style: {
                            alignSelf: "center"
                        }
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Link, {
                        block: true,
                        href: "#",
                        className: "link-container",
                        underline: true,
                        children: [
                            " ",
                            "Visit\xe1 Nuestra p\xe1gina"
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                style: {
                    display: "flex",
                    flexDirection: "row"
                },
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(react_fontawesome_.FontAwesomeIcon, {
                        icon: free_solid_svg_icons_.faArrowRight,
                        color: "white",
                        style: {
                            alignSelf: "center"
                        }
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Link, {
                        block: true,
                        href: "#",
                        className: "link-container",
                        underline: true,
                        children: [
                            " ",
                            "Unite a la comunidad"
                        ]
                    })
                ]
            })
        ]
    });
};

;// CONCATENATED MODULE: ./public/img/BgImgAviso.jpg
/* harmony default export */ const BgImgAviso = ({"src":"/_next/static/media/BgImgAviso.a3213864.jpg","height":450,"width":800,"blurDataURL":"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAUACAMBIgACEQEDEQH/xAAoAAEBAAAAAAAAAAAAAAAAAAAABgEBAQAAAAAAAAAAAAAAAAAABAX/2gAMAwEAAhADEAAAAI0SXf/EABoQAAMBAAMAAAAAAAAAAAAAAAECAxEAE2H/2gAIAQEAAT8AlVnn0piTWqenSAOf/8QAGREAAgMBAAAAAAAAAAAAAAAAAxEAAQJR/9oACAECAQE/AD2iaXZ//8QAGBEAAgMAAAAAAAAAAAAAAAAAAAECAxH/2gAIAQMBAT8ArWxR/9k="});
;// CONCATENATED MODULE: ./components/AvisoCarrito.tsx



 //Cambiar estos link con las imagen correspondiente
 //Cambiar estos link con las imagen correspondiente
function AvisoCarrito({ status  }) {
    //Aqui poner el Typscript para obtener la fecha y hora de apertura del carro del excel
    // LandingType
    // En el caso de que LandingType:
    // Si es open, debería mostrar el "Ya hiciste tu pedido de este mes?".
    //  Si es toOpen, "El carrito abre el 8/7 15hs".
    // Si es closed o no llega nada, "El carrito ya está cerrado"
    var Fecha = "10/5"; // aqui iria la variable de fecha
    var Hora = "15 PM"; // aqui va la variable de la hora
    const Starter = "El carrito abre el";
    const FechaHora = status.openDate;
    const color = "white";
    var style;
    var useStyle = 1; //Esto define que estilo se usa, por ahora usa un valor holdeado 1 o menor para el estilo original,  cualquier mayor a 1 para el estilo alternativo
    const baseStyle = {
        // paleta de colores e imagen de "android  small 2" de la maqueta en figma (usestyle = 1)
        imgStyle: {
            backgroundImage: `url(${BgImgAviso.src})`,
            height: "100vh",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover"
        },
        linkStyle: {
            color: "white"
        },
        avisoStyle: {
            color: "white"
        }
    };
    const altStyle = {
        imgStyle: {
            backgroundImage: `url(${BgImgAviso.src})`,
            height: "100vh",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover"
        },
        linkStyle: {
            color: "black"
        },
        avisoStyle: {
            color: "orange"
        }
    };
    if (useStyle <= 1) {
        style = baseStyle;
    } else {
        style = altStyle;
    }
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        style: style.imgStyle,
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Container, {
            fluid: true,
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx(react_.Card, {
                    css: {
                        height: "40vh",
                        background: "none" /*Tarjeta para el espaciado */ 
                    },
                    children: " "
                }),
                status.status === "open" ? /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    children: /*#__PURE__*/ jsx_runtime_.jsx(react_.Text, {
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Text, {
                            h1: true,
                            css: {
                                color: color
                            },
                            children: [
                                "\xbfYa hiciste tu pedido de este mes?",
                                " "
                            ]
                        })
                    })
                }) : status.status === "toOpen" ? /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    children: /*#__PURE__*/ jsx_runtime_.jsx(react_.Text, {
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Text, {
                            h1: true,
                            css: {
                                color: color
                            },
                            children: [
                                Starter,
                                " ",
                                FechaHora
                            ]
                        })
                    })
                }) : /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Text, {
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Text, {
                                h1: true,
                                css: {
                                    color: color
                                },
                                children: [
                                    "El carrito ya est\xe1 cerrado.",
                                    " "
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Text, {
                                h4: true,
                                css: {
                                    color: color
                                },
                                children: [
                                    "Nos vemos la pr\xf3xima semana.",
                                    " "
                                ]
                            })
                        ]
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(Links, {})
            ]
        })
    });
};

;// CONCATENATED MODULE: ./pages/index.tsx










function Home(props) {
    const { 0: cartStatus , 1: setCartStatus  } = (0,external_react_.useState)({
        status: "closed"
    });
    const { 0: loading , 1: setLoading  } = (0,external_react_.useState)(true);
    (0,external_react_.useEffect)(()=>{
        getCartStatus().then((res)=>{
            setCartStatus(res);
            setLoading(false);
        });
    }, []);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(layout["default"], {
        ...props,
        children: [
            !props.user.logged && cartStatus.status === "open" && /*#__PURE__*/ jsx_runtime_.jsx(LoginCard, {}),
            loading ? /*#__PURE__*/ jsx_runtime_.jsx(react_.Loading, {
                css: {
                    margin: "auto",
                    width: "100%",
                    paddingTop: "50vh"
                },
                color: "warning",
                children: "Cargando..."
            }) : props.user.logged && cartStatus.status === "open" ? /*#__PURE__*/ jsx_runtime_.jsx(Products, {
                user: props.user
            }) : /*#__PURE__*/ jsx_runtime_.jsx(AvisoCarrito, {
                status: cartStatus
            })
        ]
    });
};
async function getServerSideProps() {
    // Fetch data from external API
    // const res = await fetch(`https://.../data`)
    // const data = await res.json()
    // Pass data to the page via props
    // return { props: { data } }
    const configService = external_tsyringe_namespaceObject.container.resolve(services_ConfigService);
    const getIsOpen = await configService.getCartStatus();
    console.log(getIsOpen);
    return {
        props: {}
    };
}


/***/ }),

/***/ 6466:
/***/ ((module) => {

module.exports = require("@fortawesome/free-solid-svg-icons");

/***/ }),

/***/ 7197:
/***/ ((module) => {

module.exports = require("@fortawesome/react-fontawesome");

/***/ }),

/***/ 6735:
/***/ ((module) => {

module.exports = require("@nextui-org/react");

/***/ }),

/***/ 968:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [834,961], () => (__webpack_exec__(5434)));
module.exports = __webpack_exports__;

})();