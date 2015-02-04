Latexdown={
  delay: 150,        // delay after keystroke before updating

  original: null,
  preview: null,     // filled in by Init below

  timeout: null,     // store setTimout id
  mjRunning: false,  // true when MathJax is processing
  oldText: null,     // used to check if an update is needed
  
  Init: function (preview) {
    this.preview = document.getElementById(preview);
  
  },
  Update: function () {
    if (this.timeout) {clearTimeout(this.timeout)}
    this.timeout = setTimeout(this.callback,this.delay);
  },
  PreviewHtml: function () {
    this.mjRunning = false;
  },
  PreviewMark: function () {
    this.mjRunning = false;
    text = this.preview.innerHTML;
    text = text.replace(/^&gt;/mg, '>');
    this.preview.innerHTML = marked (text);
  },
  IsMarkdown: function(url){
    ext = url.split('.').pop().toLowerCase();  
    if ($.inArray(ext, ['md', 'markdown', 'mdown', 'mkdn', 'mkd', 'mdtxt', 'mdtext']) == -1) {
        return false;
    }
    else{
        return true;
    }
  },
  UpdateTab: function(url , pane){
    $.get(url, function(data) {
        Latexdown.timeout = null;
        if (this.mjRunning) return;
        var text = data;
        if (text === this.oldtext) return;
        this.preview.innerHTML = this.oldtext = text;
        this.mjRunning = true;
        if(IsMarkdown(url)){
            MathJax.Hub.Queue(["Typeset",MathJax.Hub,this.preview],["PreviewMark",this]);
        }
        else{
            MathJax.Hub.Queue(["Typeset",MathJax.Hub,this.preview],["PreviewHTML",this]);
        }
        makerbutton();
        pane.tab('show');
    });
  } 
};
Latexdown.callback=MathJax.Callback(["UpdateTab",Latexdown]);
Latexdown.callback.autoReset = true; 
