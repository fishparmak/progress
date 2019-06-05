p = Progress(value=10);
p.parentNode = document.getElementsByClassName('main__progress');
p.setValue(50);
p.setMod('animated', 'yes');

var valueInput = document.getElementById("valueInput");
var hidden = document.getElementById("hidden");
var animated = document.getElementById("animated");
var cont = document.getElementsByClassName("control")[0];


cont.addEventListener('click', function(e) {
    const { target } = e;
      if (!target.id) {
        e.stopPropagation();
    } else {
        if(target.id == 'animated' || target.id == 'hidden') {
            p.setMod(target.id);
        }
        else if(target.id == 'valueInput') {
            p.setValue(target.id);
        }
        else {
            console.log('EventListener Error');
        }
        }
    
});