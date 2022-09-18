"use strict";
exports.id = 212;
exports.ids = [212];
exports.modules = {

/***/ 212:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ minter)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./services/providers/MintbaseWalletContext.tsx
var MintbaseWalletContext = __webpack_require__(471);
;// CONCATENATED MODULE: ./components/Form.tsx


const Form = ()=>{
    const { wallet , isConnected , details  } = (0,MintbaseWalletContext/* useWallet */.Os)();
    // const {handleSubmit, formState: {errors}} = useForm()
    // const onSubmit = (data: any) => {
    //     console.log(data)
    // }
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "w-full",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("form", {
            className: "bg-white rounded px-4",
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "mb-4",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("label", {
                            className: "block text-gray-700 text-sm font-bold mb-2",
                            children: "Title"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("input", {
                            className: "shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",
                            type: "text",
                            placeholder: "Title"
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "mb-4",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("label", {
                            className: "block text-gray-700 text-sm font-bold mb-2",
                            children: "Description"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("input", {
                            className: "shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",
                            type: "text",
                            placeholder: "Description"
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "mb-4",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("label", {
                            className: "block text-gray-700 text-sm font-bold mb-2",
                            children: " Cover Image"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("input", {
                            className: "shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",
                            type: "file"
                        })
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("input", {
                    className: "bg-black rounded w-full text-white p-2 cursor-pointer",
                    type: "submit",
                    value: "Mint"
                })
            ]
        })
    });
};
/* harmony default export */ const components_Form = (Form);

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: external "mintbase-ui"
var external_mintbase_ui_ = __webpack_require__(930);
;// CONCATENATED MODULE: ./components/Header.tsx




const Header = ()=>{
    const { wallet , isConnected , details  } = (0,MintbaseWalletContext/* useWallet */.Os)();
    return /*#__PURE__*/ jsx_runtime_.jsx("header", {
        className: "w-full px-6 bg-white",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "container mx-auto max-w-8xl md:flex justify-between items-center",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                    href: "/",
                    passHref: true,
                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                        className: "py-6 w-full text-center md:text-left md:w-auto text-gray-600 no-underline flex justify-center items-center",
                        children: "Mintbase Engineering"
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "w-full md:w-auto mb-6 md:mb-0 text-center md:text-right",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "flex flex-row items-center space-x-2",
                        children: [
                            isConnected && /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                className: "text-sm py-2 px-3",
                                children: [
                                    "Hi, ",
                                    wallet?.activeAccount?.accountId
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(external_mintbase_ui_.MbButton, {
                                label: isConnected ? "Disconnect" : "Connect",
                                onClick: isConnected ? ()=>{
                                    wallet?.disconnect();
                                    window.location.reload();
                                } : ()=>{
                                    wallet?.connect({
                                        requestSignIn: true
                                    });
                                }
                            })
                        ]
                    })
                })
            ]
        })
    });
};
/* harmony default export */ const components_Header = (Header);

;// CONCATENATED MODULE: ./pages/minter.tsx



const Minter = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(components_Header, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(components_Form, {})
        ]
    });
};
/* harmony default export */ const minter = (Minter);


/***/ })

};
;