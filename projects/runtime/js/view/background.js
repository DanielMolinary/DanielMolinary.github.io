var background = function (window) {
    'use strict';
    
    window.opspark = window.opspark || {};
    var draw = window.opspark.draw;
    var createjs = window.createjs;
    
    /*
     * Create a background view for our game application
     */
    window.opspark.makeBackground = function(app,ground) {
        /* Error Checking - DO NOT DELETE */
        if(!app) {
            throw new Error("Invaid app argument");
        }
        if(!ground || typeof(ground.y) == 'undefined') {
            throw new Error("Invalid ground argument");
        }
        
        // useful variables
        var canvasWidth = app.canvas.width;
        var canvasHeight = app.canvas.height;
        var groundY = ground.y;
        
        // container which will be returned
        var background;
        
        // ANIMATION VARIABLES HERE:
        
        var tree;
        var buildings =[];
        var trees3;
        var level1;
        // called at the start of game and whenever the page is resized
        // add objects for display in background. draws each image added to the background once
        function render() {
            background.removeAllChildren();

            // TODO: 2 - Part 2
            // this fills the background with a obnoxious yellow
            // you should modify this to suit your game
            var backgroundFill = draw.rect(canvasWidth,groundY,'black');
            background.addChild(backgroundFill);
            
            // TODO: 3 - Add a moon and starfield
            var circle;
            for (var i = 0; i<100; i++){
            circle = draw.circle(1, 'white','LightGray');
            circle.x = canvasWidth*Math.random();
            circle.y = groundY*Math.random();
            background.addChild(circle);
            }
            
            var circle;
            for (var i = 0; i<100; i++){
            circle = draw.circle(2, 'white','LightGray');
            circle.x = canvasWidth*Math.random();
            circle.y = groundY*Math.random();
            background.addChild(circle);
            }
            
            var circle;
            for (var i = 0; i<100; i++){
            circle = draw.circle(3, 'white','LightGray');
            circle.x = canvasWidth*Math.random();
            circle.y = groundY*Math.random();
            background.addChild(circle);
            }

            var moon = draw.bitmap('img/Bluemoon.png');
            moon.x = canvasWidth - 180;
            moon.y =groundY - 310;
            moon.scaleX = 0.25;
            moon.scaleY = 0.25
            background.addChild(moon);
           
       
            
            // TODO: 5 - Add buildings!     Q: This is before TODO 4 for a reason! Why?
            for(var i=0; i<5; ++i){
                var buildingHeight = 300;
                var buildingColors = ["Purple","Gold","Pink","Green","DarkBlue"]
                var buildingDifferentHeights = [100, 200, 303, 200, 100]
                var building = draw.rect(75,buildingDifferentHeights[i], buildingColors[i],'Black',1);
                building.x = 200*i;
                building.y =groundY-buildingDifferentHeights[i];
                background.addChild(building);
                buildings.push(building);
            }
            
            
            
            
            
            // TODO 4: Part 1 - Add a tree
            tree =draw.bitmap('img/greentree.png');
            tree.x = 1000;
            tree.y = groundY -292;
            background.addChild(tree)
            tree.scaleX = .7
            tree.scaleY = .7
            
            trees3 =draw.bitmap('img/trees3.png');
            trees3.x = 600;
            trees3.y = groundY -120;
            background.addChild(trees3)
            trees3.scaleX = .09
            trees3.scaleY = .09
            
            level1 =draw.bitmap('img/gaming-best-practices.png');
            level1.x = 200;
            level1.y = groundY -200;
            background.addChild(level1)
            level1.scaleX = .7
            level1.scaleY = .7
            level1.x=level1.x-1;
        } // end of render function - DO NOT DELETE
            
        
        // Perform background animation
        // called on each timer "tick" - 60 times per second
        function update() {
            // useful variables
            var canvasWidth = app.canvas.width;
            var canvasHeight = app.canvas.height;
            var groundY = ground.y;
            
            // TODO 4: Part 2 - Move the tree!
            tree.x =tree.x-1;
            if (tree.x<-200){
                tree.x = canvasWidth;
            }
            trees3.x =trees3.x-1;
            if (trees3.x<-200){
                trees3.x = canvasWidth;
            }
            level1.x=level1.x-1;

            
            // TODO 5: Part 2 - Parallax
            
                for (var i = 0; i < buildings.length;i++){
                    var building = buildings[i];
                    building.x = building.x - 1;
                    if(building.x <-200){
                      building.x = canvasWidth;
                    }
                }
            

        } // end of update function - DO NOT DELETE
        
        
        
        /* Make a createjs Container for the background and let it know about the render and upate functions*/
        background = new createjs.Container();
        background.resize = render;
        background.update = update;
        
        /* make the background able to respond to resizing and timer updates*/
        app.addResizeable(background);
        app.addUpdateable(background);
        
        /* render and return the background */
        render();
        return background;
    };
};

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports = background;
}
