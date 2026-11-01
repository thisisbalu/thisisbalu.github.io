var e={inOut:e=>e<.5?2*e*e:1-(-2*e+2)**2/2,out:e=>1-(1-e)**3,linear:e=>e},t=class{kind;el;x=0;y=0;facing=1;tilt=0;perch=null;w=0;h=0;gen=0;aspect;constructor(e,t,n){this.kind=t;let[r,i,a,o]=n.viewBox;this.aspect=o/a,this.el=document.createElement(`div`),this.el.className=`critter critter-${t}`,this.el.innerHTML=`<svg viewBox="${r} ${i} ${a} ${o}" aria-hidden="true">${n.markup}</svg>`,e.append(this.el)}size(e){return this.w=e,this.h=e*this.aspect,this.el.style.width=`${this.w}px`,this.el.style.height=`${this.h}px`,this.render(),this}state(e){return this.el.dataset.state=e,this}get current(){return this.el.dataset.state??``}face(e){this.facing=e<0?-1:1,this.render()}place(e){this.x=e.x,this.y=e.y,this.render()}stop(){this.gen++}render(){this.el.style.transform=`translate(${this.x-this.w/2}px, ${this.y-this.h}px)`,this.el.style.setProperty(`--facing`,String(this.facing)),this.el.style.setProperty(`--tilt`,`${this.tilt.toFixed(1)}deg`)}level(){this.tilt=0,this.render()}move(t,{duration:n,lift:r=0,easing:i=`inOut`,wobble:a=0,keepFacing:o=!1}){let s=++this.gen,c={x:this.x,y:this.y};!o&&Math.abs(t.x-c.x)>1&&this.face(t.x-c.x);let l={x:(c.x+t.x)/2,y:Math.min(c.y,t.y)-r},u=performance.now();return new Promise(r=>{let o=d=>{if(s!==this.gen)return r(!1);let f=Math.min(1,(d-u)/n),p=e[i](f),m=1-p;this.x=m*m*c.x+2*m*p*l.x+p*p*t.x,this.y=m*m*c.y+2*m*p*l.y+p*p*t.y+Math.sin(f*Math.PI*6)*a*Math.sin(f*Math.PI),this.render(),f<1?requestAnimationFrame(o):r(!0)};requestAnimationFrame(o)})}wait(e){let t=this.gen;return new Promise(n=>setTimeout(()=>n(t===this.gen),e))}remove(){this.stop(),this.el.remove()}},n=(e,t)=>e+Math.random()*(t-e),r=e=>e[Math.floor(Math.random()*e.length)],i=(e,t)=>Math.hypot(e.x-t.x,e.y-t.y),a;function o(e,t){let n=[...t.childNodes].find(e=>e.nodeType===Node.TEXT_NODE&&e.textContent?.trim());if(!n||t.offsetParent===null)return null;let r=n.textContent??``,i=getComputedStyle(t),o=parseFloat(i.fontSize);a??=document.createElement(`canvas`);let s=a.getContext(`2d`);s.font=`${i.fontStyle} ${i.fontWeight} ${i.fontSize} ${i.fontFamily}`;let c=e.getBoundingClientRect(),l=document.createElement(`span`);l.style.cssText=`display:inline-block;width:0;height:0`,t.append(l);let u=l.getBoundingClientRect().bottom-c.top;l.remove();let d=document.createRange(),f=[];for(let e=0;e<r.length;e++){let t=r[e];if(!t.trim())continue;d.setStart(n,e),d.setEnd(n,e+1);let i=d.getBoundingClientRect(),a=s.measureText(t);f.push({ch:t,index:e,left:i.left-c.left,right:i.right-c.left,top:u-a.actualBoundingBoxAscent,baseline:u})}return{letters:f,fontSize:o,width:c.width,height:c.height,baseline:u,text:r}}var s=e=>({x:(e.left+e.right)/2,y:e.top}),c={viewBox:[-26,-36,52,37],markup:`
  <g class="bird-body">
    <g class="tail">
      <path d="M-7 -10 C-14 -12 -20 -16 -25 -15 C-22 -12 -21 -9 -22 -6 C-17 -6 -12 -6 -7 -6 Z" />
      <path class="tail-light" d="M-8 -9 C-13 -10 -18 -12 -21 -11 C-19 -9.5 -18.5 -8 -19 -7 C-15 -7 -11 -7 -8 -7.5 Z" />
    </g>
    <g class="legs">
      <rect x="-2.6" y="-4.5" width="1.4" height="4.5" rx="0.7" />
      <rect x="2" y="-4.5" width="1.4" height="4.5" rx="0.7" />
    </g>
    <ellipse class="body" cx="1" cy="-13" rx="13.5" ry="10.5" transform="rotate(-12 1 -13)" />
    <ellipse class="belly" cx="4.5" cy="-9.5" rx="8.5" ry="6.2" transform="rotate(-18 4.5 -9.5)" />
    <g class="head">
      <path class="tuft" d="M8.5 -27.5 C8 -31.5 11 -33 13 -31.5 C11 -31 10.5 -29.5 11.5 -28 Z" />
      <circle class="crown" cx="11.5" cy="-21.5" r="7.6" />
      <circle class="cheek" cx="13.6" cy="-17.6" r="2.1" />
      <g class="eye"><circle cx="14" cy="-22.6" r="1.75" /><circle class="glint" cx="14.6" cy="-23.2" r="0.6" /></g>
      <path class="beak" d="M18.6 -22.6 C20.5 -22.4 23 -21.4 24.2 -20.4 C22.8 -19.6 20.6 -19.2 18.8 -19.2 Z" />
    </g>
    <path class="wing wing-fold" d="M-9 -14 C-4 -21 6 -21 10 -13 C5 -9.5 -3 -9 -9 -14 Z" />
    <path class="wing wing-up" d="M-6 -16 C-6 -28 4 -36 14 -33 C11 -27 9 -20 4 -15 C1 -14 -3 -14.5 -6 -16 Z" />
  </g>`},l={viewBox:[-21,-36,45,37],markup:`
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
  </g>`},u={viewBox:[-14,-23,28,24],markup:`
  <g class="butterfly-body">
    <g class="wing-l">
      <path class="upper" d="M-0.5 -9 C-4 -21 -13 -22 -12.5 -14 C-12 -10 -6 -8 -0.5 -8 Z" />
      <path class="lower" d="M-0.5 -7 C-6 -7 -10 -4 -8.5 -1 C-6.5 1 -2 -2 -0.5 -5.5 Z" />
      <circle class="spot" cx="-8" cy="-15" r="1.7" />
    </g>
    <g class="wing-r">
      <path class="upper" d="M0.5 -9 C4 -21 13 -22 12.5 -14 C12 -10 6 -8 0.5 -8 Z" />
      <path class="lower" d="M0.5 -7 C6 -7 10 -4 8.5 -1 C6.5 1 2 -2 0.5 -5.5 Z" />
      <circle class="spot" cx="8" cy="-15" r="1.7" />
    </g>
    <path class="antenna" d="M-0.4 -14.5 C-1.5 -18 -2.6 -19.6 -4.2 -20.2 M0.4 -14.5 C1.5 -18 2.6 -19.6 4.2 -20.2" />
    <ellipse class="thorax" cx="0" cy="-7" rx="1.3" ry="5.6" />
    <circle class="thorax" cx="0" cy="-13.4" r="1.6" />
  </g>`},d={viewBox:[-10,-12,20,12.5],markup:`
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
  </g>`},f={viewBox:[-8,-13,16,14],markup:`
  <g class="firefly-body">
    <circle class="halo" cx="-2.6" cy="-6" r="5.5" />
    <g class="wings">
      <ellipse cx="-0.8" cy="-9.4" rx="3.2" ry="1.4" transform="rotate(-20 -0.8 -9.4)" />
      <ellipse cx="0.6" cy="-9.6" rx="3" ry="1.3" transform="rotate(15 0.6 -9.6)" />
    </g>
    <ellipse class="abdomen" cx="0" cy="-6" rx="2.8" ry="1.7" />
    <circle class="lamp" cx="-2.6" cy="-6" r="1.9" />
    <circle class="head" cx="3" cy="-6.4" r="1.2" />
  </g>`},p={viewBox:[-9,-13,18,14],markup:`
  <g class="bee-body">
    <g class="wings">
      <ellipse cx="-1" cy="-10.6" rx="3.4" ry="2" transform="rotate(-25 -1 -10.6)" />
      <ellipse cx="1.4" cy="-10.8" rx="3" ry="1.8" transform="rotate(20 1.4 -10.8)" />
    </g>
    <path class="sting" d="M-4.6 -6.6 L-7.4 -6 L-4.6 -5.2 Z" />
    <ellipse class="fuzz" cx="0" cy="-6" rx="4.8" ry="3.4" />
    <path class="stripes" d="M-1.8 -9 V-3 M1 -9.3 V-2.7" />
    <circle class="head" cx="4.9" cy="-6.4" r="2" />
    <circle class="eye" cx="5.6" cy="-6.9" r="0.55" />
  </g>`},m={viewBox:[-15,-25,30,26],markup:`
  <g class="squirrel-body">
    <g class="tail">
      <path d="M-3.5 -4.5 C-11 -3 -15.5 -10 -12.5 -17.5 C-10.5 -23 -3.5 -24.5 -1.8 -20 C-0.8 -17 -4 -15.4 -6.4 -16.6 C-8.6 -13.6 -8 -9.4 -2.5 -8.2 Z" />
      <path class="tail-light" d="M-5.2 -7 C-10 -7.2 -12.4 -12 -10.6 -16.6 C-9.6 -19.4 -6.6 -21 -4.2 -19.6" />
    </g>
    <ellipse class="haunch" cx="-1.2" cy="-3" rx="4.6" ry="3" />
    <g class="torso">
      <ellipse class="fur" cx="1.6" cy="-6.2" rx="5.6" ry="4.6" transform="rotate(-18 1.6 -6.2)" />
      <ellipse class="cream" cx="3.6" cy="-5.4" rx="2.6" ry="3.2" transform="rotate(-18 3.6 -5.4)" />
      <g class="head">
        <path class="ear" d="M4.6 -14.6 L5.4 -18.4 L7.6 -15 Z" />
        <circle class="fur" cx="7" cy="-11.6" r="3.9" />
        <ellipse class="cream" cx="9.2" cy="-10.2" rx="1.9" ry="1.5" />
        <circle class="nose" cx="10.8" cy="-11" r="0.75" />
        <circle class="eye" cx="7.8" cy="-12.6" r="0.85" />
        <circle class="glint" cx="8.05" cy="-12.85" r="0.28" />
      </g>
      <g class="acorn">
        <ellipse class="nut" cx="9.4" cy="-7.4" rx="1.5" ry="1.8" />
        <path class="cap" d="M7.8 -8.4 Q9.4 -10.4 11 -8.4 Z" />
      </g>
      <ellipse class="paw" cx="7.4" cy="-6.6" rx="1.3" ry="0.9" />
    </g>
    <ellipse class="foot" cx="1.6" cy="-0.7" rx="3.2" ry="0.9" />
  </g>`},h={viewBox:[-15,-27,30,28],markup:`
  <g class="owl-body">
    <path class="wing wing-up l" d="M-5 -15 C-13.5 -21 -15 -11 -11.5 -6 C-9.6 -9 -7.4 -11 -5 -11 Z" />
    <path class="wing wing-up r" d="M5 -15 C13.5 -21 15 -11 11.5 -6 C9.6 -9 7.4 -11 5 -11 Z" />
    <ellipse class="plumage" cx="0" cy="-9.6" rx="6.8" ry="8.8" />
    <ellipse class="belly" cx="0" cy="-7.4" rx="4.4" ry="5.4" />
    <path class="chevrons" d="M-2.6 -9.4 l1.2 1 l1.2 -1 M0.2 -9.4 l1.2 1 l1.2 -1 M-1.2 -6.4 l1.2 1 l1.2 -1" />
    <path class="wing wing-fold l" d="M-6.4 -13 C-8.6 -9 -8 -4.4 -5 -2.4 C-4.6 -6 -5 -10 -6.4 -13 Z" />
    <path class="wing wing-fold r" d="M6.4 -13 C8.6 -9 8 -4.4 5 -2.4 C4.6 -6 5 -10 6.4 -13 Z" />
    <g class="head">
      <path class="plumage" d="M-6 -21 L-6.8 -26 L-2.8 -22.8 Z M6 -21 L6.8 -26 L2.8 -22.8 Z" />
      <ellipse class="plumage" cx="0" cy="-19.4" rx="6.6" ry="5.4" />
      <g class="face">
        <circle class="disc" cx="-2.8" cy="-19.4" r="2.9" />
        <circle class="disc" cx="2.8" cy="-19.4" r="2.9" />
        <g class="eyes">
          <circle class="iris" cx="-2.8" cy="-19.4" r="1.75" />
          <circle class="iris" cx="2.8" cy="-19.4" r="1.75" />
          <circle class="pupil" cx="-2.6" cy="-19.4" r="0.95" />
          <circle class="pupil" cx="3" cy="-19.4" r="0.95" />
        </g>
        <path class="beak" d="M-0.9 -17.6 L0.9 -17.6 L0 -15.4 Z" />
      </g>
    </g>
    <path class="talons" d="M-2.8 -1.4 v1.2 M-1.6 -1.4 v1.2 M1.6 -1.4 v1.2 M2.8 -1.4 v1.2" />
  </g>`},g={viewBox:[-14,-13,34,14],markup:`
  <g class="cham-body">
    <path class="tail" d="M-6 -5 C-10 -5 -12.6 -3.6 -12.6 -1.6 C-12.6 0.6 -10.4 1 -9.6 -0.6 C-9 -1.8 -10.4 -2.6 -11 -1.6" />
    <g class="legs">
      <path class="leg back" d="M-4 -4.2 L-5.2 -0.6" />
      <path class="leg front" d="M3.6 -4.2 L4.8 -0.6" />
    </g>
    <path class="skin" d="M-7 -5 C-6 -10 2 -11 6 -8.2 C7.6 -7 7.6 -4.6 6 -4 C2 -2.6 -4 -2.6 -7 -5 Z" />
    <path class="crest" d="M-5 -8.4 C-2 -10.6 2 -10.8 5 -9" />
    <path class="stripe" d="M-4.2 -5.4 C-1 -4.6 2 -4.6 4.6 -5.4" />
    <g class="tongue">
      <path d="M11.4 -6.2 L19 -6.2" />
      <circle cx="19" cy="-6.2" r="0.9" />
    </g>
    <path class="skin" d="M5 -9 C8 -11 11.6 -9 12 -6.4 C11.2 -5 8.6 -4.2 6 -4.4 Z" />
    <path class="casque" d="M5.4 -9 C7 -12.2 9.6 -11.8 10.2 -9.8 Z" />
    <circle class="turret" cx="8.6" cy="-7.4" r="2" />
    <circle class="pupil" cx="9" cy="-7.4" r="0.7" />
  </g>`},_=e=>new Promise(t=>setTimeout(t,e)),v=class{layer;actors=[];geo;calm=!1;alive=!0;constructor(e){this.layer=e}get fs(){return this.geo.fontSize}room=.75;letter(e){return this.geo.letters.find(t=>t.index===e)}spawn({kind:e,sprite:n,count:r}){return Array.from({length:r},()=>new t(this.layer,e,n))}get landable(){return this.geo.letters}freeLetter(e=[]){let t=[...e,...this.actors.map(e=>e.perch)].map(e=>this.letter(e??null)).filter(e=>!!e).map(e=>s(e).x),n=this.fs*this.room,i=this.landable.filter(e=>t.every(t=>Math.abs(s(e).x-t)>=n)),a=i.length?i:this.landable,o=[...a].sort((e,t)=>e.top-t.top).slice(0,Math.max(3,Math.ceil(a.length/2)));return r(Math.random()<.7?o:a)}path(e,t){switch(e){case`flutter`:return{duration:Math.min(3200,1300+t*7),lift:this.fs*.7+t*.15,wobble:this.fs*.12};default:return{duration:Math.min(2800,1100+t*5.5),lift:this.fs*.7+t*.15}}}stageLeft(e,t){e.place({x:-this.fs*(2+t),y:-this.fs*(1.5+t*.4)}),e.state(`flying`),e.el.style.opacity=`0`}settle(e,t){e.perch=t.index,e.place(s(t)),e.state(`perched`),e.el.style.opacity=`1`}async flyTo(e,t,n=`flap`){e.perch=t.index,e.state(`flying`),e.el.style.opacity=`1`;let r=s(t),a=await e.move(r,this.path(n,i(e,r)));return a&&(e.level(),e.state(`perched`)),a}async scatter(e,t=`flap`,n=e.x){let i=e.perch,a=this.actors.filter(t=>t!==e).map(e=>e.x),o=this.fs*this.room,c=this.landable.filter(e=>e.index!==i&&a.every(t=>Math.abs(s(e).x-t)>=o)),l=(c.length?c:this.landable.filter(e=>e.index!==i)).sort((e,t)=>Math.abs(s(t).x-n)-Math.abs(s(e).x-n)).slice(0,3);l.length&&await this.flyTo(e,r(l),t)}snap(e){let t=this.letter(e.perch);t&&(e.stop(),e.level(),e.place(s(t)),e.el.style.opacity=`1`,e.current!==`perched`&&e.state(`perched`))}start(e,t){this.geo=e,this.calm=!!t.calm,this.setup(t)}relayout(e){this.geo=e,this.size(),this.actors.forEach(e=>this.snap(e))}save(){return this.actors.map(e=>e.perch)}destroy(){this.alive=!1,this.actors.forEach(e=>e.remove()),this.actors=[]}pointer(e){}targets(){return this.actors.filter(e=>e.el.style.opacity!==`0`)}startle(e){e.current===`perched`&&this.scatter(e)}},y=class extends v{spec;flight;constructor(e,t,n){super(e),this.spec=t,this.flight=n}size(){this.actors.forEach(e=>e.size(this.fs*this.spec.size))}setup({perches:e=[],skipIntro:t,calm:n}){this.actors=this.spawn(this.spec),this.size(),this.actors.forEach((r,i)=>{t||n||e.length?(this.settle(r,this.letter(e[i]??null)??this.freeLetter()),r.face(Math.random()<.5?1:-1)):(this.stageLeft(r,i),setTimeout(()=>this.alive&&this.flyTo(r,this.freeLetter(),this.flight),400+i*1e3))})}pointer(e){if(!this.calm)for(let t of this.actors)t.current===`perched`&&i(e,{x:t.x,y:t.y-this.fs*.2})<this.fs*1.2&&this.scatter(t,this.flight,e.x)}startle(e){e.current===`perched`&&this.scatter(e,this.flight)}tick(){let e=this.actors.filter(e=>e.current===`perched`);if(!e.length)return;let t=r(e),n=Math.random();n<.7?this.flyTo(t,this.freeLetter([t.perch]),this.flight):n<.85?t.face(-t.facing):this.scatter(t,this.flight)}},b=class extends v{spec;speed;canFly;constructor(e,t,n,r){super(e),this.spec=t,this.speed=n,this.canFly=r,this.room=Math.max(.75,t.size*.95)}clear(e,t){let n=s(t).x;return this.actors.every(t=>t===e||Math.abs(t.x-n)>=this.fs*this.room)}size(){this.actors.forEach(e=>e.size(this.fs*this.spec.size))}setup({perches:e=[],skipIntro:t,calm:n}){this.actors=this.spawn(this.spec),this.size(),this.actors.forEach((r,i)=>{let a=this.letter(e[i]??null)??this.freeLetter();t||n||e.length||!this.canFly?(this.settle(r,a),r.face(Math.random()<.5?1:-1),n||this.roam(r,600+i*900)):(this.stageLeft(r,i),setTimeout(async()=>{this.alive&&await this.flyTo(r,a)&&this.roam(r,800)},400+i*1300))})}async roam(e,t){for(await _(t);this.alive;){if(e.current===`perched`){let t=this.letter((e.perch??0)+e.facing);if(!t||!this.clear(e,t))e.face(-e.facing);else{e.perch=t.index,e.state(`crawl`);let n=s(t);await e.move(n,{duration:i(e,n)/(this.fs*this.speed)*1e3,easing:`linear`,keepFacing:!0})&&e.state(`perched`)}}await _(n(800,4e3)/Math.max(.5,this.speed*2))}}startle(e){this.canFly?e.current===`perched`&&this.flyTo(e,this.freeLetter([e.perch])):(e.el.dataset.startled=``,setTimeout(()=>delete e.el.dataset.startled,1400))}tick(){if(!this.canFly)return;let e=this.actors.filter(e=>e.current===`perched`);if(e.length&&Math.random()<.3){let t=r(e);this.flyTo(t,this.freeLetter([t.perch]))}}},x=class extends v{spec;pace;rest;darted=new WeakMap;constructor(e,t,n,r){super(e),this.spec=t,this.pace=n,this.rest=r}size(){this.actors.forEach(e=>e.size(this.fs*this.spec.size))}setup({perches:e=[],calm:t}){this.actors=this.spawn(this.spec),this.size(),this.actors.forEach((n,r)=>{n.el.style.setProperty(`--glow-delay`,`${-r*.7}s`),t?this.settle(n,this.letter(e[r]??null)??this.freeLetter()):(n.place(this.spot()),n.state(`flying`),this.wander(n))})}spot(){let e=Math.min(...this.geo.letters.map(e=>e.top));return{x:n(-this.fs*.5,this.geo.width+this.fs*.5),y:n(e-this.fs*.9,this.geo.baseline)}}async wander(e){let t=()=>_(650);for(;this.alive;){if(Math.random()<.25){if(!await this.flyTo(e,this.freeLetter(),`flutter`)||!await e.wait(n(...this.rest))){await t();continue}e.perch=null,e.state(`flying`)}await e.move(this.spot(),{duration:n(...this.pace),lift:this.fs*n(-.3,.5),wobble:this.fs*.08})||await _(1600)}}pointer(e){if(this.calm)return;let t=performance.now();for(let n of this.actors){if(i(e,n)>this.fs*1.1||t-(this.darted.get(n)??0)<1800)continue;this.darted.set(n,t),n.perch=null,n.state(`flying`);let r=Math.max(1,i(e,n)),a={x:n.x+(n.x-e.x)/r*this.fs*1.4,y:n.y+(n.y-e.y)/r*this.fs*.8};n.move(a,{duration:1500,easing:`inOut`,wobble:this.fs*.06})}}relayout(e){this.geo=e,this.size(),this.calm&&this.actors.forEach(e=>this.snap(e))}startle(e){this.calm||(e.perch=null,e.state(`flying`),e.move({x:e.x+n(-1,1)*this.fs,y:e.y-this.fs*1.1},{duration:1500,easing:`inOut`,wobble:this.fs*.06}))}tick(){}},S=class extends v{count;dashing=new Set;constructor(e,t){super(e),this.count=t,this.room=.7}size(){this.actors.forEach(e=>e.size(this.fs*.62))}setup({perches:e=[],calm:t}){this.actors=this.spawn({kind:`squirrel`,sprite:m,size:.62,count:this.count}),this.size(),this.actors.forEach((n,r)=>{this.settle(n,this.letter(e[r]??null)??this.freeLetter()),n.face(Math.random()<.5?1:-1),t||this.live(n,800+r*700)})}async hop(e,t,r=!1){for(let i=0;i<t;i++){let t=this.letter((e.perch??0)+e.facing)??this.letter((e.perch??0)+e.facing*2),i=t&&s(t).x;if(!t||this.actors.some(t=>t!==e&&Math.abs(t.x-i)<this.fs*this.room))return e.face(-e.facing),!0;if(e.perch=t.index,e.state(`hop`),!await e.move(s(t),{duration:r?280:300,lift:this.fs*(r?.32:.38),keepFacing:!0})||(e.state(`perched`),!await e.wait(r?140:n(120,260))))return!1}return!0}async live(e,t){for(await _(t);this.alive;){if(this.dashing.has(e)||document.hidden){await _(500);continue}let t=Math.random();if(t<.45){if(Math.random()<.3&&e.face(-e.facing),!await this.hop(e,Math.ceil(n(1,4))))continue}else if(t<.7){if(e.state(`nibble`),!await e.wait(n(1600,2800)))continue;e.state(`perched`)}else if(t<.85){if(e.state(`alert`),!await e.wait(n(900,1500)))continue;e.state(`perched`)}else e.face(-e.facing);await _(n(1500,4e3))}}async dash(e,t){this.calm||this.dashing.has(e)||(this.dashing.add(e),e.stop(),e.face(e.x>=t?1:-1),await this.hop(e,Math.ceil(n(2,3)),!0)&&(e.state(`alert`),await e.wait(1200),e.state(`perched`)),this.dashing.delete(e))}pointer(e){for(let t of this.actors)i(e,{x:t.x,y:t.y-this.fs*.2})<this.fs*1.1&&this.dash(t,e.x)}startle(e){this.dash(e,e.x-e.facing)}relayout(e){this.geo=e,this.size(),this.actors.forEach(e=>this.snap(e))}tick(){}};function C(e,t){switch(e){case`owls`:return new y(t,{kind:`owl`,sprite:h,size:.66,count:2},`flap`);case`butterflies`:return new y(t,{kind:`butterfly`,sprite:u,size:.62,count:2},`flutter`);case`squirrel`:return new S(t,3);case`chameleons`:return new b(t,{kind:`chameleon`,sprite:g,size:.95,count:3},.16,!1);case`ladybugs`:return new b(t,{kind:`ladybug`,sprite:d,size:.56,count:2},.45,!0);case`fireflies`:return new x(t,{kind:`firefly`,sprite:f,size:.45,count:4},[1600,3200],[2e3,5e3]);case`bees`:return new x(t,{kind:`bee`,sprite:p,size:.5,count:3},[700,1500],[1200,3e3]);case`home`:return new y(t,{kind:`bird`,sprite:c,size:.7,count:3},`flap`);default:return new y(t,{kind:`bird`,sprite:c,size:.7,count:2},`flap`)}}var w=`critters`,T=null,E=()=>T;function D(e){return[...e.querySelectorAll(`[data-name-text]`)].find(e=>e.offsetParent!==null)}async function O(e){let t=e.querySelector(`[data-cast-layer]`);if(!t)return;let n=e.dataset.cast??`birds`;if(n===`none`){e.dataset.ready=``;return}let r=matchMedia(`(prefers-reduced-motion: reduce)`).matches;await document.fonts.ready;let i=()=>{let t=D(e);return t?o(e,t):null},a=i();if(!a)return;let s=null;try{s=JSON.parse(sessionStorage.getItem(w)??`null`)}catch{s=null}let c=s?.cast===n&&s.text===a.text,l=performance.now(),u=C(n,t);u.start(a,{perches:c?s.perches:void 0,skipIntro:c,calm:r}),e.dataset.ready=``,T={scene:u,stage:e};let d=()=>{a&&sessionStorage.setItem(w,JSON.stringify({cast:n,text:a.text,perches:u.save()}))};addEventListener(`pagehide`,d),document.addEventListener(`visibilitychange`,d);let f;if(new ResizeObserver(()=>{clearTimeout(f),f=window.setTimeout(()=>{let o=i();o&&(o.text===a?.text?u.relayout(o):(u.destroy(),u=C(n,t),u.start(o,{skipIntro:c||performance.now()-l>8e3,calm:r}),T={scene:u,stage:e}),a=o)},150)}).observe(e),r)return;let p=()=>{window.setTimeout(()=>{document.hidden||(u.tick(),d()),p()},7e3+Math.random()*9e3)};p();let m=!1;addEventListener(`pointermove`,t=>{t.pointerType!==`mouse`||m||(m=!0,requestAnimationFrame(()=>{m=!1;let n=e.getBoundingClientRect();u.pointer({x:t.clientX-n.left,y:t.clientY-n.top})}))})}export{t as a,o as i,O as n,i as o,l as r,r as s,E as t};