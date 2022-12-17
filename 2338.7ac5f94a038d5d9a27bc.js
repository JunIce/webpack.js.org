"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2338],{2338:function(e,a,n){n.r(a),n(7378);var t=n(2682);function o(){return o=Object.assign?Object.assign.bind():function(e){for(var a=1;a<arguments.length;a++){var n=arguments[a];for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t])}return e},o.apply(this,arguments)}function s(e){let{components:a,...n}=e;return(0,t.kt)("wrapper",o({components:a},n),(0,t.kt)("p",null,"The ",(0,t.kt)("inlineCode",{parentName:"p"},"NormalModuleReplacementPlugin")," allows you to replace resources that match ",(0,t.kt)("inlineCode",{parentName:"p"},"resourceRegExp")," with ",(0,t.kt)("inlineCode",{parentName:"p"},"newResource"),". If ",(0,t.kt)("inlineCode",{parentName:"p"},"newResource")," is relative, it is resolved relative to the previous resource. If ",(0,t.kt)("inlineCode",{parentName:"p"},"newResource")," is a function, it is expected to overwrite the request attribute of the supplied resource."),(0,t.kt)("p",null,"This can be useful for allowing different behaviour between builds."),(0,t.kt)("pre",null,(0,t.kt)("code",{className:"hljs language-js",parentName:"pre"},(0,t.kt)("span",{className:"token keyword",parentName:"code"},"new")," ",(0,t.kt)("span",{className:"token class-name",parentName:"code"},"webpack",(0,t.kt)("span",{className:"token punctuation",parentName:"span"},"."),"NormalModuleReplacementPlugin"),(0,t.kt)("span",{className:"token punctuation",parentName:"code"},"("),"resourceRegExp",(0,t.kt)("span",{className:"token punctuation",parentName:"code"},",")," newResource",(0,t.kt)("span",{className:"token punctuation",parentName:"code"},")"),(0,t.kt)("span",{className:"token punctuation",parentName:"code"},";"))),(0,t.kt)("p",null,"Note that the ",(0,t.kt)("inlineCode",{parentName:"p"},"resourceRegExp")," is tested against the request you write in your code, not the resolved resource. For instance, ",(0,t.kt)("inlineCode",{parentName:"p"},"'./sum'")," will be used to test instead of ",(0,t.kt)("inlineCode",{parentName:"p"},"'./sum.js'")," when you have code ",(0,t.kt)("inlineCode",{parentName:"p"},"import sum from './sum'"),"."),(0,t.kt)("h2",null,(0,t.kt)("span",{id:"basic-example",parentName:"h2"}),"Basic Example",(0,t.kt)("a",{href:"#basic-example","aria-hidden":"true",tabIndex:"-1",parentName:"h2"},(0,t.kt)("span",{className:"header-link",parentName:"a"}))),(0,t.kt)("p",null,"Replace a specific module when building for a ",(0,t.kt)("a",{href:"/guides/production",parentName:"p"},"development environment"),"."),(0,t.kt)("p",null,"Say you have a configuration file ",(0,t.kt)("inlineCode",{parentName:"p"},"some/path/config.development.module.js")," and a special version for production in ",(0,t.kt)("inlineCode",{parentName:"p"},"some/path/config.production.module.js")),(0,t.kt)("p",null,"Add the following plugin when building for production:"),(0,t.kt)("pre",null,(0,t.kt)("code",{className:"hljs language-javascript",parentName:"pre"},(0,t.kt)("span",{className:"token keyword",parentName:"code"},"new")," ",(0,t.kt)("span",{className:"token class-name",parentName:"code"},"webpack",(0,t.kt)("span",{className:"token punctuation",parentName:"span"},"."),"NormalModuleReplacementPlugin"),(0,t.kt)("span",{className:"token punctuation",parentName:"code"},"("),"\n  ",(0,t.kt)("span",{className:"token regex",parentName:"code"},"/some\\/path\\/config\\.development\\.js/"),(0,t.kt)("span",{className:"token punctuation",parentName:"code"},","),"\n  ",(0,t.kt)("span",{className:"token string",parentName:"code"},"'./config.production.js'"),"\n",(0,t.kt)("span",{className:"token punctuation",parentName:"code"},")"),(0,t.kt)("span",{className:"token punctuation",parentName:"code"},";"))),(0,t.kt)("h2",null,(0,t.kt)("span",{id:"advanced-example",parentName:"h2"}),"Advanced Example",(0,t.kt)("a",{href:"#advanced-example","aria-hidden":"true",tabIndex:"-1",parentName:"h2"},(0,t.kt)("span",{className:"header-link",parentName:"a"}))),(0,t.kt)("p",null,"Conditional build depending on an ",(0,t.kt)("a",{href:"/configuration/configuration-types",parentName:"p"},"specified environment"),"."),(0,t.kt)("p",null,"Say you want a configuration with specific values for different build targets."),(0,t.kt)("pre",null,(0,t.kt)("code",{className:"hljs language-javascript",parentName:"pre"},"module",(0,t.kt)("span",{className:"token punctuation",parentName:"code"},"."),(0,t.kt)("span",{className:"token function-variable function",parentName:"code"},"exports")," ",(0,t.kt)("span",{className:"token operator",parentName:"code"},"=")," ",(0,t.kt)("span",{className:"token keyword",parentName:"code"},"function")," ",(0,t.kt)("span",{className:"token punctuation",parentName:"code"},"("),(0,t.kt)("span",{className:"token parameter",parentName:"code"},"env"),(0,t.kt)("span",{className:"token punctuation",parentName:"code"},")")," ",(0,t.kt)("span",{className:"token punctuation",parentName:"code"},"{"),"\n  ",(0,t.kt)("span",{className:"token keyword",parentName:"code"},"var")," appTarget ",(0,t.kt)("span",{className:"token operator",parentName:"code"},"=")," env",(0,t.kt)("span",{className:"token punctuation",parentName:"code"},"."),(0,t.kt)("span",{className:"token constant",parentName:"code"},"APP_TARGET")," ",(0,t.kt)("span",{className:"token operator",parentName:"code"},"||")," ",(0,t.kt)("span",{className:"token string",parentName:"code"},"'VERSION_A'"),(0,t.kt)("span",{className:"token punctuation",parentName:"code"},";"),"\n  ",(0,t.kt)("span",{className:"token keyword",parentName:"code"},"return")," ",(0,t.kt)("span",{className:"token punctuation",parentName:"code"},"{"),"\n    plugins",(0,t.kt)("span",{className:"token operator",parentName:"code"},":")," ",(0,t.kt)("span",{className:"token punctuation",parentName:"code"},"["),"\n      ",(0,t.kt)("span",{className:"token keyword",parentName:"code"},"new")," ",(0,t.kt)("span",{className:"token class-name",parentName:"code"},"webpack",(0,t.kt)("span",{className:"token punctuation",parentName:"span"},"."),"NormalModuleReplacementPlugin"),(0,t.kt)("span",{className:"token punctuation",parentName:"code"},"("),"\n        ",(0,t.kt)("span",{className:"token regex",parentName:"code"},"/(.*)-APP_TARGET(\\.*)/"),(0,t.kt)("span",{className:"token punctuation",parentName:"code"},","),"\n        ",(0,t.kt)("span",{className:"token keyword",parentName:"code"},"function")," ",(0,t.kt)("span",{className:"token punctuation",parentName:"code"},"("),(0,t.kt)("span",{className:"token parameter",parentName:"code"},"resource"),(0,t.kt)("span",{className:"token punctuation",parentName:"code"},")")," ",(0,t.kt)("span",{className:"token punctuation",parentName:"code"},"{"),"\n          resource",(0,t.kt)("span",{className:"token punctuation",parentName:"code"},"."),"request ",(0,t.kt)("span",{className:"token operator",parentName:"code"},"=")," resource",(0,t.kt)("span",{className:"token punctuation",parentName:"code"},"."),"request",(0,t.kt)("span",{className:"token punctuation",parentName:"code"},"."),(0,t.kt)("span",{className:"token function",parentName:"code"},"replace"),(0,t.kt)("span",{className:"token punctuation",parentName:"code"},"("),"\n            ",(0,t.kt)("span",{className:"token regex",parentName:"code"},"/-APP_TARGET/"),(0,t.kt)("span",{className:"token punctuation",parentName:"code"},","),"\n            ",(0,t.kt)("span",{className:"token template-string",parentName:"code"},(0,t.kt)("span",{className:"token template-punctuation string",parentName:"span"},"`"),(0,t.kt)("span",{className:"token string",parentName:"span"},"-"),(0,t.kt)("span",{className:"token interpolation",parentName:"span"},(0,t.kt)("span",{className:"token interpolation-punctuation punctuation",parentName:"span"},"${"),"appTarget",(0,t.kt)("span",{className:"token interpolation-punctuation punctuation",parentName:"span"},"}")),(0,t.kt)("span",{className:"token template-punctuation string",parentName:"span"},"`")),"\n          ",(0,t.kt)("span",{className:"token punctuation",parentName:"code"},")"),(0,t.kt)("span",{className:"token punctuation",parentName:"code"},";"),"\n        ",(0,t.kt)("span",{className:"token punctuation",parentName:"code"},"}"),"\n      ",(0,t.kt)("span",{className:"token punctuation",parentName:"code"},")"),(0,t.kt)("span",{className:"token punctuation",parentName:"code"},","),"\n    ",(0,t.kt)("span",{className:"token punctuation",parentName:"code"},"]"),(0,t.kt)("span",{className:"token punctuation",parentName:"code"},","),"\n  ",(0,t.kt)("span",{className:"token punctuation",parentName:"code"},"}"),(0,t.kt)("span",{className:"token punctuation",parentName:"code"},";"),"\n",(0,t.kt)("span",{className:"token punctuation",parentName:"code"},"}"),(0,t.kt)("span",{className:"token punctuation",parentName:"code"},";"))),(0,t.kt)("p",null,"Create the two configuration files:"),(0,t.kt)("p",null,(0,t.kt)("strong",{parentName:"p"},"app/config-VERSION_A.js")),(0,t.kt)("pre",null,(0,t.kt)("code",{className:"hljs language-javascript",parentName:"pre"},(0,t.kt)("span",{className:"token keyword",parentName:"code"},"export")," ",(0,t.kt)("span",{className:"token keyword",parentName:"code"},"default")," ",(0,t.kt)("span",{className:"token punctuation",parentName:"code"},"{"),"\n  title",(0,t.kt)("span",{className:"token operator",parentName:"code"},":")," ",(0,t.kt)("span",{className:"token string",parentName:"code"},"'I am version A'"),(0,t.kt)("span",{className:"token punctuation",parentName:"code"},","),"\n",(0,t.kt)("span",{className:"token punctuation",parentName:"code"},"}"),(0,t.kt)("span",{className:"token punctuation",parentName:"code"},";"))),(0,t.kt)("p",null,(0,t.kt)("strong",{parentName:"p"},"app/config-VERSION_B.js")),(0,t.kt)("pre",null,(0,t.kt)("code",{className:"hljs language-javascript",parentName:"pre"},(0,t.kt)("span",{className:"token keyword",parentName:"code"},"export")," ",(0,t.kt)("span",{className:"token keyword",parentName:"code"},"default")," ",(0,t.kt)("span",{className:"token punctuation",parentName:"code"},"{"),"\n  title",(0,t.kt)("span",{className:"token operator",parentName:"code"},":")," ",(0,t.kt)("span",{className:"token string",parentName:"code"},"'I am version B'"),(0,t.kt)("span",{className:"token punctuation",parentName:"code"},","),"\n",(0,t.kt)("span",{className:"token punctuation",parentName:"code"},"}"),(0,t.kt)("span",{className:"token punctuation",parentName:"code"},";"))),(0,t.kt)("p",null,"Then import that configuration using the keyword you're looking for in the regexp:"),(0,t.kt)("pre",null,(0,t.kt)("code",{className:"hljs language-javascript",parentName:"pre"},(0,t.kt)("span",{className:"token keyword",parentName:"code"},"import")," config ",(0,t.kt)("span",{className:"token keyword",parentName:"code"},"from")," ",(0,t.kt)("span",{className:"token string",parentName:"code"},"'app/config-APP_TARGET'"),(0,t.kt)("span",{className:"token punctuation",parentName:"code"},";"),"\nconsole",(0,t.kt)("span",{className:"token punctuation",parentName:"code"},"."),(0,t.kt)("span",{className:"token function",parentName:"code"},"log"),(0,t.kt)("span",{className:"token punctuation",parentName:"code"},"("),"config",(0,t.kt)("span",{className:"token punctuation",parentName:"code"},"."),"title",(0,t.kt)("span",{className:"token punctuation",parentName:"code"},")"),(0,t.kt)("span",{className:"token punctuation",parentName:"code"},";"))),(0,t.kt)("p",null,"And now you get the right configuration imported depending on which target you're building for:"),(0,t.kt)("pre",null,(0,t.kt)("code",{className:"hljs language-bash",parentName:"pre"},"npx webpack --env ",(0,t.kt)("span",{className:"token assign-left variable",parentName:"code"},"APP_TARGET"),(0,t.kt)("span",{className:"token operator",parentName:"code"},"="),"VERSION_A\n",(0,t.kt)("span",{className:"token operator",parentName:"code"},"="),(0,t.kt)("span",{className:"token operator",parentName:"code"},">")," ",(0,t.kt)("span",{className:"token string",parentName:"code"},"'I am version A'"),"\n\nnpx webpack --env ",(0,t.kt)("span",{className:"token assign-left variable",parentName:"code"},"APP_TARGET"),(0,t.kt)("span",{className:"token operator",parentName:"code"},"="),"VERSION_B\n",(0,t.kt)("span",{className:"token operator",parentName:"code"},"="),(0,t.kt)("span",{className:"token operator",parentName:"code"},">")," ",(0,t.kt)("span",{className:"token string",parentName:"code"},"'I am version B'"))))}s.isMDXComponent=!0,a.default=s}}]);