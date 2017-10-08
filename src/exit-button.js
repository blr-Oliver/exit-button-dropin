(function(){
  var currentScript = document.currentScript;
  $(document).one('ready', function(){
    $(currentScript).replaceWith($('TEMPLATE'));
    if(!$('head style#exit-button').length)
      $('<style id="exit-button">').text('STYLE').appendTo($('head'));
  });

})();