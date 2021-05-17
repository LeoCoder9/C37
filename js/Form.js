class Form {
    constructor() {
        this.name = createInput("Input your name");
        this.welcome = createElement('h2');
        this.button = createButton("Enter the game");
    }
    display() {
        var title = createElement('h1');
        title.html("CAR RACING GAME!");
        title.position(470, 20);

        
        this.name.position(540, 160);

       
        this.button.position(560, 200);

        

       this.button.mousePressed( ()=> {
            this.name.hide()
            this.button.hide()

            player.name = this.name.value()
           this.welcome.html("Welcome! " + player.name)
           this.welcome.position(510, 150)
            playerCount = playerCount+1
            player.updateCount(playerCount)
            player.update()

        })


    }
    hide(){
        this.name.hide()
        this.button.hide()
        this.welcome.hide()
    }
}