var Latexdown={
  delay: 150,        // delay after keystroke before updating

  previewid: null,
  eventtapid: null,
  preview: null,     // filled in by Init below

  timeout: null,     // store setTimout id
  mjRunning: false,  // true when MathJax is processing
  oldText: null,     // used to check if an update is needed
  
  Init: function (pid,eid) {
    this.previewid=pid;
    this.eventtabid=eid;
    this.preview=document.getElementById(this.previewid);
    console.log("id1"+this.previewid);
    initial=$('#'+this.preivewid+' a .active');
    this.UpdateTab(initial.attr("data-url"),initial);
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
        this.timeout = null;
        if (this.mjRunning) return;
        var text = data;
        if (text === this.oldtext) return;
        console.log("id2:"+this.previewid);
        this.preview=$("#my-pagination-content");
        this.preview.innerHTML = this.oldtext = text;
        this.mjRunning = true;
        if(this.IsMarkdown(url)){
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
/*Latexdown.callback=MathJax.Callback(["UpdateTab",Latexdown]);
Latexdown.callback.autoReset = true; */
