(this.webpackJsonpcnotes=this.webpackJsonpcnotes||[]).push([[197],{375:function(e,s){!function(e){function s(e,t){return t<=0?"[]":e.replace(/<SELF>/g,(function(){return s(e,t-1)}))}var t=/'[{}:=,](?:[^']|'')*'(?!')/,n={pattern:/''/,greedy:!0,alias:"operator"},a={pattern:t,greedy:!0,inside:{escape:n}},r=s("\\{(?:[^{}']|'(?![{},'])|''|<STR>|<SELF>)*\\}".replace(/<STR>/g,(function(){return t.source})),8),i={pattern:RegExp(r),inside:{message:{pattern:/^(\{)[\s\S]+(?=\}$)/,lookbehind:!0,inside:null},"message-delimiter":{pattern:/./,alias:"punctuation"}}};e.languages["icu-message-format"]={argument:{pattern:RegExp(r),greedy:!0,inside:{content:{pattern:/^(\{)[\s\S]+(?=\}$)/,lookbehind:!0,inside:{"argument-name":{pattern:/^(\s*)[^{}:=,\s]+/,lookbehind:!0},"choice-style":{pattern:/^(\s*,\s*choice\s*,\s*)\S(?:[\s\S]*\S)?/,lookbehind:!0,inside:{punctuation:/\|/,range:{pattern:/^(\s*)[+-]?(?:\d+(?:\.\d*)?|\u221e)\s*[<#\u2264]/,lookbehind:!0,inside:{operator:/[<#\u2264]/,number:/\S+/}},rest:null}},"plural-style":{pattern:/^(\s*,\s*(?:plural|selectordinal)\s*,\s*)\S(?:[\s\S]*\S)?/,lookbehind:!0,inside:{offset:/^offset:\s*\d+/,"nested-message":i,selector:{pattern:/=\d+|[^{}:=,\s]+/,inside:{keyword:/^(?:zero|one|two|few|many|other)$/}}}},"select-style":{pattern:/^(\s*,\s*select\s*,\s*)\S(?:[\s\S]*\S)?/,lookbehind:!0,inside:{"nested-message":i,selector:{pattern:/[^{}:=,\s]+/,inside:{keyword:/^other$/}}}},keyword:/\b(?:choice|plural|select|selectordinal)\b/,"arg-type":{pattern:/\b(?:number|date|time|spellout|ordinal|duration)\b/,alias:"keyword"},"arg-skeleton":{pattern:/(,\s*)::[^{}:=,\s]+/,lookbehind:!0},"arg-style":{pattern:/(,\s*)(?:short|medium|long|full|integer|currency|percent)(?=\s*$)/,lookbehind:!0},"arg-style-text":{pattern:RegExp("(^\\s*,\\s*(?=\\S))"+s("(?:[^{}']|'[^']*'|\\{(?:<SELF>)?\\})+",8)+"$"),lookbehind:!0,alias:"string"},punctuation:/,/}},"argument-delimiter":{pattern:/./,alias:"operator"}}},escape:n,string:a},i.inside.message.inside=e.languages["icu-message-format"],e.languages["icu-message-format"].argument.inside.content.inside["choice-style"].inside.rest=e.languages["icu-message-format"]}(Prism)}}]);
//# sourceMappingURL=197.d8009202.chunk.js.map