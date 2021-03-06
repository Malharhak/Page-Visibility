define ([], function () {
	var hidden, visibilityChange; 
	if (document.hidden !== undefined) {
	    hidden = "hidden";
	    visibilityChange = "visibilitychange";
	} else if (document.mozHidden !== undefined) {
	    hidden = "mozHidden";
	    visibilityChange = "mozvisibilitychange";
	} else if (document.msHidden !== undefined) {
	    hidden = "msHidden";
	    visibilityChange = "msvisibilitychange";
	} else if (document.webkitHidden !== undefined) {
	    hidden = "webkitHidden";
	    visibilityChange = "webkitvisibilitychange";
	}

	var PageVisibility = function () {
	  	var that = this;
	    document.addEventListener(visibilityChange, function () {
	    	that.onChange();
	    }, false);
	};
	
	PageVisibility.prototype.onChange = function () {
		debug.log("PageVisibility", "Change", document[hidden]);
	    if (document[hidden]) {
	        this.onHidden();
	    } else {
	        this.onVisible();
	    }
	};
	PageVisibility.prototype.onVisible = function (){};
	PageVisibility.prototype.onHidden = function (){};

	return new PageVisibility();
	
});
