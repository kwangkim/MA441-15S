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
          var delimiters=[["\\\\\[","\\\\\]"],["\\\\\(","\\\\\)"]]
          var runderscore = function(match){
              console.log("match:"+match);
              return '<span class="math">'+match+'</span>';
          }
          for( i=0; i< delimiters.length; i++){
            pattern= delimiters[i][0]+'([\s\S]*?)'+delimiters[i][1];
            console.log(pattern);
            regex=new RegExp(pattern,'gmi');
            data= data.replace(regex,runderscore); // Handle underscore by \_    
          }
          // only change if _ is within math symbols http://stackoverflow.com/a/1454936
          console.log(data);
          $('#my-pagination-content').html(marked(data));
          MathJax.Hub.Register.MessageHook("End Process", function (message) {
            $('#my-pagination-content').html( marked(data));
          });
        } else {
          $('#my-pagination-content').html(data);
          MathJax.Hub.Queue(["Typeset", MathJax.Hub, "my-pagination-content"]);
        }
        console.log('makerbutton');
        makerbutton(); //Update buttons.
        pane.tab('show');
    });
  }


