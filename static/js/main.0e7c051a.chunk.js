(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{17:function(e,t,a){e.exports=a(44)},23:function(e,t,a){},24:function(e,t,a){},44:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(10),c=a.n(r),u=(a(23),a(11)),i=a(12),s=a(15),l=a(13),h=a(2),f=a(16);a(24);var d=function(e){return o.a.createElement("div",{className:"quote"},o.a.createElement("blockquote",{id:"text"},o.a.createElement("i",{className:"fas fa-quote-left"}),e.quote),o.a.createElement("cite",{id:"author"},"- ",e.author))},m=a(14),b=a.n(m),w=function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(s.a)(this,Object(l.a)(t).call(this,e))).state={quote:"Life begins at the end of your comfortzone",author:"Neale Donald Walsch"},a.focusBtn=o.a.createRef(),a.getNewQuote=a.getNewQuote.bind(Object(h.a)(a)),a}return Object(f.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){this.focusBtn.current.focus()}},{key:"getNewQuote",value:function(){var e=this,t=Math.floor(102*Math.random());b.a.get("https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json").then(function(a){return e.setState({quote:a.data.quotes[t].quote,author:a.data.quotes[t].author})})}},{key:"render",value:function(){var e="https://twitter.com/intent/tweet?text=".concat(this.state.quote,"%20%0A--%20").concat(this.state.author);return o.a.createElement("div",{className:"App"},o.a.createElement("h1",null,"random quote generator"),o.a.createElement("div",{id:"quote-box"},o.a.createElement("button",{id:"new-quote",className:"btn",tabIndex:1,ref:this.focusBtn,onClick:this.getNewQuote},"new quote"),o.a.createElement("a",{className:"twitter-share-button btn",tabIndex:2,id:"tweet-quote",href:e,target:"_blank",rel:"noopener noreferrer"},o.a.createElement("i",{className:"fab fa-twitter","aria-hidden":"true"})),o.a.createElement(d,{quote:this.state.quote,author:this.state.author})))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(w,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[17,1,2]]]);
//# sourceMappingURL=main.0e7c051a.chunk.js.map