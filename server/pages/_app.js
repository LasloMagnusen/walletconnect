"use strict";
(() => {
var exports = {};
exports.id = 888;
exports.ids = [888,154];
exports.modules = {

/***/ 850:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./services/providers/MintbaseWalletContext.tsx
var MintbaseWalletContext = __webpack_require__(471);
;// CONCATENATED MODULE: external "apollo-client"
const external_apollo_client_namespaceObject = require("apollo-client");
var external_apollo_client_default = /*#__PURE__*/__webpack_require__.n(external_apollo_client_namespaceObject);
;// CONCATENATED MODULE: external "apollo-link-ws"
const external_apollo_link_ws_namespaceObject = require("apollo-link-ws");
;// CONCATENATED MODULE: external "apollo-link-http"
const external_apollo_link_http_namespaceObject = require("apollo-link-http");
;// CONCATENATED MODULE: external "apollo-link"
const external_apollo_link_namespaceObject = require("apollo-link");
;// CONCATENATED MODULE: external "apollo-utilities"
const external_apollo_utilities_namespaceObject = require("apollo-utilities");
;// CONCATENATED MODULE: external "apollo-cache-inmemory"
const external_apollo_cache_inmemory_namespaceObject = require("apollo-cache-inmemory");
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(497);
;// CONCATENATED MODULE: external "deepmerge"
const external_deepmerge_namespaceObject = require("deepmerge");
var external_deepmerge_default = /*#__PURE__*/__webpack_require__.n(external_deepmerge_namespaceObject);
;// CONCATENATED MODULE: external "lodash/isEqual"
const isEqual_namespaceObject = require("lodash/isEqual");
var isEqual_default = /*#__PURE__*/__webpack_require__.n(isEqual_namespaceObject);
;// CONCATENATED MODULE: ./constants/mintbase.ts
const GRAPH_MAINNET_HTTPS_URI = "https://mintbase-mainnet.hasura.app/v1/graphql";
const GRAPH_MAINNET_WSS_URI = "wss://mintbase-mainnet.hasura.app/v1/graphql";
const GRAPH_TESTNET_HTTPS_URI = "https://mintbase-testnet.hasura.app/v1/graphql";
const GRAPH_TESTNET_WSS_URI = "wss://mintbase-testnet.hasura.app/v1/graphql";

;// CONCATENATED MODULE: ./services/apolloClient.ts










const APOLLO_STATE_PROP_NAME = "__APOLLO_STATE__";
let apolloClient;
const createApolloClient = (graphUri)=>{
    const httpLink = new external_apollo_link_http_namespaceObject.HttpLink({
        uri: graphUri ?? GRAPH_MAINNET_HTTPS_URI,
        credentials: "same-origin",
        headers: {
            "x-hasura-role": "anonymous"
        }
    });
    const wsLink =  false ? 0 : null;
    const splitLink =  false ? 0 : httpLink;
    const client = new (external_apollo_client_default())({
        ssrMode: "undefined" === "undefined",
        link: splitLink,
        cache: new external_apollo_cache_inmemory_namespaceObject.InMemoryCache()
    });
    return client;
};
function initializeApollo(initialState = null, graphUri) {
    const _apolloClient = apolloClient ?? createApolloClient(graphUri);
    if (initialState) {
        const existingCache = _apolloClient.extract();
        // @ts-ignore
        const data = external_deepmerge_default()(initialState, existingCache, {
            arrayMerge: (destinationArray, sourceArray)=>[
                    ...sourceArray,
                    ...destinationArray.filter((d)=>sourceArray.every((s)=>!isEqual_default()(d, s)
                        )
                    ), 
                ]
        });
        _apolloClient.cache.restore(data);
    }
    if (true) return _apolloClient;
    if (!apolloClient) apolloClient = _apolloClient;
    return _apolloClient;
}
const useApollo = (pageProps)=>{
    const state = pageProps[APOLLO_STATE_PROP_NAME];
    const store = (0,external_react_.useMemo)(()=>initializeApollo(state, pageProps?.network?.graphUri)
    , [
        state
    ]);
    return store;
};

// EXTERNAL MODULE: ./pages/minter.tsx + 2 modules
var minter = __webpack_require__(212);
;// CONCATENATED MODULE: ./pages/_app.tsx






function MyApp({ Component , pageProps  }) {
    const apolloClient = useApollo({
        ...pageProps,
        network: {
            graphUri:  true ? GRAPH_TESTNET_HTTPS_URI : 0
        }
    });
    return /*#__PURE__*/ jsx_runtime_.jsx(MintbaseWalletContext/* WalletProvider */.nS, {
        apiKey: "ac3a776a-196d-42fe-a86c-4157bc6b7437" || 0,
        children: /*#__PURE__*/ jsx_runtime_.jsx(minter["default"], {})
    });
}
/* harmony default export */ const _app = (MyApp);
{}

/***/ }),

/***/ 792:
/***/ ((module) => {

module.exports = require("mintbase");

/***/ }),

/***/ 930:
/***/ ((module) => {

module.exports = require("mintbase-ui");

/***/ }),

/***/ 796:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 14:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 20:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 406:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 365:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-middleware-regex.js");

/***/ }),

/***/ 428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 52:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 422:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 497:
/***/ ((module) => {

module.exports = require("react");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [505,664,471,212], () => (__webpack_exec__(850)));
module.exports = __webpack_exports__;

})();