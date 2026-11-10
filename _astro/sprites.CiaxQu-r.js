var e={inOut:e=>e<.5?2*e*e:1-(-2*e+2)**2/2,out:e=>1-(1-e)**3,linear:e=>e},t=class{kind;el;x=0;y=0;facing=1;tilt=0;perch=null;w=0;h=0;gen=0;aspect;constructor(e,t,n){this.kind=t;let[r,i,a,o]=n.viewBox;this.aspect=o/a,this.el=document.createElement(`div`),this.el.className=`critter critter-${t}`,this.el.innerHTML=`<svg viewBox="${r} ${i} ${a} ${o}" aria-hidden="true">${n.markup}</svg>`,e.append(this.el)}size(e){return this.w=e,this.h=e*this.aspect,this.el.style.width=`${this.w}px`,this.el.style.height=`${this.h}px`,this.render(),this}state(e){return this.el.dataset.state=e,this}get current(){return this.el.dataset.state??``}face(e){this.facing=e<0?-1:1,this.render()}place(e){this.x=e.x,this.y=e.y,this.render()}stop(){this.gen++}render(){this.el.style.transform=`translate(${this.x-this.w/2}px, ${this.y-this.h}px)`,this.el.style.setProperty(`--facing`,String(this.facing)),this.el.style.setProperty(`--tilt`,`${this.tilt.toFixed(1)}deg`)}level(){this.tilt=0,this.render()}move(t,{duration:n,lift:r=0,easing:i=`inOut`,wobble:a=0,keepFacing:o=!1}){let s=++this.gen,c={x:this.x,y:this.y};!o&&Math.abs(t.x-c.x)>1&&this.face(t.x-c.x);let l={x:(c.x+t.x)/2,y:Math.min(c.y,t.y)-r},u=performance.now();return new Promise(r=>{let o=d=>{if(s!==this.gen)return r(!1);let f=Math.min(1,(d-u)/n),p=e[i](f),m=1-p;this.x=m*m*c.x+2*m*p*l.x+p*p*t.x,this.y=m*m*c.y+2*m*p*l.y+p*p*t.y+Math.sin(f*Math.PI*6)*a*Math.sin(f*Math.PI),this.render(),f<1?requestAnimationFrame(o):r(!0)};requestAnimationFrame(o)})}wait(e){let t=this.gen;return new Promise(n=>setTimeout(()=>n(t===this.gen),e))}remove(){this.stop(),this.el.remove()}},n=(e,t)=>e+Math.random()*(t-e),r=e=>e[Math.floor(Math.random()*e.length)],i=(e,t)=>Math.hypot(e.x-t.x,e.y-t.y),a={viewBox:[-21,-36,45,37],markup:`
  <g class="dog-body">
    <g class="pose pose-stand">
      <path class="g-leg far u hind" data-p="rh-u" /><path class="g-leg far l" data-p="rh-l" />
      <path class="g-leg far u front" data-p="rf-u" /><path class="g-leg far l" data-p="rf-l" />
      <ellipse class="g-paw far" data-p="rh-paw" rx="1.8" ry="0.9" />
      <ellipse class="g-paw far" data-p="rf-paw" rx="1.8" ry="0.9" />
      <g data-p="tail"><path class="tail" d="M-13 -15.5 C-16.8 -17.2 -18.6 -21 -17.6 -25.6" /></g>
      <path class="g-torso" data-p="torso" />
      <path class="g-belly" data-p="belly" />
      <path class="g-leg u hind" data-p="lh-u" /><path class="g-leg l" data-p="lh-l" />
      <path class="g-leg u front" data-p="lf-u" /><path class="g-leg l" data-p="lf-l" />
      <ellipse class="g-paw" data-p="lh-paw" rx="2" ry="1" />
      <ellipse class="g-paw" data-p="lf-paw" rx="2" ry="1" />
      <g data-p="neck">
        <path class="collar" d="M6.6 -13.8 L8.8 -21.4" />
        <circle class="tag" cx="6.7" cy="-13.2" r="1.3" />
        <g class="head">
        <path class="ear ear-back" d="M9.4 -29.2 C11.6 -30.2 13.4 -29.4 14 -27.6" />
        <circle class="coat" cx="11.5" cy="-23" r="7" />
        <ellipse class="cream" cx="17" cy="-20.8" rx="4.6" ry="3.4" />
        <ellipse class="nose" cx="21" cy="-21.9" rx="1.7" ry="1.3" />
        <path class="mouth" d="M16.6 -18.6 Q18.6 -16.6 20.8 -18.6" />
        <ellipse class="yawn" cx="18.4" cy="-18" rx="1.8" ry="1.4" />
        <ellipse class="tongue" cx="18.9" cy="-16.8" rx="1.1" ry="1.6" />
        <g class="eye"><circle cx="13.6" cy="-24.6" r="1.35" /><circle class="glint" cx="14" cy="-25" r="0.45" /></g>
        <path class="ear" d="M8.4 -29.2 C4.6 -29.6 3.8 -22 6.2 -17.4 C8.8 -17.8 10.4 -22.8 10.8 -27.8 Z" />
      </g>
      </g>
    </g>
    <g class="pose pose-sit">
      <path class="tail" d="M-9.5 -2.2 C-13.5 -1.2 -16.6 -2 -17.4 -6" />
      <ellipse class="coat" cx="-5" cy="-6.6" rx="7.6" ry="6.6" />
      <ellipse class="coat torso" cx="1.2" cy="-13.4" rx="6.4" ry="9.6" transform="rotate(24 1.2 -13.4)" />
      <ellipse class="cream" cx="6.4" cy="-14.2" rx="1.6" ry="4.4" transform="rotate(18 6.4 -14.2)" />
      <g class="back-paw"><ellipse class="coat-dark" cx="0" cy="-1.5" rx="4" ry="1.6" /><ellipse class="cream" cx="2.4" cy="-1.1" rx="1.8" ry="1" /></g>
      <path class="scratch-leg" d="M-4 -7 C-3 -14 -1 -20 1.6 -25.5" />
      <rect class="leg far" x="6" y="-14.5" width="3.2" height="14.5" rx="1.6" />
      <g class="leg near"><rect x="3" y="-14.5" width="3.4" height="14.5" rx="1.7" /><ellipse class="cream" cx="4.7" cy="-0.9" rx="2" ry="1" /></g>
      <path class="collar" d="M3.8 -20.4 L10 -22.8" />
      <circle class="tag" cx="6.4" cy="-20.6" r="1.3" />
      <g transform="translate(-4 -6.4)"><g class="head">
        <path class="ear ear-back" d="M9.4 -29.2 C11.6 -30.2 13.4 -29.4 14 -27.6" />
        <circle class="coat" cx="11.5" cy="-23" r="7" />
        <ellipse class="cream" cx="17" cy="-20.8" rx="4.6" ry="3.4" />
        <ellipse class="nose" cx="21" cy="-21.9" rx="1.7" ry="1.3" />
        <path class="mouth" d="M16.6 -18.6 Q18.6 -16.6 20.8 -18.6" />
        <ellipse class="yawn" cx="18.4" cy="-18" rx="1.8" ry="1.4" />
        <ellipse class="tongue" cx="18.9" cy="-16.8" rx="1.1" ry="1.6" />
        <g class="eye"><circle cx="13.6" cy="-24.6" r="1.35" /><circle class="glint" cx="14" cy="-25" r="0.45" /></g>
        <path class="ear" d="M8.4 -29.2 C4.6 -29.6 3.8 -22 6.2 -17.4 C8.8 -17.8 10.4 -22.8 10.8 -27.8 Z" />
      </g></g>
    </g>
    <g class="pose pose-lie">
      <path class="tail" d="M-14.2 -4 C-18.4 -4.4 -19.6 -1.4 -16.6 -0.4" />
      <rect class="coat torso" x="-15.4" y="-9.6" width="25.6" height="9.6" rx="4.8" />
      <ellipse class="cream" cx="-2.5" cy="-1.2" rx="7" ry="1.2" />
      <ellipse class="coat-dark" cx="13.8" cy="-1.3" rx="4.6" ry="1.5" />
      <ellipse class="cream" cx="16.6" cy="-1.1" rx="2" ry="1" />
      <g transform="translate(0.6 13.4)"><g class="head">
        <path class="ear ear-back" d="M9.4 -29.2 C11.6 -30.2 13.4 -29.4 14 -27.6" />
        <circle class="coat" cx="11.5" cy="-23" r="7" />
        <ellipse class="cream" cx="17" cy="-20.8" rx="4.6" ry="3.4" />
        <ellipse class="nose" cx="21" cy="-21.9" rx="1.7" ry="1.3" />
        <path class="mouth" d="M16.6 -18.6 Q18.6 -16.6 20.8 -18.6" />
        <ellipse class="yawn" cx="18.4" cy="-18" rx="1.8" ry="1.4" />
        <ellipse class="tongue" cx="18.9" cy="-16.8" rx="1.1" ry="1.6" />
        <g class="eye"><circle cx="13.6" cy="-24.6" r="1.35" /><circle class="glint" cx="14" cy="-25" r="0.45" /></g>
        <path class="ear" d="M8.4 -29.2 C4.6 -29.6 3.8 -22 6.2 -17.4 C8.8 -17.8 10.4 -22.8 10.8 -27.8 Z" />
      </g></g>
    </g>
  </g>`},o=`
        <g class="head">
          <circle class="coat" cx="11.2" cy="-25.6" r="5.4" />
          <circle class="coat-light" cx="9.6" cy="-31" r="4.2" />
          <circle class="coat-light" cx="13.4" cy="-30.6" r="3.4" />
          <circle class="coat-light" cx="11.4" cy="-33.4" r="2.8" />
          <ellipse class="coat-light" cx="17.6" cy="-23.8" rx="4.8" ry="2.4" />
          <circle class="nose" cx="22.2" cy="-24.6" r="1.2" />
          <path class="mouth" d="M16.8 -21.8 Q18.4 -20.8 20 -21.8" />
          <ellipse class="yawn" cx="18.6" cy="-21.6" rx="1.6" ry="1.2" />
          <ellipse class="tongue" cx="19" cy="-20.6" rx="1" ry="1.4" />
          <g class="eye"><circle cx="13.4" cy="-26.6" r="1.15" /><circle class="glint" cx="13.8" cy="-27" r="0.4" /></g>
          <g class="ear"><circle cx="7.6" cy="-25.6" r="2.4" /><circle cx="7" cy="-22" r="2.6" /><circle cx="7.6" cy="-18.4" r="2.2" /></g>
        </g>`,s={viewBox:[-21,-36,45,37],markup:`
  <g class="dog-body">
    <g class="pose pose-stand">
      <path class="g-leg far u hind" data-p="rh-u" /><path class="g-leg far l" data-p="rh-l" />
      <path class="g-leg far u front" data-p="rf-u" /><path class="g-leg far l" data-p="rf-l" />
      <ellipse class="g-paw far" data-p="rh-paw" rx="1.6" ry="0.8" />
      <ellipse class="g-paw far" data-p="rf-paw" rx="1.6" ry="0.8" />
      <g data-p="tail"><g class="tail-wag"><path class="tail-line" d="M-11 -19 C-12.2 -22 -12.8 -24.6 -12.8 -27" /><circle class="coat" cx="-12.8" cy="-28.8" r="2.8" /></g></g>
      <path class="g-torso" data-p="torso" />
      <path class="g-belly" data-p="belly" />
      <path class="g-leg u hind" data-p="lh-u" /><path class="g-leg l" data-p="lh-l" />
      <path class="g-leg u front" data-p="lf-u" /><path class="g-leg l" data-p="lf-l" />
      <ellipse class="g-paw" data-p="lh-paw" rx="1.8" ry="0.9" />
      <ellipse class="g-paw" data-p="lf-paw" rx="1.8" ry="0.9" />
      <g data-p="neck">
        <path class="collar" d="M6.4 -20.4 L10.4 -22.8" />
        <circle class="tag" cx="8.2" cy="-19.8" r="1.1" />
        <g transform="translate(-0.4 -0.6)">${o}</g>
      </g>
    </g>
    <g class="pose pose-sit">
      <g class="tail-wag"><path class="tail-line" d="M-8.6 -7 C-10.4 -10 -11.4 -13 -11.6 -15.6" /><circle class="coat" cx="-11.8" cy="-17.4" r="3" /></g>
      <ellipse class="coat" cx="-4.4" cy="-6.6" rx="7" ry="6.4" />
      <g class="coat-dark"><circle cx="-7" cy="-8" r="1" /><circle cx="-3.6" cy="-9.6" r="1" /><circle cx="-5" cy="-4.6" r="0.9" /><circle cx="-1.6" cy="-6.4" r="0.9" /></g>
      <g transform="rotate(16 1.4 -14.6)"><ellipse class="coat torso" cx="1.4" cy="-14.6" rx="5.4" ry="9.8" /></g>
      <g class="coat-light"><circle cx="4.6" cy="-16" r="1.1" /><circle cx="3.4" cy="-12.6" r="1" /><circle cx="5.2" cy="-19.4" r="1" /></g>
      <g class="back-paw"><ellipse class="coat-dark" cx="0" cy="-1.5" rx="3.8" ry="1.6" /></g>
      <path class="scratch-leg" d="M-4 -7 C-3 -14 -1 -20 1.6 -25.5" />
      <rect class="leg far" x="6.2" y="-17" width="2.8" height="17" rx="1.4" />
      <g class="leg near"><rect x="3.4" y="-17" width="3" height="17" rx="1.5" /><circle class="coat-light" cx="4.9" cy="-1.4" r="2.1" /></g>
      <path class="collar" d="M3.6 -22.6 L9.4 -24.8" />
      <circle class="tag" cx="6.2" cy="-22.6" r="1.2" />
      <g transform="translate(-3 -4.6)">${o}</g>
    </g>
    <g class="pose pose-lie">
      <g class="tail-wag"><path class="tail-line" d="M-13.6 -6 C-15.6 -8.6 -16.2 -11 -16 -13" /><circle class="coat" cx="-16" cy="-14.6" r="2.8" /></g>
      <rect class="coat torso" x="-14.6" y="-10" width="24" height="10" rx="5" />
      <g class="coat-dark"><circle cx="-9" cy="-6.6" r="1" /><circle cx="-4" cy="-7.8" r="1" /><circle cx="1" cy="-6" r="1" /><circle cx="-6.4" cy="-3.4" r="0.9" /></g>
      <rect class="coat-dark" x="8" y="-3" width="10" height="3" rx="1.5" />
      <circle class="coat-light" cx="17.4" cy="-1.5" r="1.9" />
      <path class="collar" d="M7 -9.4 L9.6 -3.6" />
      <g transform="translate(-1 11.6)">${o}</g>
    </g>
  </g>`},c=`
        <g class="head">
          <path class="ear ear-far" d="M7.8 -27.4 L8.2 -34.4 L12.4 -28.8 Z" />
          <circle class="coat" cx="10.6" cy="-23.2" r="6.1" />
          <path class="ear" d="M11.4 -28.4 L14.8 -34.6 L16 -27.4 Z" />
          <path class="ear-inner" d="M12.8 -28.6 L14.6 -32.4 L15.1 -28.2 Z" />
          <path class="cream" d="M14.6 -24.8 C17.6 -24.6 19.8 -23.4 20.2 -22.2 C19.8 -20.8 17.4 -20 14.8 -20.4 Z" />
          <ellipse class="nose" cx="19.9" cy="-22.6" rx="1.25" ry="1" />
          <path class="mouth" d="M16.6 -20.6 Q17.8 -19.7 19.2 -20.5" />
          <ellipse class="yawn" cx="17.6" cy="-20.4" rx="1.3" ry="1" />
          <ellipse class="tongue" cx="18" cy="-19.6" rx="0.8" ry="1.2" />
          <g class="eye"><circle cx="12.9" cy="-24.6" r="1.35" /><circle class="glint" cx="13.35" cy="-25.05" r="0.45" /></g>
        </g>`,l={viewBox:[-21,-36,45,37],markup:`
  <g class="dog-body">
    <g class="pose pose-stand">
      <path class="g-leg far u hind" data-p="rh-u" /><path class="g-leg far l" data-p="rh-l" />
      <path class="g-leg far u front" data-p="rf-u" /><path class="g-leg far l" data-p="rf-l" />
      <ellipse class="g-paw far" data-p="rh-paw" rx="1.6" ry="0.8" />
      <ellipse class="g-paw far" data-p="rf-paw" rx="1.6" ry="0.8" />
      <g data-p="tail"><path class="tail plume" d="M-8.6 -12.6 C-14.4 -15.4 -13 -22 -6.6 -21" /></g>
      <path class="g-torso" data-p="torso" />
      <path class="g-belly" data-p="belly" />
      <path class="g-leg u hind" data-p="lh-u" /><path class="g-leg l" data-p="lh-l" />
      <path class="g-leg u front" data-p="lf-u" /><path class="g-leg l" data-p="lf-l" />
      <ellipse class="g-paw" data-p="lh-paw" rx="1.8" ry="0.9" />
      <ellipse class="g-paw" data-p="lf-paw" rx="1.8" ry="0.9" />
      <g data-p="neck">
        <path class="coat ruff" d="M3.4 -18.1 C7.6 -18.7 10.6 -15.5 10 -11.1 C9.8 -9.1 8.8 -7.9 7.4 -7.3 C7.8 -8.9 7 -9.5 6.4 -8.9 C6.6 -10.5 5.6 -10.9 5 -10.1 C4.6 -13.1 3.6 -15.5 3.4 -18.1 Z" />
        <path class="collar" d="M4.4 -16.6 Q7.8 -15 11 -17.4" />
        <circle class="tag" cx="7.8" cy="-14.4" r="1.1" />
        <g transform="translate(-1.6 4.2)">${c}</g>
      </g>
    </g>
    <g class="pose pose-sit">
      <path class="tail plume" d="M-7.6 -7.4 C-13.8 -11.6 -12.6 -20.6 -4.4 -20.8" />
      <ellipse class="coat" cx="-4.4" cy="-6" rx="7" ry="6" />
      <g transform="rotate(22 0.8 -12.6)"><ellipse class="coat torso" cx="0.8" cy="-12.6" rx="6" ry="8.6" /></g>
      <g class="back-paw"><ellipse class="coat-dark" cx="0" cy="-1.4" rx="3.8" ry="1.5" /></g>
      <path class="scratch-leg" d="M-4 -6 C-3 -11 -1 -16 1.4 -20" />
      <rect class="leg far" x="6" y="-12" width="3" height="12" rx="1.5" />
      <g class="leg near"><rect x="3.2" y="-12" width="3.2" height="12" rx="1.6" /><ellipse class="cream" cx="4.8" cy="-0.8" rx="2.1" ry="1" /></g>
      <path class="coat ruff" d="M2.4 -21.6 C6.6 -22.2 9.6 -19 9 -14.6 C8.8 -12.6 7.8 -11.4 6.4 -10.8 C6.8 -12.4 6 -13 5.4 -12.4 C5.6 -14 4.6 -14.4 4 -13.6 C3.6 -16.6 2.6 -19 2.4 -21.6 Z" />
      <path class="collar" d="M3.2 -21.6 Q6.6 -20 9.8 -22.4" />
      <circle class="tag" cx="6.6" cy="-19.4" r="1.2" />
      <g transform="translate(-3.2 -2.6)">${c}</g>
    </g>
    <g class="pose pose-lie">
      <path class="tail plume" d="M-12.4 -6.6 C-17 -10.4 -14.2 -16 -8 -14.2" />
      <rect class="coat torso" x="-14.6" y="-10.4" width="24" height="10.4" rx="5.2" />
      <ellipse class="coat-dark" cx="-2.6" cy="-1.2" rx="6.6" ry="1.2" />
      <rect class="coat" x="8" y="-3.2" width="9.6" height="3.2" rx="1.6" />
      <path class="coat ruff" d="M4 -11.6 C8.2 -12 10.6 -8.6 9.8 -4.6 C8.6 -5.4 8 -5 7.6 -4.2 C7 -5.6 6 -5.6 5.4 -4.8 C5 -7 4.2 -9 4 -11.6 Z" />
      <path class="collar" d="M4.8 -11.4 Q7.6 -9.8 10 -11.8" />
      <g transform="translate(-1 12.4)">${c}</g>
    </g>
  </g>`},u={viewBox:[-10,-12,20,12.5],markup:`
  <g class="ladybug-body">
    <path class="legs" d="M-3.5 -1.2 l-1.2 1.2 M0 -1.2 v1.3 M3.4 -1.2 l1.2 1.2" />
    <g class="wings">
      <ellipse cx="-2" cy="-8.5" rx="5" ry="2" transform="rotate(-25 -2 -8.5)" />
      <ellipse cx="2" cy="-8.8" rx="5" ry="2" transform="rotate(20 2 -8.8)" />
    </g>
    <path class="shell" d="M-6.6 -1.3 A6.6 6.4 0 0 1 6.4 -1.3 Z" />
    <circle class="dot" cx="-3.2" cy="-3.8" r="1.15" />
    <circle class="dot" cx="0.6" cy="-5.6" r="1.05" />
    <circle class="dot" cx="3.4" cy="-3" r="1" />
    <path class="head" d="M5.6 -1.3 C5.4 -3.6 6.3 -5.2 7.6 -5 C9.4 -4.6 9.6 -1.3 7.8 -1.3 Z" />
    <circle class="eye" cx="7.9" cy="-3.6" r="0.55" />
  </g>`};export{t as a,n as c,s as i,u as n,i as o,l as r,r as s,a as t};