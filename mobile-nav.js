(function(){
  function setup(){
    var toggle=document.querySelector(".mobile-menu-toggle");
    if(!toggle || toggle.dataset.mobileNavReady==="1") return;
    toggle.dataset.mobileNavReady="1";

    var drawer=document.querySelector(".mobile-nav-drawer");
    if(!drawer){
      drawer=document.createElement("div");
      drawer.className="mobile-nav-drawer";
      drawer.innerHTML='<div class="mobile-nav-card" role="dialog" aria-modal="true" aria-label="Mobile navigation"><button class="mobile-nav-close" type="button" aria-label="Close navigation">×</button><div class="mobile-nav-label">SWARIVO</div><a class="mobile-nav-link" href="/">Home <span>→</span></a><a class="mobile-nav-link" href="/products.html">Products <span>→</span></a><a class="mobile-nav-link" href="/services.html">Web &amp; Software <span>→</span></a><a class="mobile-nav-link" href="/#about">About <span>→</span></a><a class="mobile-nav-link" href="/#contact">Contact <span>→</span></a></div>';
      document.body.appendChild(drawer);
    }

    function closeMenu(){
      drawer.classList.remove("is-open");
      toggle.classList.remove("is-open");
      toggle.setAttribute("aria-expanded","false");
      toggle.setAttribute("aria-label","Open navigation menu");
      document.body.classList.remove("menu-open");
    }
    function openMenu(){
      drawer.classList.add("is-open");
      toggle.classList.add("is-open");
      toggle.setAttribute("aria-expanded","true");
      toggle.setAttribute("aria-label","Close navigation menu");
      document.body.classList.add("menu-open");
    }

    window.__swarivoMobileToggle=function(){
      if(window.innerWidth>760){return false;}
      if(drawer.classList.contains("is-open")) closeMenu();
      else openMenu();
      return false;
    };

    toggle.onclick=function(e){
      if(e){e.preventDefault();e.stopPropagation();}
      window.__swarivoMobileToggle();
      return false;
    };

    var close=drawer.querySelector(".mobile-nav-close");
    if(close) close.onclick=function(e){if(e){e.preventDefault();e.stopPropagation();}closeMenu();return false;};
    drawer.onclick=function(e){if(e.target===drawer) closeMenu();};
    drawer.querySelectorAll(".mobile-nav-link").forEach(function(a){a.onclick=function(){closeMenu();};});
    document.addEventListener("keydown",function(e){if(e.key==="Escape") closeMenu();});
    window.addEventListener("resize",function(){if(window.innerWidth>760) closeMenu();});
  }

  if(document.readyState==="loading") document.addEventListener("DOMContentLoaded",setup,{once:true});
  else setup();
})();