"use strict";(self.webpackChunkdwcj_documentation=self.webpackChunkdwcj_documentation||[]).push([[1633],{85055:(e,t,r)=>{r.d(t,{A:()=>ae});var n=function(){function e(e){var t=this;this._insertTag=function(e){var r;r=0===t.tags.length?t.insertionPoint?t.insertionPoint.nextSibling:t.prepend?t.container.firstChild:t.before:t.tags[t.tags.length-1].nextSibling,t.container.insertBefore(e,r),t.tags.push(e)},this.isSpeedy=void 0===e.speedy||e.speedy,this.tags=[],this.ctr=0,this.nonce=e.nonce,this.key=e.key,this.container=e.container,this.prepend=e.prepend,this.insertionPoint=e.insertionPoint,this.before=null}var t=e.prototype;return t.hydrate=function(e){e.forEach(this._insertTag)},t.insert=function(e){this.ctr%(this.isSpeedy?65e3:1)==0&&this._insertTag(function(e){var t=document.createElement("style");return t.setAttribute("data-emotion",e.key),void 0!==e.nonce&&t.setAttribute("nonce",e.nonce),t.appendChild(document.createTextNode("")),t.setAttribute("data-s",""),t}(this));var t=this.tags[this.tags.length-1];if(this.isSpeedy){var r=function(e){if(e.sheet)return e.sheet;for(var t=0;t<document.styleSheets.length;t++)if(document.styleSheets[t].ownerNode===e)return document.styleSheets[t]}(t);try{r.insertRule(e,r.cssRules.length)}catch(n){0}}else t.appendChild(document.createTextNode(e));this.ctr++},t.flush=function(){this.tags.forEach((function(e){return e.parentNode&&e.parentNode.removeChild(e)})),this.tags=[],this.ctr=0},e}(),a=Math.abs,s=String.fromCharCode,c=Object.assign;function i(e){return e.trim()}function o(e,t,r){return e.replace(t,r)}function u(e,t){return e.indexOf(t)}function l(e,t){return 0|e.charCodeAt(t)}function f(e,t,r){return e.slice(t,r)}function d(e){return e.length}function h(e){return e.length}function p(e,t){return t.push(e),e}var v=1,m=1,g=0,y=0,b=0,w="";function k(e,t,r,n,a,s,c){return{value:e,root:t,parent:r,type:n,props:a,children:s,line:v,column:m,length:c,return:""}}function x(e,t){return c(k("",null,null,"",null,null,0),e,{length:-e.length},t)}function $(){return b=y>0?l(w,--y):0,m--,10===b&&(m=1,v--),b}function C(){return b=y<g?l(w,y++):0,m++,10===b&&(m=1,v++),b}function A(){return l(w,y)}function S(){return y}function _(e,t){return f(w,e,t)}function E(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function O(e){return v=m=1,g=d(w=e),y=0,[]}function N(e){return w="",e}function j(e){return i(_(y-1,T(91===e?e+2:40===e?e+1:e)))}function P(e){for(;(b=A())&&b<33;)C();return E(e)>2||E(b)>3?"":" "}function R(e,t){for(;--t&&C()&&!(b<48||b>102||b>57&&b<65||b>70&&b<97););return _(e,S()+(t<6&&32==A()&&32==C()))}function T(e){for(;C();)switch(b){case e:return y;case 34:case 39:34!==e&&39!==e&&T(b);break;case 40:41===e&&T(e);break;case 92:C()}return y}function z(e,t){for(;C()&&e+b!==57&&(e+b!==84||47!==A()););return"/*"+_(t,y-1)+"*"+s(47===e?e:C())}function I(e){for(;!E(A());)C();return _(e,y)}var M="-ms-",F="-moz-",G="-webkit-",L="comm",W="rule",D="decl",H="@keyframes";function J(e,t){for(var r="",n=h(e),a=0;a<n;a++)r+=t(e[a],a,e,t)||"";return r}function q(e,t,r,n){switch(e.type){case"@layer":if(e.children.length)break;case"@import":case D:return e.return=e.return||e.value;case L:return"";case H:return e.return=e.value+"{"+J(e.children,n)+"}";case W:e.value=e.props.join(",")}return d(r=J(e.children,n))?e.return=e.value+"{"+r+"}":""}function Y(e){return N(B("",null,null,null,[""],e=O(e),0,[0],e))}function B(e,t,r,n,a,c,i,f,h){for(var v=0,m=0,g=i,y=0,b=0,w=0,k=1,x=1,_=1,E=0,O="",N=a,T=c,M=n,F=O;x;)switch(w=E,E=C()){case 40:if(108!=w&&58==l(F,g-1)){-1!=u(F+=o(j(E),"&","&\f"),"&\f")&&(_=-1);break}case 34:case 39:case 91:F+=j(E);break;case 9:case 10:case 13:case 32:F+=P(w);break;case 92:F+=R(S()-1,7);continue;case 47:switch(A()){case 42:case 47:p(U(z(C(),S()),t,r),h);break;default:F+="/"}break;case 123*k:f[v++]=d(F)*_;case 125*k:case 59:case 0:switch(E){case 0:case 125:x=0;case 59+m:-1==_&&(F=o(F,/\f/g,"")),b>0&&d(F)-g&&p(b>32?Z(F+";",n,r,g-1):Z(o(F," ","")+";",n,r,g-2),h);break;case 59:F+=";";default:if(p(M=K(F,t,r,v,m,a,f,O,N=[],T=[],g),c),123===E)if(0===m)B(F,t,M,M,N,c,g,f,T);else switch(99===y&&110===l(F,3)?100:y){case 100:case 108:case 109:case 115:B(e,M,M,n&&p(K(e,M,M,0,0,a,f,O,a,N=[],g),T),a,T,g,f,n?N:T);break;default:B(F,M,M,M,[""],T,0,f,T)}}v=m=b=0,k=_=1,O=F="",g=i;break;case 58:g=1+d(F),b=w;default:if(k<1)if(123==E)--k;else if(125==E&&0==k++&&125==$())continue;switch(F+=s(E),E*k){case 38:_=m>0?1:(F+="\f",-1);break;case 44:f[v++]=(d(F)-1)*_,_=1;break;case 64:45===A()&&(F+=j(C())),y=A(),m=g=d(O=F+=I(S())),E++;break;case 45:45===w&&2==d(F)&&(k=0)}}return c}function K(e,t,r,n,s,c,u,l,d,p,v){for(var m=s-1,g=0===s?c:[""],y=h(g),b=0,w=0,x=0;b<n;++b)for(var $=0,C=f(e,m+1,m=a(w=u[b])),A=e;$<y;++$)(A=i(w>0?g[$]+" "+C:o(C,/&\f/g,g[$])))&&(d[x++]=A);return k(e,t,r,0===s?W:l,d,p,v)}function U(e,t,r){return k(e,t,r,L,s(b),f(e,2,-2),0)}function Z(e,t,r,n){return k(e,t,r,D,f(e,0,n),f(e,n+1,-1),n)}var Q=function(e,t,r){for(var n=0,a=0;n=a,a=A(),38===n&&12===a&&(t[r]=1),!E(a);)C();return _(e,y)},V=function(e,t){return N(function(e,t){var r=-1,n=44;do{switch(E(n)){case 0:38===n&&12===A()&&(t[r]=1),e[r]+=Q(y-1,t,r);break;case 2:e[r]+=j(n);break;case 4:if(44===n){e[++r]=58===A()?"&\f":"",t[r]=e[r].length;break}default:e[r]+=s(n)}}while(n=C());return e}(O(e),t))},X=new WeakMap,ee=function(e){if("rule"===e.type&&e.parent&&!(e.length<1)){for(var t=e.value,r=e.parent,n=e.column===r.column&&e.line===r.line;"rule"!==r.type;)if(!(r=r.parent))return;if((1!==e.props.length||58===t.charCodeAt(0)||X.get(r))&&!n){X.set(e,!0);for(var a=[],s=V(t,a),c=r.props,i=0,o=0;i<s.length;i++)for(var u=0;u<c.length;u++,o++)e.props[o]=a[i]?s[i].replace(/&\f/g,c[u]):c[u]+" "+s[i]}}},te=function(e){if("decl"===e.type){var t=e.value;108===t.charCodeAt(0)&&98===t.charCodeAt(2)&&(e.return="",e.value="")}};function re(e,t){switch(function(e,t){return 45^l(e,0)?(((t<<2^l(e,0))<<2^l(e,1))<<2^l(e,2))<<2^l(e,3):0}(e,t)){case 5103:return G+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return G+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return G+e+F+e+M+e+e;case 6828:case 4268:return G+e+M+e+e;case 6165:return G+e+M+"flex-"+e+e;case 5187:return G+e+o(e,/(\w+).+(:[^]+)/,G+"box-$1$2"+M+"flex-$1$2")+e;case 5443:return G+e+M+"flex-item-"+o(e,/flex-|-self/,"")+e;case 4675:return G+e+M+"flex-line-pack"+o(e,/align-content|flex-|-self/,"")+e;case 5548:return G+e+M+o(e,"shrink","negative")+e;case 5292:return G+e+M+o(e,"basis","preferred-size")+e;case 6060:return G+"box-"+o(e,"-grow","")+G+e+M+o(e,"grow","positive")+e;case 4554:return G+o(e,/([^-])(transform)/g,"$1"+G+"$2")+e;case 6187:return o(o(o(e,/(zoom-|grab)/,G+"$1"),/(image-set)/,G+"$1"),e,"")+e;case 5495:case 3959:return o(e,/(image-set\([^]*)/,G+"$1$`$1");case 4968:return o(o(e,/(.+:)(flex-)?(.*)/,G+"box-pack:$3"+M+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+G+e+e;case 4095:case 3583:case 4068:case 2532:return o(e,/(.+)-inline(.+)/,G+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(d(e)-1-t>6)switch(l(e,t+1)){case 109:if(45!==l(e,t+4))break;case 102:return o(e,/(.+:)(.+)-([^]+)/,"$1"+G+"$2-$3$1"+F+(108==l(e,t+3)?"$3":"$2-$3"))+e;case 115:return~u(e,"stretch")?re(o(e,"stretch","fill-available"),t)+e:e}break;case 4949:if(115!==l(e,t+1))break;case 6444:switch(l(e,d(e)-3-(~u(e,"!important")&&10))){case 107:return o(e,":",":"+G)+e;case 101:return o(e,/(.+:)([^;!]+)(;|!.+)?/,"$1"+G+(45===l(e,14)?"inline-":"")+"box$3$1"+G+"$2$3$1"+M+"$2box$3")+e}break;case 5936:switch(l(e,t+11)){case 114:return G+e+M+o(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return G+e+M+o(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return G+e+M+o(e,/[svh]\w+-[tblr]{2}/,"lr")+e}return G+e+M+e+e}return e}var ne=[function(e,t,r,n){if(e.length>-1&&!e.return)switch(e.type){case D:e.return=re(e.value,e.length);break;case H:return J([x(e,{value:o(e.value,"@","@"+G)})],n);case W:if(e.length)return function(e,t){return e.map(t).join("")}(e.props,(function(t){switch(function(e,t){return(e=t.exec(e))?e[0]:e}(t,/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":return J([x(e,{props:[o(t,/:(read-\w+)/,":-moz-$1")]})],n);case"::placeholder":return J([x(e,{props:[o(t,/:(plac\w+)/,":"+G+"input-$1")]}),x(e,{props:[o(t,/:(plac\w+)/,":-moz-$1")]}),x(e,{props:[o(t,/:(plac\w+)/,M+"input-$1")]})],n)}return""}))}}],ae=function(e){var t=e.key;if("css"===t){var r=document.querySelectorAll("style[data-emotion]:not([data-s])");Array.prototype.forEach.call(r,(function(e){-1!==e.getAttribute("data-emotion").indexOf(" ")&&(document.head.appendChild(e),e.setAttribute("data-s",""))}))}var a=e.stylisPlugins||ne;var s,c,i={},o=[];s=e.container||document.head,Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="'+t+' "]'),(function(e){for(var t=e.getAttribute("data-emotion").split(" "),r=1;r<t.length;r++)i[t[r]]=!0;o.push(e)}));var u,l,f,d,p=[q,(d=function(e){u.insert(e)},function(e){e.root||(e=e.return)&&d(e)})],v=(l=[ee,te].concat(a,p),f=h(l),function(e,t,r,n){for(var a="",s=0;s<f;s++)a+=l[s](e,t,r,n)||"";return a});c=function(e,t,r,n){u=r,J(Y(e?e+"{"+t.styles+"}":t.styles),v),n&&(m.inserted[t.name]=!0)};var m={key:t,sheet:new n({key:t,container:s,nonce:e.nonce,speedy:e.speedy,prepend:e.prepend,insertionPoint:e.insertionPoint}),nonce:e.nonce,inserted:i,registered:{},insert:c};return m.sheet.hydrate(o),m}},36289:(e,t,r)=>{function n(e){var t=Object.create(null);return function(r){return void 0===t[r]&&(t[r]=e(r)),t[r]}}r.d(t,{A:()=>n})},85684:(e,t,r)=>{r.d(t,{E:()=>v,T:()=>f,c:()=>h,h:()=>o,w:()=>l});var n=r(96540),a=r(85055),s=r(30041),c=r(37521),i=r(71287),o={}.hasOwnProperty,u=n.createContext("undefined"!=typeof HTMLElement?(0,a.A)({key:"css"}):null);u.Provider;var l=function(e){return(0,n.forwardRef)((function(t,r){var a=(0,n.useContext)(u);return e(t,a,r)}))};var f=n.createContext({});var d="__EMOTION_TYPE_PLEASE_DO_NOT_USE__",h=function(e,t){var r={};for(var n in t)o.call(t,n)&&(r[n]=t[n]);return r[d]=e,r},p=function(e){var t=e.cache,r=e.serialized,n=e.isStringTag;return(0,s.SF)(t,r,n),(0,i.s)((function(){return(0,s.sk)(t,r,n)})),null};var v=l((function(e,t,r){var a=e.css;"string"==typeof a&&void 0!==t.registered[a]&&(a=t.registered[a]);var i=e[d],u=[a],l="";"string"==typeof e.className?l=(0,s.Rk)(t.registered,u,e.className):null!=e.className&&(l=e.className+" ");var h=(0,c.J)(u,void 0,n.useContext(f));l+=t.key+"-"+h.name;var v={};for(var m in e)o.call(e,m)&&"css"!==m&&m!==d&&(v[m]=e[m]);return v.ref=r,v.className=l,n.createElement(n.Fragment,null,n.createElement(p,{cache:t,serialized:h,isStringTag:"string"==typeof i}),n.createElement(i,v))}))},17437:(e,t,r)=>{r.d(t,{AH:()=>a,i7:()=>s});r(96540),r(71287);var n=r(37521);r(85055),r(4146);function a(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return(0,n.J)(t)}var s=function(){var e=a.apply(void 0,arguments),t="animation-"+e.name;return{name:t,styles:"@keyframes "+t+"{"+e.styles+"}",anim:1,toString:function(){return"_EMO_"+this.name+"_"+this.styles+"_EMO_"}}}},2445:(e,t,r)=>{r.d(t,{FD:()=>i,FK:()=>s,Y:()=>c});var n=r(74848),a=r(85684),s=(r(96540),r(85055),r(4146),r(37521),r(71287),n.Fragment);function c(e,t,r){return a.h.call(t,"css")?n.jsx(a.E,(0,a.c)(e,t),r):n.jsx(e,t,r)}function i(e,t,r){return a.h.call(t,"css")?n.jsxs(a.E,(0,a.c)(e,t),r):n.jsxs(e,t,r)}},37521:(e,t,r)=>{r.d(t,{J:()=>p});var n={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},a=r(36289),s=/[A-Z]|^ms/g,c=/_EMO_([^_]+?)_([^]*?)_EMO_/g,i=function(e){return 45===e.charCodeAt(1)},o=function(e){return null!=e&&"boolean"!=typeof e},u=(0,a.A)((function(e){return i(e)?e:e.replace(s,"-$&").toLowerCase()})),l=function(e,t){switch(e){case"animation":case"animationName":if("string"==typeof t)return t.replace(c,(function(e,t,r){return d={name:t,styles:r,next:d},t}))}return 1===n[e]||i(e)||"number"!=typeof t||0===t?t:t+"px"};function f(e,t,r){if(null==r)return"";if(void 0!==r.__emotion_styles)return r;switch(typeof r){case"boolean":return"";case"object":if(1===r.anim)return d={name:r.name,styles:r.styles,next:d},r.name;if(void 0!==r.styles){var n=r.next;if(void 0!==n)for(;void 0!==n;)d={name:n.name,styles:n.styles,next:d},n=n.next;return r.styles+";"}return function(e,t,r){var n="";if(Array.isArray(r))for(var a=0;a<r.length;a++)n+=f(e,t,r[a])+";";else for(var s in r){var c=r[s];if("object"!=typeof c)null!=t&&void 0!==t[c]?n+=s+"{"+t[c]+"}":o(c)&&(n+=u(s)+":"+l(s,c)+";");else if(!Array.isArray(c)||"string"!=typeof c[0]||null!=t&&void 0!==t[c[0]]){var i=f(e,t,c);switch(s){case"animation":case"animationName":n+=u(s)+":"+i+";";break;default:n+=s+"{"+i+"}"}}else for(var d=0;d<c.length;d++)o(c[d])&&(n+=u(s)+":"+l(s,c[d])+";")}return n}(e,t,r);case"function":if(void 0!==e){var a=d,s=r(e);return d=a,f(e,t,s)}}if(null==t)return r;var c=t[r];return void 0!==c?c:r}var d,h=/label:\s*([^\s;\n{]+)\s*(;|$)/g;var p=function(e,t,r){if(1===e.length&&"object"==typeof e[0]&&null!==e[0]&&void 0!==e[0].styles)return e[0];var n=!0,a="";d=void 0;var s=e[0];null==s||void 0===s.raw?(n=!1,a+=f(r,t,s)):a+=s[0];for(var c=1;c<e.length;c++)a+=f(r,t,e[c]),n&&(a+=s[c]);h.lastIndex=0;for(var i,o="";null!==(i=h.exec(a));)o+="-"+i[1];var u=function(e){for(var t,r=0,n=0,a=e.length;a>=4;++n,a-=4)t=1540483477*(65535&(t=255&e.charCodeAt(n)|(255&e.charCodeAt(++n))<<8|(255&e.charCodeAt(++n))<<16|(255&e.charCodeAt(++n))<<24))+(59797*(t>>>16)<<16),r=1540483477*(65535&(t^=t>>>24))+(59797*(t>>>16)<<16)^1540483477*(65535&r)+(59797*(r>>>16)<<16);switch(a){case 3:r^=(255&e.charCodeAt(n+2))<<16;case 2:r^=(255&e.charCodeAt(n+1))<<8;case 1:r=1540483477*(65535&(r^=255&e.charCodeAt(n)))+(59797*(r>>>16)<<16)}return(((r=1540483477*(65535&(r^=r>>>13))+(59797*(r>>>16)<<16))^r>>>15)>>>0).toString(36)}(a)+o;return{name:u,styles:a,next:d}}},71287:(e,t,r)=>{var n;r.d(t,{s:()=>c});var a=r(96540),s=!!(n||(n=r.t(a,2))).useInsertionEffect&&(n||(n=r.t(a,2))).useInsertionEffect,c=s||function(e){return e()};s||a.useLayoutEffect},30041:(e,t,r)=>{r.d(t,{Rk:()=>n,SF:()=>a,sk:()=>s});function n(e,t,r){var n="";return r.split(" ").forEach((function(r){void 0!==e[r]?t.push(e[r]+";"):n+=r+" "})),n}var a=function(e,t,r){var n=e.key+"-"+t.name;!1===r&&void 0===e.registered[n]&&(e.registered[n]=t.styles)},s=function(e,t,r){a(e,t,r);var n=e.key+"-"+t.name;if(void 0===e.inserted[t.name]){var s=t;do{e.insert(t===s?"."+n:"",s,e.sheet,!0),s=s.next}while(void 0!==s)}}}}]);