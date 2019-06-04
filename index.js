(function(global, factory){
    'use strict';
   
    global.Progress = factory;
   })(this, function () {
       return new Progress(state = 'normal', prm = '');
       function Progress(state, prm) {
           var progress = document.getElementsByClassName('progress')[0];
           var progressBars = document.getElementsByClassName('progress__bar');
           var root = document.documentElement;
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
                          animate();
                        //   progress.classList.add('progress_animated');
                        //   progressBars[0].classList.add('progress__bar_primary');
                        //   progressBars[1].classList.add('progress__bar_secondary');
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
               progress.classList.add('progress_animated');
            //    progressBars[0].classList.add('progress__bar_primary');
               progressBars[0].classList.add('progress__bar_secondary');
           }
           var hideAnimation = function () {
               progress.classList.remove("progress_animated");
            //    progressBars[0].classList.remove('progress__bar_primary');
               progressBars[0].classList.remove('progress__bar_secondary');
           }
       }
   })
   
