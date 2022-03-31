let scrollerId;

function startScroll(){
	let id = setInterval(function(){
		window.scrollBy(0, 2);
	}, 10);
	return id;
}

function stopScroll(){
	clearInterval(scrollerId);
}

scrollerId = startScroll();