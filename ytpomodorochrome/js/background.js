// this var below will store all the contextMenus we create in the future

var contextMenus = {};

contextMenus.CreateCounterString = 
chrome.contextMenus.create(
	{"title" : "generate Counter String",
	"contexts" : ['editable']},
	// Create a context menu, which does whatever you code above.
	// the below function is run after the script above is executed.
	// Currently it will report an error if there is one.
	function (){
		if(chrome.runtime.lastError){
			console.error(chrome.runtime.lastError.message);
		}
	}
	);

// chrome.contextMenus.onClicked.addListener(contextMenuHandler);

// function contextMenuHandler(info, tab){
// 	if(info.menuItemId===contextMenus.CreateCounterString) {
// 		// console.log("MENU CLICKED");
// 		chrome.tabs.executeScript({
// 			file: 'js/counterstring.js'
// 		});
// 	}
// }
