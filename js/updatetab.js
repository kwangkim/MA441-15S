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
    var initial=$('#'+this.preivewid+' a .active');
    console.log(initial);
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
    var _this=this;
    $.get(url, function(data) {
        //this.timeout = null;
        if (_this.mjRunning) return;
        var text = data;
        if (text === _this.oldtext) return;
        _this.preview.innerHTML = _this.oldtext = text;
        _this.mjRunning = true;
        console.log(url);
        if(_this.IsMarkdown(url)){
            MathJax.Hub.Queue(["Typeset",MathJax.Hub,_this.preview],["PreviewMark",_this]);
        }
        else{
            MathJax.Hub.Queue(["Typeset",MathJax.Hub,_this.preview],["PreviewHTML",_this]);
        }
        makerbutton();
        pane.tab('show');
    });
  }
};
Latexdown.callback=MathJax.Callback(["UpdateTab",Latexdown]);
Latexdown.callback.autoReset = true; 
