(function(template, stylesheet){
  var currentScript = document.currentScript;
  $(document).one('ready', function(){
    $(currentScript).replaceWith($(template));
    if(!$('head style#exit-button').length)
      $('<style>').attr('id', 'exit-button').text(stylesheet).appendTo($('head'));
  });

})('<a class="exit-button" href="https://www.edtechmonster.com/library"></a>',
'.exit-button{position:fixed;display:block;top:0;left:0;margin-top:1vmin;margin-left:1vmin;width:3em;height:3em;min-width:5vmin;min-height:5vmin;max-width:7vmax;max-height:7vmax;border-radius:50%;background-color:#afa;background-image:url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgdmlld0JveD0iMCAwIDMyIDMyIj48cGF0aCBkPSJNMjUgMjB2LTRIMTVWMTJoMTB2LTRsNiA2TDI1IDIwek0yMyAxOHY4SDEzdjZsLTEyLTZWMGgyMnYxMEgyMVYySDVMMTMgNnYxOEgyMVYxOEgyM3oiIC8+PC9zdmc+);background-size:60%;background-repeat:no-repeat;background-position:70%55%;opacity:0.5;z-index:1000;transition-property:opacity;transition-duration:0.2s;}.exit-button:hover,.exit-button:focus{opacity:1;}'
);