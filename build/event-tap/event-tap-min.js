YUI.add("event-tap",function(e,t){function l(t,n,r,i){n=r?n:[n.START,n.MOVE,n.END,n.CANCEL],e.Array.each(n,function(e,n,r){var i=t[e];i&&(i.detach(),t[e]=null)})}var n=e.config.doc,r=!!n&&!!n.createTouch,i=r?"touchstart":"mousedown",s=r?"touchmove":"mousemove",o=r?"touchend":"mouseup",u=r?"touchcancel":"mousecancel",a="tap",f={START:"Y_TAP_ON_START_HANDLE",MOVE:"Y_TAP_ON_MOVE_HANDLE",END:"Y_TAP_ON_END_HANDLE",CANCEL:"Y_TAP_ON_CANCEL_HANDLE"};e.Event.define(a,{on:function(e,t,n){t[f.START]=e.on(i,this.touchStart,this,e,t,n)},detach:function(e,t,n){l(t,f)},delegate:function(e,t,n,r){t[f.START]=e.delegate(i,function(r){this.touchStart(r,e,t,n,!0)},r,this)},detachDelegate:function(e,t,n){l(t,f)},touchStart:function(e,t,n,i,a){var l={canceled:!1};if(e.button&&e.button===3)return;if(e.touches&&e.touches.length!==1)return;l.node=a?e.currentTarget:t,r&&e.touches?l.startXY=[e.touches[0].pageX,e.touches[0].pageY]:l.startXY=[e.pageX,e.pageY],n[f.MOVE]=t.once(s,this.touchMove,this,t,n,i,a,l),n[f.END]=t.once(o,this.touchEnd,this,t,n,i,a,l),n[f.CANCEL]=t.once(u,this.touchMove,this,t,n,i,a,l)},touchMove:function(e,t,n,r,i,s){l(n,[f.MOVE,f.END,f.CANCEL],!0,s),s.cancelled=!0},touchEnd:function(e,t,n,i,s,o){var u=o.startXY,c,h;r&&e.changedTouches?(c=[e.changedTouches[0].pageX,e.changedTouches[0].pageY],h=[e.changedTouches[0].clientX,e.changedTouches[0].clientY]):(c=[e.pageX,e.pageY],h=[e.clientX,e.clientY]),l(n,[f.MOVE,f.END,f.CANCEL],!0,o),Math.abs(c[0]-u[0])===0&&Math.abs(c[1]-u[1])===0&&(e.type=a,e.pageX=c[0],e.pageY=c[1],e.clientX=h[0],e.clientY=h[1],e.currentTarget=o.node,i.fire(e))}})},"@VERSION@",{requires:["node-base","event-base","event-touch","event-synthetic"]})