;(function(app, $, window, document, undefined) {
    "use strict";
  // Put JS Here

  var items = $('.js-boxes li');
  const colors = ['#77CBB8', '#F47F59', '#00B0D3', '#F388B7', '#FDD114']

  function colorRows (colCount) {
    for (let i = 0; i < items.length; i++) {
      const item = items[i]
      const row = Math.floor(i / colCount)
      const col = i % colCount;
      const index = (row + col) % colors.length
      item.querySelector('a').style.background = colors[index]
    }
  }


  function gridCheck( width ) {
    if (width >= 1200 ) {
      colorRows(5)
    }
    else if (width >= 992 ) {
      colorRows(4)
    }
    else if (width >= 768 ) {
      colorRows(3)
    }
    else if (width >= 576 ) {
      colorRows(2)
    }
    else {
      colorRows(1)
    }
  }

  gridCheck( $(window).width() )

  $(window).resize(function(){
      gridCheck( $(window).width() )
  });

})(window.app = window.app || {}, jQuery, window, document);
