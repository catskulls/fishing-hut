window.onkeydown = function(e) {
    if(e.keyCode == 32 && e.target == document.body) {
        e.preventDefault();
        return false;
    }
    };
        let score = 0;
        let bait = 3;
        let isQTEActive = false;
        let gameStarted = false;
        let timer;
        let caughtFishList = []; // array to track caught fish
    
        // get the player's current points from localstorage
        let points = localStorage.getItem('points') ? parseInt(localStorage.getItem('points')) : 0;
    
        // display the current total points from localstorage
        document.getElementById("gameUI").style.display = "none";
        document.getElementById("fishCaughtList").style.display = "none";
        document.getElementById("fishalert").style.display = "none";
      
        document.getElementById("returnBtn").style.display = "none";
    
        function startFish(){
            document.getElementById("gameUI").style.display = "block";
            document.getElementById("fishermanUI").style.display = "none";
            document.getElementById("bg").style.backgroundImage = "url('img/go fishing.png')"; //change the bg to the fishing area
        }
        
    
       // function to start a new fishing round
        function startQTERound() {
          document.getElementById('quote').innerHTML = "";
          isQTEActive = false;
          document.getElementById('message').innerText = 'Press space to cast your line!';
    
          // wait for space to trigger the qte
          document.addEventListener('keydown', handleStartNextQTE, { once: true });
        }
    
        // function to trigger the qte after pressing space
        function handleStartNextQTE(event) {
          if (event.code === 'Space') {
            document.getElementById('message').innerText = 'Line cast!';
            const randomDelay = Math.floor(Math.random() * 3000) + 2000;
    
            setTimeout(() => {
              document.getElementById("fishalert").style.display = "block";
              
              isQTEActive = true;
    
              timer = setTimeout(() => {
                if (isQTEActive) {
                  
                  document.getElementById("fishalert").style.display = "none";
                  isQTEActive = false;
                  document.getElementById('message').innerText = "The fish escaped!";
                  setTimeout(() => {
                    bait -= 1;
                    document.getElementById('bait').innerText = `Bait: ${bait}`;
                    
                    if (bait == 0) {
                      gameOver();
                    } else {
                      document.addEventListener('keydown', startQTERound, { once: true });
                    }
              
                    // change the message back after a few seconds
                    setTimeout(() => {
                      document.getElementById('message').innerText = "Press space to cast your line!";
                    }, 2000);
              
                  }, 50); // slight delay to let the message paint
                }
              }, 400);
    
            }, randomDelay);
          }
        }
        
        
    
        // function to handle key presses for qte and game start
        document.addEventListener('keydown', (event) => {
          // start the game if it's not started yet
          if (!gameStarted && event.code === 'Space') {
            gameStarted = true;
            document.getElementById('message').innerText = 'Fishing started! Get ready...'; // i forgot why this is here feel free to delete this and the settimeout. those do literally nothing
            setTimeout(() => {
              startQTERound();
            }, 2000);
           
          }
    
          // ff the qte is active and space is pressed, reward points
          if (isQTEActive && event.code === 'Space') {
            clearTimeout(timer); // stop the timeout
            const pointsEarned = fish(); // call fish to get points
            score += pointsEarned; // add earned points to score
            document.getElementById('message').innerText = `Nice job! You scored ${pointsEarned} points.`
            document.getElementById("fishalert").style.display = "none";
            document.getElementById('score').innerText = `Score: ${score}`;
           
            isQTEActive = false;
    
            // start a new round after a short delay
            setTimeout(startQTERound, 4000);
          }
        });
    
        // function for catching fish
        function fish() { // this is where you put all the fish and the points and the images and whatever
          var fishes = [
            { img: "./img/fishy.png", text: "Red Fish", points: 10 },
            { img: "./img/fishy.png", text: "Blue Fish", points: 20 },
            { img: "./img/fishy.png", text: "One Fish", points: 30 },
            { img: "./img/fishy.png", text: "Two Fish", points: 40 },
          ];
          var caught = fishes[Math.floor(Math.random() * fishes.length)]; // randomly select a fish
          document.getElementById("quote").innerHTML =
            '<p>You caught...</p>' +
            '<img src="' + caught.img + '" id="caughtfish">' +
            '<h3>' + caught.text + '</h3>' +
            '<p>worth ' + caught.points + ' points!</p>';
    
          // add the caught fish to the list
          caughtFishList.push(caught);
    
          return caught.points; // return the points associated with the caught fish
        }
    
        // function to handle the quit game action
        document.getElementById("quitBtn").addEventListener("click", () => {
        gameOver()
        });
    
       function gameOver() {
           // show all the caught fish when quitting
           document.getElementById("player").style.display = "none";
           document.getElementById("fishCaughtList").style.display = "block";
           document.getElementById("localStoragePoints").style.display = "block";
           document.getElementById("returnBtn").style.display = "block";
           document.getElementById("quitBtn").style.display = "none";
           document.getElementById("fishingUI").style.display = "none";
           
           let fishListHTML = "<h3>Fish caught:</h3><ul>";
           caughtFishList.forEach((fish, index) => {
             fishListHTML += `<li>${fish.text} - Worth ${fish.points} points</li>`;
           });
           fishListHTML += "</ul>";
           
           // display the caught fish list
           document.getElementById("fishCaughtList").innerHTML = fishListHTML;
           
           // calculate how many 100-point intervals the player has earned
           let pointsForStorage = Math.floor(score / 100);
     
           // update the total points in localstorage
           points += pointsForStorage;
           localStorage.setItem('points', points);
     
           // display updated points from localstorage
           document.getElementById('localStoragePoints').innerText = `Gems: ${points}`;
           
           // disable further interactions
           document.getElementById("quitBtn").disabled = true;
           document.getElementById("message").innerText = "";
         
        }

        function talk() {
       
          var phrases = [
            {
              text: "Do you enjoy going fishing? ... I think it's very relaxing.",
            },        
        {
          text: "I'm sorry, I'm not much for talking.",
        },  
        {
          text: "... It's very beautiful around here during the night.",
        },  
        {
          text: "...",
        },  
        {
          text: "I don't particularly enjoy causing the fish harm, but I do need to eat...",
        },  
        {
          text: "I recommend going foraging, too.",
        },  
        ,
          ];
       
       var chat = phrases[Math.floor(Math.random() * phrases.length)];
       
       document.getElementById("textbox").innerHTML =
          '<p>"' + chat.text + '"<p>'
     
     }
        function changesprite() {
            if (document.getElementById("fishersprite").getAttribute('src')=='img/fisherman.png')
            {
                document.getElementById("fishersprite").src = 'img/oh god.png';
                poked();
            }   
           
        }
    
        function poked() {
       
          var phrases = [
            {
              text: "Stop that.",
            },        
        {
          text: "..?",
        },  
        {
          text: "... Do you have to?",
        },  
        {
          text: "...",
        },  
        {
          text: "Mh...",
        },  
        {
          text: "Just go fishing..",
        },  
        ,
          ];
       
       
      
          
       var chat = phrases[Math.floor(Math.random() * phrases.length)];
       
       document.getElementById("textbox").innerHTML =
          '<p>"' + chat.text + '"<p>'
     
     }

   