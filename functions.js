function changeState(i ,stateNum) { //Global Function (All scripts can access to it) //Forth step@
    console.log(i); //Callback function -(Carries information of what happened)
    console.log(stateNum);
    GameInstance.state.start('state' + stateNum);
};

function addKeyCallback (key, fn , args) { //Global Function (All scripts can access to it) //Third step@
    GameInstance.input.keyboard.addKey(key).onDown.add(fn, null, null, args); //Event listener //Events - Occurance, Listener - parameters/arguments inside the events. 
};

function addChangeStateEventListers() { //Global Function (All scripts can access to it)
    addKeyCallback(Phaser.Keyboard.ZERO, changeState, 0); //Second step@
    addKeyCallback(Phaser.Keyboard.ONE, changeState, 1);
    addKeyCallback(Phaser.Keyboard.TWO, changeState, 2);
    addKeyCallback(Phaser.Keyboard.THREE, changeState, 3);
    addKeyCallback(Phaser.Keyboard.FOUR, changeState, 4);
    addKeyCallback(Phaser.Keyboard.FIVE, changeState, 5);
    addKeyCallback(Phaser.Keyboard.SIX, changeState, 6);
    addKeyCallback(Phaser.Keyboard.SEVEN, changeState, 7);
    addKeyCallback(Phaser.Keyboard.EIGHT, changeState, 8);
    addKeyCallback(Phaser.Keyboard.NINE, changeState, 9);
    addKeyCallback(Phaser.Keyboard.NUMPAD_0, changeState, 10);
    addKeyCallback(Phaser.Keyboard.NUMPAD_1, changeState, 11);
    addKeyCallback(Phaser.Keyboard.NUMPAD_2, changeState, 12);
};

//Preload all the game assets.
function loadAssets() {
    GameInstance.load.video('gzpreview', 'assets/gzpreview.mp4');
    GameInstance.load.image('luminarylogo', 'assets/luminarylogo.png');
    GameInstance.load.image('background', 'assets/background.png');
    GameInstance.load.image('daexcelview', 'assets/daexcelview.png');
    GameInstance.load.image('spammaton01', 'assets/events/spammaton01.png');
    GameInstance.load.image('navigation', 'assets/navigation.png');
};


function background() {
    var background = GameInstance.add.sprite(0,0,'background');
    background.scale.setTo(1, 1);
}; 


var btnHome = function home() {
    var home = GameInstance.add.button(695,30,'home');
    home.events.onInputUp.add(function(){
        GameInstance.state.start('state1');
    },this);
};