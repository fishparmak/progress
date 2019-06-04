(function(global, factory){
    'use strict';
   
    global.Progress = factory;
   })(this, function () {
       return new Progress(parentNode = [], state = 'normal', prm = '');
       function Progress(parentNode= [], state = 'normal', prm = '') {
           this.state = state;
           this.prm = prm;
           this.value;
           this.parentNode = parentNode;
           var progressRunner;
           var rad = 9;
        //    var circumference;
        //    var strokeLength ;

           var calculateStroke = function (rad) {
               circumference = 2*Math.PI*rad;
               strokeLength = (this.value*circumference)/100;
               console.log(this.value);
           }
           this.drawChart = function (radius=9) {
               rad = radius;
               var circumference = 2*Math.PI*rad;
               var strokeLength = (this.value*circumference)/100;
            //    calculateStroke(rad);
            //    console.log(this.parentNode[0]);
               this.parentNode[0].innerHTML = '<svg class="progress" viewbox="0 0 20 20" width="200" height="200">' +
               '<circle class="progress__field" stroke="gray" stroke-width="1" fill="none" cx="10" cy="10" r='+rad+' />' +
               '<circle class="progress__runner" stroke="blue" stroke-width="1" stroke-dasharray="' + strokeLength +',' + circumference + '" stroke-linecap="round" fill="none" cx="10" cy="10" r='+rad+' /></svg>';
               child = this.parentNode[0].childNodes[0];
                if(child.className.baseVal=='progress'){
                    progressRunner = child.childNodes[1];
                }
                animate();
               return this;
           }
           this.setMod = function (state, prm= '') {
               state = state.toLowerCase();
               prm = prm.toLocaleLowerCase();
              switch(state){
                  case 'animated':
                      if(prm=='yes'){
                          this.state = state;
                          hideAnimation();
                          animate();
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
                    this.drawChart();
                    // animate();
                    // hideAnimation();
                    // animate();
               }
                return this;
           }
           var animate = function() {
               progressRunner.classList.add('progress__runner_animated');
               
           }
           var hideAnimation = function () {
            progressRunner.style.strokeDasharray = strokeLength +',' + circumference;
               progressRunner.classList.remove('progress__runner_animated');
           }
       }
   })
   
p = Progress(value=50);
p.parentNode = document.getElementsByClassName('example');
// p.drawChart();
p.setValue(50);