const sections = [...document.querySelectorAll("section")]

let options = {
  rootMargin: "0px",
  threshold: 0.25
}

const callback = (entries, observer) => {
  entries.forEach(entry => {
		const { target } = entry
		
		if (entry.intersectionRatio >= 0.25) {
			target.classList.add("is-visible")
		} else {
			target.classList.remove("is-visible")
		}
  })
}

const observer = new IntersectionObserver(callback, options)

sections.forEach((section, index) => {
	const sectionChildren = [...section.querySelector('.grid').children]

  sectionChildren.forEach((el, index) => {
    el.style.setProperty('--delay', `${index * 100}ms`)
  })
	
  observer.observe(section)
})

// Copyright 2018-2020 Typetura LLC.
// https://github.com/typetura/typetura.js
function typeturaInit(el){function typetura(){for(var i=0;i<el.length;i+=1){var element=el[i];element.style.setProperty('--tt-bind',element.offsetWidth);if(typeof ResizeObserver!=='undefined'){var resizeObserver=new ResizeObserver(function(entries){for(var j=0;j<entries.length;j+=1){var entry=entries[j];element.style.setProperty('--tt-bind',Math.round(entry.contentRect.width))}});resizeObserver.observe(element)}}}typetura();var stylesheet=document.createElement('style');stylesheet.innerHTML=':root{--tt-ease:linear;--tt-max:1600}*,:before,:after,:root{--tt-key:none;animation:var(--tt-key) 1s var(--tt-ease) 1 calc(-1s * var(--tt-bind) / var(--tt-max)) both paused}';document.head.insertBefore(stylesheet,document.head.firstChild);window.onresize=typetura}var typeturaContexts=[':root','.typetura'];document.onreadystatechange=function(){if(window.document.readyState==='interactive'){typeturaInit(document.querySelectorAll(typeturaContexts))}};var historyPushState=window.history.pushState;window.history.pushState=(function(){return function pushState(){var historyState=historyPushState.apply(this,arguments);window.dispatchEvent(new Event('pushstate'));window.dispatchEvent(new Event('locationchange'));return historyState}})(window.history.pushState);window.addEventListener('popstate',function(){window.dispatchEvent(new Event('locationchange'))});window.addEventListener('locationchange',function(){setTimeout(function(){typeturaInit(document.querySelectorAll(typeturaContexts))},500)});