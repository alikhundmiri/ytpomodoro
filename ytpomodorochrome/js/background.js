// this var below will store all the contextMenus we create in the future

var contextMenus = {};

contextMenus.CreateCounterString = 
	chrome.contextMenus.create(
		{"title" : "generate Counter String"},
		// Create a context menu, which does whatever you code above.
		// the below function is run after the script above is executed.
		// Currently it will report an error if there is one.
		function (){
            if(chrome.runtime.lastError){
                console.error(chrome.runtime.lastError.message);
            }
        }
	);
