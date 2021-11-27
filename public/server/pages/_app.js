(() => {
var exports = {};
exports.id = 888;
exports.ids = [888,319];
exports.modules = {

/***/ 7740:
/***/ ((module) => {

// Exports
module.exports = {
	"image": "header_image__CijPH",
	"toggleBtn": "header_toggleBtn__zQ9a9",
	"headerContainer": "header_headerContainer__xeSWA",
	"btn": "header_btn__A5Dou",
	"container": "header_container__W0aRT",
	"dot1": "header_dot1__yjGEO",
	"func": "header_func__jUUSQ",
	"dot2": "header_dot2__NZes0",
	"dot3": "header_dot3__K6ybH",
	"linksMain": "header_linksMain__ba26l"
};


/***/ }),

/***/ 4477:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
// EXTERNAL MODULE: ./styles/header.module.css
var header_module = __webpack_require__(7740);
var header_module_default = /*#__PURE__*/__webpack_require__.n(header_module);
// EXTERNAL MODULE: external "react-bootstrap"
var external_react_bootstrap_ = __webpack_require__(358);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
;// CONCATENATED MODULE: ./public/logo.png
/* harmony default export */ const logo = ({"src":"/_next/static/media/logo.936eef7c.png","height":1080,"width":1080,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAi0lEQVR42mOgHPB9uccu9vY6s8zLK8wgvtj//4yi/3+wyFw/zMT39T4HA//nu448X+87c325Z8Xx/7Wd0IF1WQLXD6dz/X9hz//xtjkD689H3Ep3T8lqnd0tq3V+r4zclYOWShf3aavcOSHL8PsJJ9yq+QwMjF1AjOEG6ReXUQX//4fz5R+eZSToCQB77DQExnfMdQAAAABJRU5ErkJggg=="});
;// CONCATENATED MODULE: ./commonComponents/header/Header.js







function Header() {
    return(/*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: (header_module_default()).headerContainer,
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_bootstrap_.Navbar, {
            expand: "lg",
            variant: "light",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Navbar.Brand, {
                    href: "#home",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: (header_module_default()).image,
                        children: /*#__PURE__*/ jsx_runtime_.jsx(next_image["default"], {
                            src: logo,
                            alt: "logo"
                        })
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Navbar.Toggle, {
                    className: (header_module_default()).toggleBtn
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Navbar.Collapse, {
                    className: "justify-content-end",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                        className: (header_module_default()).linksMain,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                    href: "/",
                                    children: "Cases"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                    href: "services",
                                    children: "Services"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                    href: "#",
                                    children: "About Us"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                    href: "#",
                                    children: "Carreers"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                    href: "#",
                                    children: "Blog"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                    href: "contactUs",
                                    children: "Contact Us"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                    href: "#",
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                        className: (header_module_default()).btn,
                                        children: [
                                            "Hire Us",
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: (header_module_default()).container,
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                        className: (header_module_default()).dot1
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                        className: (header_module_default()).dot2
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                        className: (header_module_default()).dot3
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                })
                            })
                        ]
                    })
                })
            ]
        })
    }));
}
/* harmony default export */ const header_Header = (Header);

;// CONCATENATED MODULE: ./pages/_app.js




function MyApp({ Component , pageProps  }) {
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(header_Header, {
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Component, {
                ...pageProps
            })
        ]
    }));
}
/* harmony default export */ const _app = (MyApp);


/***/ }),

/***/ 562:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/denormalize-page-path.js");

/***/ }),

/***/ 8028:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/image-config.js");

/***/ }),

/***/ 4957:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 4365:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-middleware-regex.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 3018:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/to-base-64.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 358:
/***/ ((module) => {

"use strict";
module.exports = require("react-bootstrap");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [730,63,675], () => (__webpack_exec__(4477)));
module.exports = __webpack_exports__;

})();