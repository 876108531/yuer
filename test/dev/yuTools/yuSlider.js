function yuSlider(slide,size,velocity,interval) {
	var slide = slide;
	var size = size;
	var velocity = velocity*1000;
	var interval = interval*1000;

	var i = 0;
	var len = slide.children().length;
	var firstImg = slide.children().get(0);
	function change() {
		slide.animate({'left': '-='+size}, {duration:velocity, complete: function() {
			i++;
			if(i==len-1) {
				firstImg.style.position = "relative";
				firstImg.style.left = len*size+"px";
			};
			if(i==len) {
				firstImg.style.position = "";
				firstImg.style.left = "";
				slide[0].style.left = "0px";
				i=0;
			};
			setTimeout(change, interval);
		}});
	}
	change();
}
