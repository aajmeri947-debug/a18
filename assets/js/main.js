(function(){
var b=document.querySelector('.burger'),n=document.getElementById('nav');
if(b&&n)b.addEventListener('click',function(){var o=n.classList.toggle('open');b.setAttribute('aria-expanded',o?'true':'false');b.setAttribute('aria-label',o?'Close menu':'Open menu');});
function $(i){return document.getElementById(i);}
var f=$('cform');
if(f)f.addEventListener('submit',function(e){e.preventDefault();var fm=$('fm');
 if($('website').value)return;
 if(!f.checkValidity()){fm.hidden=false;fm.textContent='Please add your name, a valid email address and a message, and tick the agreement box.';return;}
 var body='Name: '+$('name').value+'\nEmail: '+$('email').value+'\nTopic: '+$('topic').value+'\n\n'+$('message').value;
 location.href='mailto:'+f.getAttribute('data-to')+'?subject='+encodeURIComponent(f.getAttribute('data-brand')+': '+$('topic').value)+'&body='+encodeURIComponent(body);
 fm.hidden=false;fm.textContent='Your email app should open with the message ready to send. If nothing happens, write to us directly at '+f.getAttribute('data-to')+'.';});
var c=$('cookie'),k=null;try{k=localStorage.getItem('ck_'+location.hostname);}catch(e){}
if(c&&!k)c.classList.add('show');
if(c)c.querySelectorAll('button').forEach(function(bt){bt.addEventListener('click',function(){try{localStorage.setItem('ck_'+location.hostname,bt.getAttribute('data-cookie'));}catch(e){}c.classList.remove('show');});});
var y=$('year');if(y)y.textContent=new Date().getFullYear();
})();
(function(){var d=document.documentElement,rm=window.matchMedia&&matchMedia('(prefers-reduced-motion: reduce)').matches;
[].forEach.call(document.querySelectorAll('.stg'),function(g){[].forEach.call(g.children,function(c,i){c.style.transitionDelay=(i*110)+'ms';});});
function cnt(el){var to=parseFloat(el.getAttribute('data-count')),dec=(el.getAttribute('data-count').split('.')[1]||'').length,t0=null,dur=1600;if(rm){el.textContent=to.toFixed(dec);return;}function f(t){if(!t0)t0=t;var p=Math.min(1,(t-t0)/dur),e=1-Math.pow(1-p,3);el.textContent=(to*e).toFixed(dec);if(p<1)requestAnimationFrame(f);}requestAnimationFrame(f);}
var els=[].slice.call(document.querySelectorAll('.rv,[data-count]'));
if(rm||!('IntersectionObserver' in window)){els.forEach(function(e){e.classList.add('in');if(e.hasAttribute('data-count'))e.textContent=e.getAttribute('data-count');});}
else{var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){var ts=(e.target.__rv||[]).concat(els.indexOf(e.target)>-1?[e.target]:[]);ts.forEach(function(t){t.classList.add('in');if(t.hasAttribute('data-count'))cnt(t);});io.unobserve(e.target);}});},{rootMargin:'0px 0px -6% 0px',threshold:.01});
 els.forEach(function(e){var o=e;if(e.classList.contains('rv-c')||e.classList.contains('rv-w')){o=e.parentElement;}if(o!==e){(o.__rv=o.__rv||[]).push(e);}io.observe(o);});
 setTimeout(function(){els.forEach(function(e){var r=e.getBoundingClientRect();if(r.top<innerHeight&&r.bottom>0)e.classList.add('in');});},1200);}
var px=[].slice.call(document.querySelectorAll('[data-px]')),pr=document.getElementById('prog'),tk=false;
function upd(){var h=innerHeight;if(!rm)px.forEach(function(el){var r=el.parentElement.getBoundingClientRect();if(r.bottom<0||r.top>h)return;var s=+el.getAttribute('data-px');el.style.transform='translate3d(0,'+((r.top+r.height/2-h/2)*s).toFixed(1)+'px,0) scale(1.14)';});
 if(pr){var m=d.scrollHeight-h;pr.style.width=(m>0?scrollY/m*100:0)+'%';}d.classList.toggle('scd',scrollY>60);tk=false;}
addEventListener('scroll',function(){if(!tk){requestAnimationFrame(upd);tk=true;}},{passive:true});addEventListener('resize',upd);upd();
[].forEach.call(document.querySelectorAll('.hs'),function(s){var down=false,x0=0,s0=0,mv=0;s.addEventListener('pointerdown',function(e){if(e.pointerType!=='mouse')return;down=true;mv=0;x0=e.clientX;s0=s.scrollLeft;s.classList.add('drag');});addEventListener('pointerup',function(){down=false;s.classList.remove('drag');});s.addEventListener('pointermove',function(e){if(!down)return;mv=Math.abs(e.clientX-x0);s.scrollLeft=s0-(e.clientX-x0);});s.addEventListener('click',function(e){if(mv>6){e.preventDefault();e.stopPropagation();}},true);});
})();
(function(){function $(i){return document.getElementById(i);}
var FR=[['Lemon',2,1.0,'Lemon juice is very sour: dilute it with water and add zest for aroma.'],['Strawberry',7,0,'Add a squeeze of lemon to brighten the berries.'],['Mango',14,0,'Mango is naturally creamy; it makes one of the smoothest sorbets.'],['Raspberry',5,0,'Sieve the purée to remove the seeds for a silky texture.'],['Pineapple',12,0,'Use ripe pineapple and blend it well; the fibres soften as it freezes.'],['Watermelon',8,0,'Watermelon is watery, so a little extra sugar keeps it soft.'],['Peach',9,0,'Leave the skins on while cooking for a pretty blush colour.'],['Banana',15,0,'Very sweet already: you may need little or no added sugar.']],tx=1,TG=[24,27,30];
function sg(){var f=FR[+$('sg-f').value],P=+$('sg-p').value,target=TG[tx];$('sg-pv').textContent=P+' g';var water=f[2]?P*1.0:P*.25,fs=P*f[1]/100,total=P+water,sug=Math.max(0,(target*total/100-fs)/(1-target/100));sug=Math.round(sug/5)*5;var tot=P+water+sug,pct=Math.round((fs+sug)/tot*100);
 $('sg-b').textContent=pct+'%';$('sg-m').style.left='calc('+Math.min(96,Math.max(2,(pct-16)/(36-16)*100))+'% - 4px)';
 var it=[['Fruit purée',P+' g'],['Water',Math.round(water/10)*10+' g'],['Sugar',sug+' g'],['Makes about',(Math.round(tot/100)/10).toFixed(1)+' litres']];$('sg-l').innerHTML=it.map(function(x,i){return '<li style="animation-delay:'+i*.05+'s"><b>'+x[1]+'</b><span>'+x[0]+'</span></li>';}).join('');
 $('sg-n').textContent=f[3]+' Dissolve the sugar in the warm water first, cool the syrup, then mix with the fruit.';}
if($('sg-f')){['sg-f','sg-p'].forEach(function(i){$(i).addEventListener('input',sg);});var tb=[].slice.call(document.querySelectorAll('#sg-t button'));tb.forEach(function(b){b.setAttribute('aria-pressed',b.classList.contains('on'));b.addEventListener('click',function(){tx=+b.dataset.v;tb.forEach(function(o){o.classList.toggle('on',o===b);o.setAttribute('aria-pressed',o===b);});sg();});});sg();}
var PR=[['Lemon','Thyme or basil','Ginger','Blueberry','A little lemon zest on top'],['Strawberry','Basil or mint','Black pepper','Rhubarb','A drizzle of balsamic glaze'],['Mango','Mint','Chilli and lime','Passion fruit','Toasted coconut'],['Raspberry','Rose geranium','Vanilla','Peach','Dark chocolate shavings'],['Watermelon','Mint','A pinch of salt','Lime','Lime zest and sea salt'],['Peach','Basil','Vanilla','Raspberry','Crushed amaretti biscuits'],['Pineapple','Coriander','Star anise','Coconut','Toasted coconut flakes'],['Blueberry','Lavender','Cinnamon','Lemon','Lemon curd swirl']],rot=0,cur=0;
function pr(i){cur=i;var p=PR[i];$('pr-hub').textContent=p[0];$('pr-h').textContent=p[1];$('pr-s').textContent=p[2];$('pr-x').textContent=p[3];$('pr-z').textContent=p[4];var tgt=-(i*45+22.5);rot=rot-((rot-tgt)%360+360)%360;if(rot>=0)rot-=360;$('pr-w').style.transform='rotate('+rot+'deg)';
 [].forEach.call(document.querySelectorAll('#pr-f button'),function(b){var on=+b.dataset.v===i;b.classList.toggle('on',on);b.setAttribute('aria-pressed',on);});}
if($('pr-w')){[].forEach.call(document.querySelectorAll('#pr-f button'),function(b){b.addEventListener('click',function(){pr(+b.dataset.v);});});$('pr-spin').addEventListener('click',function(){var n;do{n=Math.floor(Math.random()*8);}while(n===cur);rot-=720;pr(n);});pr(0);}
})();
