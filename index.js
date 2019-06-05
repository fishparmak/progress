p = Progress(value=10);
p.parentNode = document.getElementsByClassName('main__progress');
p.setValue(50);
p.setMod('animated', '');

var valueInput = document.getElementById("valueInput");
var hidden = document.getElementById("hidden");
var animated = document.getElementById("animated");
var cont = document.getElementsByClassName("control")[0];

// Object.defineProperty(animated, 'number', {
//     get() {
//       return b;
//     },
//     set(arg) {
//       b = arg + 2;
//     }
//   })

cont.addEventListener('change', function(e) {
    const { target } = e;
      if (!target.id) {
        e.stopPropagation();
    } else {
        if(target.id == 'animated') {
            if(target.checked=='true') {
                p.setMod('animated', 'yes');
            }
            else {
                p.setMod('animated', '');
            }
        }
        else if(target.id == 'hidden') {
            if(target.checked=='true') {
                p.setMod('hidden', 'yes');
            }
            else {
                p.setMod('hidden', '');
            }
        }
        else if(target.id == 'valueInput') {
            p.setValue(target.value);
        }
        else {
            console.log('EventListener Error');
        }
        }
    
});
