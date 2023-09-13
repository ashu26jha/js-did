"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9137],{4852:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>k});var a=n(9231);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var d=a.createContext({}),l=function(e){var t=a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=l(e.components);return a.createElement(d.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,d=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),c=l(n),m=r,k=c["".concat(d,".").concat(m)]||c[m]||u[m]||i;return n?a.createElement(k,s(s({ref:t},p),{},{components:n})):a.createElement(k,s({ref:t},p))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,s=new Array(i);s[0]=m;var o={};for(var d in t)hasOwnProperty.call(t,d)&&(o[d]=t[d]);o.originalType=e,o[c]="string"==typeof e?e:r,s[1]=o;for(var l=2;l<i;l++)s[l]=n[l];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5800:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>l});var a=n(644),r=(n(9231),n(4852));const i={id:"did_session",title:"Module: did-session",custom_edit_url:null},s=void 0,o={unversionedId:"api/modules/did_session",id:"api/modules/did_session",title:"Module: did-session",description:"Manages user account DIDs in web based environments.",source:"@site/docs/api/modules/did_session.md",sourceDirName:"api/modules",slug:"/api/modules/did_session",permalink:"/docs/api/modules/did_session",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"did_session",title:"Module: did-session",custom_edit_url:null},sidebar:"api",previous:{title:"Class: DID",permalink:"/docs/api/classes/dids.DID"},next:{title:"Class: DIDSession",permalink:"/docs/api/classes/did_session.DIDSession"}},d={},l=[{value:"Purpose",id:"purpose",level:2},{value:"Installation",id:"installation",level:2},{value:"Usage",id:"usage",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Upgrading from <code>@glazed/did-session</code> to <code>did-session</code>",id:"upgrading-from-glazeddid-session-to-did-session",level:2},{value:"Upgrading from <code>did-session@0.x.x</code> to <code>did-session@1.x.x</code>",id:"upgrading-from-did-session0xx-to-did-session1xx",level:2},{value:"Classes",id:"classes",level:2},{value:"Type Aliases",id:"type-aliases",level:2},{value:"SessionParams",id:"sessionparams",level:3},{value:"Type declaration",id:"type-declaration",level:4},{value:"Functions",id:"functions",level:2},{value:"cacaoContainsResources",id:"cacaocontainsresources",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Returns",id:"returns",level:4},{value:"createDIDCacao",id:"createdidcacao",level:3},{value:"Parameters",id:"parameters-1",level:4},{value:"Returns",id:"returns-1",level:4},{value:"createDIDKey",id:"createdidkey",level:3},{value:"Parameters",id:"parameters-2",level:4},{value:"Returns",id:"returns-2",level:4},{value:"getAccountIdByDID",id:"getaccountidbydid",level:3},{value:"Parameters",id:"parameters-3",level:4},{value:"Returns",id:"returns-3",level:4}],p={toc:l},c="wrapper";function u(e){let{components:t,...n}=e;return(0,r.kt)(c,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Manages user account DIDs in web based environments."),(0,r.kt)("h2",{id:"purpose"},"Purpose"),(0,r.kt)("p",null,"Manages, creates and authorizes a DID session key for a user. Returns an authenticated DIDs instance\nto be used in other Ceramic libraries. Supports did:pkh for blockchain accounts with Sign-In with\nEthereum and CACAO for authorization."),(0,r.kt)("h2",{id:"installation"},"Installation"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"npm install did-session\n")),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)("p",null,"Authorize and use DIDs where needed. Import the AuthMethod you need, Ethereum accounts used here for example."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"import { DIDSession } from 'did-session'\nimport { EthereumWebAuth, getAccountId } from '@didtools/pkh-ethereum'\n\nconst ethProvider = // import/get your web3 eth provider\nconst addresses = await ethProvider.request({ method: 'eth_requestAccounts' })\nconst accountId = await getAccountId(ethProvider, addresses[0])\nconst authMethod = await EthereumWebAuth.getAuthMethod(ethprovider, accountId)\n\nconst session = await DIDSession.get(accountId, authMethod, { resources: [...]})\n\n// Uses DIDs in ceramic & glaze libraries, ie\nconst ceramic = new CeramicClient()\nceramic.did = session.did\n\n// pass ceramic instance where needed\n\n")),(0,r.kt)("p",null,"Additional helper functions are available to help you manage a session lifecycle and the user experience."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ss"},"// Check if authorized or created from existing session string\ndidsession.hasSession\n\n// Check if session expired\ndidsession.isExpired\n\n// Get resources session is authorized for\ndidsession.authorizations\n\n// Check number of seconds till expiration, may want to re auth user at a time before expiration\ndidsession.expiresInSecs\n")),(0,r.kt)("h2",{id:"configuration"},"Configuration"),(0,r.kt)("p",null,"The resources your app needs to write access to must be passed during authorization. Resources are an array\nof Model Stream Ids or Streams Ids. Typically you will just pass resources from ",(0,r.kt)("inlineCode",{parentName:"p"},"@composedb")," libraries as\nyou will already manage your Composites and Models there. For example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"import { ComposeClient } from '@composedb/client'\n\n//... Reference above and `@composedb` docs for additional configuration here\n\nconst client = new ComposeClient({ceramic, definition})\nconst resources = client.resources\nconst session = await DIDSession.get(accountId, authMethod, { resources })\nclient.setDID(session.did)\n")),(0,r.kt)("p",null,"By default a session will expire in 1 week. You can change this time by passing the ",(0,r.kt)("inlineCode",{parentName:"p"},"expiresInSecs")," option to\nindicate how many seconds from the current time you want this session to expire."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const oneDay = 60 * 60 * 24\nconst session = await DIDSession.get(accountId, authMethod, { resources: [...], expiresInSecs: oneDay })\n")),(0,r.kt)("p",null,"A domain/app name is used when making requests, by default in a browser based environment the library will use\nthe domain name of your app. If you are using the library in a non web based environment you will need to pass\nthe ",(0,r.kt)("inlineCode",{parentName:"p"},"domain")," option otherwise an error will thrown."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const session = await DIDSession.get(accountId, authMethod, { resources: [...], domain: 'YourAppName' })\n")),(0,r.kt)("h2",{id:"upgrading-from-glazeddid-session-to-did-session"},"Upgrading from ",(0,r.kt)("inlineCode",{parentName:"h2"},"@glazed/did-session")," to ",(0,r.kt)("inlineCode",{parentName:"h2"},"did-session")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"authorize")," changes to a static method which returns a did-session instance and ",(0,r.kt)("inlineCode",{parentName:"p"},"getDID()")," becomes a ",(0,r.kt)("inlineCode",{parentName:"p"},"did")," getter. For example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"// Before @glazed/did-session\nconst session = new DIDSession({ authProvider })\nconst did = await session.authorize()\n\n// Now did-session\nconst session = await DIDSession.get(accountId, authMethod, { resources: [...]})\nconst did = session.did\n")),(0,r.kt)("h2",{id:"upgrading-from-did-session0xx-to-did-session1xx"},"Upgrading from ",(0,r.kt)("inlineCode",{parentName:"h2"},"did-session@0.x.x")," to ",(0,r.kt)("inlineCode",{parentName:"h2"},"did-session@1.x.x")),(0,r.kt)("p",null,"AuthProviders change to AuthMethod interfaces. Similarly you can import the auth libraries you need. How you configure and manage\nthese AuthMethods may differ, but each will return an AuthMethod function to be used with did-session."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"// Before with v0.x.x\n...\nimport { EthereumAuthProvider } from '@ceramicnetwork/blockchain-utils-linking'\n\nconst ethProvider = // import/get your web3 eth provider\nconst addresses = await ethProvider.request({ method: 'eth_requestAccounts' })\nconst authProvider = new EthereumAuthProvider(ethProvider, addresses[0])\nconst session = new DIDSession({ authProvider })\nconst did = await session.authorize()\n\n// Now did-session@1.0.0\n...\nimport { EthereumWebAuth, getAccountId } from '@didtools/pkh-ethereum'\n\nconst ethProvider = // import/get your web3 eth provider\nconst addresses = await ethProvider.request({ method: 'eth_requestAccounts' })\nconst accountId = await getAccountId(ethProvider, addresses[0])\nconst authMethod = await EthereumWebAuth.getAuthMethod(ethProvider, accountId)\nconst session = await DIDSession.get(accountId, authMethod, { resources: [...]})\nconst did = session.did\n")),(0,r.kt)("h2",{id:"classes"},"Classes"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/api/classes/did_session.DIDSession"},"DIDSession"))),(0,r.kt)("h2",{id:"type-aliases"},"Type Aliases"),(0,r.kt)("h3",{id:"sessionparams"},"SessionParams"),(0,r.kt)("p",null,"\u01ac ",(0,r.kt)("strong",{parentName:"p"},"SessionParams"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"Object")),(0,r.kt)("h4",{id:"type-declaration"},"Type declaration"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"cacao")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"Cacao"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"did")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"DID"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"keySeed?")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"Uint8Array"))))),(0,r.kt)("h2",{id:"functions"},"Functions"),(0,r.kt)("h3",{id:"cacaocontainsresources"},"cacaoContainsResources"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"cacaoContainsResources"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"cacao"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"resources"),"): ",(0,r.kt)("inlineCode",{parentName:"p"},"boolean")),(0,r.kt)("h4",{id:"parameters"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"cacao")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"Cacao"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"resources")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"string"),"[]")))),(0,r.kt)("h4",{id:"returns"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"boolean")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"createdidcacao"},"createDIDCacao"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"createDIDCacao"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"didKey"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"cacao"),"): ",(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"DID"),">"),(0,r.kt)("h4",{id:"parameters-1"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"didKey")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"DID"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"cacao")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"Cacao"))))),(0,r.kt)("h4",{id:"returns-1"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"DID"),">"),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"createdidkey"},"createDIDKey"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"createDIDKey"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"seed?"),"): ",(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"DID"),">"),(0,r.kt)("h4",{id:"parameters-2"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"seed?")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"Uint8Array"))))),(0,r.kt)("h4",{id:"returns-2"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"DID"),">"),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"getaccountidbydid"},"getAccountIdByDID"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"getAccountIdByDID"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"did"),"): ",(0,r.kt)("inlineCode",{parentName:"p"},"AccountId")),(0,r.kt)("h4",{id:"parameters-3"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"did")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"string"))))),(0,r.kt)("h4",{id:"returns-3"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"AccountId")))}u.isMDXComponent=!0}}]);