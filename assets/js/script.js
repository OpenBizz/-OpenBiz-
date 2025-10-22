
document.addEventListener('DOMContentLoaded', function(){
  if(window.AOS) AOS.init({duration:700, once:true, offset:70});
  document.querySelectorAll('.open-btn').forEach(b=>{
    b.addEventListener('click', ()=>{
      const partner = b.dataset.partner || 'partner';
      window.open('' + encodeURIComponent(partner), '_blank');
    });
  });
  document.querySelectorAll('.more-btn').forEach(b=>{
    b.addEventListener('click', ()=>{
      window.open('https://t.me/rko_partnerr', '_blank');
    });
  });
});
