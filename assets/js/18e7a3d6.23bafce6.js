"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8],{4852:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var r=n(9231);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var d=r.createContext({}),c=function(e){var t=r.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(d.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,d=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),p=c(n),h=i,m=p["".concat(d,".").concat(h)]||p[h]||l[h]||o;return n?r.createElement(m,s(s({ref:t},u),{},{components:n})):r.createElement(m,s({ref:t},u))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,s=new Array(o);s[0]=p;var a={};for(var d in t)hasOwnProperty.call(t,d)&&(a[d]=t[d]);a.originalType=e,a.mdxType="string"==typeof e?e:i,s[1]=a;for(var c=2;c<o;c++)s[c]=n[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},7389:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>l,frontMatter:()=>o,metadata:()=>a,toc:()=>c});var r=n(2203),i=(n(9231),n(4852));const o={title:"Upgrading DID Session"},s=void 0,a={unversionedId:"guides/upgrading-did-session",id:"guides/upgrading-did-session",title:"Upgrading DID Session",description:"Upgrading from did-session@0.x.x to did-session@1.x.x",source:"@site/docs/guides/upgrading-did-session.md",sourceDirName:"guides",slug:"/guides/upgrading-did-session",permalink:"/docs/guides/upgrading-did-session",draft:!1,tags:[],version:"current",frontMatter:{title:"Upgrading DID Session"},sidebar:"docs",previous:{title:"Using With ComposeDB Client",permalink:"/docs/guides/using-with-composedb-client"}},d={},c=[{value:"Upgrading from <code>did-session@0.x.x</code> to <code>did-session@1.x.x</code>",id:"upgrading-from-did-session0xx-to-did-session1xx",level:2}],u={toc:c};function l(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"upgrading-from-did-session0xx-to-did-session1xx"},"Upgrading from ",(0,i.kt)("inlineCode",{parentName:"h2"},"did-session@0.x.x")," to ",(0,i.kt)("inlineCode",{parentName:"h2"},"did-session@1.x.x")),(0,i.kt)("p",null,"AuthProviders change to AuthMethod interfaces. Similarly you can import the auth libraries you need. How you configure and manage\nthese AuthMethods may differ, but each will return an AuthMethod function to be used with did-session."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"// Before with v0.x.x\n//...\nimport { EthereumAuthProvider } from '@ceramicnetwork/blockchain-utils-linking'\n \nconst ethProvider = // import/get your web3 eth provider\nconst addresses = await ethProvider.enable()\nconst authProvider = new EthereumAuthProvider(ethProvider, addresses[0])\nconst session = new DIDSession({ authProvider })\nconst did = await session.authorize()\n\n// Now did-session@1.0.0\n...\nimport { EthereumWebAuth, getAccountId } from '@didtools/pkh-ethereum'\n \nconst ethProvider = // import/get your web3 eth provider\nconst addresses = await ethProvider.enable()\nconst accountId = await getAccountId(ethProvider, addresses[0])\nconst authMethod = await EthereumWebAuth.getAuthMethod(ethProvider, accountId)\nconst session = await DIDSession.authorize(authMethod, { resources: [...]})\nconst did = session.did\n")),(0,i.kt)("h1",{id:"upgrading-from-glazeddid-session-to-did-session"},"Upgrading From ",(0,i.kt)("inlineCode",{parentName:"h1"},"@glazed/did-session")," to ",(0,i.kt)("inlineCode",{parentName:"h1"},"did-session")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"authorize")," changes to a static method which returns a did-session instance and ",(0,i.kt)("inlineCode",{parentName:"p"},"getDID()")," becomes a ",(0,i.kt)("inlineCode",{parentName:"p"},"did")," getter. For example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"// Before @glazed/did-session\nconst session = new DIDSession({ authProvider })\nconst did = await session.authorize()\n\n// Now did-session\nconst session = await DIDSession.authorize(authProvider, { resources: [...]})\nconst did = session.did\n")),(0,i.kt)("p",null,"Requesting resources are required now when authorizing, before wildcard (access all) was the default. You can continue to use\nwildcard by passing the following ",(0,i.kt)("em",{parentName:"p"}," below. Wildcard is typically only used with ",(0,i.kt)("inlineCode",{parentName:"em"},"@glazed")," libraries and/or tile documents and\nit is best to switch over when possible, as the wildcard option may be ")," deprecated in the future. When using with\ncomposites/models you should request the minimum needed resources instead."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"const session = await DIDSession.authorize(authProvider, { resources: [`ceramic://*`]})\nconst did = session.did\n")))}l.isMDXComponent=!0}}]);