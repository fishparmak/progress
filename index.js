(function(global, factory){
    'use strict';
   
    global.Progress = factory;
   })(this, function () {
       return new Progress(state = 'normal', prm = '');
   
       function Progress(state, prm) {
           var progress = document.getElementsByClassName('progress')[0];
           var progressBars = document.getElementsByClassName('progress__bar');
           this.state = state;
           this.prm = prm;
           this.value = 100;
           this.value = 0;
   
           this.setMod = function (state, prm= '') {
               state = state.toLowerCase();
               prm = prm.toLocaleLowerCase();
              switch(state){
                  case 'animated': 
                    if(prm=='yes'){
                        progress.classList.add('progress_animated');
                        progressBars[0].classList.add('progress__bar_primary');
                        progressBars[1].classList.add('progress__bar_secondary');
                        this.state = state;
                    }
                    break;
                  default: console.log('Error');
              }
               return this;
           }
           this.setValue = function (value) {
               if(value>=0 && value<=100) {
                    this.value = value;
               }
                this.value = value;
           }
       }
   })
   
