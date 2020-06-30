demo.state1 = {
    preload: function(){},
    create: function(){
        GameInstance.stage.backgroundColor = '#FFFFFF';
        console.log('state1');
        addChangeStateEventListers(); 
        
        background();
        
        this.daexcelview = GameInstance.add.button(340,365,'daexcelview');
        this.daexcelview.scale.setTo(0.7,0.7);
        this.daexcelview.events.onInputOver.add(function(){
            this.daexcelview.alpha = 0.5;
            },this);
        this.daexcelview.events.onInputOut.add(function(){
            this.daexcelview.alpha = 1;
            },this);
        this.daexcelview.events.onInputDown.add(function(){
            window.location.href = "https://docs.google.com/spreadsheets/d/1bIw9yC6qFyoEhVAhvwpy73Vz6EI-42dDZQVU29EzIpU/edit?usp=sharing";
         },this);
        
 
        this.navigation = GameInstance.add.button(60,365,'navigation');
        this.navigation.scale.setTo(0.7,0.7);
        this.navigation.events.onInputOver.add(function(){
            this.navigation.alpha = 0.5;
            },this);
        this.navigation.events.onInputOut.add(function(){
            this.navigation.alpha = 1;
            },this);
        
        var spammaton01 = GameInstance.add.image(62, 60, 'spammaton01');
        spammaton01.scale.setTo(0.655,0.655);
        
        
       
    },
    update: function(){}
};