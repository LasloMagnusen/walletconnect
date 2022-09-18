"use strict";
exports.id = 471;
exports.ids = [471];
exports.modules = {

/***/ 471:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Os": () => (/* binding */ useWallet),
/* harmony export */   "nS": () => (/* binding */ WalletProvider)
/* harmony export */ });
/* unused harmony export WalletContext */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var mintbase__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(792);
/* harmony import */ var mintbase__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(mintbase__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(497);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);



// @ts-ignore
const WalletContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_2__.createContext)({
    wallet: undefined,
    details: {
        accountId: "",
        balance: "",
        allowance: "",
        contractName: ""
    },
    isConnected: false
});
const WalletProvider = (props)=>{
    const { network , chain , apiKey , children  } = props;
    const { 0: wallet1 , 1: setWallet  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)();
    const { 0: details1 , 1: setDetails  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({
        accountId: "",
        balance: "",
        allowance: "",
        contractName: ""
    });
    const { 0: connected , 1: setConnected  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
    const initWallet = async ()=>{
        const { data: walletData , error  } = await new mintbase__WEBPACK_IMPORTED_MODULE_1__.Wallet().init({
            networkName: network ?? mintbase__WEBPACK_IMPORTED_MODULE_1__.Network.testnet,
            chain: chain ?? mintbase__WEBPACK_IMPORTED_MODULE_1__.Chain.near,
            apiKey: apiKey
        });
        if (error) {
            console.error(error);
            return;
        }
        const { wallet , isConnected  } = walletData;
        setWallet(wallet);
        if (isConnected) {
            try {
                const { data: details  } = await wallet.details();
                setDetails(details);
                setConnected(true);
            } catch (err) {
                console.error(err);
            }
        }
    };
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        initWallet();
    }, [
        network
    ]);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(WalletContext.Provider, {
        value: {
            wallet: wallet1,
            details: details1,
            isConnected: connected
        },
        children: children
    });
};
const useWallet = ()=>(0,react__WEBPACK_IMPORTED_MODULE_2__.useContext)(WalletContext)
;


/***/ })

};
;