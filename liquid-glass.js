
window.addEventListener("DOMContentLoaded",()=>{

  /* ===== LIGHT ===== */
  const light=document.createElement("div");
  light.className="light";
  document.body.appendChild(light);

  let lx=innerWidth/2, ly=innerHeight/2;
  let tx=lx, ty=ly;

  function animateLight(){
    lx+=(tx-lx)*0.08;
    ly+=(ty-ly)*0.08;
    light.style.left=lx+"px";
    light.style.top=ly+"px";
    requestAnimationFrame(animateLight);
  }
  animateLight();

  window.addEventListener("mousemove",e=>{
    tx=e.clientX;
    ty=e.clientY;
  },{passive:true});

  window.addEventListener("touchmove",e=>{
    tx=e.touches[0].clientX;
    ty=e.touches[0].clientY;
  },{passive:true});

  /* ===== FIX CONTENT WRAP ===== */
  const scroll=document.createElement("div");
  scroll.className="liquid-scroll";

  const app=document.createElement("div");
  app.className="app";

  // انتقال همه محتوای قبلی داخل app
  while(document.body.firstChild){
    app.appendChild(document.body.firstChild);
  }

  scroll.appendChild(app);
  document.body.appendChild(scroll);
});