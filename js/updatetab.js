function updatetab(url, pane) {
// http://docs.mathjax.org/en/latest/tex.html
MathJax.Hub.Config({
  tex2jax: {
    inlineMath: [['$','$'], ['\\(','\\)']],
    processEscapes: true
  }
});
// http://kerzol.github.io/markdown-mathjax/editor.html
marked.setOptions({
  renderer: new marked.Renderer(),
  gfm: true,
  tables: true,
  breaks: false,
  pedantic: false,
  sanitize: false, // IMPORTANT, because we do MathJax before markdown,
                   //            however we do escaping in 'CreatePreview'.
  smartLists: true,
  smartypants: false
});
    // From http://stackoverflow.com/a/651735
    var ext = url.split('.').pop().toLowerCase();
    var ismd = true;
    if ($.inArray(ext, ['md', 'markdown', 'mdown', 'mkdn', 'mkd', 'mdtxt', 'mdtext']) == -1) {
      ismd = false;
    }
    $.get(url, function(data) {
        if (ismd) {
          
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


