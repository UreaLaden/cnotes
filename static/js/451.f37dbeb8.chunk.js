(this.webpackJsonpcnotes=this.webpackJsonpcnotes||[]).push([[451],{629:function(e,t){!function(e){function t(e,t,n){return{pattern:RegExp("<#"+e+"[\\s\\S]*?#>"),alias:"block",inside:{delimiter:{pattern:RegExp("^<#"+e+"|#>$"),alias:"important"},content:{pattern:/[\s\S]+/,inside:t,alias:n}}}}e.languages["t4-templating"]=Object.defineProperty({},"createT4",{value:function(n){var a=e.languages[n],s="language-"+n;return{block:{pattern:/<#[\s\S]+?#>/,inside:{directive:t("@",{"attr-value":{pattern:/=(?:("|')(?:\\[\s\S]|(?!\1)[^\\])*\1|[^\s'">=]+)/,inside:{punctuation:/^=|^["']|["']$/}},keyword:/\b\w+(?=\s)/,"attr-name":/\b\w+/}),expression:t("=",a,s),"class-feature":t("\\+",a,s),standard:t("",a,s)}}}}})}(Prism)}}]);
//# sourceMappingURL=451.f37dbeb8.chunk.js.map