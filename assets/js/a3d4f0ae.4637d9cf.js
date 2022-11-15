"use strict";(self.webpackChunkanswer=self.webpackChunkanswer||[]).push([[187],{9613:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(9496);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=p(n),m=a,g=d["".concat(c,".").concat(m)]||d[m]||s[m]||i;return n?r.createElement(g,o(o({ref:t},u),{},{components:n})):r.createElement(g,o({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2619:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>s,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var r=n(4250),a=(n(9496),n(9613));const i={},o="Backend",l={unversionedId:"development/contributing/backend",id:"development/contributing/backend",title:"Backend",description:"\ud83d\udce6 Prerequisites",source:"@site/docs/development/contributing/backend.md",sourceDirName:"development/contributing",slug:"/development/contributing/backend",permalink:"/docs/development/contributing/backend",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Contributing",permalink:"/docs/development/contributing/"},next:{title:"Frontend",permalink:"/docs/development/contributing/frontend"}},c={},p=[{value:"\ud83d\udce6 Prerequisites",id:"-prerequisites",level:2},{value:"\ud83d\udd28 Development",id:"-development",level:2},{value:"wire",id:"wire",level:3},{value:"swag",id:"swag",level:3},{value:"\ud83c\udfc3\ud83c\udffb\u200d\u2640\ufe0f Run",id:"\ufe0f-run",level:2},{value:"Built with",id:"built-with",level:2}],u={toc:p};function s(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"backend"},"Backend"),(0,a.kt)("h2",{id:"-prerequisites"},"\ud83d\udce6 Prerequisites"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://go.dev/"},"Golang")," ",(0,a.kt)("inlineCode",{parentName:"li"},">=1.18"))),(0,a.kt)("h2",{id:"-development"},"\ud83d\udd28 Development"),(0,a.kt)("h3",{id:"wire"},"wire"),(0,a.kt)("p",null,"We use ",(0,a.kt)("inlineCode",{parentName:"p"},"wire")," to generate dependencies."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"$ go get github.com/google/wire/cmd/wire@latest\n$ go generate ./...\n$ go mod tidy\n")),(0,a.kt)("p",null,"Or you can use ",(0,a.kt)("inlineCode",{parentName:"p"},"make generate"),"."),(0,a.kt)("h3",{id:"swag"},"swag"),(0,a.kt)("p",null,"We use ",(0,a.kt)("inlineCode",{parentName:"p"},"swag")," to generate swagger doc."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"$ swag init --generalInfo ./cmd/answer/main.go\n")),(0,a.kt)("p",null,"Or you can use enter script directory and use ",(0,a.kt)("inlineCode",{parentName:"p"},"./gen-api.sh")),(0,a.kt)("h2",{id:"\ufe0f-run"},"\ud83c\udfc3\ud83c\udffb\u200d\u2640\ufe0f Run"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"# enter into dir\n$ cd cmd/answer/\n# compile\n$ go build .\n# init environment\n$ ./answer init -C ./answer-data/\n# modify config file \n$ vim ./answer-data/conf/config.yaml\n# run \n$ ./answer run -c ./answer-data/conf/config.yaml\n")),(0,a.kt)("h2",{id:"built-with"},"Built with"),(0,a.kt)("p",null,"The Answer application's backend is built with the following components/libraries:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/segmentfault/pacman"},"pacman")," - Yet Another Toolkit to Build Golang Application Quickly."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/gin-gonic/gin/"},"gin")," - Router."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/go-playground/validator/"},"validator")," - Validator."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://xorm.io/"},"xorm")," - ORM."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/spf13/cobra"},"cobra")," - CLI applications."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/swaggo/swag"},"swag")," -  Swagger Documentation generate.")))}s.isMDXComponent=!0}}]);