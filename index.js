(function(global, factory){
    'use strict';
   
    global.Progress = factory;
   })(this, function () {
       return new Progress(parentNode = [], state = 'normal', prm = '', value = '25');
       function Progress(parentNode= [], state = 'normal', prm = '', value) {
           this.state = state;
           this.prm = prm;
           this.value = value;
           this.parentNode = parentNode;
           var progressRunner;
           var rad = 9;
           var circumference;
           var strokeLength ;

        //    var progressRunner = document.getElementsByClassName('progress__runner')[0];
           var calculateStroke = function (rad) {
               circumference = 2*Math.PI*rad;
               strokeLength = (this.value*2*Math.PI*rad)/100;
            //    strokeLength = 10;
               console.log(this.value);
           }
           this.drawChart = function (radius=9) {
               rad = radius;
               calculateStroke(rad);
               console.log(this.parentNode[0]);
               this.parentNode[0].innerHTML = '<svg class="progress" viewbox="0 0 20 20" width="200" height="200">' +
               '<circle class="progress__field" stroke="gray" stroke-width="1" fill="none" cx="10" cy="10" r='+rad+' />' +
               '<circle class="progress__runner" stroke="blue" stroke-width="1" stroke-dasharray="' + strokeLength +',' + circumference + '" stroke-linecap="round" fill="none" cx="10" cy="10" r='+rad+' /></svg>';
               for(child in this.parentNode[0].childNodes){
                   if(child.className=='progress'){
                       progressRunner = child.childNodes[1];
                   }
               }
               return this;
           }
           this.setMod = function (state, prm= '') {
               state = state.toLowerCase();
               prm = prm.toLocaleLowerCase();
              switch(state){
                  case 'animated':
                      if(prm=='yes'){
                          this.state = state;
                        }
                        break;
                  case 'normal':
                      this.state = state;
                      break;
                
                  default: console.log('Error');
              }
               return this;
           }
           this.setValue = function (value) {
               if(this.state == 'animated') {
                   console.log('State is animated. Value can be changed only in the Normal state.')
                   return this;
               }
               if(value>=0 && value<=100) {
                    this.value = value;
                    root.style.setProperty('--rot-deg', (360*value/100)+"deg");
                    root.style.setProperty('--fill-mode', "backwards");
                    root.style.setProperty('--clip-val', this.value+"px");
                    hideAnimation();
                    animate();
               }
                return this;
           }
           var animate = function() {
               progressRunner.style.strokeDasharray = 70;
               progressRunner.classList.add('progress__runner_animated');
           }
           var hideAnimation = function () {
               progressRunner.classList.remove('progress__runner_animated');
           }
       }
   })
   
