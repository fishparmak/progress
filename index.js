p = Progress(value=10);
p.parentNode = document.getElementsByClassName('main__progress');
p.setValue(50);

var valueInput = document.getElementById("valueInput");
var hidden = document.getElementById("hidden");
var animated = document.getElementById("animated");
var control = document.getElementsByClassName("control")[0];
animated.checked = true;

control.addEventListener('change', function(e) {
    const { target } = e;
      if (!target.id) {
        e.stopPropagation();
    } else {
        if(target.id == 'animated') {
            if(target.checked==true) {
                hidden.checked = false;
                p.setMod('animated', 'yes');
            }
            else {
                p.setMod('animated', '');
            }
        }
        else if(target.id == 'hidden') {
            if(target.checked==true) {
                animated.checked = false;
                p.setMod('hidden', 'yes');
            }
            else {
                p.setMod('hidden', '');
            }
        }
        else if(target.id == 'valueInput') {
            animated.checked = false;
            p.setValue(target.value);

        }
        else {
            throw('EventListener Error');
        }
        }
    
});
