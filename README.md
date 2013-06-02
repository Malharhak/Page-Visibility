Page-Visibility
===============

HTML5 Page Visibility API abstraction



##Use :

1. Require the PageVisibility file
2. Replace the onVisible and/or onHidden methods to do stuff on page visibility change

```javascript
	pageVisibility.onVisible = function () {
		console.log("My page is visible !");
	};
	pageVisibility.onHidden = function () {
		console.log("My page is hidden :(");
	};
```