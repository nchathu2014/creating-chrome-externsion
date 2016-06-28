$(function(){

    //get and display the total and goal values when extension bootstrap

    chrome.storage.sync.get(['total','goal'],function(items){
        $('#total').text(items.total);
        $('#goal').text(items.goal);
    });


    $('#addAmount').click(function(){

        chrome.storage.sync.get(['total','goal'],function(items){

            var newTotal=0;
            if(items.total){
                newTotal = newTotal + parseInt(items.total);
            }

            var amount = $('#amount').val();
            if(amount){
                newTotal = newTotal + parseInt(amount);
            }

            chrome.storage.sync.set({total:newTotal});

            $('#total').text(newTotal);
            $('#amount').val('');


            //call a notification

            var resetNotiId = 'goalReach';
            var resetNotiOptions ={
                type:"basic",
                title:"Reach the Goal",
                message:"You have reach the goal",
                iconUrl:"notification.png"
            };

            if(items.goal < newTotal){
                chrome.notifications.create(resetNotiId,resetNotiOptions,function(){});
            }


        })

    });
});