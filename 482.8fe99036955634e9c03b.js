"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[482],{482:function(e,a,t){t.r(a),t(7378);var n=t(2682);function s(){return s=Object.assign?Object.assign.bind():function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},s.apply(this,arguments)}function p(e){let{components:a,...t}=e;return(0,n.kt)("wrapper",s({components:a},t),(0,n.kt)("div",{align:"center"}),(0,n.kt)("p",null,(0,n.kt)("a",{href:"https://npmjs.com/package/eslint-webpack-plugin",parentName:"p"},(0,n.kt)("img",{src:"https://img.shields.io/npm/v/eslint-webpack-plugin.svg",alt:"npm",parentName:"a"})),"\n",(0,n.kt)("a",{href:"https://nodejs.org",parentName:"p"},(0,n.kt)("img",{src:"https://img.shields.io/node/v/eslint-webpack-plugin.svg",alt:"node",parentName:"a"})),"\n",(0,n.kt)("a",{href:"https://github.com/webpack-contrib/eslint-webpack-plugin/actions",parentName:"p"},(0,n.kt)("img",{src:"https://github.com/webpack-contrib/eslint-webpack-plugin/workflows/eslint-webpack-plugin/badge.svg",alt:"tests",parentName:"a"})),"\n",(0,n.kt)("a",{href:"https://codecov.io/gh/webpack-contrib/eslint-webpack-plugin",parentName:"p"},(0,n.kt)("img",{src:"https://codecov.io/gh/webpack-contrib/eslint-webpack-plugin/branch/master/graph/badge.svg",alt:"coverage",parentName:"a"})),"\n",(0,n.kt)("a",{href:"https://gitter.im/webpack/webpack",parentName:"p"},(0,n.kt)("img",{src:"https://badges.gitter.im/webpack/webpack.svg",alt:"chat",parentName:"a"})),"\n",(0,n.kt)("a",{href:"https://packagephobia.now.sh/result?p=eslint-webpack-plugin",parentName:"p"},(0,n.kt)("img",{src:"https://packagephobia.now.sh/badge?p=eslint-webpack-plugin",alt:"size",parentName:"a"}))),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"This is eslint-webpack-plugin 3.0 which works only with webpack 5. For the webpack 4, see the ",(0,n.kt)("a",{href:"https://github.com/webpack-contrib/eslint-webpack-plugin/tree/2.x",parentName:"p"},"2.x branch"),".")),(0,n.kt)("p",null,"This plugin uses ",(0,n.kt)("a",{href:"https://eslint.org/",parentName:"p"},(0,n.kt)("inlineCode",{parentName:"a"},"eslint"))," to find and fix problems in your JavaScript code"),(0,n.kt)("h2",null,(0,n.kt)("span",{id:"getting-started",parentName:"h2"}),"Getting Started",(0,n.kt)("a",{href:"#getting-started","aria-hidden":"true",tabIndex:"-1",parentName:"h2"},(0,n.kt)("span",{className:"header-link",parentName:"a"}))),(0,n.kt)("p",null,"To begin, you'll need to install ",(0,n.kt)("inlineCode",{parentName:"p"},"eslint-webpack-plugin"),":"),(0,n.kt)("pre",null,(0,n.kt)("code",{className:"hljs language-console",parentName:"pre"},"npm install eslint-webpack-plugin --save-dev\n")),(0,n.kt)("p",null,"or"),(0,n.kt)("pre",null,(0,n.kt)("code",{className:"hljs language-console",parentName:"pre"},"yarn add -D eslint-webpack-plugin\n")),(0,n.kt)("p",null,"or"),(0,n.kt)("pre",null,(0,n.kt)("code",{className:"hljs language-console",parentName:"pre"},"pnpm add -D eslint-webpack-plugin\n")),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("strong",{parentName:"p"},"Note"),":"),(0,n.kt)("p",{parentName:"blockquote"},"You also need to install ",(0,n.kt)("inlineCode",{parentName:"p"},"eslint >= 8")," from npm, if you haven't already:")),(0,n.kt)("pre",null,(0,n.kt)("code",{className:"hljs language-console",parentName:"pre"},"npm install eslint --save-dev\n")),(0,n.kt)("p",null,"or"),(0,n.kt)("pre",null,(0,n.kt)("code",{className:"hljs language-console",parentName:"pre"},"yarn add -D eslint\n")),(0,n.kt)("p",null,"or"),(0,n.kt)("pre",null,(0,n.kt)("code",{className:"hljs language-console",parentName:"pre"},"pnpm add -D eslint\n")),(0,n.kt)("p",null,"Then add the plugin to your webpack config. For example:"),(0,n.kt)("pre",null,(0,n.kt)("code",{className:"hljs language-js",parentName:"pre"},(0,n.kt)("span",{className:"token keyword",parentName:"code"},"const")," ESLintPlugin ",(0,n.kt)("span",{className:"token operator",parentName:"code"},"=")," ",(0,n.kt)("span",{className:"token function",parentName:"code"},"require"),(0,n.kt)("span",{className:"token punctuation",parentName:"code"},"("),(0,n.kt)("span",{className:"token string",parentName:"code"},"'eslint-webpack-plugin'"),(0,n.kt)("span",{className:"token punctuation",parentName:"code"},")"),(0,n.kt)("span",{className:"token punctuation",parentName:"code"},";"),"\n\nmodule",(0,n.kt)("span",{className:"token punctuation",parentName:"code"},"."),"exports ",(0,n.kt)("span",{className:"token operator",parentName:"code"},"=")," ",(0,n.kt)("span",{className:"token punctuation",parentName:"code"},"{"),"\n  ",(0,n.kt)("span",{className:"token comment",parentName:"code"},"// ..."),"\n  plugins",(0,n.kt)("span",{className:"token operator",parentName:"code"},":")," ",(0,n.kt)("span",{className:"token punctuation",parentName:"code"},"["),(0,n.kt)("span",{className:"token keyword",parentName:"code"},"new")," ",(0,n.kt)("span",{className:"token class-name",parentName:"code"},"ESLintPlugin"),(0,n.kt)("span",{className:"token punctuation",parentName:"code"},"("),"options",(0,n.kt)("span",{className:"token punctuation",parentName:"code"},")"),(0,n.kt)("span",{className:"token punctuation",parentName:"code"},"]"),(0,n.kt)("span",{className:"token punctuation",parentName:"code"},","),"\n  ",(0,n.kt)("span",{className:"token comment",parentName:"code"},"// ..."),"\n",(0,n.kt)("span",{className:"token punctuation",parentName:"code"},"}"),(0,n.kt)("span",{className:"token punctuation",parentName:"code"},";"))),(0,n.kt)("h2",null,(0,n.kt)("span",{id:"options",parentName:"h2"}),"Options",(0,n.kt)("a",{href:"#options","aria-hidden":"true",tabIndex:"-1",parentName:"h2"},(0,n.kt)("span",{className:"header-link",parentName:"a"}))),(0,n.kt)("p",null,"You can pass ",(0,n.kt)("a",{href:"https://eslint.org/docs/developer-guide/nodejs-api#-new-eslintoptions",parentName:"p"},"eslint options"),"."),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("strong",{parentName:"p"},"Note")),(0,n.kt)("p",{parentName:"blockquote"},"The config option you provide will be passed to the ",(0,n.kt)("inlineCode",{parentName:"p"},"ESLint")," class.\nThis is a different set of options than what you'd specify in ",(0,n.kt)("inlineCode",{parentName:"p"},"package.json")," or ",(0,n.kt)("inlineCode",{parentName:"p"},".eslintrc"),".\nSee the ",(0,n.kt)("a",{href:"https://eslint.org/docs/developer-guide/nodejs-api#-new-eslintoptions",parentName:"p"},"eslint docs")," for more details.")),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("strong",{parentName:"p"},"Warning"),":"),(0,n.kt)("p",{parentName:"blockquote"},"In eslint-webpack-plugin version 1 the options were passed to the now deprecated ",(0,n.kt)("a",{href:"https://eslint.org/docs/developer-guide/nodejs-api#cliengine",parentName:"p"},"CLIEngine"),".")),(0,n.kt)("h3",null,(0,n.kt)("span",{id:"context",parentName:"h3"}),(0,n.kt)("inlineCode",{parentName:"h3"},"context"),(0,n.kt)("a",{href:"#context","aria-hidden":"true",tabIndex:"-1",parentName:"h3"},(0,n.kt)("span",{className:"header-link",parentName:"a"}))),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Type:")),(0,n.kt)("pre",null,(0,n.kt)("code",{className:"hljs language-ts",parentName:"pre"},(0,n.kt)("span",{className:"token keyword",parentName:"code"},"type")," ",(0,n.kt)("span",{className:"token class-name",parentName:"code"},"context")," ",(0,n.kt)("span",{className:"token operator",parentName:"code"},"=")," ",(0,n.kt)("span",{className:"token builtin",parentName:"code"},"string"),(0,n.kt)("span",{className:"token punctuation",parentName:"code"},";"))),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Default: ",(0,n.kt)("inlineCode",{parentName:"li"},"compiler.context"))),(0,n.kt)("p",null,"A string indicating the root of your files."),(0,n.kt)("h3",null,(0,n.kt)("span",{id:"eslintpath",parentName:"h3"}),(0,n.kt)("inlineCode",{parentName:"h3"},"eslintPath"),(0,n.kt)("a",{href:"#eslintpath","aria-hidden":"true",tabIndex:"-1",parentName:"h3"},(0,n.kt)("span",{className:"header-link",parentName:"a"}))),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Type:")),(0,n.kt)("pre",null,(0,n.kt)("code",{className:"hljs language-ts",parentName:"pre"},(0,n.kt)("span",{className:"token keyword",parentName:"code"},"type")," ",(0,n.kt)("span",{className:"token class-name",parentName:"code"},"eslintPath")," ",(0,n.kt)("span",{className:"token operator",parentName:"code"},"=")," ",(0,n.kt)("span",{className:"token builtin",parentName:"code"},"string"),(0,n.kt)("span",{className:"token punctuation",parentName:"code"},";"))),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Default: ",(0,n.kt)("inlineCode",{parentName:"li"},"eslint"))),(0,n.kt)("p",null,"Path to ",(0,n.kt)("inlineCode",{parentName:"p"},"eslint")," instance that will be used for linting. If the ",(0,n.kt)("inlineCode",{parentName:"p"},"eslintPath")," is a folder like a official eslint, or specify a ",(0,n.kt)("inlineCode",{parentName:"p"},"formatter")," option. now you don't have to install ",(0,n.kt)("inlineCode",{parentName:"p"},"eslint"),"."),(0,n.kt)("h3",null,(0,n.kt)("span",{id:"extensions",parentName:"h3"}),(0,n.kt)("inlineCode",{parentName:"h3"},"extensions"),(0,n.kt)("a",{href:"#extensions","aria-hidden":"true",tabIndex:"-1",parentName:"h3"},(0,n.kt)("span",{className:"header-link",parentName:"a"}))),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Type:")),(0,n.kt)("pre",null,(0,n.kt)("code",{className:"hljs language-ts",parentName:"pre"},(0,n.kt)("span",{className:"token keyword",parentName:"code"},"type")," ",(0,n.kt)("span",{className:"token class-name",parentName:"code"},"extensions")," ",(0,n.kt)("span",{className:"token operator",parentName:"code"},"=")," ",(0,n.kt)("span",{className:"token builtin",parentName:"code"},"string")," ",(0,n.kt)("span",{className:"token operator",parentName:"code"},"|")," ",(0,n.kt)("span",{className:"token builtin",parentName:"code"},"Array"),(0,n.kt)("span",{className:"token operator",parentName:"code"},"<"),(0,n.kt)("span",{className:"token builtin",parentName:"code"},"string"),(0,n.kt)("span",{className:"token operator",parentName:"code"},">"),(0,n.kt)("span",{className:"token punctuation",parentName:"code"},";"))),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Default: ",(0,n.kt)("inlineCode",{parentName:"li"},"'js'"))),(0,n.kt)("p",null,"Specify extensions that should be checked."),(0,n.kt)("h3",null,(0,n.kt)("span",{id:"exclude",parentName:"h3"}),(0,n.kt)("inlineCode",{parentName:"h3"},"exclude"),(0,n.kt)("a",{href:"#exclude","aria-hidden":"true",tabIndex:"-1",parentName:"h3"},(0,n.kt)("span",{className:"header-link",parentName:"a"}))),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Type:")),(0,n.kt)("pre",null,(0,n.kt)("code",{className:"hljs language-ts",parentName:"pre"},(0,n.kt)("span",{className:"token keyword",parentName:"code"},"type")," ",(0,n.kt)("span",{className:"token class-name",parentName:"code"},"exclude")," ",(0,n.kt)("span",{className:"token operator",parentName:"code"},"=")," ",(0,n.kt)("span",{className:"token builtin",parentName:"code"},"string")," ",(0,n.kt)("span",{className:"token operator",parentName:"code"},"|")," ",(0,n.kt)("span",{className:"token builtin",parentName:"code"},"Array"),(0,n.kt)("span",{className:"token operator",parentName:"code"},"<"),(0,n.kt)("span",{className:"token builtin",parentName:"code"},"string"),(0,n.kt)("span",{className:"token operator",parentName:"code"},">"),(0,n.kt)("span",{className:"token punctuation",parentName:"code"},";"))),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Default: ",(0,n.kt)("inlineCode",{parentName:"li"},"'node_modules'"))),(0,n.kt)("p",null,"Specify the files and/or directories to exclude. Must be relative to ",(0,n.kt)("inlineCode",{parentName:"p"},"options.context"),"."),(0,n.kt)("h3",null,(0,n.kt)("span",{id:"resourcequeryexclude",parentName:"h3"}),(0,n.kt)("inlineCode",{parentName:"h3"},"resourceQueryExclude"),(0,n.kt)("a",{href:"#resourcequeryexclude","aria-hidden":"true",tabIndex:"-1",parentName:"h3"},(0,n.kt)("span",{className:"header-link",parentName:"a"}))),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Type:")),(0,n.kt)("pre",null,(0,n.kt)("code",{className:"hljs language-ts",parentName:"pre"},(0,n.kt)("span",{className:"token keyword",parentName:"code"},"type")," ",(0,n.kt)("span",{className:"token class-name",parentName:"code"},"resourceQueryExclude")," ",(0,n.kt)("span",{className:"token operator",parentName:"code"},"=")," RegExp ",(0,n.kt)("span",{className:"token operator",parentName:"code"},"|")," ",(0,n.kt)("span",{className:"token builtin",parentName:"code"},"Array"),(0,n.kt)("span",{className:"token operator",parentName:"code"},"<"),"RegExp",(0,n.kt)("span",{className:"token operator",parentName:"code"},">"),(0,n.kt)("span",{className:"token punctuation",parentName:"code"},";"))),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Default: ",(0,n.kt)("inlineCode",{parentName:"li"},"[]"))),(0,n.kt)("p",null,"Specify the resource query to exclude."),(0,n.kt)("h3",null,(0,n.kt)("span",{id:"files",parentName:"h3"}),(0,n.kt)("inlineCode",{parentName:"h3"},"files"),(0,n.kt)("a",{href:"#files","aria-hidden":"true",tabIndex:"-1",parentName:"h3"},(0,n.kt)("span",{className:"header-link",parentName:"a"}))),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Type:")),(0,n.kt)("pre",null,(0,n.kt)("code",{className:"hljs language-ts",parentName:"pre"},(0,n.kt)("span",{className:"token keyword",parentName:"code"},"type")," ",(0,n.kt)("span",{className:"token class-name",parentName:"code"},"files")," ",(0,n.kt)("span",{className:"token operator",parentName:"code"},"=")," ",(0,n.kt)("span",{className:"token builtin",parentName:"code"},"string")," ",(0,n.kt)("span",{className:"token operator",parentName:"code"},"|")," ",(0,n.kt)("span",{className:"token builtin",parentName:"code"},"Array"),(0,n.kt)("span",{className:"token operator",parentName:"code"},"<"),(0,n.kt)("span",{className:"token builtin",parentName:"code"},"string"),(0,n.kt)("span",{className:"token operator",parentName:"code"},">"),(0,n.kt)("span",{className:"token punctuation",parentName:"code"},";"))),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Default: ",(0,n.kt)("inlineCode",{parentName:"li"},"null"))),(0,n.kt)("p",null,"Specify directories, files, or globs. Must be relative to ",(0,n.kt)("inlineCode",{parentName:"p"},"options.context"),".\nDirectories are traversed recursively looking for files matching ",(0,n.kt)("inlineCode",{parentName:"p"},"options.extensions"),".\nFile and glob patterns ignore ",(0,n.kt)("inlineCode",{parentName:"p"},"options.extensions"),"."),(0,n.kt)("h3",null,(0,n.kt)("span",{id:"fix",parentName:"h3"}),(0,n.kt)("inlineCode",{parentName:"h3"},"fix"),(0,n.kt)("a",{href:"#fix","aria-hidden":"true",tabIndex:"-1",parentName:"h3"},(0,n.kt)("span",{className:"header-link",parentName:"a"}))),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Type:")),(0,n.kt)("pre",null,(0,n.kt)("code",{className:"hljs language-ts",parentName:"pre"},(0,n.kt)("span",{className:"token keyword",parentName:"code"},"type")," ",(0,n.kt)("span",{className:"token class-name",parentName:"code"},"fix")," ",(0,n.kt)("span",{className:"token operator",parentName:"code"},"=")," ",(0,n.kt)("span",{className:"token builtin",parentName:"code"},"boolean"),(0,n.kt)("span",{className:"token punctuation",parentName:"code"},";"))),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Default: ",(0,n.kt)("inlineCode",{parentName:"li"},"false"))),(0,n.kt)("p",null,"Will enable ",(0,n.kt)("a",{href:"https://eslint.org/docs/developer-guide/nodejs-api#-eslintoutputfixesresults",parentName:"p"},"ESLint autofix feature"),"."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Be careful: this option will change source files.")),(0,n.kt)("h3",null,(0,n.kt)("span",{id:"formatter",parentName:"h3"}),(0,n.kt)("inlineCode",{parentName:"h3"},"formatter"),(0,n.kt)("a",{href:"#formatter","aria-hidden":"true",tabIndex:"-1",parentName:"h3"},(0,n.kt)("span",{className:"header-link",parentName:"a"}))),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Type:")),(0,n.kt)("pre",null,(0,n.kt)("code",{className:"hljs language-ts",parentName:"pre"},(0,n.kt)("span",{className:"token keyword",parentName:"code"},"type")," ",(0,n.kt)("span",{className:"token class-name",parentName:"code"},"formatter")," ",(0,n.kt)("span",{className:"token operator",parentName:"code"},"=")," ",(0,n.kt)("span",{className:"token builtin",parentName:"code"},"string"),(0,n.kt)("span",{className:"token operator",parentName:"code"},"|")," ",(0,n.kt)("span",{className:"token punctuation",parentName:"code"},"("),"\n  results",(0,n.kt)("span",{className:"token operator",parentName:"code"},":"),"  ",(0,n.kt)("span",{className:"token builtin",parentName:"code"},"Array"),(0,n.kt)("span",{className:"token operator",parentName:"code"},"<"),(0,n.kt)("span",{className:"token keyword",parentName:"code"},"import"),(0,n.kt)("span",{className:"token punctuation",parentName:"code"},"("),(0,n.kt)("span",{className:"token string",parentName:"code"},"'eslint'"),(0,n.kt)("span",{className:"token punctuation",parentName:"code"},")"),(0,n.kt)("span",{className:"token punctuation",parentName:"code"},"."),"ESLint",(0,n.kt)("span",{className:"token punctuation",parentName:"code"},"."),"LintResult",(0,n.kt)("span",{className:"token operator",parentName:"code"},">"),(0,n.kt)("span",{className:"token punctuation",parentName:"code"},","),"\n  data",(0,n.kt)("span",{className:"token operator",parentName:"code"},"?"),(0,n.kt)("span",{className:"token operator",parentName:"code"},":")," ",(0,n.kt)("span",{className:"token keyword",parentName:"code"},"import"),(0,n.kt)("span",{className:"token punctuation",parentName:"code"},"("),(0,n.kt)("span",{className:"token string",parentName:"code"},"'eslint'"),(0,n.kt)("span",{className:"token punctuation",parentName:"code"},")"),(0,n.kt)("span",{className:"token punctuation",parentName:"code"},"."),"ESLint",(0,n.kt)("span",{className:"token punctuation",parentName:"code"},"."),"LintResultData ",(0,n.kt)("span",{className:"token operator",parentName:"code"},"|")," ",(0,n.kt)("span",{className:"token keyword",parentName:"code"},"undefined"),"\n",(0,n.kt)("span",{className:"token punctuation",parentName:"code"},")")," ",(0,n.kt)("span",{className:"token operator",parentName:"code"},"=>")," ",(0,n.kt)("span",{className:"token builtin",parentName:"code"},"string"))),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Default: ",(0,n.kt)("inlineCode",{parentName:"li"},"'stylish'"))),(0,n.kt)("p",null,"Accepts a function that will have one argument: an array of eslint messages (object). The function must return the output as a string. You can use official ",(0,n.kt)("a",{href:"https://eslint.org/docs/user-guide/formatters/",parentName:"p"},"eslint formatters"),"."),(0,n.kt)("h3",null,(0,n.kt)("span",{id:"lintdirtymodulesonly",parentName:"h3"}),(0,n.kt)("inlineCode",{parentName:"h3"},"lintDirtyModulesOnly"),(0,n.kt)("a",{href:"#lintdirtymodulesonly","aria-hidden":"true",tabIndex:"-1",parentName:"h3"},(0,n.kt)("span",{className:"header-link",parentName:"a"}))),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Type:")),(0,n.kt)("pre",null,(0,n.kt)("code",{className:"hljs language-ts",parentName:"pre"},(0,n.kt)("span",{className:"token keyword",parentName:"code"},"type")," ",(0,n.kt)("span",{className:"token class-name",parentName:"code"},"lintDirtyModulesOnly")," ",(0,n.kt)("span",{className:"token operator",parentName:"code"},"=")," ",(0,n.kt)("span",{className:"token builtin",parentName:"code"},"boolean"),(0,n.kt)("span",{className:"token punctuation",parentName:"code"},";"))),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Default: ",(0,n.kt)("inlineCode",{parentName:"li"},"false"))),(0,n.kt)("p",null,"Lint only changed files, skip lint on start."),(0,n.kt)("h3",null,(0,n.kt)("span",{id:"threads",parentName:"h3"}),(0,n.kt)("inlineCode",{parentName:"h3"},"threads"),(0,n.kt)("a",{href:"#threads","aria-hidden":"true",tabIndex:"-1",parentName:"h3"},(0,n.kt)("span",{className:"header-link",parentName:"a"}))),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Type:")),(0,n.kt)("pre",null,(0,n.kt)("code",{className:"hljs language-ts",parentName:"pre"},(0,n.kt)("span",{className:"token keyword",parentName:"code"},"type")," ",(0,n.kt)("span",{className:"token class-name",parentName:"code"},"threads")," ",(0,n.kt)("span",{className:"token operator",parentName:"code"},"=")," ",(0,n.kt)("span",{className:"token builtin",parentName:"code"},"boolean")," ",(0,n.kt)("span",{className:"token operator",parentName:"code"},"|")," ",(0,n.kt)("span",{className:"token builtin",parentName:"code"},"number"),(0,n.kt)("span",{className:"token punctuation",parentName:"code"},";"))),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Default: ",(0,n.kt)("inlineCode",{parentName:"li"},"false"))),(0,n.kt)("p",null,"Will run lint tasks across a thread pool. The pool size is automatic unless you specify a number."),(0,n.kt)("h3",null,(0,n.kt)("span",{id:"errors-and-warning",parentName:"h3"}),"Errors and Warning",(0,n.kt)("a",{href:"#errors-and-warning","aria-hidden":"true",tabIndex:"-1",parentName:"h3"},(0,n.kt)("span",{className:"header-link",parentName:"a"}))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"By default the plugin will auto adjust error reporting depending on eslint errors/warnings counts."),"\nYou can still force this behavior by using ",(0,n.kt)("inlineCode",{parentName:"p"},"emitError")," ",(0,n.kt)("strong",{parentName:"p"},"or")," ",(0,n.kt)("inlineCode",{parentName:"p"},"emitWarning")," options:"),(0,n.kt)("h4",null,(0,n.kt)("span",{id:"emiterror",parentName:"h4"}),(0,n.kt)("inlineCode",{parentName:"h4"},"emitError"),(0,n.kt)("a",{href:"#emiterror","aria-hidden":"true",tabIndex:"-1",parentName:"h4"},(0,n.kt)("span",{className:"header-link",parentName:"a"}))),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Type:")),(0,n.kt)("pre",null,(0,n.kt)("code",{className:"hljs language-ts",parentName:"pre"},(0,n.kt)("span",{className:"token keyword",parentName:"code"},"type")," ",(0,n.kt)("span",{className:"token class-name",parentName:"code"},"emitError")," ",(0,n.kt)("span",{className:"token operator",parentName:"code"},"=")," ",(0,n.kt)("span",{className:"token builtin",parentName:"code"},"boolean"),(0,n.kt)("span",{className:"token punctuation",parentName:"code"},";"))),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Default: ",(0,n.kt)("inlineCode",{parentName:"li"},"true"))),(0,n.kt)("p",null,"The errors found will always be emitted, to disable set to ",(0,n.kt)("inlineCode",{parentName:"p"},"false"),"."),(0,n.kt)("h4",null,(0,n.kt)("span",{id:"emitwarning",parentName:"h4"}),(0,n.kt)("inlineCode",{parentName:"h4"},"emitWarning"),(0,n.kt)("a",{href:"#emitwarning","aria-hidden":"true",tabIndex:"-1",parentName:"h4"},(0,n.kt)("span",{className:"header-link",parentName:"a"}))),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Type:")),(0,n.kt)("pre",null,(0,n.kt)("code",{className:"hljs language-ts",parentName:"pre"},(0,n.kt)("span",{className:"token keyword",parentName:"code"},"type")," ",(0,n.kt)("span",{className:"token class-name",parentName:"code"},"emitWarning")," ",(0,n.kt)("span",{className:"token operator",parentName:"code"},"=")," ",(0,n.kt)("span",{className:"token builtin",parentName:"code"},"boolean"),(0,n.kt)("span",{className:"token punctuation",parentName:"code"},";"))),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Default: ",(0,n.kt)("inlineCode",{parentName:"li"},"true"))),(0,n.kt)("p",null,"The warnings found will always be emitted, to disable set to ",(0,n.kt)("inlineCode",{parentName:"p"},"false"),"."),(0,n.kt)("h4",null,(0,n.kt)("span",{id:"failonerror",parentName:"h4"}),(0,n.kt)("inlineCode",{parentName:"h4"},"failOnError"),(0,n.kt)("a",{href:"#failonerror","aria-hidden":"true",tabIndex:"-1",parentName:"h4"},(0,n.kt)("span",{className:"header-link",parentName:"a"}))),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Type:")),(0,n.kt)("pre",null,(0,n.kt)("code",{className:"hljs language-ts",parentName:"pre"},(0,n.kt)("span",{className:"token keyword",parentName:"code"},"type")," ",(0,n.kt)("span",{className:"token class-name",parentName:"code"},"failOnError")," ",(0,n.kt)("span",{className:"token operator",parentName:"code"},"=")," ",(0,n.kt)("span",{className:"token builtin",parentName:"code"},"boolean"),(0,n.kt)("span",{className:"token punctuation",parentName:"code"},";"))),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Default: ",(0,n.kt)("inlineCode",{parentName:"li"},"true"))),(0,n.kt)("p",null,"Will cause the module build to fail if there are any errors, to disable set to ",(0,n.kt)("inlineCode",{parentName:"p"},"false"),"."),(0,n.kt)("h4",null,(0,n.kt)("span",{id:"failonwarning",parentName:"h4"}),(0,n.kt)("inlineCode",{parentName:"h4"},"failOnWarning"),(0,n.kt)("a",{href:"#failonwarning","aria-hidden":"true",tabIndex:"-1",parentName:"h4"},(0,n.kt)("span",{className:"header-link",parentName:"a"}))),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Type:")),(0,n.kt)("pre",null,(0,n.kt)("code",{className:"hljs language-ts",parentName:"pre"},(0,n.kt)("span",{className:"token keyword",parentName:"code"},"type")," ",(0,n.kt)("span",{className:"token class-name",parentName:"code"},"failOnWarning")," ",(0,n.kt)("span",{className:"token operator",parentName:"code"},"=")," ",(0,n.kt)("span",{className:"token builtin",parentName:"code"},"boolean"),(0,n.kt)("span",{className:"token punctuation",parentName:"code"},";"))),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Default: ",(0,n.kt)("inlineCode",{parentName:"li"},"false"))),(0,n.kt)("p",null,"Will cause the module build to fail if there are any warnings, if set to ",(0,n.kt)("inlineCode",{parentName:"p"},"true"),"."),(0,n.kt)("h4",null,(0,n.kt)("span",{id:"quiet",parentName:"h4"}),(0,n.kt)("inlineCode",{parentName:"h4"},"quiet"),(0,n.kt)("a",{href:"#quiet","aria-hidden":"true",tabIndex:"-1",parentName:"h4"},(0,n.kt)("span",{className:"header-link",parentName:"a"}))),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Type:")),(0,n.kt)("pre",null,(0,n.kt)("code",{className:"hljs language-ts",parentName:"pre"},(0,n.kt)("span",{className:"token keyword",parentName:"code"},"type")," ",(0,n.kt)("span",{className:"token class-name",parentName:"code"},"quiet")," ",(0,n.kt)("span",{className:"token operator",parentName:"code"},"=")," ",(0,n.kt)("span",{className:"token builtin",parentName:"code"},"boolean"),(0,n.kt)("span",{className:"token punctuation",parentName:"code"},";"))),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Default: ",(0,n.kt)("inlineCode",{parentName:"li"},"false"))),(0,n.kt)("p",null,"Will process and report errors only and ignore warnings, if set to ",(0,n.kt)("inlineCode",{parentName:"p"},"true"),"."),(0,n.kt)("h4",null,(0,n.kt)("span",{id:"outputreport",parentName:"h4"}),(0,n.kt)("inlineCode",{parentName:"h4"},"outputReport"),(0,n.kt)("a",{href:"#outputreport","aria-hidden":"true",tabIndex:"-1",parentName:"h4"},(0,n.kt)("span",{className:"header-link",parentName:"a"}))),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Type:")),(0,n.kt)("pre",null,(0,n.kt)("code",{className:"hljs language-ts",parentName:"pre"},(0,n.kt)("span",{className:"token keyword",parentName:"code"},"type")," ",(0,n.kt)("span",{className:"token class-name",parentName:"code"},"outputReport")," ",(0,n.kt)("span",{className:"token operator",parentName:"code"},"="),"\n  ",(0,n.kt)("span",{className:"token operator",parentName:"code"},"|")," ",(0,n.kt)("span",{className:"token builtin",parentName:"code"},"boolean"),"\n  ",(0,n.kt)("span",{className:"token operator",parentName:"code"},"|")," ",(0,n.kt)("span",{className:"token punctuation",parentName:"code"},"{"),"\n      filePath",(0,n.kt)("span",{className:"token operator",parentName:"code"},"?"),(0,n.kt)("span",{className:"token operator",parentName:"code"},":")," ",(0,n.kt)("span",{className:"token builtin",parentName:"code"},"string")," ",(0,n.kt)("span",{className:"token operator",parentName:"code"},"|")," ",(0,n.kt)("span",{className:"token keyword",parentName:"code"},"undefined"),(0,n.kt)("span",{className:"token punctuation",parentName:"code"},";"),"\n      formatter",(0,n.kt)("span",{className:"token operator",parentName:"code"},"?"),(0,n.kt)("span",{className:"token operator",parentName:"code"},":"),"\n        ",(0,n.kt)("span",{className:"token operator",parentName:"code"},"|")," ",(0,n.kt)("span",{className:"token punctuation",parentName:"code"},"("),"\n            ",(0,n.kt)("span",{className:"token operator",parentName:"code"},"|")," ",(0,n.kt)("span",{className:"token builtin",parentName:"code"},"string"),"\n            ",(0,n.kt)("span",{className:"token operator",parentName:"code"},"|")," ",(0,n.kt)("span",{className:"token punctuation",parentName:"code"},"("),(0,n.kt)("span",{className:"token punctuation",parentName:"code"},"("),"\n                results",(0,n.kt)("span",{className:"token operator",parentName:"code"},":")," ",(0,n.kt)("span",{className:"token builtin",parentName:"code"},"Array"),(0,n.kt)("span",{className:"token operator",parentName:"code"},"<"),(0,n.kt)("span",{className:"token keyword",parentName:"code"},"import"),(0,n.kt)("span",{className:"token punctuation",parentName:"code"},"("),(0,n.kt)("span",{className:"token string",parentName:"code"},"'eslint'"),(0,n.kt)("span",{className:"token punctuation",parentName:"code"},")"),(0,n.kt)("span",{className:"token punctuation",parentName:"code"},"."),"ESLint",(0,n.kt)("span",{className:"token punctuation",parentName:"code"},"."),"LintResult",(0,n.kt)("span",{className:"token operator",parentName:"code"},">"),(0,n.kt)("span",{className:"token punctuation",parentName:"code"},","),"\n                data",(0,n.kt)("span",{className:"token operator",parentName:"code"},"?"),(0,n.kt)("span",{className:"token operator",parentName:"code"},":")," ",(0,n.kt)("span",{className:"token keyword",parentName:"code"},"import"),(0,n.kt)("span",{className:"token punctuation",parentName:"code"},"("),(0,n.kt)("span",{className:"token string",parentName:"code"},"'eslint'"),(0,n.kt)("span",{className:"token punctuation",parentName:"code"},")"),(0,n.kt)("span",{className:"token punctuation",parentName:"code"},"."),"ESLint",(0,n.kt)("span",{className:"token punctuation",parentName:"code"},"."),"LintResultData ",(0,n.kt)("span",{className:"token operator",parentName:"code"},"|")," ",(0,n.kt)("span",{className:"token keyword",parentName:"code"},"undefined"),"\n              ",(0,n.kt)("span",{className:"token punctuation",parentName:"code"},")")," ",(0,n.kt)("span",{className:"token operator",parentName:"code"},"=>")," ",(0,n.kt)("span",{className:"token builtin",parentName:"code"},"string"),(0,n.kt)("span",{className:"token punctuation",parentName:"code"},")"),"\n          ",(0,n.kt)("span",{className:"token punctuation",parentName:"code"},")"),"\n        ",(0,n.kt)("span",{className:"token operator",parentName:"code"},"|")," ",(0,n.kt)("span",{className:"token keyword",parentName:"code"},"undefined"),(0,n.kt)("span",{className:"token punctuation",parentName:"code"},";"),"\n    ",(0,n.kt)("span",{className:"token punctuation",parentName:"code"},"}"),(0,n.kt)("span",{className:"token punctuation",parentName:"code"},";"))),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Default: ",(0,n.kt)("inlineCode",{parentName:"li"},"false"))),(0,n.kt)("p",null,"Write the output of the errors to a file, for example a checkstyle xml file for use for reporting on Jenkins CI."),(0,n.kt)("p",null,"The ",(0,n.kt)("inlineCode",{parentName:"p"},"filePath")," is an absolute path or relative to the webpack config: ",(0,n.kt)("inlineCode",{parentName:"p"},"output.path"),".\nYou can pass in a different ",(0,n.kt)("inlineCode",{parentName:"p"},"formatter")," for the output file,\nif none is passed in the default/configured formatter will be used."),(0,n.kt)("h2",null,(0,n.kt)("span",{id:"changelog",parentName:"h2"}),"Changelog",(0,n.kt)("a",{href:"#changelog","aria-hidden":"true",tabIndex:"-1",parentName:"h2"},(0,n.kt)("span",{className:"header-link",parentName:"a"}))),(0,n.kt)("p",null,(0,n.kt)("a",{href:"https://github.com/webpack-contrib/eslint-webpack-plugin/blob/master/CHANGELOG.md",parentName:"p"},"Changelog")),(0,n.kt)("h2",null,(0,n.kt)("span",{id:"license",parentName:"h2"}),"License",(0,n.kt)("a",{href:"#license","aria-hidden":"true",tabIndex:"-1",parentName:"h2"},(0,n.kt)("span",{className:"header-link",parentName:"a"}))),(0,n.kt)("p",null,(0,n.kt)("a",{href:"https://github.com/webpack-contrib/eslint-webpack-plugin/blob/master/LICENSE",parentName:"p"},"MIT")))}p.isMDXComponent=!0,a.default=p}}]);