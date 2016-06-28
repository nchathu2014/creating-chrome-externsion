/**
 * Created by UCHATNU on 6/28/2016.
 */

//create a context menu

var menuItem ={
    id:"addProtein",
    title:"Add protein",
    contexts:["selection"]
};

chrome.contextMenus.create(menuItem,function(){});

chrome.contextMenus.onClicked.addListener(function(clickedData){
    console.dir(clickedData)
    var selectionText = clickedData.selectionText;

    if(clickedData.menuItemId == "addProtein" && clickedData.menuItemId){
        var regEx = /^\d+$/;
        if(regEx.test(selectionText)){


            chrome.storage.sync.get('total',function(items){
                var newTotal=0;
                if(items.total){
                    newTotal += items.total;
                }

                newTotal += parseInt(selectionText);
                chrome.storage.sync.set({"total":newTotal});

            });





        }

    }

});




chrome.storage.onChanged.addListener(function(changes,namespace) {

     chrome.browserAction.setBadgeText({text:changes.total.newValue.toString()});
});
