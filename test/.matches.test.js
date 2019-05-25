module.exports=function(t){var e={};function o(n){if(e[n])return e[n].exports;var r=e[n]={i:n,l:!1,exports:{}};return t[n].call(r.exports,r,r.exports,o),r.l=!0,r.exports}return o.m=t,o.c=e,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)o.d(n,r,function(e){return t[e]}.bind(null,r));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="",o(o.s=0)}([function(t,e,o){"use strict";var n=o(1);describe("General",function(){it("can perform a simple match",function(){expect(n("hello world").match("hello").toBoolean()).toEqual(!0),expect(n("hell world").match("hello").toBoolean()).toEqual(!1),expect(n("hell world").match(function(t){return t.match("hell")}).toBoolean()).toEqual(!0),expect(n("hell world").match(function(t){return t.match("hello")}).toBoolean()).toEqual(!1)}),it("can use each method",function(){var t=[];n("hello world hello").match(/\b\S+\b/g).each(function(e,o,n){t.push([e,o,n])}),expect(t).toEqual([["hello",0,["hello","world","hello"]],["world",1,["hello","world","hello"]],["hello",2,["hello","world","hello"]]]),t=[],n("hello world hello").match(/foobar/g).each(function(e,o,n){t.push([e,o,n])}),expect(t).toEqual([])}),it("can perform an array of matches",function(){expect(n("hello world").match("whattt","hello").toBoolean()).toEqual(!0),expect(n("hell world").match("whattt","hello").toBoolean()).toEqual(!1),expect(n("hello world").match("whattt",/hel(lo)/).first().toString()).toEqual("lo"),expect(n("hello world").match(/(hel)lo/,/hel(lo)/).first().toString()).toEqual("hel"),expect(n("hello world").match([/(hel)lo/,/hel(lo)/]).first().toString()).toEqual("hel")}),it("can get a item result",function(){expect(n("one two three").split(" ").item(0).toString()).toEqual("one"),expect(n("one two three").split(" ").item(1).toString()).toEqual("two"),expect(n("one two three").split(" ").item(2).toString()).toEqual("three")}),it("can get the last result",function(){expect(n("one two three").split(" ").last().toString()).toEqual("three"),expect(n("one two three").match(/one|two|three/g).last().toString()).toEqual("three")}),it("can get the first result",function(){expect(n("one two three").split(" ").first().toString()).toEqual("one")}),it("can get an itemFromRight result",function(){expect(n("one two three").split(" ").itemFromRight(0).toString()).toEqual("three"),expect(n("one two three").split(" ").itemFromRight(1).toString()).toEqual("two"),expect(n("one two three").split(" ").itemFromRight(2).toString()).toEqual("one"),expect(n("one two three").match(/one|two|three/g).itemFromRight(0).toString()).toEqual("three")}),it("can replace an item",function(){expect(n("one two three").replace(" two","").itemFromRight(0).toString()).toEqual("one three")}),it("can replace with a match set",function(){expect(n("one two three").replace([/(one) (two) (four)/,/(one) (two) (three)/],"$1 $3").toString()).toEqual("one three")}),it("can transform the context",function(){expect(n("one two three").match(/\S+/g).transform(function(t){return 3===t.length?"pass":"fail"}).toString()).toEqual("pass")}),it("can replace an array of items",function(){expect(n("two two two").split(" ").replace(/two/g,"three").join("-").toString()).toEqual("three-three-three")}),it("can get length",function(){expect(n("one two three").length()).toEqual(13),expect(n("one two three").split(" ").length()).toEqual(3)}),it("can use join",function(){expect(n("one two three").split(" ").join("-").toString()).toEqual("one-two-three")}),it("can use join function that returns different delimiters",function(){expect(n("one two three four five six").split(" ").join(function(t,e){return e%2==1?" ":"-"}).toString()).toEqual("one-two three-four five-six")}),it("can use join on match sets",function(){expect(n("1902 foo bar 2010").match(/\d{4}/g).join(" - ").toString()).toEqual("1902 - 2010")}),it("can use uniq",function(){expect(n("10-20-30-40-40-10").match(/[0-9]{2}/g).uniq().toArray()).toEqual(["10","20","30","40"])}),it("can use map",function(){expect(n("one two three").split(" ").map(function(t){return"("+t+")"}).join(" ").toString()).toEqual("(one) (two) (three)"),expect(n("one two three").split(" ").map(function(t,e,o){return"three"===t?o.slice(e-1,e):-1}).filter(function(t){return-1!==t}).first().toString()).toEqual("two")}),it("can use join",function(){expect(n("one two three").split(" ").join("-").toString()).toEqual("one-two-three")}),it("can use find",function(){expect(n("one two three").split(" ").find(function(t){return"two"===t}).toString()).toEqual("two"),expect(n("one two three").split(" ").find(function(t,e,o){return"two"===t&&"three"===o[e+1]}).toString()).toEqual("two"),expect(n("one two three").split(" ").find(/one|three/).toString()).toEqual("one"),expect(n("one two three").split(" ").find("two").toString()).toEqual("two"),expect(n("one two  three").split(" ").find().toString()).toEqual("one")}),it("can use filter",function(){expect(n("one two three").split(" ").filter(function(t){return"two"===t}).toString()).toEqual("two"),expect(n("one two three").split(" ").filter(function(t,e,o){return"two"===t&&"three"===o[e+1]}).toString()).toEqual("two"),expect(n("one two three").split(" ").filter(/one|three/).toArray()).toEqual(["one","three"]),expect(n("one two three").split(" ").filter("two").toArray()).toEqual(["two"]),expect(n("one two  three").split(" ").filter().toArray()).toEqual(["one","two","three"])}),it("can use filterNot",function(){expect(n("one two three").split(" ").filterNot(function(t){return"two"===t}).join(" ").toString()).toEqual("one three"),expect(n("one two three").split(" ").filterNot(function(t,e,o){return"two"===t&&"three"===o[e+1]}).join(" ").toString()).toEqual("one three"),expect(n("one two three").split(" ").filterNot(/one|three/).toArray()).toEqual(["two"]),expect(n("one two three").split(" ").filterNot("two").toArray()).toEqual(["one","three"])}),it("can use reduce",function(){expect(n("0 1 2 3 4").split(" ").reduce(function(t,e,o,n){return parseInt(t,10)+parseInt(e,10)}).toString()).toEqual("10")}),it("can use remove",function(){expect(n("one two three").remove("one","two").trim().toString()).toEqual("three")}),it("can trim results",function(){expect(n("one two three").match(/\S+\s*/g).trim().toString()).toEqual("onetwothree"),expect(n(" one two ").match(/(\s*one\s*)(\s*two\s*)?/).trim().toArray()).toEqual(["one","two"]),expect(n(" one tw ").match(/(\s*one\s*)(\s*two\s*)?/).trim().toArray()).toEqual(["one",void 0])}),it("can split string",function(){expect(n("one two three").split(" ").join("").toString()).toEqual("onetwothree")}),it("can slice array",function(){expect(n("one two three").split(" ").slice(1).join(" ").toString()).toEqual("two three"),expect(n("one two three").slice(0,3).toString()).toEqual("one")}),it("can use toString",function(){expect(n("hello world").toString()).toEqual("hello world")}),it("can use toArray",function(){expect(n("one two three").split(" ").toArray()).toEqual(["one","two","three"]),expect(n("one two three").match(/\d{3}/).toArray()).toEqual([])}),it("can use matchAll",function(){expect(n("joe:56, bob:57").matchAll(/(?<name>(\S+)):(?<age>(\d+))/g)).toEqual([{name:"joe",age:"56"},{name:"bob",age:"57"}]),expect(n("joe:56, bob:57").split(", ").matchAll(/(?<name>(\S+)):(?<age>(\d+))/g)).toEqual([{name:"joe",age:"56"},{name:"bob",age:"57"}]),expect(n("joe:56, bob:57").matchAll(/(\S+):(\d+)/g)).toEqual([["joe","56"],["bob","57"]]),expect(n("joe:56, bob:57").split(", ").matchAll(/(\S+):(\d+)/g)).toEqual([["joe","56"],["bob","57"]])}),it("can operate on a number",function(){expect(n(2).match(/^\d+/).first().toNumber()).toEqual(2),expect(n(2).match(/^\d+/).first().toString()).toEqual("2")}),it("can use toNumber",function(){expect(n("number 1234").match(/number (\d+)/).first().toNumber()).toEqual(1234),expect(n("number 12.34").match(/number ([0-9.]+)/).first().toNumber()).toEqual(12.34),expect(n("number 12.34").match(/number/).first().toNumber()).toEqual(0),expect(n("number 12.34").match(/number/).first().toNumber()).toEqual(0)}),it("can use toInt",function(){expect(n("number 12.34").match(/number ([0-9]+)/).first().toInt()).toEqual(12),expect(n("number 12.34").match(/number ([0-9.]+)/).first().toInt()).toBeNaN(),expect(n("number 12.34").match(/number/).first().toInt()).toBeNaN(),expect(n("\t 12").toInt()).toEqual(12)}),it("can use toFloat",function(){expect(n("number 12.34").match(/number ([0-9.]+)/).first().toFloat()).toEqual(12.34),expect(n("number 12.34").match(/number/).first().toFloat()).toBeNaN(),expect(n("\t  12.34").toFloat()).toEqual(12.34)}),it("can use toBoolean",function(){expect(n("number 1234").match(/number (\d+)/).first().toBoolean()).toEqual(!0),expect(n("number 1234").match(/numbers (\d+)/).first().toBoolean()).toEqual(!1)}),it("can use has",function(){expect(n("number 1234").has(/number (\d+)/)).toEqual(!0),expect(n("number 1234").has("number")).toEqual(!0),expect(n("foo 1234").has(/number (\d+)/)).toEqual(!1),expect(n("bar 1234").has("number")).toEqual(!1),expect(n("bar 1234").has(function(t){return t.match(/bar/)})).toEqual(!0),expect(n("bar 1234").has(function(t){return t.match(/number/)})).toEqual(!1)}),it("can use startsWith",function(){expect(n("foobar").startsWith("foo")).toEqual(!0),expect(n("barfoo").startsWith("foo")).toEqual(!1),expect(n(["barfoo","foobar"]).startsWith("foo")).toEqual(!1),expect(n(["foobarfoo","foobar"]).startsWith("foo")).toEqual(!0)}),it("can use endsWith",function(){expect(n("foobar").endsWith("bar")).toEqual(!0),expect(n("barfoo").endsWith("bar")).toEqual(!1),expect(n(["barfoo","foobar"]).endsWith("bar")).toEqual(!1),expect(n(["barfoobar","foobar"]).endsWith("bar")).toEqual(!0)}),it("can use toObject",function(){expect(n("number 1234").match(/number (\d{2})(\d{2})/).toObject()).toEqual({}),expect(n("number 1234").match(/number (\d{2})(\d{2})/).toObject("one","two")).toEqual({one:"12",two:"34"}),expect(n("number 1234").match(/number (\d{2})(\d{2})/).toObject(["one","two"])).toEqual({one:"12",two:"34"}),expect(n("number 1234").match(/number (\d{2})(\d{2})(\d{2})?/).toObject(["one","two","two"])).toEqual({one:"12",two:"34"}),expect(n("number 123456").match(/number (\d{2})(\d{2})(\d{2})?/).toObject(["one","two","two"])).toEqual({one:"12",two:"56"}),expect(n("12").match(/(\d{2})/g).map(function(t){return'"'+t+'"'}).toObject("one","two")).toEqual({one:'"12"'}),expect(n("1234").match(/(\d{2})/g).map(function(t){return'"'+t+'"'}).toObject("one","two")).toEqual({one:'"12"',two:'"34"'}),expect(n("1999-20").match(/(?<year>[0-9]{4})-(?<month>[0-9]{2})/).toObject()).toEqual({year:"1999",month:"20"})}),it("can use lowerCase",function(){expect(n("One TWO").lowerCase().toString()).toEqual("one two"),expect(n("One TWO").match(/(\S{3})/g).map(function(t){return'"'+t+'"'}).lowerCase().toObject("one","two")).toEqual({one:'"one"',two:'"two"'}),expect(n("One TWO ThReE").match(/\s*\S+\s*/g).lowerCase().trim().map(function(t){return'"'+t+'"'}).toObject("one","two","three")).toEqual({one:'"one"',two:'"two"',three:'"three"'})}),it("can use reverse",function(){expect(n("hello world").reverse().toString()).toEqual("dlrow olleh"),expect(n(["h","e","l","l","o"," ","w","o","r","l","d"]).reverse().toString()).toEqual("dlrow olleh"),expect(n("hello world").match(/(h)(e)(l)(l)(o)( )(w)(o)(r)(l)(d)/).reverse().toString()).toEqual("dlrow olleh"),expect(n("hello world").match(/hello world/).reverse().toString()).toEqual("dlrow olleh")}),it("can use sort",function(){expect(n("a ccc bb").split(" ").sort(function(t,e){return e.length-t.length}).join(" ").toString()).toEqual("ccc bb a"),expect(n("a ccc bb").split(" ").sort(function(t,e){return t.length-e.length}).join(" ").toString()).toEqual("a bb ccc")}),it("can use capitalize",function(){expect(n("hello world").capitalize().toString()).toEqual("Hello World"),expect(n("hello world").split(" ").capitalize().toArray()).toEqual(["Hello","World"])}),it("can prepend",function(){expect(n("world").prepend("hello ").toString()).toEqual("hello world"),expect(n(["world","world"]).prepend("hello ").toArray()).toEqual(["hello world","hello world"])}),it("can append",function(){expect(n("hello").append(" world").toString()).toEqual("hello world"),expect(n(["hello","hello"]).append(" world").toArray()).toEqual(["hello world","hello world"])}),it("can use upperCase",function(){expect(n("One TWO").upperCase().toString()).toEqual("ONE TWO"),expect(n("One TWO").match(/(\S{3})/g).map(function(t){return'"'+t+'"'}).upperCase().toObject("one","two")).toEqual({one:'"ONE"',two:'"TWO"'}),expect(n("a b c").split(" ").map(function(){return 9}).upperCase().toArray()).toEqual(["9","9","9"]),expect(n("One TWO ThReE").match(/\s*\S+\s*/g).upperCase().trim().map(function(t){return'"'+t+'"'}).toObject("one","two","three")).toEqual({one:'"ONE"',two:'"TWO"',three:'"THREE"'})}),it("can use this with array methods",function(){expect(n("one two").split(" ").map(function(t){return this[t]},{one:"ONE",two:"TWO"}).toArray()).toEqual(["ONE","TWO"]),expect(n("one two").split(" ").filter(function(t){return this[t]},{one:"ONE",two:"TWO"}).toArray()).toEqual(["one","two"]);var t={};expect(n("one two").split(" ").each(function(e){t[e]=this[e]},{one:"ONE",two:"TWO"}).toArray()),expect(t).toEqual({one:"ONE",two:"TWO"}),expect(n("0 1 2 3 4").split(" ").reduce(function(t,e,o,n){return parseInt(t,10)+parseInt(this[o],10)},{0:0,1:2,2:4,3:6,4:8}).toString()).toEqual("20")}),it("can use existing sawed object",function(){var t=n("one two three").split(" "),e=t.map(function(t){return t.split("").reverse().join("")}).join(" ").toString(),o=t.map(function(t){return t.toUpperCase()}).join(" ").toString();expect(e).toEqual("eno owt eerht"),expect(o).toEqual("ONE TWO THREE")}),it("can find indexes of strings in array",function(){expect(n("hello world").indexOf("hello")).toEqual(0),expect(n("hello world foo").indexOf("foo")).toEqual(12),expect(n("hello world foo").indexOf("bar")).toEqual(-1),expect(n("hello world foo").indexesOf(/hello|world/)).toEqual([0,6]),expect(n("hello world").split(" ").indexOf("hello")).toEqual(0),expect(n("hello world foo").split(" ").indexOf("foo")).toEqual(2),expect(n("hello world").split(" ").indexOf("bar")).toEqual(-1),expect(n("hello world").split(" ").indexesOf(/hello|world/)).toEqual([0,1]),expect(n("hello world").split(" ").indexesOf(/bar/)).toEqual([]),expect(n("hello world").split(" ").indexesOf(function(t){return"hello"===t})).toEqual([0]),expect(n("hello world foo").split(" ").indexOf(function(t){return"foo"===t})).toEqual(2)}),it("can match unescaped strings",function(){expect(n("(").match("(").first().toString()).toEqual("(")})})},function(t,e,o){"use strict";var n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};t.exports=function(t){var e={};function o(n){if(e[n])return e[n].exports;var r=e[n]={i:n,l:!1,exports:{}};return t[n].call(r.exports,r,r.exports,o),r.l=!0,r.exports}return o.m=t,o.c=e,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"==(void 0===t?"undefined":n(t))&&t&&t.__esModule)return t;var r=Object.create(null);if(o.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)o.d(r,i,function(e){return t[e]}.bind(null,i));return r},o.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="",o(o.s=0)}([function(t,e,o){Object.defineProperty(e,"__esModule",{value:!0});var n=function(t){return t&&t.__esModule?t:{default:t}}(o(1));e.default=function(t){return new n.default(t)},t.exports=e.default},function(t,e,o){Object.defineProperty(e,"__esModule",{value:!0});var n=function(){function t(t,e){for(var o=0;o<e.length;o++){var n=e[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,o,n){return o&&t(e.prototype,o),n&&t(e,n),e}}(),r=a(o(2)),i=a(o(3));function a(t){return t&&t.__esModule?t:{default:t}}function c(t){if(Array.isArray(t)){for(var e=0,o=Array(t.length);e<t.length;e++)o[e]=t[e];return o}return Array.from(t)}function l(t){return t.length>1?Array.from(t):Array.isArray(t[0])?t[0]:[t[0]]}var u=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),"number"==typeof e?this._context=String(e):Array.isArray(e)?this._context=e.slice(0):e instanceof r.default?this._context=e.clone():this._context=e}return n(t,[{key:"match",value:function(e){var o=l(arguments),n=new t(this._context),a=this._contextToString(this._context);return o.some(function(t){"string"==typeof t&&(t=(0,i.default)(t));var e="function"==typeof t?t(a):a.match(t);if(e)return n._context=new r.default(e,t),!0;n._context=""}),n}},{key:"matchAll",value:function(e){var o=new t(this._context).toArray(),n=[],r=!0,i=!1,a=void 0;try{for(var l,u=o[Symbol.iterator]();!(r=(l=u.next()).done);r=!0){var s=l.value;[].concat(c(s.matchAll(e))).forEach(function(t){n.push(t.groups?t.groups:t.slice(1))})}}catch(t){i=!0,a=t}finally{try{!r&&u.return&&u.return()}finally{if(i)throw a}}return n}},{key:"has",value:function(t){return this.match(t).first().toBoolean()}},{key:"item",value:function(e){var o=new t(this._context);return o._context instanceof r.default?o._context=o._context.item(e):Array.isArray(o._context)&&(o._context=o._context[e]||""),o}},{key:"itemFromRight",value:function(e){var o=new t(this._context);return(o._context instanceof r.default||Array.isArray(o._context))&&(e=o._context.length-1-e)>=0&&(o=o.item(e)),o}},{key:"first",value:function(e){return new t(this._context).item(0)}},{key:"last",value:function(){return new t(this._context).itemFromRight(0)}},{key:"replace",value:function(e,o){var n=new t(this._context);return Array.isArray(n._context)?n._context=n._context.map(function(t){return t.replace(e,o)}):n._context=function(t,e,o){return(e=Array.isArray(e)?e:[e]).some(function(e){if(t.match(e))return t=t.replace(e,o),!0}),t}(this._contextToString(this._context),e,o),n}},{key:"join",value:function(e){var o=new t(this._context),n=o.toArray();if(n.length){var r="";n.forEach(function(t,o,n){var i="function"==typeof e?e(t,o,n):e||"";r+=t+(n.length-1==o?"":i)}),o._context=r}return o}},{key:"each",value:function(e,o){var n=new t(this._context),r=n.toArray();return r.forEach(function(t,n){t&&e.bind(o)(t,n,r)}),n}},{key:"map",value:function(e,o){var n=new t(this._context),r=n.toArray();return n._context=r.map(function(t,n){return e.bind(o)(t,n,r)}),n}},{key:"reduce",value:function(e,o){var n=new t(this._context),r=n.toArray();return n._context=String(r.reduce(function(t,n,r,i){return e.bind(o)(t,n,r,i)})),n}},{key:"reverse",value:function(){var e=new t(this._context);if("string"==typeof e._context)e._context=e._context.split("").reverse().join("");else if(Array.isArray(e._context))e._context=e._context.reverse();else if(e._context instanceof r.default){var o=e.toArray();1===o.length?e._context=(o[0]||"").split("").reverse().join(""):e._context=e.toArray().reverse()}return e}},{key:"sort",value:function(e){var o=new t(this._context);if("string"==typeof o._context)o._context=o._context.split("").sort(e).join("");else if(Array.isArray(o._context))o._context=o._context.sort(e);else if(o._context instanceof r.default){var n=o.toArray();1===n.length?o._context=(n[0]||"").split("").sort(e).join(""):o._context=o.toArray().sort(e)}return o}},{key:"prepend",value:function(e){var o=new t(this._context),n=o.toArray();return o._context=n.map(function(t){return e+String(t)}),o}},{key:"append",value:function(e){var o=new t(this._context),n=o.toArray();return o._context=n.map(function(t){return String(t)+e}),o}},{key:"capitalize",value:function(){var e=new t(this._context),o=e.toArray();return e._context=o.map(function(e,o){return new t(e).replace(/\b./g,function(t){return t.toUpperCase()}).toString()}),e}},{key:"lowerCase",value:function(t){return this.mapStringMethodAgainstContext("toLowerCase",t)}},{key:"upperCase",value:function(t){return this.mapStringMethodAgainstContext("toUpperCase",t)}},{key:"mapStringMethodAgainstContext",value:function(e,o){var n=new t(this._context),r=n.toArray();return n._context=r.map(function(t,o){return t?String(t)[e]():t}),n}},{key:"find",value:function(e,o){var n=new t(this._context);e=e||function(t){return t};var r=n.toArray();return n._context=r.find(function(t,n){return"function"==typeof e?e.bind(o)(t,n,r):t.match(e)}),n}},{key:"filter",value:function(e,o){var n=new t(this._context);e=e||function(t){return t};var r=n.toArray();return n._context=r.filter(function(t,n){return"function"==typeof e?e.bind(o)(t,n,r):t.match(e)}),n}},{key:"filterNot",value:function(e,o){var n=new t(this._context),r=n.toArray();return n._context=r.filter(function(t,n){return"function"==typeof e?!e.bind(o)(t,n,r):!t.match(e)}),n}},{key:"remove",value:function(){var e=new t(this._context),o=e.toArray(),n=Array.from(arguments);return o=o.map(function(t){return n.forEach(function(e){e="string"==typeof e?new RegExp((0,i.default)(e),"g"):e,t=t.replace(e,"")}),t}),e._context=o,e}},{key:"uniq",value:function(){var e=new t(this._context),o=e.toArray();return o.length&&(e._context=o.filter(function(t,e){return o.indexOf(t)===e})),e}},{key:"trim",value:function(){var e=new t(this._context),o=Array.isArray(e._context)?e._context:e.toArray(e._context);return e._context=o.map(function(t){return t?t.trim():t}),e}},{key:"split",value:function(e){var o=new t(this._context);return o._context=o._contextToString(o._context).split(e),o}},{key:"slice",value:function(e,o){var n=new t(this._context);return n._context=n._context.slice(e,o),n}},{key:"transform",value:function(e){var o=new t(this._context);return o._context=e(o._context),o}},{key:"toString",value:function(){return this._contextToString(this._context)}},{key:"toArray",value:function(){return Array.isArray(this._context)?Array.from(this._context):this._context instanceof r.default?this._context.toArray():this.toBoolean()?[this._context]:[]}},{key:"toNumber",value:function(){var t=this.toFloat();return isNaN(t)?0:t}},{key:"toFloat",value:function(){var t=this.trim().toString(),e=parseFloat(t,10);return isNaN(e)||t.length!=String(e).length?NaN:e}},{key:"toInt",value:function(){var t=this.trim().toString(),e=parseInt(t,10);return isNaN(e)||t.length!=String(e).length?NaN:e}},{key:"toBoolean",value:function(){return!!this.toString()}},{key:"toObject",value:function(){var t=l(arguments),e=this.toArray(),o={};return arguments.length?t.forEach(function(t,n){void 0!==t&&void 0!==e[n]&&(o[t]=e[n])}):this._context&&this._context.matches&&this._context.matches.groups&&(o=this._context.matches.groups),o}},{key:"startsWith",value:function(e){var o=new t(this._context).toArray(),n=new RegExp("^"+(0,i.default)(e)),r=!0,a=!0,c=!1,l=void 0;try{for(var u,s=o[Symbol.iterator]();!(a=(u=s.next()).done);a=!0){var h=u.value;if(!n.test(h)){r=!1;break}}}catch(t){c=!0,l=t}finally{try{!a&&s.return&&s.return()}finally{if(c)throw l}}return r}},{key:"endsWith",value:function(e){var o=new t(this._context).toArray(),n=new RegExp((0,i.default)(e)+"$"),r=!0,a=!0,c=!1,l=void 0;try{for(var u,s=o[Symbol.iterator]();!(a=(u=s.next()).done);a=!0){var h=u.value;if(!n.test(h)){r=!1;break}}}catch(t){c=!0,l=t}finally{try{!a&&s.return&&s.return()}finally{if(c)throw l}}return r}},{key:"indexOf",value:function(e){new t(this._context);var o=this.indexesOf(e).shift();return void 0!==o?o:-1}},{key:"indexesOf",value:function(e){new t(this._context);var o=[];if(Array.isArray(this._context))this._context.forEach(function(t,n){(String(t).match(e)||"function"==typeof e&&e(t))&&o.push(n)});else if("string"==typeof this._context)for(var n=new RegExp(e instanceof RegExp?e.source:(0,i.default)(e),e instanceof RegExp?String(e.flags).match(/g/)?e.flags||"":(e.flags||"")+"g":"g");e=n.exec(this._context);)o.push(e.index);return o}},{key:"length",value:function(){return this._context?this._context.length:0}},{key:"_contextToString",value:function(t){return"string"==typeof t?t:t instanceof r.default?t.toString():Array.isArray(t)?t.join(""):""}}]),t}();e.default=u,t.exports=e.default},function(t,e,o){var n=function(){function t(t,e){for(var o=0;o<e.length;o++){var n=e[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,o,n){return o&&t(e.prototype,o),n&&t(e,n),e}}(),r=function(){function t(e,o){if(function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),!e)return null;this.match=o,o instanceof RegExp&&!o.global&&o.length>1?this.matches=e.slice(1):this.matches=e,this.length=this.matches.length}return n(t,[{key:"item",value:function(t){var e=void 0;return 1===this.matches.length?e=this.matches[0]:this.matches.length>1&&(e=this.matches[this.match.global?t:t+1]),e||""}},{key:"slice",value:function(t,e){var o=[];return 1===this.matches.length||this.match.global?o=this.matches.slice(t,e):this.matches.length>1&&(o=this.matches.slice(t+1,e)),o}},{key:"toArray",value:function(t,e){var o=[];return 1===this.matches.length||this.match.global?o=this.matches.slice(0):this.matches.length>1&&(o=this.matches.slice(1)),o}},{key:"toString",value:function(){var t="";return 1===this.matches.length?t=this.matches[0]:this.matches.forEach(function(e){e&&(t+=e)}),t}},{key:"clone",value:function(){var e=new t(null);return e.match=this.match,e.matches=Array.prototype.slice.call(this.matches),e.length=this.length,e}}]),t}();t.exports=r},function(t,e){t.exports=o(2)}])},function(t,e){t.exports=require("escape-string-regexp")}]);
//# sourceMappingURL=.matches.test.js.map