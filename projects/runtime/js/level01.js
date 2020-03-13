var level01 = function (window) {

    window.opspark = window.opspark || {};

    var draw = window.opspark.draw;
    var createjs = window.createjs;

    window.opspark.runLevelInGame = function(game) {
        // some useful constants 
        var groundY = game.groundY;

        // this data will allow us to define all of the
        // behavior of our game
        var levelData = {
            "name": "Robot Romp",
            "number": 1, 
            "speed": -3,
            "gameItems": [
                { "type": "sawblade", "x": 400, "y": groundY - 120},
                { "type": "enemy", "x": 410, "y": groundY - 50},
                { "type": "enemy", "x": 2500, "y": groundY - 50},
                { "type": "sawblade", "x": 800, "y": groundY - 120},
                { "type": "sawblade", "x": 1000, "y": groundY - 120},
                { "type": "sawblade", "x": 1200, "y": groundY - 120},
                { "type": "spikes", "x": 1600, "y": groundY - 15},
                { "type": "spikes", "x": 1800, "y": groundY - 15},
                { "type": "spikes", "x": 2000, "y": groundY - 15},
                { "type": "sawblade","x":2300, "y": groundY - 240},
                { "type": "sawblade","x":2300, "y": groundY - 210},
                { "type": "sawblade","x":2300, "y": groundY - 180},
                { "type": "sawblade","x":2330, "y": groundY - 180},
                { "type": "sawblade","x":2360, "y": groundY - 180},
                { "type": "sawblade","x":2390, "y": groundY - 180},
                { "type": "sawblade","x":2390, "y": groundY - 150},
                { "type": "sawblade","x":2390, "y": groundY - 120},
                { "type": "sawblade","x":2390, "y": groundY - 210},
                { "type": "sawblade","x":2390, "y": groundY - 240},
                { "type": "sawblade","x":2300, "y": groundY - 120},
                { "type": "sawblade","x":2300, "y": groundY - 150},
                { "type": "sawblade","x": 2500, "y": groundY - 120},
                { "type": "sawblade","x": 2500, "y": groundY - 150},
                { "type": "sawblade","x": 2500, "y": groundY - 180},
                { "type": "sawblade","x": 2500, "y": groundY - 210},
                { "type": "friend", "x": 1500, "y": groundY - 59},
                { "type": "friend2", "x":1875, "y": groundY - 9},
                { "type": "friend3", "x":3000, "y": groundY - 39},
                { "type": "friend4", "x":3200, "y": groundY - 56},
            ]
        };
        window.levelData = levelData;
        // set this to true or false depending on if you want to see hitzones
        game.setDebugMode(true);

        // BEGIN EDITING YOUR CODE HERE
        
        for (var i=0; i <levelData.gameItems.length; i++){
            var gameIteamObject = levelData.gameItems[i];
            if(gameIteamObject.type === 'sawblade'){
                createSawBlade(gameIteamObject.x, gameIteamObject.y);
            }
            
            if(gameIteamObject.type === 'spikes'){
                createSpikes(gameIteamObject.x, gameIteamObject.y);
            }
            
            if(gameIteamObject.type === 'enemy'){
                createEnemy(gameIteamObject.x, gameIteamObject.y);
            }
            if(gameIteamObject.type === 'friend'){
                createFriend(gameIteamObject.x, gameIteamObject.y);
            }
            if(gameIteamObject.type === 'friend2'){
                createFriend2(gameIteamObject.x, gameIteamObject.y);
            }
           if(gameIteamObject.type === 'friend3'){
                createFriend3(gameIteamObject.x, gameIteamObject.y);
           }
           if(gameIteamObject.type === 'friend4'){
                createFriend4(gameIteamObject.x, gameIteamObject.y);
           }
        }

       
        function createSawBlade (x, y){
            var hitZoneSize = 25;
            var damageFromObstacle = 10;
            var sawBladeHitZone = game.createObstacle(hitZoneSize, damageFromObstacle);
            sawBladeHitZone.x =x;
            sawBladeHitZone.y =y;
            game.addGameItem(sawBladeHitZone);
            var obsticleImage = draw.bitmap('img/sawblade.png');
            sawBladeHitZone.addChild(obsticleImage);
            obsticleImage.x = -25;
            obsticleImage.y = -25;
        }
        

            
            function createSpikes(x,y){
                var hitZoneSize = 20;
                var damageFromObstacle = 10;
                var sawBladeHitZone = game.createObstacle(hitZoneSize, damageFromObstacle);
                sawBladeHitZone.x =x - 20;
                sawBladeHitZone.y =y;
                
                game.addGameItem(sawBladeHitZone);
                
                var obstacleImage = draw.bitmap('img/Spikes2 (1).png');
                sawBladeHitZone.addChild(obstacleImage);
                obstacleImage.x = -50;
                obstacleImage.y = -20;
                obstacleImage.scaleX = .09
                obstacleImage.scaleY = .09
            };
            
            
            function createEnemy (x, y) {
               
                var enemy =  game.createGameItem('enemy',30);
                enemy.x = x;
                enemy.y = y;
                enemy.velocityX = -2;
                game.addGameItem(enemy);
               
                var thanos = draw.bitmap('img/destory.png');
                thanos.x = -50;
                thanos.y = -46;
                thanos.scaleX = .2
                thanos.scaleY = .2
            
                
                enemy.addChild(thanos);
               
                enemy.onPlayerCollision = function(){
                    game.changeIntegrity(-30);
                    enemy.fadeOut();
                }
                
                enemy.onProjectileCollision = function(){
                    game.increaseScore(50);
                    enemy.fadeOut();
                    
                }; 
            }    
                
                
            function createFriend (x, y) {
               
                var friend =  game.createGameItem('friend',40);
                friend.x = x;
                friend.y = y;
                friend.velocityX = -2;
                game.addGameItem(friend);
               
                var peach = draw.bitmap('img/peach.png');
                peach.x = -50;
                peach.y = -90 ;
                peach.scaleX = .1
                peach.scaleY = .1
            
                
                friend.addChild(peach);
               
                friend.onPlayerCollision = function(){
                    game.changeIntegrity(+50);
                    game.increaseScore(1000);
                    friend.fadeOut();
                }
                
                friend.onProjectileCollision = function(){
                    game.changeIntegrity(-10);
                    game.increaseScore(500);
                    friend.fadeOut();
                    
                };
                
            }
            
            function createFriend2 (x, y) {
               
                var friend2 =  game.createGameItem('friend2',40);
                friend2.x = x;
                friend2.y = y;
                friend2.velocityX = -2;
                game.addGameItem(friend2);
               
                var mario = draw.bitmap('img/mario.png');
                mario.x = -50;
                mario.y = -90 ;
                mario.scaleX = .05
                mario.scaleY = .05
            
                
                friend2.addChild(mario);
               
                friend2.onPlayerCollision = function(){
                    game.changeIntegrity(+50);
                    game.increaseScore(1000);
                    friend2.fadeOut();
                };
                
                friend2.onProjectileCollision = function(){
                    game.changeIntegrity(-10);
                    game.increaseScore(500);
                    friend2.fadeOut();
                    
                };
            }
            
            function createFriend3 (x, y) {
               
                var friend3 =  game.createGameItem('friend3',40);
                friend3.x = x;
                friend3.y = y;
                friend3.velocityX = -2;
                game.addGameItem(friend3);
               
                var rose = draw.bitmap('img/super-mario-galaxy-rosalina-princess-peach-princess-daisy-png-favpng-kQNDfEDQnMkamYKbGyv9jD77S.png');
                rose.x = -50;
                rose.y = -90 ;
                rose.scaleX = .13
                rose.scaleY = .13
            
                
                friend3.addChild(rose);
               
                friend3.onPlayerCollision = function(){
                    game.changeIntegrity(+50);
                    game.increaseScore(1000);
                    friend3.fadeOut();
                };
                
                friend3.onProjectileCollision = function(){
                    game.changeIntegrity(-10);
                    game.increaseScore(500);
                    friend3.fadeOut();
                };
            }
            function createFriend4 (x, y) {
               
                var friend4 =  game.createGameItem('friend4',40);
                friend4.x = x;
                friend4.y = y;
                friend4.velocityX = -2;
                game.addGameItem(friend4);
               
                var daisy = draw.bitmap('img/Daisy.png');
                daisy.x = -25;
                daisy.y = -90 ;
                daisy.scaleX = .19
                daisy.scaleY = .19
            
                
                friend4.addChild(daisy);
               
                friend4.onPlayerCollision = function(){
                    game.changeIntegrity(-100);
                    game.increaseScore(10000000000000000000);
                    friend4.fadeOut();
                };
                
                friend4.onProjectileCollision = function(){
                    game.changeIntegrity(-100);
                    game.increaseScore(500);
                    friend4.fadeOut();
                };
            }
            
            
        // DO NOT EDIT CODE BELOW HERE
    };
};

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports = level01;
}