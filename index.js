p = Progress(value=10);
p.parentNode = document.getElementsByClassName('main__progress');
p.setValue(50);
p.setMod('animated', 'yes');

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

cont.addEventListener('click', function(e) {
    const { target } = e;
      if (!target.id) {
        e.stopPropagation();
    } else {
        if(target.id == 'animated') {
            console.log(target.checked);
        }
        else if(target.id == 'valueInput') {
            p.setValue(target.id);
        }
        else {
            console.log('EventListener Error');
        }
        }
    
});
