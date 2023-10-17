"use strict";(self.webpackChunklazyvim=self.webpackChunklazyvim||[]).push([[530],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},c="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=u(n),d=i,f=c["".concat(s,".").concat(d)]||c[d]||g[d]||a;return n?r.createElement(f,o(o({ref:t},p),{},{components:n})):r.createElement(f,o({ref:t},p))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:i,o[1]=l;for(var u=2;u<a;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2332:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>c,frontMatter:()=>a,metadata:()=>l,toc:()=>u});var r=n(7462),i=(n(7294),n(3905));const a={},o="Included Plugins",l={unversionedId:"plugins/index",id:"plugins/index",title:"Included Plugins",description:"LazyNvim comes with some preconfigured plugins that are enabled by default. You don't need to do anything to set these up besides installing LazyNvim starter template. These are broken up into the following lua configuration files:",source:"@site/docs/plugins/index.md",sourceDirName:"plugins",slug:"/plugins/",permalink:"/plugins/",draft:!1,editUrl:"https://github.com/LazyVim/lazyvim.github.io/tree/master/docs/plugins/index.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Tips",permalink:"/configuration/tips"},next:{title:"Coding",permalink:"/plugins/coding"}},s={},u=[],p={toc:u};function c(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"included-plugins"},"Included Plugins"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"LazyNvim")," comes with some preconfigured plugins that are enabled by default. You don't need to do anything to set these up besides installing LazyNvim starter template. These are broken up into the following lua configuration files:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/plugins/coding"},"Coding")," - configures plugins that help general coding. E.g. snippets, autocompletion, language server protocol, etc."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/plugins/colorscheme"},"Colorscheme")," - adds some default color schemes (tokyonight and catppuccin)."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/plugins/editor"},"Editor")," - adds plugins that configure file explore, global search and replace, fuzzy finding, key binding seach, git integration, and highlighting."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/plugins/lsp"},"LSP")," - configures the Language Server Protocol tools and formatters."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/plugins/treesitter"},"TreeSitter")," - configures plugins for syntax highlighting."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/plugins/ui"},"UI")," - configures plugins that affect the way that the nvim UI works. E.g. status lines, tabs, indentation lines, icons, and other UI components."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/plugins/util"},"Util")," - some util plugins for measuring startup time, handling session persistance, and general shared functionality")),(0,i.kt)("p",null,"See each of the above docs for information on the defaults for each set of plugins and how to override the options."))}c.isMDXComponent=!0}}]);