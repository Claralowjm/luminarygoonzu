demo.state2 = {
    preload: function(){},
    create: function(){
        GameInstance.stage.backgroundColor = '#DDDDDD';
        console.log('state2');
        addChangeStateEventListers(); 
    },
    update: function(){}
};