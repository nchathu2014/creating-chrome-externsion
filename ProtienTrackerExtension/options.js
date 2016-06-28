/**
 * Created by UCHATNU on 6/27/2016.
 */

$(function(){

    //load the goal value at the initial time
    chrome.storage.sync.get('goal',function(items){
        $('#goal').val(items.goal);
    });

    $('#save').click(function(){
        var goal = $('#goal').val();
        if(goal){
            chrome.storage.sync.set({ "goal":goal},function(){
                close();
            });
        }
    });

    $('#reset').click(function(){
        chrome.storage.sync.set({ "total":0});


        var resetNotiId = 'reset';
        var resetNotiOptions ={
                type:"basic",
                title:"Reset Total",
                message:"You have been reset the total back to 0",
                iconUrl:"notification.png"
        };
        chrome.notifications.create(resetNotiId,resetNotiOptions,function(){});

    });

});
