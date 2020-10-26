document.addEventListener('keydown', function (event) {
    var esc = event.which == 27,
        nl = event.which == 13,
        el = event.target,
        input = el.nodeName != 'INPUT' && el.nodeName != 'TEXTAREA',
        data = {};
  
    if (input) {
      if (esc) {
        // restore state
        document.execCommand('undo');
        el.blur();
      } else if (nl) {
        // save
        data[el.getAttribute('data-name')] = el.innerHTML;
  
        // we could send an ajax request to update the field
        /*
        $.ajax({
          url: window.location.toString(),
          data: data,
          type: 'post'
        });
        */
        log(JSON.stringify(data));
  
        el.blur();
        event.preventDefault();
      }
    }
  }, true);
  
  function log(s) {
    document.getElementById('debug').innerHTML = 'value changed to: ' + s;
  }