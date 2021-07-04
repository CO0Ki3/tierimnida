chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
  if (typeof message === "object" && message.type === "showPageAction") {
    chrome.pageAction.show(sender.tab.id);
  }
});