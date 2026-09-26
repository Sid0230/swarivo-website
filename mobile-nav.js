document.addEventListener("DOMContentLoaded",function(){
  const path=window.location.pathname.replace(/\\/+$/,"")||"/";
  const hash=window.location.hash;
  const links=document.querySelectorAll("nav .links a");
  const isProducts=path==="/products.html" || /-(products)\\.html$/.test(path);
    if(!document.getElementById("swarivo-active-nav-style")){const s=document.createElement("style");s.id="swarivo-active-nav-style";s.textContent='.nav-active{position:relative!important;color:#10291e!important;font-weight:800!important;background:rgba(118,185,87,.22)!important;border-radius:999px!important;padding:8px 14px!important;box-shadow:inset 0 0 0 1px rgba(118,185,87,.32)!important}.nav-active.pill{background:#10291e!important;color:#fff!important;box-shadow:none!important}.mobile-nav-link.nav-active{background:rgba(118,185,87,.16)!important;color:#10291e!important;font-weight:800!important;border-color:rgba(118,185,87,.35)!important}';document.head.appendChild(s)}\n\nconst activeKey=path==="/" ? (hash==="#about"?"about":hash==="#contact"?"contact":"home") :
    isProducts ? "products" :
    path==="/services.html" ? "services" :
    path==="/contact.html" ? "contact" : "";

  links.forEach(function(a){
    const href=a.getAttribute("href")||"";
    let key="";
    if(href==="/") key="home";
    else if(href==="/products.html") key="products";
    else if(href==="/services.html") key="services";
    else if(href==="/#about") key="about";
    else if(href==="/#contact") key="contact";
    if(key===activeKey){a.classList.add("nav-active");a.setAttribute("aria-current","page");}
  });

  const toggle=document.querySelector(".mobile-menu-toggle");
  if(!toggle)return;
  const drawer=document.createElement("div");
  drawer.className="mobile-nav-drawer";
  drawer.innerHTML='<div class="mobile-nav-card" role="dialog" aria-modal="true" aria-label="Mobile navigation"><button class="mobile-nav-close" type="button" aria-label="Close navigation">×</button><div class="mobile-nav-label">SWARIVO</div><a class="mobile-nav-link" data-nav-key="home" href="/">Home <span>→</span></a><a class="mobile-nav-link" data-nav-key="products" href="/products.html">Products <span>→</span></a><a class="mobile-nav-link" data-nav-key="services" href="/services.html">Web &amp; Software <span>→</span></a><a class="mobile-nav-link" data-nav-key="about" href="/#about">About <span>→</span></a><a class="mobile-nav-link" data-nav-key="contact" href="/#contact">Contact <span>→</span></a></div>';
  document.body.appendChild(drawer);
  drawer.querySelectorAll(".mobile-nav-link").forEach(function(a){
    if(a.dataset.navKey===activeKey){a.classList.add("nav-active");a.setAttribute("aria-current","page");}
  });
  const close=drawer.querySelector(".mobile-nav-close");
  function shut(){drawer.classList.remove("is-open");toggle.classList.remove("is-open");toggle.setAttribute("aria-expanded","false");toggle.setAttribute("aria-label","Open navigation menu");document.body.classList.remove("menu-open");}
  function open(){drawer.classList.add("is-open");toggle.classList.add("is-open");toggle.setAttribute("aria-expanded","true");toggle.setAttribute("aria-label","Close navigation menu");document.body.classList.add("menu-open");}
  toggle.addEventListener("click",function(){drawer.classList.contains("is-open")?shut():open()});
  close.addEventListener("click",shut);
  drawer.addEventListener("click",function(e){if(e.target===drawer)shut()});
  drawer.querySelectorAll(".mobile-nav-link").forEach(function(a){a.addEventListener("click",shut)});
  document.addEventListener("keydown",function(e){if(e.key==="Escape")shut()});
  window.addEventListener("resize",function(){if(window.innerWidth>760)shut()});
});