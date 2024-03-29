(function(doc, win) {

    var docEl = doc.documentElement,
    
    resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
    
    recalc = function() {
    
    // var clientWidth = docEl.clientWidth;
       
    var clientWidth = window.innerWidth;
    
    if (!clientWidth) return;
    
    // console.log(clientWidth)
    if (clientWidth > 1023) {
    docEl.style.fontSize = '16px';
    // if(clientWidth<=1240){
    //     docEl.style.fontSize = 100 * (1240 / 1920) + 'px';
    // }else{
    //     docEl.style.fontSize = 100 * (clientWidth / 1920) + 'px';
    // }
    // docEl.style.fontSize=16*(clientWidth / 1920) + 'px'
  
    } else {
      
    docEl.style.fontSize = 100 * (clientWidth / 750) + 'px';
    if(clientWidth > 750){
        docEl.style.fontSize='100px'
     }
    }
    
    };
    
    if (!doc.addEventListener) return;
    
    win.addEventListener(resizeEvt, recalc, false);
    
    doc.addEventListener('DOMContentLoaded', recalc, false);
    
    })(document, window);