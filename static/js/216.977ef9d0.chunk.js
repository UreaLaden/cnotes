(this.webpackJsonpjbook=this.webpackJsonpjbook||[]).push([[216],{394:function(a,n){!function(a){var n=a.languages.javadoclike={parameter:{pattern:/(^[\t ]*(?:\/{3}|\*|\/\*\*)\s*@(?:param|arg|arguments)\s+)\w+/m,lookbehind:!0},keyword:{pattern:/(^[\t ]*(?:\/{3}|\*|\/\*\*)\s*|\{)@[a-z][a-zA-Z-]+\b/m,lookbehind:!0},punctuation:/[{}]/};Object.defineProperty(n,"addSupport",{value:function(n,e){"string"===typeof n&&(n=[n]),n.forEach((function(n){!function(n,e){var t="doc-comment",o=a.languages[n];if(o){var r=o[t];if(!r){var i={"doc-comment":{pattern:/(^|[^\\])\/\*\*[^/][\s\S]*?(?:\*\/|$)/,lookbehind:!0,alias:"comment"}};r=(o=a.languages.insertBefore(n,"comment",i))[t]}if(r instanceof RegExp&&(r=o[t]={pattern:r}),Array.isArray(r))for(var s=0,p=r.length;s<p;s++)r[s]instanceof RegExp&&(r[s]={pattern:r[s]}),e(r[s]);else e(r)}}(n,(function(a){a.inside||(a.inside={}),a.inside.rest=e}))}))}}),n.addSupport(["java","javascript","php"],n)}(Prism)}}]);
//# sourceMappingURL=216.977ef9d0.chunk.js.map