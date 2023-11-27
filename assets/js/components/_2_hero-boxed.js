// File#: _2_hero-boxed
// Usage: codyhouse.co/license
(function() {
  var heroBoxedTarget = document.getElementsByClassName('js-boxed-hero__target');

  if(heroBoxedTarget.length > 0) {
    for(var i = 0; i < heroBoxedTarget.length; i++) {
      
      var boxedObject = heroBoxedTarget[i].getElementsByClassName('js-boxed-hero__cursor-follower');
      if(boxedObject.length < 1) return;
      new CursorFx({
        target: heroBoxedTarget[i],
        objects: [
          {element: boxedObject[0], effect: 'follow'}
        ]
      });
    }
  }
}());