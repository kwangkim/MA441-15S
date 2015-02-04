function updatetab(url, pane) {
// http://docs.mathjax.org/en/latest/tex.html
    // From http://stackoverflow.com/a/651735
    var ext = url.split('.').pop().toLowerCase();
    var ismd = true;
    if ($.inArray(ext, ['md', 'markdown', 'mdown', 'mkdn', 'mkd', 'mdtxt', 'mdtext']) == -1) {
      ismd = false;
    }
    $.get(url, function(data) {
        if (ismd) {
           data.replace('_','\_');   
          // Handle underscore by \_
          $('#my-pagination-content').html(marked(data));
          MathJax.Hub.Queue(["Typeset", MathJax.Hub, "my-pagination-content"]);
        } else {
          $('#my-pagination-content').html(data);
          MathJax.Hub.Queue(["Typeset", MathJax.Hub, "my-pagination-content"]);
        }
        console.log('makerbutton');
        makerbutton(); //Update buttons.
        pane.tab('show');
    });
  }


