function loadStyle(e){var t=document.createElement("link");t.type="text/css",t.rel="stylesheet",t.readyState?t.onreadystatechange=function(){"loaded"!=t.readyState&&"complete"!=t.readyState||(t.onreadystatechange=null)}:t.onload=function(){},t.href=e,document.getElementsByTagName("head")[0].appendChild(t)}function loadScript(e,t){var o=document.createElement("script");o.type="text/javascript",o.readyState?o.onreadystatechange=function(){"loaded"!=o.readyState&&"complete"!=o.readyState||(o.onreadystatechange=null,t())}:o.onload=function(){t()},o.src=e,document.getElementsByTagName("head")[0].appendChild(o)}document.onreadystatechange=function(e){"complete"===document.readyState&&(console.log("hi, inside document.onreadystatechange function"),window.jQuery?console.log("JQuery is already loaded"):(console.log("jQuery is not loaded"),loadScript("https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js",loadChatWindow),console.log("JQuery is added now")))},window.onload=function(e){console.log("hi, inside window.onload function")};var loadChatWindow=function(){console.log("hi, inside loadChatWindow function");void 0!==$.fn.popover?console.log("bootstrap is already loaded"):(console.log("bootstrap is not loaded"),loadStyle("https://maxcdn.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css"),console.log("bootstrap is added dynamially"));$("body").append('<div class="chatbox chatbox--tray chatbox--empty">     <div class="chatbox__title">     <h5><a href="#">VIDURA Advisor</a></h5>     \x3c!-- minimize button --\x3e     <button class="chatbox__title__tray">     <span></span>     </button>     \x3c!-- minimize button ends --\x3e     \x3c!-- Close button which closes the chatbot --\x3e     <button class="chatbox__title__close">     <span>     <svg viewBox="0 0 12 12" width="12px" height="12px">     <line stroke="#FFFFFF" x1="11.75" y1="0.25" x2="0.25" y2="11.75"></line>     <line stroke="#FFFFFF" x1="11.75" y1="11.75" x2="0.25" y2="0.25"></line>     </svg>     </span>     </button>     \x3c!-- close button ends --\x3e     </div>     <div class="chatbox__body" id="chatbox_body_content">     </div>     <form class="chatbox__credentials">     <div class="form-group">     <label for="inputName">Name:</label>     <input type="text" class="form-control" id="inputName" required>     </div>     <div class="form-group">     <label for="inputEmail">Email:</label>     <input type="text" class="form-control" id="inputEmail" required>     </div>     <button type="submit" class="btn btn-success btn-block">Enter Chat</button>     </form>     <input type="hidden" id="chat_context" name="conversation_id" value="{}">     <input type="text" id="user_input" name="user_input" class="chatbox__message" placeholder="Write here"></input>     </div>');var o=$(".chatbox"),e=$(".chatbox__title"),t=$(".chatbox__title__close"),a=$(".chatbox__credentials");function n(e){var t='<p class="userText">'+e+"</p>";$("#chatbox_body_content").append(t),$("#user_input").val(""),$("#chatbox_body_content").scrollTop(1e10)}function s(e,t){$.ajax({type:"GET",url:"https://api.api.ai/v1/query?v=20160910&query="+e+"&lang=en-us&sessionId="+l,contentType:"application/json",dataType:"json",headers:{Authorization:"Bearer 0d12d6ec5358414b83060986c172a515"},success:function(e){!function(e){e.result.action;var t=e.result.fulfillment.speech;e.result.actionIncomplete;if(e.result.fulfillment.messages&&0<e.result.fulfillment.messages.length)var o=e.result.fulfillment.messages[1];a=t,s='<p class="botResponse">'+(a=""==$.trim(a)?"I couldn't get that. Let' try something else!":a.replace(new RegExp("\r?\n","g"),"<br />"))+"</p>",$("#chatbox_body_content").append(s),$("#chatbox_body_content").scrollTop(1e10),o&&(n=o,setTimeout(function(){var e=n.replies,t=n.replies.length,o="";for(i=0;i<t;i++)o+='<span class="sugg-options">'+e[i]+"</span>";var a='<div class="suggestions"><div class="sugg-title">Suggestions:</div>'+o+"</div>";$("#chatbox_body_content").append(a),$("#chatbox_body_content").scrollTop(1e10)},1e3));var n;var a,s}(e)},error:function(e){console.log(e)}})}e.on("click",function(){o.toggleClass("chatbox--tray"),o.hasClass("chatbox--closed")&&(o.removeClass("chatbox--closed"),o.addClass("chatbox--tray"))}),t.on("click",function(e){e.stopPropagation(),o.addClass("chatbox--closed")}),o.on("transitionend",function(){}),a.on("submit",function(e){e.preventDefault(),o.removeClass("chatbox--empty");var t=$("#inputName").val();$("#inputEmail").val();s("My name is "+t),$("#user_input").focus()}),$("#user_input").keypress(function(e){if(13==(e.keyCode?e.keyCode:e.which)){var t=$("#user_input").val();$("#chat_context").val();n(t),s(t)}});var l=function(){if(sessionStorage.getItem("session"))var e=sessionStorage.getItem("session");else{var t=Math.floor(1e3*Math.random()+1),o=Date.now(),a=new Date,n=new Array(7);n[0]="Sunday",n[1]="Monday",n[2]="Tuesday",n[3]="Wednesday",n[4]="Thursday",n[5]="Friday",n[6]="Saturday";var s=t+n[a.getDay()]+o;sessionStorage.setItem("session",s),e=sessionStorage.getItem("session")}return e}();$(document).on("click",".suggestions span",function(){var e=this.innerText;n(e),s(e),$(".suggestions").remove()})};