/**
 * Empty object for all the state.
 */
var demo = {
    state0: function(){}
};

/**
 * Add in 3 property as a function in the demo.state0
 */

/**
 * @type {Phaser.State}
 */
demo.state0.prototype = {
    total: 0,
    credits: {},

    init: function()
    {
        console.log(1500, 1000, GameInstance)
        GameInstance.add.plugin(PhaserInput.Plugin);
                
        //Testing purposes for frameAPI
        GameInstance.canvas.id = "mainCanvas";
        scalingCanvasWindow(800, 600, this);
        //cursorUpdate(this.dots, 2, 2, this);
        //updateInputBoxPosition(11,"mainCanvas",0,0,800,600,true,this);
    },
    preload: function(){
        loadAssets();
    },
    create: function(){
        GameInstance.stage.backgroundColor = '#FFFFFF';
        console.log('state0');
        addChangeStateEventListers(); //Local - First step@
        //windowScaling();
        //GameInstance.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL
        //Creation of timer
        
        var timer = GameInstance.time.create(false);
        timer.loop(2000, this.updateCounter, this);
        timer.start();
        
        //Add credits after loadedAssets();
        var credits = this.credits = this.add.sprite(GameInstance.world.centerX,GameInstance.world.centerY, 'luminarylogo');
        
        credits.anchor.x = 0.5;
        credits.anchor.y = 0.5
        credits.scale.x = 800/400;
        credits.scale.y = 600/300;
        credits.alpha = 0;
    },
    update: function(){
        /**
         * @type {Phaser.Sprite}
         */
        
        
        
        var credits = this.credits;
        if (this.total > 0.5) {
            credits.alpha = 1;
        }
        if (this.total > 1) {
            GameInstance.state.start('state1');
        }
    
    },

    updateCounter: function() {
        this.total++;
    }
};

                       
