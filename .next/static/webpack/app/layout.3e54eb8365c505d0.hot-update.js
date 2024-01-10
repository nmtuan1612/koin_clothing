"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/layout",{

/***/ "(app-pages-browser)/./src/context/Store.js":
/*!******************************!*\
  !*** ./src/context/Store.js ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   AppContext: function() { return /* binding */ AppContext; },\n/* harmony export */   AppProvider: function() { return /* binding */ AppProvider; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* __next_internal_client_entry_do_not_use__ AppContext,AppProvider auto */ \nvar _s = $RefreshSig$();\n\nconst initialState = {\n    cart: []\n};\nconst AppContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)(initialState);\nconst AppProvider = (param)=>{\n    let { children } = param;\n    _s();\n    const [cart, setCart] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [favorite, setFavorite] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const cartData = JSON.parse(localStorage.getItem(\"koinclothing_cart\"));\n        const favoriteData = JSON.parse(localStorage.getItem(\"koinclothing_favorite\"));\n        cartData && setCart(cartData);\n        favoriteData && setFavorite(favoriteData);\n    }, []);\n    const addToCart = (productData)=>{\n        const position = cart.findIndex((product)=>product.id === productData.id);\n        if (position !== -1) {\n            setCart((prev)=>{\n                prev[position] = {\n                    ...prev[position],\n                    quantity: Number(productData.quantity) + Number(prev[position].quantity)\n                };\n                localStorage.setItem(\"koinclothing_cart\", JSON.stringify(prev));\n                return prev;\n            });\n        } else {\n            localStorage.setItem(\"koinclothing_cart\", JSON.stringify([\n                ...cart,\n                productData\n            ]));\n            setCart((prev)=>[\n                    ...prev,\n                    productData\n                ]);\n        }\n    };\n    const deleteFromCart = (productName)=>{\n        const newCart = cart.filter((prod)=>prod.name !== productName);\n        localStorage.setItem(\"koinclothing_cart\", JSON.stringify(newCart));\n        setCart(newCart);\n    };\n    const addToFavorite = (productData)=>{\n        localStorage.setItem(\"koinclothing_favorite\", JSON.stringify([\n            ...favorite,\n            productData\n        ]));\n        setFavorite((prev)=>[\n                ...prev,\n                productData\n            ]);\n    };\n    const deleteFromFavorite = (productName)=>{\n        const newFavorite = favorite.filter((prod)=>prod.name !== productName);\n        localStorage.setItem(\"koinclothing_favorite\", JSON.stringify(newFavorite));\n        setFavorite(newFavorite);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(AppContext.Provider, {\n        value: {\n            cart,\n            setCart,\n            addToCart,\n            deleteFromCart,\n            addToFavorite,\n            deleteFromFavorite\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"/Users/nmtuan/Documents/Work/Themes/fe-koinclothing-nextjs/src/context/Store.js\",\n        lineNumber: 67,\n        columnNumber: 5\n    }, undefined);\n};\n_s(AppProvider, \"3ckDSGmj4xJgJO/JFtgyXAvr6Ag=\");\n_c = AppProvider;\nvar _c;\n$RefreshReg$(_c, \"AppProvider\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb250ZXh0L1N0b3JlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFFa0U7QUFFbEUsTUFBTUksZUFBZTtJQUNuQkMsTUFBTSxFQUFFO0FBQ1Y7QUFFTyxNQUFNQywyQkFBYUwsb0RBQWFBLENBQUNHLGNBQWM7QUFFL0MsTUFBTUcsY0FBYztRQUFDLEVBQUVDLFFBQVEsRUFBRTs7SUFDdEMsTUFBTSxDQUFDSCxNQUFNSSxRQUFRLEdBQUdOLCtDQUFRQSxDQUFDLEVBQUU7SUFDbkMsTUFBTSxDQUFDTyxVQUFVQyxZQUFZLEdBQUdSLCtDQUFRQSxDQUFDLEVBQUU7SUFFM0NELGdEQUFTQSxDQUFDO1FBQ1IsTUFBTVUsV0FBV0MsS0FBS0MsS0FBSyxDQUFDQyxhQUFhQyxPQUFPLENBQUM7UUFDakQsTUFBTUMsZUFBZUosS0FBS0MsS0FBSyxDQUM3QkMsYUFBYUMsT0FBTyxDQUFDO1FBR3ZCSixZQUFZSCxRQUFRRztRQUNwQkssZ0JBQWdCTixZQUFZTTtJQUM5QixHQUFHLEVBQUU7SUFFTCxNQUFNQyxZQUFZLENBQUNDO1FBQ2pCLE1BQU1DLFdBQVdmLEtBQUtnQixTQUFTLENBQUMsQ0FBQ0MsVUFBWUEsUUFBUUMsRUFBRSxLQUFLSixZQUFZSSxFQUFFO1FBQzFFLElBQUlILGFBQWEsQ0FBQyxHQUFHO1lBQ25CWCxRQUFRLENBQUNlO2dCQUNQQSxJQUFJLENBQUNKLFNBQVMsR0FBRztvQkFDZixHQUFHSSxJQUFJLENBQUNKLFNBQVM7b0JBQ2pCSyxVQUNFQyxPQUFPUCxZQUFZTSxRQUFRLElBQUlDLE9BQU9GLElBQUksQ0FBQ0osU0FBUyxDQUFDSyxRQUFRO2dCQUNqRTtnQkFDQVYsYUFBYVksT0FBTyxDQUFDLHFCQUFxQmQsS0FBS2UsU0FBUyxDQUFDSjtnQkFDekQsT0FBT0E7WUFDVDtRQUNGLE9BQU87WUFDTFQsYUFBYVksT0FBTyxDQUNsQixxQkFDQWQsS0FBS2UsU0FBUyxDQUFDO21CQUFJdkI7Z0JBQU1jO2FBQVk7WUFFdkNWLFFBQVEsQ0FBQ2UsT0FBUzt1QkFBSUE7b0JBQU1MO2lCQUFZO1FBQzFDO0lBQ0Y7SUFFQSxNQUFNVSxpQkFBaUIsQ0FBQ0M7UUFDdEIsTUFBTUMsVUFBVTFCLEtBQUsyQixNQUFNLENBQUMsQ0FBQ0MsT0FBU0EsS0FBS0MsSUFBSSxLQUFLSjtRQUNwRGYsYUFBYVksT0FBTyxDQUFDLHFCQUFxQmQsS0FBS2UsU0FBUyxDQUFDRztRQUN6RHRCLFFBQVFzQjtJQUNWO0lBRUEsTUFBTUksZ0JBQWdCLENBQUNoQjtRQUNyQkosYUFBYVksT0FBTyxDQUNsQix5QkFDQWQsS0FBS2UsU0FBUyxDQUFDO2VBQUlsQjtZQUFVUztTQUFZO1FBRTNDUixZQUFZLENBQUNhLE9BQVM7bUJBQUlBO2dCQUFNTDthQUFZO0lBQzlDO0lBRUEsTUFBTWlCLHFCQUFxQixDQUFDTjtRQUMxQixNQUFNTyxjQUFjM0IsU0FBU3NCLE1BQU0sQ0FBQyxDQUFDQyxPQUFTQSxLQUFLQyxJQUFJLEtBQUtKO1FBQzVEZixhQUFhWSxPQUFPLENBQUMseUJBQXlCZCxLQUFLZSxTQUFTLENBQUNTO1FBQzdEMUIsWUFBWTBCO0lBQ2Q7SUFFQSxxQkFDRSw4REFBQy9CLFdBQVdnQyxRQUFRO1FBQ2xCQyxPQUFPO1lBQ0xsQztZQUNBSTtZQUNBUztZQUNBVztZQUNBTTtZQUNBQztRQUNGO2tCQUVDNUI7Ozs7OztBQUdQLEVBQUU7R0FyRVdEO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb250ZXh0L1N0b3JlLmpzP2E1OWQiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XG5cbmltcG9ydCBSZWFjdCwgeyBjcmVhdGVDb250ZXh0LCB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5cbmNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcbiAgY2FydDogW10sXG59O1xuXG5leHBvcnQgY29uc3QgQXBwQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQoaW5pdGlhbFN0YXRlKTtcblxuZXhwb3J0IGNvbnN0IEFwcFByb3ZpZGVyID0gKHsgY2hpbGRyZW4gfSkgPT4ge1xuICBjb25zdCBbY2FydCwgc2V0Q2FydF0gPSB1c2VTdGF0ZShbXSk7XG4gIGNvbnN0IFtmYXZvcml0ZSwgc2V0RmF2b3JpdGVdID0gdXNlU3RhdGUoW10pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgY2FydERhdGEgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwia29pbmNsb3RoaW5nX2NhcnRcIikpO1xuICAgIGNvbnN0IGZhdm9yaXRlRGF0YSA9IEpTT04ucGFyc2UoXG4gICAgICBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImtvaW5jbG90aGluZ19mYXZvcml0ZVwiKVxuICAgICk7XG5cbiAgICBjYXJ0RGF0YSAmJiBzZXRDYXJ0KGNhcnREYXRhKTtcbiAgICBmYXZvcml0ZURhdGEgJiYgc2V0RmF2b3JpdGUoZmF2b3JpdGVEYXRhKTtcbiAgfSwgW10pO1xuXG4gIGNvbnN0IGFkZFRvQ2FydCA9IChwcm9kdWN0RGF0YSkgPT4ge1xuICAgIGNvbnN0IHBvc2l0aW9uID0gY2FydC5maW5kSW5kZXgoKHByb2R1Y3QpID0+IHByb2R1Y3QuaWQgPT09IHByb2R1Y3REYXRhLmlkKTtcbiAgICBpZiAocG9zaXRpb24gIT09IC0xKSB7XG4gICAgICBzZXRDYXJ0KChwcmV2KSA9PiB7XG4gICAgICAgIHByZXZbcG9zaXRpb25dID0ge1xuICAgICAgICAgIC4uLnByZXZbcG9zaXRpb25dLFxuICAgICAgICAgIHF1YW50aXR5OlxuICAgICAgICAgICAgTnVtYmVyKHByb2R1Y3REYXRhLnF1YW50aXR5KSArIE51bWJlcihwcmV2W3Bvc2l0aW9uXS5xdWFudGl0eSksXG4gICAgICAgIH07XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwia29pbmNsb3RoaW5nX2NhcnRcIiwgSlNPTi5zdHJpbmdpZnkocHJldikpO1xuICAgICAgICByZXR1cm4gcHJldjtcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcbiAgICAgICAgXCJrb2luY2xvdGhpbmdfY2FydFwiLFxuICAgICAgICBKU09OLnN0cmluZ2lmeShbLi4uY2FydCwgcHJvZHVjdERhdGFdKVxuICAgICAgKTtcbiAgICAgIHNldENhcnQoKHByZXYpID0+IFsuLi5wcmV2LCBwcm9kdWN0RGF0YV0pO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBkZWxldGVGcm9tQ2FydCA9IChwcm9kdWN0TmFtZSkgPT4ge1xuICAgIGNvbnN0IG5ld0NhcnQgPSBjYXJ0LmZpbHRlcigocHJvZCkgPT4gcHJvZC5uYW1lICE9PSBwcm9kdWN0TmFtZSk7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJrb2luY2xvdGhpbmdfY2FydFwiLCBKU09OLnN0cmluZ2lmeShuZXdDYXJ0KSk7XG4gICAgc2V0Q2FydChuZXdDYXJ0KTtcbiAgfTtcblxuICBjb25zdCBhZGRUb0Zhdm9yaXRlID0gKHByb2R1Y3REYXRhKSA9PiB7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXG4gICAgICBcImtvaW5jbG90aGluZ19mYXZvcml0ZVwiLFxuICAgICAgSlNPTi5zdHJpbmdpZnkoWy4uLmZhdm9yaXRlLCBwcm9kdWN0RGF0YV0pXG4gICAgKTtcbiAgICBzZXRGYXZvcml0ZSgocHJldikgPT4gWy4uLnByZXYsIHByb2R1Y3REYXRhXSk7XG4gIH07XG5cbiAgY29uc3QgZGVsZXRlRnJvbUZhdm9yaXRlID0gKHByb2R1Y3ROYW1lKSA9PiB7XG4gICAgY29uc3QgbmV3RmF2b3JpdGUgPSBmYXZvcml0ZS5maWx0ZXIoKHByb2QpID0+IHByb2QubmFtZSAhPT0gcHJvZHVjdE5hbWUpO1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwia29pbmNsb3RoaW5nX2Zhdm9yaXRlXCIsIEpTT04uc3RyaW5naWZ5KG5ld0Zhdm9yaXRlKSk7XG4gICAgc2V0RmF2b3JpdGUobmV3RmF2b3JpdGUpO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPEFwcENvbnRleHQuUHJvdmlkZXJcbiAgICAgIHZhbHVlPXt7XG4gICAgICAgIGNhcnQsXG4gICAgICAgIHNldENhcnQsXG4gICAgICAgIGFkZFRvQ2FydCxcbiAgICAgICAgZGVsZXRlRnJvbUNhcnQsXG4gICAgICAgIGFkZFRvRmF2b3JpdGUsXG4gICAgICAgIGRlbGV0ZUZyb21GYXZvcml0ZSxcbiAgICAgIH19XG4gICAgPlxuICAgICAge2NoaWxkcmVufVxuICAgIDwvQXBwQ29udGV4dC5Qcm92aWRlcj5cbiAgKTtcbn07XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJjcmVhdGVDb250ZXh0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJpbml0aWFsU3RhdGUiLCJjYXJ0IiwiQXBwQ29udGV4dCIsIkFwcFByb3ZpZGVyIiwiY2hpbGRyZW4iLCJzZXRDYXJ0IiwiZmF2b3JpdGUiLCJzZXRGYXZvcml0ZSIsImNhcnREYXRhIiwiSlNPTiIsInBhcnNlIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsImZhdm9yaXRlRGF0YSIsImFkZFRvQ2FydCIsInByb2R1Y3REYXRhIiwicG9zaXRpb24iLCJmaW5kSW5kZXgiLCJwcm9kdWN0IiwiaWQiLCJwcmV2IiwicXVhbnRpdHkiLCJOdW1iZXIiLCJzZXRJdGVtIiwic3RyaW5naWZ5IiwiZGVsZXRlRnJvbUNhcnQiLCJwcm9kdWN0TmFtZSIsIm5ld0NhcnQiLCJmaWx0ZXIiLCJwcm9kIiwibmFtZSIsImFkZFRvRmF2b3JpdGUiLCJkZWxldGVGcm9tRmF2b3JpdGUiLCJuZXdGYXZvcml0ZSIsIlByb3ZpZGVyIiwidmFsdWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/context/Store.js\n"));

/***/ })

});