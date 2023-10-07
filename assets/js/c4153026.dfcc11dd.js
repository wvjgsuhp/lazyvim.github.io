"use strict";(self.webpackChunklazyvim=self.webpackChunklazyvim||[]).push([[4666],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),s=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(u.Provider,{value:t},e.children)},m="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=s(n),p=a,d=m["".concat(u,".").concat(p)]||m[p]||f[p]||o;return n?r.createElement(d,i(i({ref:t},c),{},{components:n})):r.createElement(d,i({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=p;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l[m]="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},5162:(e,t,n)=>{n.d(t,{Z:()=>i});var r=n(7294),a=n(6010);const o="tabItem_Ymn6";function i(e){let{children:t,hidden:n,className:i}=e;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(o,i),hidden:n},t)}},4866:(e,t,n)=>{n.d(t,{Z:()=>x});var r=n(7462),a=n(7294),o=n(6010),i=n(2466),l=n(6550),u=n(1980),s=n(7392),c=n(12);function m(e){return function(e){return a.Children.map(e,(e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:a}}=e;return{value:t,label:n,attributes:r,default:a}}))}function f(e){const{values:t,children:n}=e;return(0,a.useMemo)((()=>{const e=t??m(n);return function(e){const t=(0,s.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function p(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function d(e){let{queryString:t=!1,groupId:n}=e;const r=(0,l.k6)(),o=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,u._X)(o),(0,a.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(r.location.search);t.set(o,e),r.replace({...r.location,search:t.toString()})}),[o,r])]}function b(e){const{defaultValue:t,queryString:n=!1,groupId:r}=e,o=f(e),[i,l]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:o}))),[u,s]=d({queryString:n,groupId:r}),[m,b]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,o]=(0,c.Nk)(n);return[r,(0,a.useCallback)((e=>{n&&o.set(e)}),[n,o])]}({groupId:r}),y=(()=>{const e=u??m;return p({value:e,tabValues:o})?e:null})();(0,a.useLayoutEffect)((()=>{y&&l(y)}),[y]);return{selectedValue:i,selectValue:(0,a.useCallback)((e=>{if(!p({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);l(e),s(e),b(e)}),[s,b,o]),tabValues:o}}var y=n(2389);const h="tabList__CuJ",v="tabItem_LNqP";function g(e){let{className:t,block:n,selectedValue:l,selectValue:u,tabValues:s}=e;const c=[],{blockElementScrollPositionUntilNextRender:m}=(0,i.o5)(),f=e=>{const t=e.currentTarget,n=c.indexOf(t),r=s[n].value;r!==l&&(m(t),u(r))},p=e=>{let t=null;switch(e.key){case"Enter":f(e);break;case"ArrowRight":{const n=c.indexOf(e.currentTarget)+1;t=c[n]??c[0];break}case"ArrowLeft":{const n=c.indexOf(e.currentTarget)-1;t=c[n]??c[c.length-1];break}}t?.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":n},t)},s.map((e=>{let{value:t,label:n,attributes:i}=e;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:l===t?0:-1,"aria-selected":l===t,key:t,ref:e=>c.push(e),onKeyDown:p,onClick:f},i,{className:(0,o.Z)("tabs__item",v,i?.className,{"tabs__item--active":l===t})}),n??t)})))}function k(e){let{lazy:t,children:n,selectedValue:r}=e;const o=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===r));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},o.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==r}))))}function w(e){const t=b(e);return a.createElement("div",{className:(0,o.Z)("tabs-container",h)},a.createElement(g,(0,r.Z)({},e,t)),a.createElement(k,(0,r.Z)({},e,t)))}function x(e){const t=(0,y.Z)();return a.createElement(w,(0,r.Z)({key:String(t)},e))}},3932:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>u,default:()=>p,frontMatter:()=>l,metadata:()=>s,toc:()=>m});var r=n(7462),a=(n(7294),n(3905)),o=n(4866),i=n(5162);const l={},u="conform.nvim",s={unversionedId:"extras/formatting/conform",id:"extras/formatting/conform",title:"conform.nvim",description:"When conform.nvim is enabled, it will automatically be used as the",source:"@site/docs/extras/formatting/conform.md",sourceDirName:"extras/formatting",slug:"/extras/formatting/conform",permalink:"/extras/formatting/conform",draft:!1,editUrl:"https://github.com/LazyVim/lazyvim.github.io/tree/master/docs/extras/formatting/conform.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Mini Files",permalink:"/extras/editor/mini-files"},next:{title:"Prettier",permalink:"/extras/formatting/prettier"}},c={},m=[{value:"conform.nvim",id:"conformnvim-1",level:2}],f={toc:m};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"conformnvim"},(0,a.kt)("inlineCode",{parentName:"h1"},"conform.nvim")),(0,a.kt)("p",null,"When ",(0,a.kt)("inlineCode",{parentName:"p"},"conform.nvim")," is enabled, it will automatically be used as the\nformatter for all files that it supports.\nWhen no conform formatter is available for a filetype, LSP format\nwill be used instead."),(0,a.kt)("p",null,"Any formatter options added to ",(0,a.kt)("inlineCode",{parentName:"p"},"opts.formatters")," will be merged with\nthe builtin formatters."),(0,a.kt)("p",null,"To use this, add it to your ",(0,a.kt)("strong",{parentName:"p"},"lazy.nvim")," imports:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua",metastring:'title="lua/config/lazy.lua" {4}',title:'"lua/config/lazy.lua"',"{4}":!0},'require("lazy").setup({\n  spec = {\n    { "LazyVim/LazyVim", import = "lazyvim.plugins" },\n    { import = "lazyvim.plugins.extras.formatting.conform" },\n    { import = "plugins" },\n  },\n})\n')),(0,a.kt)("h2",{id:"conformnvim-1"},(0,a.kt)("a",{parentName:"h2",href:"https://github.com/stevearc/conform.nvim"},"conform.nvim")),(0,a.kt)(o.Z,{mdxType:"Tabs"},(0,a.kt)(i.Z,{value:"opts",label:"Options",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua"},'opts = {\n  formatters_by_ft = {\n    lua = { "stylua" },\n    fish = { "fish_indent" },\n    sh = { "shfmt" },\n  },\n  -- LazyVim will merge the options you set here with builtin formatters.\n  -- You can also define any custom formatters here.\n  ---@type table<string,table>\n  formatters = {\n    injected = { options = { ignore_errors = true } },\n    -- -- Example of using dprint only when a dprint.json file is present\n    -- dprint = {\n    --   condition = function(ctx)\n    --     return vim.fs.find({ "dprint.json" }, { path = ctx.filename, upward = true })[1]\n    --   end,\n    -- },\n  },\n}\n'))),(0,a.kt)(i.Z,{value:"code",label:"Full Spec",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua"},'{\n  "stevearc/conform.nvim",\n  dependencies = { "mason.nvim" },\n  lazy = true,\n  cmd = "ConformInfo",\n  keys = {\n    {\n      "<leader>cF",\n      function()\n        require("conform").format({ formatters = { "injected" } })\n      end,\n      mode = { "n", "v" },\n      desc = "Format Injected Langs",\n    },\n  },\n  init = function()\n    vim.o.formatexpr = "v:lua.require\'conform\'.formatexpr()"\n    -- Install the conform formatter on VeryLazy\n    require("lazyvim.util").on_very_lazy(function()\n      require("lazyvim.plugins.lsp.format").custom_format = function(buf)\n        return require("conform").format({ bufnr = buf })\n      end\n    end)\n  end,\n  opts = {\n    formatters_by_ft = {\n      lua = { "stylua" },\n      fish = { "fish_indent" },\n      sh = { "shfmt" },\n    },\n    -- LazyVim will merge the options you set here with builtin formatters.\n    -- You can also define any custom formatters here.\n    ---@type table<string,table>\n    formatters = {\n      injected = { options = { ignore_errors = true } },\n      -- -- Example of using dprint only when a dprint.json file is present\n      -- dprint = {\n      --   condition = function(ctx)\n      --     return vim.fs.find({ "dprint.json" }, { path = ctx.filename, upward = true })[1]\n      --   end,\n      -- },\n    },\n  },\n  config = function(_, opts)\n    opts.formatters = opts.formatters or {}\n    for name, formatter in pairs(opts.formatters) do\n      if type(formatter) == "table" then\n        local ok, defaults = pcall(require, "conform.formatters." .. name)\n        if ok and type(defaults) == "table" then\n          opts.formatters[name] = vim.tbl_deep_extend("force", {}, defaults, formatter)\n        end\n      end\n    end\n    require("conform").setup(opts)\n  end,\n}\n')))))}p.isMDXComponent=!0}}]);