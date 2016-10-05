var state = true;
chrome.browserAction.setIcon({path:"red-n.png"});

function changeState(tab){
  if(state){
    state = false;
    chrome.browserAction.setIcon({path:"black-n.png"});
    toggleClass(tab.id);
  } else {
    state = true;
    chrome.browserAction.setIcon({path:"red-n.png"});
    toggleClass(tab.id);
  }
};

function toggleClass(id){
  if(state){
    chrome.tabs.insertCSS(id, {file: "removesub.css"});
  } else {
    chrome.tabs.insertCSS(id, {file: "restoresub.css"});
  }
};

chrome.browserAction.onClicked.addListener(function(tab){
  if(tab.url.indexOf('netflix') != -1){
    changeState(tab);
  }
});

chrome.tabs.onUpdated.addListener(function(id, info, tab){
  if(tab.url.indexOf('netflix') != -1){
    toggleClass(tab.id);
  }
});
