class Form{
    constructor(){}

    display(){
        var title = createElement('h2')
        title.html("car racing");
        title.position(380,0);
        var input = createInput('name')
        input.position(360,130);
        var button = createButton('submit')
        button.position(330,200);
        var greeting = createElement('h3')
        
        button.mousePressed(function() {
           input.hide();
           button.hide(); 
           var name = input.value();
           playerCount++ ;
           player.update(name);
           player.updateCount(playerCount);
           greeting.html("hello"+name);
           greeting.position(350,100);
        })
    }
}