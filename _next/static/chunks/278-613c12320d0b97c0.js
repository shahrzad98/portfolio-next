"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[278],{1526:(e,t,r)=>{r.d(t,{filterProps:()=>n});function n(e){return Object.keys(e).reduce((t,r)=>(void 0!==e[r]&&(t[r]=e[r]),t),{})}},2270:(e,t,r)=>{r.d(t,{camelToKebabCase:()=>n});function n(e){return e.replace(/[A-Z]/g,e=>"-".concat(e.toLowerCase()))}},3097:(e,t,r)=>{r.d(t,{K:()=>n});function n(e){return e}},3131:(e,t,r)=>{r.d(t,{MantineThemeContext:()=>s,MantineThemeProvider:()=>f,useMantineTheme:()=>u,useSafeMantineTheme:()=>d});var n=r(95155),o=r(12115),a=r(67118),i=r(41750);function l(e){return!(e<0)&&!(e>9)&&parseInt(e.toString(),10)===e}function c(e){if(!(e.primaryColor in e.colors))throw Error("[@mantine/core] MantineProvider: Invalid theme.primaryColor, it accepts only key of theme.colors, learn more – https://mantine.dev/theming/colors/#primary-color");if("object"==typeof e.primaryShade&&(!l(e.primaryShade.dark)||!l(e.primaryShade.light))||"number"==typeof e.primaryShade&&!l(e.primaryShade))throw Error("[@mantine/core] MantineProvider: Invalid theme.primaryShade, it accepts only 0-9 integers or an object { light: 0-9, dark: 0-9 }")}let s=(0,o.createContext)(null),d=()=>(0,o.useContext)(s)||a.S;function u(){let e=(0,o.useContext)(s);if(!e)throw Error("@mantine/core: MantineProvider was not found in component tree, make sure you have it in your app");return e}function f(e){let{theme:t,children:r,inherit:l=!0}=e,u=d(),f=(0,o.useMemo)(()=>(function(e,t){if(!t)return c(e),e;let r=(0,i.$)(e,t);return t.fontFamily&&!t.headings?.fontFamily&&(r.headings.fontFamily=t.fontFamily),c(r),r})(l?u:a.S,t),[t,u,l]);return(0,n.jsx)(s.Provider,{value:f,children:r})}f.displayName="@mantine/core/MantineThemeProvider"},5903:(e,t,r)=>{function n(e){return"0rem"===e?"0rem":`calc(${e} * var(--mantine-scale))`}function o(e,{shouldScale:t=!1}={}){return function r(o){if(0===o||"0"===o)return`0${e}`;if("number"==typeof o){let r=`${o/16}${e}`;return t?n(r):r}if("string"==typeof o){if(""===o||o.startsWith("calc(")||o.startsWith("clamp(")||o.includes("rgba("))return o;if(o.includes(","))return o.split(",").map(e=>r(e)).join(",");if(o.includes(" "))return o.split(" ").map(e=>r(e)).join(" ");if(o.includes(e))return t?n(o):o;let a=o.replace("px","");if(!Number.isNaN(Number(a))){let r=`${Number(a)/16}${e}`;return t?n(r):r}}return o}}r.d(t,{D:()=>a,em:()=>i});let a=o("rem",{shouldScale:!0}),i=o("em")},6325:(e,t,r)=>{r.d(t,{parseStyleProps:()=>f});var n=r(19224);r(12115),r(95155);var o=r(5903),a=r(98271);function i(e,t){let r=(0,a.parseThemeColor)({color:e,theme:t});return"dimmed"===r.color?"var(--mantine-color-dimmed)":"bright"===r.color?"var(--mantine-color-bright)":r.variable?"var(".concat(r.variable,")"):r.color}let l={text:"var(--mantine-font-family)",mono:"var(--mantine-font-family-monospace)",monospace:"var(--mantine-font-family-monospace)",heading:"var(--mantine-font-family-headings)",headings:"var(--mantine-font-family-headings)"},c=["h1","h2","h3","h4","h5","h6"],s=["h1","h2","h3","h4","h5","h6"],d={color:i,textColor:function(e,t){let r=(0,a.parseThemeColor)({color:e,theme:t});return r.isThemeColor&&void 0===r.shade?"var(--mantine-color-".concat(r.color,"-text)"):i(e,t)},fontSize:function(e,t){return"string"==typeof e&&e in t.fontSizes?"var(--mantine-font-size-".concat(e,")"):"string"==typeof e&&c.includes(e)?"var(--mantine-".concat(e,"-font-size)"):"number"==typeof e||"string"==typeof e?(0,o.D)(e):e},spacing:function(e,t){if("number"==typeof e)return(0,o.D)(e);if("string"==typeof e){let r=e.replace("-","");if(!(r in t.spacing))return(0,o.D)(e);let n="--mantine-spacing-".concat(r);return e.startsWith("-")?"calc(var(".concat(n,") * -1)"):"var(".concat(n,")")}return e},identity:function(e){return e},size:function(e){return"number"==typeof e?(0,o.D)(e):e},lineHeight:function(e,t){return"string"==typeof e&&e in t.lineHeights?"var(--mantine-line-height-".concat(e,")"):"string"==typeof e&&s.includes(e)?"var(--mantine-".concat(e,"-line-height)"):e},fontFamily:function(e){return"string"==typeof e&&e in l?l[e]:e},border:function(e,t){if("number"==typeof e)return(0,o.D)(e);if("string"==typeof e){let[r,n,...a]=e.split(" ").filter(e=>""!==e.trim()),l="".concat((0,o.D)(r));return n&&(l+=" ".concat(n)),a.length>0&&(l+=" ".concat(i(a.join(" "),t))),l.trim()}return e}};function u(e){return e.replace("(min-width: ","").replace("em)","")}function f(e){let{styleProps:t,data:r,theme:o}=e;return function(e){let{media:t,...r}=e,n=Object.keys(t).sort((e,t)=>Number(u(e))-Number(u(t))).map(e=>({query:e,styles:t[e]}));return{...r,media:n}}((0,n.keys)(t).reduce((e,a)=>{var i,l;if("hiddenFrom"===a||"visibleFrom"===a||"sx"===a)return e;let c=r[a],s=Array.isArray(c.property)?c.property:[c.property],u="object"==typeof(l=t[a])&&null!==l?"base"in l?l.base:void 0:l;if(!function(e){if("object"!=typeof e||null===e)return!1;let t=Object.keys(e);return 1!==t.length||"base"!==t[0]}(t[a]))return s.forEach(t=>{e.inlineStyles[t]=d[c.type](u,o)}),e;e.hasResponsiveStyles=!0;let f="object"==typeof(i=t[a])&&null!==i?(0,n.keys)(i).filter(e=>"base"!==e):[];return s.forEach(r=>{u&&(e.styles[r]=d[c.type](u,o)),f.forEach(n=>{var i;let l="(min-width: ".concat(o.breakpoints[n],")");e.media[l]={...e.media[l],[r]:d[c.type]("object"==typeof(i=t[a])&&null!==i&&n in i?i[n]:i,o)}})}),e},{hasResponsiveStyles:!1,styles:{},inlineStyles:{},media:{}}))}},6654:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"useMergedRef",{enumerable:!0,get:function(){return o}});let n=r(12115);function o(e,t){let r=(0,n.useRef)(null),o=(0,n.useRef)(null);return(0,n.useCallback)(n=>{if(null===n){let e=r.current;e&&(r.current=null,e());let t=o.current;t&&(o.current=null,t())}else e&&(r.current=a(e,n)),t&&(o.current=a(t,n))},[e,t])}function a(e,t){if("function"!=typeof e)return e.current=t,()=>{e.current=null};{let r=e(t);return"function"==typeof r?r:()=>e(null)}}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},13656:(e,t,r)=>{r.d(t,{MantineContext:()=>o,useMantineClassNamesPrefix:()=>l,useMantineContext:()=>a,useMantineCssVariablesResolver:()=>i,useMantineEnv:()=>p,useMantineIsHeadless:()=>d,useMantineStyleNonce:()=>c,useMantineStylesTransform:()=>f,useMantineSxTransform:()=>u,useMantineWithStaticClasses:()=>s});var n=r(12115);let o=(0,n.createContext)(null);function a(){let e=(0,n.useContext)(o);if(!e)throw Error("[@mantine/core] MantineProvider was not found in tree");return e}function i(){return a().cssVariablesResolver}function l(){return a().classNamesPrefix}function c(){return a().getStyleNonce}function s(){return a().withStaticClasses}function d(){return a().headless}function u(){var e;return null===(e=a().stylesTransform)||void 0===e?void 0:e.sx}function f(){var e;return null===(e=a().stylesTransform)||void 0===e?void 0:e.styles}function p(){return a().env||"default"}},18512:(e,t,r)=>{r.d(t,{getGradient:()=>o});var n=r(71180);function o(e,t){var r,o;let a={from:(null==e?void 0:e.from)||t.defaultGradient.from,to:(null==e?void 0:e.to)||t.defaultGradient.to,deg:null!==(o=null!==(r=null==e?void 0:e.deg)&&void 0!==r?r:t.defaultGradient.deg)&&void 0!==o?o:0},i=(0,n.getThemeColor)(a.from,t),l=(0,n.getThemeColor)(a.to,t);return"linear-gradient(".concat(a.deg,"deg, ").concat(i," 0%, ").concat(l," 100%)")}},19224:(e,t,r)=>{r.d(t,{keys:()=>n});function n(e){return Object.keys(e)}},19787:(e,t,r)=>{r.d(t,{resolveClassNames:()=>a});var n=r(52596);let o={};function a(e){let{theme:t,classNames:r,props:a,stylesCtx:i}=e;return function(e){let t={};return e.forEach(e=>{Object.entries(e).forEach(e=>{let[r,o]=e;t[r]?t[r]=(0,n.A)(t[r],o):t[r]=o})}),t}((Array.isArray(r)?r:[r]).map(e=>"function"==typeof e?e(t,a,i):e||o))}},21481:(e,t,r)=>{r.d(t,{AvatarGroup:()=>m});var n=r(95155);r(12115);var o=r(56204),a=r(68918),i=r(43664),l=r(53791),c=r(69604),s=r(36960),d=r(54154),u=r(64796);let f={},p=(0,a.createVarsResolver)((e,t)=>{let{spacing:r}=t;return{group:{"--ag-spacing":(0,o.getSpacing)(r)}}}),m=(0,s.factory)((e,t)=>{let r=(0,i.useProps)("AvatarGroup",f,e),{classNames:o,className:a,style:s,styles:m,unstyled:y,vars:v,spacing:h,...g}=r,b=(0,l.useStyles)({name:"AvatarGroup",classes:u.A,props:r,className:a,style:s,classNames:o,styles:m,unstyled:y,vars:v,varsResolver:p,rootSelector:"group"});return(0,n.jsx)(d.G,{value:!0,children:(0,n.jsx)(c.Box,{ref:t,...b("group"),...g})})});m.classes=u.A,m.displayName="@mantine/core/AvatarGroup"},30128:(e,t,r)=>{r.d(t,{getPrimaryShade:()=>n});function n(e,t){return"number"==typeof e.primaryShade?e.primaryShade:"dark"===t?e.primaryShade.dark:e.primaryShade.light}},34034:(e,t,r)=>{r.d(t,{stylesToString:()=>i});var n=r(19224),o=r(2270);function a(e){return(0,n.keys)(e).reduce((t,r)=>void 0!==e[r]?"".concat(t).concat((0,o.camelToKebabCase)(r),":").concat(e[r],";"):t,"").trim()}function i(e){let{selector:t,styles:r,media:n,container:o}=e,i=r?a(r):"",l=Array.isArray(n)?n.map(e=>"@media".concat(e.query,"{").concat(t,"{").concat(a(e.styles),"}}")):[],c=Array.isArray(o)?o.map(e=>"@container ".concat(e.query,"{").concat(t,"{").concat(a(e.styles),"}}")):[];return"".concat(i?"".concat(t,"{").concat(i,"}"):"").concat(l.join("")).concat(c.join("")).trim()}r(12115),r(95155)},36960:(e,t,r)=>{r.d(t,{D:()=>a,factory:()=>l,getWithProps:()=>i});var n=r(95155),o=r(12115);function a(e){return e}function i(e){return t=>{let r=(0,o.forwardRef)((r,o)=>(0,n.jsx)(e,{...t,...r,ref:o}));return r.extend=e.extend,r.displayName="WithProps(".concat(e.displayName,")"),r}}function l(e){let t=(0,o.forwardRef)(e);return t.extend=a,t.withProps=e=>{let r=(0,o.forwardRef)((r,o)=>(0,n.jsx)(t,{...e,...r,ref:o}));return r.extend=t.extend,r.displayName="WithProps(".concat(t.displayName,")"),r},t}},38792:(e,t,r)=>{r.d(t,{K:()=>n});function n(e){return/^#?([0-9A-F]{3}){1,2}([0-9A-F]{2})?$/i.test(e)?function(e){let t=e.replace("#","");if(3===t.length){let e=t.split("");t=[e[0],e[0],e[1],e[1],e[2],e[2]].join("")}if(8===t.length){let e=parseInt(t.slice(6,8),16)/255;return{r:parseInt(t.slice(0,2),16),g:parseInt(t.slice(2,4),16),b:parseInt(t.slice(4,6),16),a:e}}let r=parseInt(t,16);return{r:r>>16&255,g:r>>8&255,b:255&r,a:1}}(e):e.startsWith("rgb")?function(e){let[t,r,n,o]=e.replace(/[^0-9,./]/g,"").split(/[/,]/).map(Number);return{r:t,g:r,b:n,a:o||1}}(e):e.startsWith("hsl")?function(e){let t,r,n;let o=e.match(/^hsla?\(\s*(\d+)\s*,\s*(\d+%)\s*,\s*(\d+%)\s*(,\s*(0?\.\d+|\d+(\.\d+)?))?\s*\)$/i);if(!o)return{r:0,g:0,b:0,a:1};let a=parseInt(o[1],10),i=parseInt(o[2],10)/100,l=parseInt(o[3],10)/100,c=o[5]?parseFloat(o[5]):void 0,s=(1-Math.abs(2*l-1))*i,d=a/60,u=s*(1-Math.abs(d%2-1)),f=l-s/2;return d>=0&&d<1?(t=s,r=u,n=0):d>=1&&d<2?(t=u,r=s,n=0):d>=2&&d<3?(t=0,r=s,n=u):d>=3&&d<4?(t=0,r=u,n=s):d>=4&&d<5?(t=u,r=0,n=s):(t=s,r=0,n=u),{r:Math.round((t+f)*255),g:Math.round((r+f)*255),b:Math.round((n+f)*255),a:c||1}}(e):{r:0,g:0,b:0,a:1}}},39926:(e,t,r)=>{r.d(t,{Avatar:()=>g});var n=r(95155),o=r(12115),a=r(56204),i=r(68918),l=r(43664),c=r(53791),s=r(69604),d=r(64511),u=r(21481),f=r(54154);function p(e){return(0,n.jsx)("svg",{...e,"data-avatar-placeholder-icon":!0,viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,n.jsx)("path",{d:"M0.877014 7.49988C0.877014 3.84219 3.84216 0.877045 7.49985 0.877045C11.1575 0.877045 14.1227 3.84219 14.1227 7.49988C14.1227 11.1575 11.1575 14.1227 7.49985 14.1227C3.84216 14.1227 0.877014 11.1575 0.877014 7.49988ZM7.49985 1.82704C4.36683 1.82704 1.82701 4.36686 1.82701 7.49988C1.82701 8.97196 2.38774 10.3131 3.30727 11.3213C4.19074 9.94119 5.73818 9.02499 7.50023 9.02499C9.26206 9.02499 10.8093 9.94097 11.6929 11.3208C12.6121 10.3127 13.1727 8.97172 13.1727 7.49988C13.1727 4.36686 10.6328 1.82704 7.49985 1.82704ZM10.9818 11.9787C10.2839 10.7795 8.9857 9.97499 7.50023 9.97499C6.01458 9.97499 4.71624 10.7797 4.01845 11.9791C4.97952 12.7272 6.18765 13.1727 7.49985 13.1727C8.81227 13.1727 10.0206 12.727 10.9818 11.9787ZM5.14999 6.50487C5.14999 5.207 6.20212 4.15487 7.49999 4.15487C8.79786 4.15487 9.84999 5.207 9.84999 6.50487C9.84999 7.80274 8.79786 8.85487 7.49999 8.85487C6.20212 8.85487 5.14999 7.80274 5.14999 6.50487ZM7.49999 5.10487C6.72679 5.10487 6.09999 5.73167 6.09999 6.50487C6.09999 7.27807 6.72679 7.90487 7.49999 7.90487C8.27319 7.90487 8.89999 7.27807 8.89999 6.50487C8.89999 5.73167 8.27319 5.10487 7.49999 5.10487Z",fill:"currentColor",fillRule:"evenodd",clipRule:"evenodd"})})}let m=["blue","cyan","grape","green","indigo","lime","orange","pink","red","teal","violet"];var y=r(64796);let v={},h=(0,i.createVarsResolver)((e,t)=>{let{size:r,radius:n,variant:o,gradient:i,color:l,autoContrast:c,name:s,allowedInitialsColors:d}=t,u="initials"===l&&"string"==typeof s?function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:m,r=Math.abs(function(e){let t=0;for(let r=0;r<e.length;r+=1)t=(t<<5)-t+e.charCodeAt(r)|0;return t}(e))%t.length;return t[r]}(s,d):l,f=e.variantColorResolver({color:u||"gray",theme:e,gradient:i,variant:o||"light",autoContrast:c});return{root:{"--avatar-size":(0,a.getSize)(r,"avatar-size"),"--avatar-radius":void 0===n?void 0:(0,a.getRadius)(n),"--avatar-bg":u||o?f.background:void 0,"--avatar-color":u||o?f.color:void 0,"--avatar-bd":u||o?f.border:void 0}}}),g=(0,d.polymorphicFactory)((e,t)=>{let r=(0,l.useProps)("Avatar",v,e),{classNames:a,className:i,style:d,styles:u,unstyled:m,vars:g,src:b,alt:C,radius:S,color:D,gradient:x,imageProps:k,children:w,autoContrast:M,mod:$,name:A,allowedInitialsColors:T,...N}=r,j=(0,f.D)(),[P,R]=(0,o.useState)(!b),z=(0,c.useStyles)({name:"Avatar",props:r,classes:y.A,className:i,style:d,classNames:a,styles:u,unstyled:m,vars:g,varsResolver:h});return(0,o.useEffect)(()=>R(!b),[b]),(0,n.jsx)(s.Box,{...z("root"),mod:[{"within-group":j.withinGroup},$],ref:t,...N,children:P?(0,n.jsx)("span",{...z("placeholder"),title:C,children:w||"string"==typeof A&&function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2,r=e.split(" ");return 1===r.length?e.slice(0,t).toUpperCase():r.map(e=>e[0]).slice(0,t).join("").toUpperCase()}(A)||(0,n.jsx)(p,{})}):(0,n.jsx)("img",{...k,...z("image"),src:b,alt:C,onError:e=>{var t;R(!0),null==k||null===(t=k.onError)||void 0===t||t.call(k,e)}})})});g.classes=y.A,g.displayName="@mantine/core/Avatar",g.Group=u.AvatarGroup},41750:(e,t,r)=>{function n(e){return e&&"object"==typeof e&&!Array.isArray(e)}r.d(t,{$:()=>function e(t,r){let o={...t};return n(t)&&n(r)&&Object.keys(r).forEach(a=>{n(r[a])&&a in t?o[a]=e(o[a],r[a]):o[a]=r[a]}),o}})},43664:(e,t,r)=>{r.d(t,{useProps:()=>a});var n=r(1526);r(12115),r(95155);var o=r(3131);function a(e,t,r){var a;let i=(0,o.useMantineTheme)(),l=null===(a=i.components[e])||void 0===a?void 0:a.defaultProps,c="function"==typeof l?l(i):l;return{...t,...c,...(0,n.filterProps)(r)}}},46390:(e,t,r)=>{r.d(t,{useRandomClassName:()=>o});var n=r(12115);function o(){let e=(0,n.useId)().replace(/:/g,"");return"__m__-".concat(e)}},52596:(e,t,r)=>{r.d(t,{A:()=>n});let n=function(){for(var e,t,r=0,n="",o=arguments.length;r<o;r++)(e=arguments[r])&&(t=function e(t){var r,n,o="";if("string"==typeof t||"number"==typeof t)o+=t;else if("object"==typeof t){if(Array.isArray(t)){var a=t.length;for(r=0;r<a;r++)t[r]&&(n=e(t[r]))&&(o&&(o+=" "),o+=n)}else for(n in t)t[n]&&(o&&(o+=" "),o+=n)}return o}(e))&&(n&&(n+=" "),n+=t);return n}},53776:(e,t,r)=>{r.d(t,{Divider:()=>m});var n=r(95155);r(12115);var o=r(56204),a=r(68918),i=r(71180),l=r(43664),c=r(53791),s=r(69604),d=r(36960),u={root:"m_3eebeb36",label:"m_9e365f20"};let f={orientation:"horizontal"},p=(0,a.createVarsResolver)((e,t)=>{let{color:r,variant:n,size:a}=t;return{root:{"--divider-color":r?(0,i.getThemeColor)(r,e):void 0,"--divider-border-style":n,"--divider-size":(0,o.getSize)(a,"divider-size")}}}),m=(0,d.factory)((e,t)=>{let r=(0,l.useProps)("Divider",f,e),{classNames:o,className:a,style:i,styles:d,unstyled:m,vars:y,color:v,orientation:h,label:g,labelPosition:b,mod:C,...S}=r,D=(0,c.useStyles)({name:"Divider",classes:u,props:r,className:a,style:i,classNames:o,styles:d,unstyled:m,vars:y,varsResolver:p});return(0,n.jsx)(s.Box,{ref:t,mod:[{orientation:h,"with-label":!!g},C],...D("root"),...S,role:"separator",children:g&&(0,n.jsx)(s.Box,{component:"span",mod:{position:b},...D("label"),children:g})})});m.classes=u,m.displayName="@mantine/core/Divider"},53791:(e,t,r)=>{r.d(t,{useStyles:()=>f}),r(12115),r(95155);var n=r(13656),o=r(3131),a=r(52596),i=r(97677),l=r(19787);function c(e){let{selector:t,stylesCtx:r,theme:n,classNames:o,props:a}=e;return(0,l.resolveClassNames)({theme:n,classNames:o,props:a,stylesCtx:r})[t]}var s=r(84092);function d(e){let{style:t,theme:r}=e;return Array.isArray(t)?[...t].reduce((e,t)=>({...e,...d({style:t,theme:r})}),{}):"function"==typeof t?t(r):null==t?{}:t}var u=r(1526);function f(e){let{name:t,classes:r,props:f,stylesCtx:p,className:m,style:y,rootSelector:v="root",unstyled:h,classNames:g,styles:b,vars:C,varsResolver:S}=e,D=(0,o.useMantineTheme)(),x=(0,n.useMantineClassNamesPrefix)(),k=(0,n.useMantineWithStaticClasses)(),w=(0,n.useMantineIsHeadless)(),M=(Array.isArray(t)?t:[t]).filter(e=>e),{withStylesTransform:$,getTransformedStyles:A}=function(e){var t;let{props:r,stylesCtx:a,themeName:i}=e,l=(0,o.useMantineTheme)(),c=null===(t=(0,n.useMantineStylesTransform)())||void 0===t?void 0:t();return{getTransformedStyles:e=>c?[...e.map(e=>c(e,{props:r,theme:l,ctx:a})),...i.map(e=>{var t;return c(null===(t=l.components[e])||void 0===t?void 0:t.styles,{props:r,theme:l,ctx:a})})].filter(Boolean):[],withStylesTransform:!!c}}({props:f,stylesCtx:p,themeName:M});return(e,t)=>({className:function(e){let{theme:t,options:r,themeName:n,selector:o,classNamesPrefix:s,classNames:d,classes:u,unstyled:f,className:p,rootSelector:m,props:y,stylesCtx:v,withStaticClasses:h,headless:g,transformedStyles:b}=e;return(0,a.A)((0,i.K)({theme:t,options:r,unstyled:f||g}),function(e){let{themeName:t,theme:r,selector:n,props:o,stylesCtx:a}=e;return t.map(e=>{var t,i;return null===(t=(0,l.resolveClassNames)({theme:r,classNames:null===(i=r.components[e])||void 0===i?void 0:i.classNames,props:o,stylesCtx:a}))||void 0===t?void 0:t[n]})}({theme:t,themeName:n,selector:o,props:y,stylesCtx:v}),function(e){let{options:t,classes:r,selector:n,unstyled:o}=e;return(null==t?void 0:t.variant)&&!o?r["".concat(n,"--").concat(t.variant)]:void 0}({options:r,classes:u,selector:o,unstyled:f}),c({selector:o,stylesCtx:v,theme:t,classNames:d,props:y}),c({selector:o,stylesCtx:v,theme:t,classNames:b,props:y}),function(e){let{selector:t,stylesCtx:r,options:n,props:o,theme:a}=e;return(0,l.resolveClassNames)({theme:a,classNames:null==n?void 0:n.classNames,props:(null==n?void 0:n.props)||o,stylesCtx:r})[t]}({selector:o,stylesCtx:v,options:r,props:y,theme:t}),function(e){let{rootSelector:t,selector:r,className:n}=e;return t===r?n:void 0}({rootSelector:m,selector:o,className:p}),function(e){let{selector:t,classes:r,unstyled:n}=e;return n?void 0:r[t]}({selector:o,classes:u,unstyled:f||g}),h&&!g&&function(e){let{themeName:t,classNamesPrefix:r,selector:n,withStaticClass:o}=e;return!1===o?[]:t.map(e=>"".concat(r,"-").concat(e,"-").concat(n))}({themeName:n,classNamesPrefix:s,selector:o,withStaticClass:null==r?void 0:r.withStaticClass}),null==r?void 0:r.className)}({theme:D,options:t,themeName:M,selector:e,classNamesPrefix:x,classNames:g,classes:r,unstyled:h,className:m,rootSelector:v,props:f,stylesCtx:p,withStaticClasses:k,headless:w,transformedStyles:A([null==t?void 0:t.styles,b])}),style:function(e){let{theme:t,themeName:r,selector:n,options:o,props:a,stylesCtx:i,rootSelector:l,styles:c,style:f,vars:p,varsResolver:m,headless:y,withStylesTransform:v}=e;return{...!v&&function(e){let{theme:t,themeName:r,props:n,stylesCtx:o,selector:a}=e;return r.map(e=>{var r;return(0,s.resolveStyles)({theme:t,styles:null===(r=t.components[e])||void 0===r?void 0:r.styles,props:n,stylesCtx:o})[a]}).reduce((e,t)=>({...e,...t}),{})}({theme:t,themeName:r,props:a,stylesCtx:i,selector:n}),...!v&&(0,s.resolveStyles)({theme:t,styles:c,props:a,stylesCtx:i})[n],...!v&&(0,s.resolveStyles)({theme:t,styles:null==o?void 0:o.styles,props:(null==o?void 0:o.props)||a,stylesCtx:i})[n],...function(e){var t;let{vars:r,varsResolver:n,theme:o,props:a,stylesCtx:i,selector:l,themeName:c,headless:s}=e;return null===(t=[s?{}:null==n?void 0:n(o,a,i),...c.map(e=>{var t,r,n;return null===(n=o.components)||void 0===n?void 0:null===(r=n[e])||void 0===r?void 0:null===(t=r.vars)||void 0===t?void 0:t.call(r,o,a,i)}),null==r?void 0:r(o,a,i)].reduce((e,t)=>(t&&Object.keys(t).forEach(r=>{e[r]={...e[r],...(0,u.filterProps)(t[r])}}),e),{}))||void 0===t?void 0:t[l]}({theme:t,props:a,stylesCtx:i,vars:p,varsResolver:m,selector:n,themeName:r,headless:y}),...l===n?d({style:f,theme:t}):null,...d({style:null==o?void 0:o.style,theme:t})}}({theme:D,themeName:M,selector:e,options:t,props:f,stylesCtx:p,rootSelector:v,styles:b,style:y,vars:C,varsResolver:S,headless:w,withStylesTransform:$})})}},54154:(e,t,r)=>{r.d(t,{D:()=>i,G:()=>a});var n=r(12115);let o=(0,n.createContext)(null),a=o.Provider;function i(){return{withinGroup:!!(0,n.useContext)(o)}}},56204:(e,t,r)=>{r.d(t,{getFontSize:()=>c,getLineHeight:()=>s,getRadius:()=>l,getShadow:()=>d,getSize:()=>a,getSpacing:()=>i});var n=r(78772),o=r(5903);function a(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"size",r=!(arguments.length>2)||void 0===arguments[2]||arguments[2];if(void 0!==e)return(0,n.isNumberLike)(e)?r?(0,o.D)(e):e:"var(--".concat(t,"-").concat(e,")")}function i(e){return a(e,"mantine-spacing")}function l(e){return void 0===e?"var(--mantine-radius-default)":a(e,"mantine-radius")}function c(e){return a(e,"mantine-font-size")}function s(e){return a(e,"mantine-line-height",!1)}function d(e){if(e)return a(e,"mantine-shadow",!1)}},58976:(e,t,r)=>{r.d(t,{InlineStyles:()=>i});var n=r(95155);r(12115);var o=r(13656),a=r(34034);function i(e){let t=(0,o.useMantineStyleNonce)();return(0,n.jsx)("style",{"data-mantine-styles":"inline",nonce:null==t?void 0:t(),dangerouslySetInnerHTML:{__html:(0,a.stylesToString)(e)}})}},64511:(e,t,r)=>{r.d(t,{polymorphicFactory:()=>i});var n=r(95155),o=r(12115),a=r(36960);function i(e){let t=(0,o.forwardRef)(e);return t.withProps=e=>{let r=(0,o.forwardRef)((r,o)=>(0,n.jsx)(t,{...e,...r,ref:o}));return r.extend=t.extend,r.displayName="WithProps(".concat(t.displayName,")"),r},t.extend=a.D,t}},64796:(e,t,r)=>{r.d(t,{A:()=>n});var n={group:"m_11def92b",root:"m_f85678b6",image:"m_11f8ac07",placeholder:"m_104cd71f"}},67118:(e,t,r)=>{r.d(t,{S:()=>i});var n=r(5903);r(12115),r(95155);var o=r(84022);let a="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji",i={scale:1,fontSmoothing:!0,focusRing:"auto",white:"#fff",black:"#000",colors:{dark:["#C9C9C9","#b8b8b8","#828282","#696969","#424242","#3b3b3b","#2e2e2e","#242424","#1f1f1f","#141414"],gray:["#f8f9fa","#f1f3f5","#e9ecef","#dee2e6","#ced4da","#adb5bd","#868e96","#495057","#343a40","#212529"],red:["#fff5f5","#ffe3e3","#ffc9c9","#ffa8a8","#ff8787","#ff6b6b","#fa5252","#f03e3e","#e03131","#c92a2a"],pink:["#fff0f6","#ffdeeb","#fcc2d7","#faa2c1","#f783ac","#f06595","#e64980","#d6336c","#c2255c","#a61e4d"],grape:["#f8f0fc","#f3d9fa","#eebefa","#e599f7","#da77f2","#cc5de8","#be4bdb","#ae3ec9","#9c36b5","#862e9c"],violet:["#f3f0ff","#e5dbff","#d0bfff","#b197fc","#9775fa","#845ef7","#7950f2","#7048e8","#6741d9","#5f3dc4"],indigo:["#edf2ff","#dbe4ff","#bac8ff","#91a7ff","#748ffc","#5c7cfa","#4c6ef5","#4263eb","#3b5bdb","#364fc7"],blue:["#e7f5ff","#d0ebff","#a5d8ff","#74c0fc","#4dabf7","#339af0","#228be6","#1c7ed6","#1971c2","#1864ab"],cyan:["#e3fafc","#c5f6fa","#99e9f2","#66d9e8","#3bc9db","#22b8cf","#15aabf","#1098ad","#0c8599","#0b7285"],teal:["#e6fcf5","#c3fae8","#96f2d7","#63e6be","#38d9a9","#20c997","#12b886","#0ca678","#099268","#087f5b"],green:["#ebfbee","#d3f9d8","#b2f2bb","#8ce99a","#69db7c","#51cf66","#40c057","#37b24d","#2f9e44","#2b8a3e"],lime:["#f4fce3","#e9fac8","#d8f5a2","#c0eb75","#a9e34b","#94d82d","#82c91e","#74b816","#66a80f","#5c940d"],yellow:["#fff9db","#fff3bf","#ffec99","#ffe066","#ffd43b","#fcc419","#fab005","#f59f00","#f08c00","#e67700"],orange:["#fff4e6","#ffe8cc","#ffd8a8","#ffc078","#ffa94d","#ff922b","#fd7e14","#f76707","#e8590c","#d9480f"]},primaryShade:{light:6,dark:8},primaryColor:"blue",variantColorResolver:o.defaultVariantColorsResolver,autoContrast:!1,luminanceThreshold:.3,fontFamily:a,fontFamilyMonospace:"ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, Liberation Mono, Courier New, monospace",respectReducedMotion:!1,cursorType:"default",defaultGradient:{from:"blue",to:"cyan",deg:45},defaultRadius:"sm",activeClassName:"mantine-active",focusClassName:"",headings:{fontFamily:a,fontWeight:"700",textWrap:"wrap",sizes:{h1:{fontSize:(0,n.D)(34),lineHeight:"1.3"},h2:{fontSize:(0,n.D)(26),lineHeight:"1.35"},h3:{fontSize:(0,n.D)(22),lineHeight:"1.4"},h4:{fontSize:(0,n.D)(18),lineHeight:"1.45"},h5:{fontSize:(0,n.D)(16),lineHeight:"1.5"},h6:{fontSize:(0,n.D)(14),lineHeight:"1.5"}}},fontSizes:{xs:(0,n.D)(12),sm:(0,n.D)(14),md:(0,n.D)(16),lg:(0,n.D)(18),xl:(0,n.D)(20)},lineHeights:{xs:"1.4",sm:"1.45",md:"1.55",lg:"1.6",xl:"1.65"},radius:{xs:(0,n.D)(2),sm:(0,n.D)(4),md:(0,n.D)(8),lg:(0,n.D)(16),xl:(0,n.D)(32)},spacing:{xs:(0,n.D)(10),sm:(0,n.D)(12),md:(0,n.D)(16),lg:(0,n.D)(20),xl:(0,n.D)(32)},breakpoints:{xs:"36em",sm:"48em",md:"62em",lg:"75em",xl:"88em"},shadows:{xs:`0 ${(0,n.D)(1)} ${(0,n.D)(3)} rgba(0, 0, 0, 0.05), 0 ${(0,n.D)(1)} ${(0,n.D)(2)} rgba(0, 0, 0, 0.1)`,sm:`0 ${(0,n.D)(1)} ${(0,n.D)(3)} rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05) 0 ${(0,n.D)(10)} ${(0,n.D)(15)} ${(0,n.D)(-5)}, rgba(0, 0, 0, 0.04) 0 ${(0,n.D)(7)} ${(0,n.D)(7)} ${(0,n.D)(-5)}`,md:`0 ${(0,n.D)(1)} ${(0,n.D)(3)} rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05) 0 ${(0,n.D)(20)} ${(0,n.D)(25)} ${(0,n.D)(-5)}, rgba(0, 0, 0, 0.04) 0 ${(0,n.D)(10)} ${(0,n.D)(10)} ${(0,n.D)(-5)}`,lg:`0 ${(0,n.D)(1)} ${(0,n.D)(3)} rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05) 0 ${(0,n.D)(28)} ${(0,n.D)(23)} ${(0,n.D)(-7)}, rgba(0, 0, 0, 0.04) 0 ${(0,n.D)(12)} ${(0,n.D)(12)} ${(0,n.D)(-7)}`,xl:`0 ${(0,n.D)(1)} ${(0,n.D)(3)} rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05) 0 ${(0,n.D)(36)} ${(0,n.D)(28)} ${(0,n.D)(-7)}, rgba(0, 0, 0, 0.04) 0 ${(0,n.D)(17)} ${(0,n.D)(17)} ${(0,n.D)(-7)}`},other:{},components:{}}},68918:(e,t,r)=>{r.d(t,{createVarsResolver:()=>n});function n(e){return e}},69445:(e,t,r)=>{r.d(t,{useMediaQuery:()=>o});var n=r(12115);function o(e,t){let{getInitialValueInEffect:r}=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{getInitialValueInEffect:!0},[o,a]=(0,n.useState)(r?t:!!("undefined"!=typeof window&&"matchMedia"in window)&&window.matchMedia(e).matches),i=(0,n.useRef)(null);return(0,n.useEffect)(()=>{if("matchMedia"in window)return i.current=window.matchMedia(e),a(i.current.matches),function(e,t){try{return e.addEventListener("change",t),()=>e.removeEventListener("change",t)}catch(r){return e.addListener(t),()=>e.removeListener(t)}}(i.current,e=>a(e.matches))},[e]),o}},69604:(e,t,r)=>{r.d(t,{Box:()=>g});var n=r(95155),o=r(12115),a=r(52596),i=r(3097),l=r(58976),c=r(78772),s=r(13656),d=r(3131);function u(e){return e.startsWith("data-")?e:"data-".concat(e)}function f(e,t){return Array.isArray(e)?[...e].reduce((e,r)=>({...e,...f(r,t)}),{}):"function"==typeof e?e(t):null==e?{}:e}var p=r(99537),m=r(74689),y=r(6325),v=r(46390);let h=(0,o.forwardRef)((e,t)=>{var r;let{component:o,style:i,__vars:h,className:g,variant:b,mod:C,size:S,hiddenFrom:D,visibleFrom:x,lightHidden:k,darkHidden:w,renderRoot:M,__size:$,...A}=e,T=(0,d.useMantineTheme)(),{styleProps:N,rest:j}=(0,p.extractStyleProps)(A),P=(0,s.useMantineSxTransform)(),R=null==P?void 0:null===(r=P())||void 0===r?void 0:r(N.sx),z=(0,v.useRandomClassName)(),E=(0,y.parseStyleProps)({styleProps:N,theme:T,data:m.STYlE_PROPS_DATA}),_={ref:t,style:function(e){let{theme:t,style:r,vars:n,styleProps:o}=e,a=f(r,t),i=f(n,t);return{...a,...i,...o}}({theme:T,style:i,vars:h,styleProps:E.inlineStyles}),className:(0,a.A)(g,R,{[z]:E.hasResponsiveStyles,"mantine-light-hidden":k,"mantine-dark-hidden":w,["mantine-hidden-from-".concat(D)]:D,["mantine-visible-from-".concat(x)]:x}),"data-variant":b,"data-size":(0,c.isNumberLike)(S)?void 0:S||void 0,size:$,...function e(t){return t?"string"==typeof t?{[u(t)]:!0}:Array.isArray(t)?[...t].reduce((t,r)=>({...t,...e(r)}),{}):Object.keys(t).reduce((e,r)=>{let n=t[r];return void 0===n||""===n||!1===n||null===n||(e[u(r)]=t[r]),e},{}):null}(C),...j};return(0,n.jsxs)(n.Fragment,{children:[E.hasResponsiveStyles&&(0,n.jsx)(l.InlineStyles,{selector:".".concat(z),styles:E.styles,media:E.media}),"function"==typeof M?M(_):(0,n.jsx)(o||"div",{..._})]})});h.displayName="@mantine/core/Box";let g=(0,i.K)(h)},70714:(e,t,r)=>{r.d(t,{B:()=>o,X:()=>a});var n=r(38792);function o(e,t){if("string"!=typeof e||t>1||t<0)return"rgba(0, 0, 0, 1)";if(e.startsWith("var("))return`color-mix(in srgb, ${e}, transparent ${(1-t)*100}%)`;if(e.startsWith("oklch"))return e.includes("/")?e.replace(/\/\s*[\d.]+\s*\)/,`/ ${t})`):e.replace(")",` / ${t})`);let{r,g:o,b:a}=(0,n.K)(e);return`rgba(${r}, ${o}, ${a}, ${t})`}let a=o},71180:(e,t,r)=>{r.d(t,{getThemeColor:()=>o});var n=r(98271);function o(e,t){let r=(0,n.parseThemeColor)({color:e||t.primaryColor,theme:t});return r.variable?"var(".concat(r.variable,")"):e}},74689:(e,t,r)=>{r.d(t,{STYlE_PROPS_DATA:()=>n});let n={m:{type:"spacing",property:"margin"},mt:{type:"spacing",property:"marginTop"},mb:{type:"spacing",property:"marginBottom"},ml:{type:"spacing",property:"marginLeft"},mr:{type:"spacing",property:"marginRight"},ms:{type:"spacing",property:"marginInlineStart"},me:{type:"spacing",property:"marginInlineEnd"},mx:{type:"spacing",property:"marginInline"},my:{type:"spacing",property:"marginBlock"},p:{type:"spacing",property:"padding"},pt:{type:"spacing",property:"paddingTop"},pb:{type:"spacing",property:"paddingBottom"},pl:{type:"spacing",property:"paddingLeft"},pr:{type:"spacing",property:"paddingRight"},ps:{type:"spacing",property:"paddingInlineStart"},pe:{type:"spacing",property:"paddingInlineEnd"},px:{type:"spacing",property:"paddingInline"},py:{type:"spacing",property:"paddingBlock"},bd:{type:"border",property:"border"},bg:{type:"color",property:"background"},c:{type:"textColor",property:"color"},opacity:{type:"identity",property:"opacity"},ff:{type:"fontFamily",property:"fontFamily"},fz:{type:"fontSize",property:"fontSize"},fw:{type:"identity",property:"fontWeight"},lts:{type:"size",property:"letterSpacing"},ta:{type:"identity",property:"textAlign"},lh:{type:"lineHeight",property:"lineHeight"},fs:{type:"identity",property:"fontStyle"},tt:{type:"identity",property:"textTransform"},td:{type:"identity",property:"textDecoration"},w:{type:"spacing",property:"width"},miw:{type:"spacing",property:"minWidth"},maw:{type:"spacing",property:"maxWidth"},h:{type:"spacing",property:"height"},mih:{type:"spacing",property:"minHeight"},mah:{type:"spacing",property:"maxHeight"},bgsz:{type:"size",property:"backgroundSize"},bgp:{type:"identity",property:"backgroundPosition"},bgr:{type:"identity",property:"backgroundRepeat"},bga:{type:"identity",property:"backgroundAttachment"},pos:{type:"identity",property:"position"},top:{type:"size",property:"top"},left:{type:"size",property:"left"},bottom:{type:"size",property:"bottom"},right:{type:"size",property:"right"},inset:{type:"size",property:"inset"},display:{type:"identity",property:"display"},flex:{type:"identity",property:"flex"}}},78772:(e,t,r)=>{r.d(t,{isNumberLike:()=>n});function n(e){if("number"==typeof e)return!0;if("string"==typeof e){if(e.startsWith("calc(")||e.startsWith("var(")||e.includes(" ")&&""!==e.trim())return!0;let t=/^[+-]?[0-9]+(\.[0-9]+)?(px|em|rem|ex|ch|lh|rlh|vw|vh|vmin|vmax|vb|vi|svw|svh|lvw|lvh|dvw|dvh|cm|mm|in|pt|pc|q|cqw|cqh|cqi|cqb|cqmin|cqmax|%)?$/;return e.trim().split(/\s+/).every(e=>t.test(e))}return!1}},84022:(e,t,r)=>{r.r(t),r.d(t,{defaultVariantColorsResolver:()=>s});var n=r(5903);r(12115),r(95155);var o=r(38792);function a(e,t){if(e.startsWith("var("))return`color-mix(in srgb, ${e}, black ${100*t}%)`;let{r,g:n,b:a,a:i}=(0,o.K)(e),l=1-t,c=e=>Math.round(e*l);return`rgba(${c(r)}, ${c(n)}, ${c(a)}, ${i})`}var i=r(18512),l=r(98271),c=r(70714);let s=e=>{let{color:t,theme:r,variant:o,gradient:s,autoContrast:d}=e,u=(0,l.parseThemeColor)({color:t,theme:r}),f="boolean"==typeof d?d:r.autoContrast;if("filled"===o){let e=f&&u.isLight?"var(--mantine-color-black)":"var(--mantine-color-white)";return u.isThemeColor?void 0===u.shade?{background:"var(--mantine-color-".concat(t,"-filled)"),hover:"var(--mantine-color-".concat(t,"-filled-hover)"),color:e,border:"".concat((0,n.D)(1)," solid transparent")}:{background:"var(--mantine-color-".concat(u.color,"-").concat(u.shade,")"),hover:"var(--mantine-color-".concat(u.color,"-").concat(9===u.shade?8:u.shade+1,")"),color:e,border:"".concat((0,n.D)(1)," solid transparent")}:{background:t,hover:a(t,.1),color:e,border:"".concat((0,n.D)(1)," solid transparent")}}if("light"===o){if(u.isThemeColor){if(void 0===u.shade)return{background:"var(--mantine-color-".concat(t,"-light)"),hover:"var(--mantine-color-".concat(t,"-light-hover)"),color:"var(--mantine-color-".concat(t,"-light-color)"),border:"".concat((0,n.D)(1)," solid transparent")};let e=r.colors[u.color][u.shade];return{background:(0,c.B)(e,.1),hover:(0,c.B)(e,.12),color:"var(--mantine-color-".concat(u.color,"-").concat(Math.min(u.shade,6),")"),border:"".concat((0,n.D)(1)," solid transparent")}}return{background:(0,c.B)(t,.1),hover:(0,c.B)(t,.12),color:t,border:"".concat((0,n.D)(1)," solid transparent")}}if("outline"===o)return u.isThemeColor?void 0===u.shade?{background:"transparent",hover:"var(--mantine-color-".concat(t,"-outline-hover)"),color:"var(--mantine-color-".concat(t,"-outline)"),border:"".concat((0,n.D)(1)," solid var(--mantine-color-").concat(t,"-outline)")}:{background:"transparent",hover:(0,c.B)(r.colors[u.color][u.shade],.05),color:"var(--mantine-color-".concat(u.color,"-").concat(u.shade,")"),border:"".concat((0,n.D)(1)," solid var(--mantine-color-").concat(u.color,"-").concat(u.shade,")")}:{background:"transparent",hover:(0,c.B)(t,.05),color:t,border:"".concat((0,n.D)(1)," solid ").concat(t)};if("subtle"===o){if(u.isThemeColor){if(void 0===u.shade)return{background:"transparent",hover:"var(--mantine-color-".concat(t,"-light-hover)"),color:"var(--mantine-color-".concat(t,"-light-color)"),border:"".concat((0,n.D)(1)," solid transparent")};let e=r.colors[u.color][u.shade];return{background:"transparent",hover:(0,c.B)(e,.12),color:"var(--mantine-color-".concat(u.color,"-").concat(Math.min(u.shade,6),")"),border:"".concat((0,n.D)(1)," solid transparent")}}return{background:"transparent",hover:(0,c.B)(t,.12),color:t,border:"".concat((0,n.D)(1)," solid transparent")}}if("transparent"===o)return u.isThemeColor?void 0===u.shade?{background:"transparent",hover:"transparent",color:"var(--mantine-color-".concat(t,"-light-color)"),border:"".concat((0,n.D)(1)," solid transparent")}:{background:"transparent",hover:"transparent",color:"var(--mantine-color-".concat(u.color,"-").concat(Math.min(u.shade,6),")"),border:"".concat((0,n.D)(1)," solid transparent")}:{background:"transparent",hover:"transparent",color:t,border:"".concat((0,n.D)(1)," solid transparent")};if("white"===o)return u.isThemeColor?void 0===u.shade?{background:"var(--mantine-color-white)",hover:a(r.white,.01),color:"var(--mantine-color-".concat(t,"-filled)"),border:"".concat((0,n.D)(1)," solid transparent")}:{background:"var(--mantine-color-white)",hover:a(r.white,.01),color:"var(--mantine-color-".concat(u.color,"-").concat(u.shade,")"),border:"".concat((0,n.D)(1)," solid transparent")}:{background:"var(--mantine-color-white)",hover:a(r.white,.01),color:t,border:"".concat((0,n.D)(1)," solid transparent")};return"gradient"===o?{background:(0,i.getGradient)(s,r),hover:(0,i.getGradient)(s,r),color:"var(--mantine-color-white)",border:"none"}:"default"===o?{background:"var(--mantine-color-default)",hover:"var(--mantine-color-default-hover)",color:"var(--mantine-color-default-color)",border:"".concat((0,n.D)(1)," solid var(--mantine-color-default-border)")}:{}}},84092:(e,t,r)=>{r.d(t,{resolveStyles:()=>n});function n(e){let{theme:t,styles:r,props:n,stylesCtx:o}=e;return(Array.isArray(r)?r:[r]).reduce((e,r)=>"function"==typeof r?{...e,...r(t,n,o)}:{...e,...r},{})}},97677:(e,t,r)=>{r.d(t,{FOCUS_CLASS_NAMES:()=>o,K:()=>a});var n=r(52596);let o={always:"mantine-focus-always",auto:"mantine-focus-auto",never:"mantine-focus-never"};function a(e){let{theme:t,options:r,unstyled:a}=e;return(0,n.A)((null==r?void 0:r.focusable)&&!a&&(t.focusClassName||o[t.focusRing]),(null==r?void 0:r.active)&&!a&&t.activeClassName)}},98271:(e,t,r)=>{r.d(t,{parseThemeColor:()=>l});var n=r(30128),o=r(38792);function a(e){return e<=.03928?e/12.92:((e+.055)/1.055)**2.4}function i(e,t=.179){return!e.startsWith("var(")&&function(e){if(e.startsWith("oklch("))return(function(e){let t=e.match(/oklch\((.*?)%\s/);return t?parseFloat(t[1]):null}(e)||0)/100;let{r:t,g:r,b:n}=(0,o.K)(e),i=a(t/255);return .2126*i+.7152*a(r/255)+.0722*a(n/255)}(e)>t}function l(e){let{color:t,theme:r,colorScheme:o}=e;if("string"!=typeof t)throw Error("[@mantine/core] Failed to parse color. Expected color to be a string, instead got ".concat(typeof t));if("bright"===t)return{color:t,value:"dark"===o?r.white:r.black,shade:void 0,isThemeColor:!1,isLight:i("dark"===o?r.white:r.black,r.luminanceThreshold),variable:"--mantine-color-bright"};if("dimmed"===t)return{color:t,value:"dark"===o?r.colors.dark[2]:r.colors.gray[7],shade:void 0,isThemeColor:!1,isLight:i("dark"===o?r.colors.dark[2]:r.colors.gray[6],r.luminanceThreshold),variable:"--mantine-color-dimmed"};if("white"===t||"black"===t)return{color:t,value:"white"===t?r.white:r.black,shade:void 0,isThemeColor:!1,isLight:i("white"===t?r.white:r.black,r.luminanceThreshold),variable:"--mantine-color-".concat(t)};let[a,l]=t.split("."),c=l?Number(l):void 0,s=a in r.colors;if(s){let e=void 0!==c?r.colors[a][c]:r.colors[a][(0,n.getPrimaryShade)(r,o||"light")];return{color:a,value:e,shade:c,isThemeColor:s,isLight:i(e,r.luminanceThreshold),variable:l?"--mantine-color-".concat(a,"-").concat(c):"--mantine-color-".concat(a,"-filled")}}return{color:t,value:t,isThemeColor:s,isLight:i(t,r.luminanceThreshold),shade:c,variable:void 0}}},99537:(e,t,r)=>{r.d(t,{extractStyleProps:()=>o});var n=r(1526);function o(e){let{m:t,mx:r,my:o,mt:a,mb:i,ml:l,mr:c,me:s,ms:d,p:u,px:f,py:p,pt:m,pb:y,pl:v,pr:h,pe:g,ps:b,bd:C,bg:S,c:D,opacity:x,ff:k,fz:w,fw:M,lts:$,ta:A,lh:T,fs:N,tt:j,td:P,w:R,miw:z,maw:E,h:_,mih:I,mah:F,bgsz:W,bgp:B,bgr:L,bga:H,pos:G,top:O,left:K,bottom:q,right:V,inset:Z,display:U,flex:Y,hiddenFrom:Q,visibleFrom:X,lightHidden:J,darkHidden:ee,sx:et,...er}=e;return{styleProps:(0,n.filterProps)({m:t,mx:r,my:o,mt:a,mb:i,ml:l,mr:c,me:s,ms:d,p:u,px:f,py:p,pt:m,pb:y,pl:v,pr:h,pe:g,ps:b,bd:C,bg:S,c:D,opacity:x,ff:k,fz:w,fw:M,lts:$,ta:A,lh:T,fs:N,tt:j,td:P,w:R,miw:z,maw:E,h:_,mih:I,mah:F,bgsz:W,bgp:B,bgr:L,bga:H,pos:G,top:O,left:K,bottom:q,right:V,inset:Z,display:U,flex:Y,hiddenFrom:Q,visibleFrom:X,lightHidden:J,darkHidden:ee,sx:et}),rest:er}}r(12115),r(95155)}}]);