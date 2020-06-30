demo.state3 = {
    preload: function(){},
    create: function(){
        GameInstance.stage.backgroundColor = '#DDDDDD';
        console.log('state3');
        addChangeStateEventListers(); 
    },
    update: function(){}
};