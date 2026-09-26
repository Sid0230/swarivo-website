document.addEventListener("DOMContentLoaded",function(){
  const toggle=document.querySelector(".mobile-menu-toggle");
  if(!toggle)return;

  /* Shared current-page highlight for desktop navigation and mobile drawer. */
  const path=window.location.pathname.replace(/\\/+$/,"") || "/";
  const hash=window.location.hash;
  const isHome=path==="/" || path==="/index.html";
  const isActive=(href)=>{
    const u=new URL(href,window.location.origin);
    const targetPath=u.pathname.replace(/\\/+$/,"") || "/";
    if(u.hash==="#about" || u.hash==="#contact"){
      if(u.hash==="#contact" && path==="/contact.html") return true;\n      return isHome && hash===u.hash;
    }
    return targetPath===path;
  };

  const highlightCss=document.createElement("style");
  highlightCss.textContent=`
    @media (min-width:761px){
      nav .links a.nav-active{
        background:#10291e !important;
        color:#fff !important;
        border-color:#10291e !important;
        border-radius:999px !important;
        padding:10px 17px !important;
      }
      nav .links a.nav-active:hover{background:#10291e !important;color:#fff !important}
    }
    .mobile-nav-link.nav-active{
      color:#1b5e3f !important;
      background:rgba(118,185,87,.14) !important;
      border-radius:12px !important;
      padding-left:12px !important;
      padding-right:12px !important;
    }
  `;
  document.head.appendChild(highlightCss);

  document.querySelectorAll("nav .links a").forEach(function(a){
    if(isActive(a.getAttribute("href") || "")) a.classList.add("nav-active");
  });

  const drawer=document.createElement("div");
  drawer.className="mobile-nav-drawer";
  drawer.innerHTML='<div class="mobile-nav-card" role="dialog" aria-modal="true" aria-label="Mobile navigation"><button class="mobile-nav-close" type="button" aria-label="Close navigation">×</button><div class="mobile-nav-label">SWARIVO</div><a class="mobile-nav-link" href="/">Home <span>→</span></a><a class="mobile-nav-link" href="/products.html">Products <span>→</span></a><a class="mobile-nav-link" href="/services.html">Web &amp; Software <span>→</span></a><a class="mobile-nav-link" href="/#about">About <span>→</span></a><a class="mobile-nav-link" href="/#contact">Contact <span>→</span></a></div>';
  document.body.appendChild(drawer);

  drawer.querySelectorAll(".mobile-nav-link").forEach(function(a){
    if(isActive(a.getAttribute("href") || "")) a.classList.add("nav-active");
  });

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