!function(t,e){"object"==typeof exports&&typeof module<"u"?module.exports=e():"function"==typeof define&&define.amd?define(e):(t=typeof globalThis<"u"?globalThis:t||self).Zoomify=e()}(this,(function(){"use strict";class t{constructor(t={}){this.resolveConfig(t),this.handleFocusZoom=t=>this.focusZoom.call(this,t),this.handleFocusZoomOut=t=>this.focusZoomOut.call(this,t),this.handleMouseEnter=t=>this.mouseEnter.call(this,t),this.handleMouseOut=t=>this.mouseOut.call(this,t),this.init()}resolveConfig(t){const e={selector:".zoomify",transitionDuration:300,easing:"ease-in-out",scale:2,clickToZoom:!0};if("string"==typeof t)e.selector=t;else{const o=t;for(const t in o)e[t]=o[t]}return this.config=e,e}init(){if(this.config.clickToZoom){const t=document.querySelector(this.config.selector);t.zoomify=this;const e=document.createElement("button");return e.setAttribute("id","zoomify-click-to-zoom"),e.style.border=0,e.style.background="rgba(0,0,0, 0.5)",e.style.padding="10px",e.style.paddingLeft="15px",e.style.paddingRight="15px",e.style.borderRadius="20px",e.style.position="absolute",e.style.bottom="15px",e.style.zIndex=10,e.style.left=0,e.style.right=0,e.style.width="max-content",e.style.color="white",e.style.margin="0 auto",t.style.cursor="zoom-in",e.textContent="Click to zoom",e.style.pointerEvents="none",t.parentElement.style.position="relative",t.parentElement.appendChild(e),void t.addEventListener("click",(t=>{const o=this.zoomedIn;this.zoomedIn=!this.zoomedIn,this.setZoomEvents(o),this.mouseEnter(t),e.style.display=o?"block":"none"}))}this.setZoomEvents()}zoomIn(){const t=document.querySelector(this.config.selector);t.style.transition=`scale ${this.config.transitionDuration}ms ${this.config.easing}`,this.focusZoom({target:t},!0)}zoomOut(){const t=document.querySelector(this.config.selector);this.focusZoomOut({target:t})}enableZoom(t){return this.zoom=t,t?this.zoomIn():this.zoomOut()}setZoomEvents(t=!1){const e=document.querySelector(this.config.selector);if(e.zoomify=this,e.attributes.zoomify&&""!==e.attributes.zoomify.value){(new Image).src=e.attributes.zoomify.value}["touchstart"].forEach((o=>{t?e.removeEventListener(o,(()=>this.enableZoom(!this.zoom))):e.addEventListener(o,(()=>this.enableZoom(!0)),{passive:!0})})),["mouseenter"].forEach((o=>{t?e.removeEventListener(o,this.handleMouseEnter):e.addEventListener(o,this.handleMouseEnter,{passive:!0})})),["mouseout"].forEach((o=>{t?e.removeEventListener(o,this.handleMouseOut):e.addEventListener(o,this.handleMouseOut,{passive:!0})})),["mousemove","touchmove"].forEach((o=>{t?e.removeEventListener(o,this.handleFocusZoom):e.addEventListener(o,this.handleFocusZoom,{passive:!0})})),["mouseleave"].forEach((o=>{t?e.removeEventListener(o,this.handleFocusZoomOut):e.addEventListener(o,this.handleFocusZoomOut,{passive:!0})})),t?(this.focusZoomOut({target:e}),e.removeEventListener("contextmenu",this.preventContextMenu),"IMG"===e.tagName&&"PICTURE"===e.parentElement.tagName&&setTimeout((()=>{e.parentElement.style.removeProperty("display"),e.parentElement.style.removeProperty("overflow"),e.style.removeProperty("transition"),e.removeAttribute("data-src")}),this.config.transitionDuration)):(e.addEventListener("contextmenu",this.preventContextMenu),e.style.transition=`scale ${this.config.transitionDuration}ms ${this.config.easing}`,"IMG"===e.tagName&&"PICTURE"===e.parentElement.tagName&&(e.parentElement.style.display="block",e.parentElement.style.overflow="hidden"),e.zoomify=this)}preventContextMenu(t){t.preventDefault()}static inBoundaries(t,e,o){const s=t.left,i=t.top,n=t.height,r=t.width;return o<=i+n&&o>=i&&e<=s+r&&e>=s}focusZoom(e,o=!1){const s=e.target,i=s.getBoundingClientRect();let n=e.pageX,r=e.pageY;if("TouchEvent"===e.constructor.name&&(n=e.changedTouches[0].pageX,r=e.changedTouches[0].pageY),!o&&!t.inBoundaries(i,n,r))return;const a=(n-i.left)/i.width*100,u=(r-i.top)/i.height*100;s.style.scale=this.config.scale,s.style.transformOrigin=`${a}% ${u}%`,this.zoomedIn=!0}focusZoomOut(t){const e=t.target;e.style.removeProperty("scale"),setTimeout((()=>{e.style.removeProperty("transform-origin")}),this.config.transitionDuration),this.zoomedIn=!1}mouseEnter(t){const e=t.target;e.attributes.zoomify&&""!==e.attributes.zoomify.value&&(e.setAttribute("data-src",e.attributes.src.value),e.attributes.src.value=e.attributes.zoomify.value)}mouseOut(t){const e=t.target;setTimeout((()=>{e.attributes.zoomify&&""!==e.attributes.zoomify.value&&(e.attributes.src.value=e.attributes["data-src"].value)}),this.config.transitionDuration)}destroy(){this.zoomOut(),this.setZoomEvents(!0)}}return t}));
