(function(){
  if(location.pathname==='/' || location.pathname==='/index.html'){
    const style=document.createElement('style');
    style.textContent=`
      .hero-art .floating-card.a,.hero-art .note{display:none!important}
      .hero-art .floating-card.b{right:18px!important;top:26px!important;width:188px!important;padding:13px 15px!important;border-radius:17px!important;box-shadow:0 12px 30px rgba(44,25,57,.13)!important}
      .hero-art .floating-card.b .mini-title{font-size:10px!important;letter-spacing:.11em!important}
      .hero-art .floating-card.b strong{font-size:14px!important;line-height:1.35!important;display:block!important}
      .hero-art .photo.main{inset:0!important}
      .hero-art .photo.main img{object-position:47% center!important}
      @media(max-width:900px){
        .hero-grid{gap:28px!important}
        .hero-art{min-height:430px!important}
        .hero-art .photo.main{inset:0!important;border-radius:28px!important}
        .hero-art .photo.main img{object-position:48% center!important}
        .hero-art .floating-card.b{top:auto!important;right:14px!important;bottom:14px!important;width:auto!important;max-width:205px!important;padding:11px 13px!important;border-radius:15px!important;background:rgba(255,255,255,.94)!important;backdrop-filter:blur(8px)}
      }
      @media(max-width:600px){
        .hero{padding-bottom:22px!important}
        .hero-grid{gap:22px!important}
        .hero-art{min-height:420px!important;margin-left:-2px!important;margin-right:-2px!important}
        .hero-art .photo.main{border-radius:26px!important}
        .hero-art .photo.main img{object-position:49% center!important}
        .hero-art .floating-card.b{right:12px!important;bottom:12px!important;max-width:185px!important}
        .hero-art .floating-card.b strong{font-size:13px!important}
      }
    `;
    document.head.appendChild(style);
    const hero=document.querySelector('.hero-art .photo.main img');
    if(hero){
      hero.src='/images/hero-kulturskole-1200.webp';
      hero.width=1200;
      hero.height=800;
    }
  }
  const core=document.createElement('script');
  core.src='/seo-core.js';
  core.async=false;
  document.head.appendChild(core);
})();