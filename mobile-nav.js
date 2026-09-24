document.addEventListener("DOMContentLoaded",function(){
  const toggle=document.querySelector(".mobile-menu-toggle");
  if(!toggle)return;
  const drawer=document.createElement("div");
  drawer.className="mobile-nav-drawer";
  drawer.innerHTML='<div class="mobile-nav-card" role="dialog" aria-modal="true" aria-label="Mobile navigation"><button class="mobile-nav-close" type="button" aria-label="Close navigation">×</button><div class="mobile-nav-label">SWARIVO</div><a class="mobile-nav-link" href="/">Home <span>→</span></a><a class="mobile-nav-link" href="/products.html">Products <span>→</span></a><a class="mobile-nav-link" href="/services.html">Web &amp; Software <span>→</span></a><a class="mobile-nav-link" href="/#about">About <span>→</span></a><a class="mobile-nav-link" href="/#contact">Contact <span>→</span></a></div>';
  document.body.appendChild(drawer);
  const close=drawer.querySelector(".mobile-nav-close");
  function shut(){drawer.classList.remove("is-open");toggle.classList.remove("is-open");toggle.setAttribute("aria-expanded","false");toggle.setAttribute("aria-label","Open navigation menu");document.body.classList.remove("menu-open");}
  function open(){drawer.classList.add("is-open");toggle.classList.add("is-open");toggle.setAttribute("aria-expanded","true");toggle.setAttribute("aria-label","Close navigation menu");document.body.classList.add("menu-open");}
  toggle.addEventListener("click",function(){drawer.classList.contains("is-open")?shut():open()});
  close.addEventListener("click",shut);
  drawer.addEventListener("click",function(e){if(e.target===drawer)shut()});
  drawer.querySelectorAll(".mobile-nav-link").forEach(a=>a.addEventListener("click",shut));
  document.addEventListener("keydown",function(e){if(e.key==="Escape")shut()});
  window.addEventListener("resize",function(){if(window.innerWidth>760)shut()});
});