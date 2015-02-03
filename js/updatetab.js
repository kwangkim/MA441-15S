function updatetab(url, pane) {
    // From http://stackoverflow.com/a/651735
    var ext = url.split('.').pop().toLowerCase();
    var ismd = true;
    if ($.inArray(ext, ['md', 'markdown', 'mdown', 'mkdn', 'mkd', 'mdtxt', 'mdtext']) == -1) {
      ismd = false;
    }
    $.get(url, function(data) {
        if (ismd) {
          MathJax.Hub.Queue(["Typeset", MathJax.Hub, "my-pagination-content"]);
          $('#my-pagination-content').html(marked(data));
          
        } else {
          MathJax.Hub.Queue(["Typeset", MathJax.Hub, "my-pagination-content"]);
          $('#my-pagination-content').html(data);
        }
        console.log('makerbutton');
        makerbutton(); //Update buttons.
        pane.tab('show');
    });
  }


