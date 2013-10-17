var pcmApp = new ActiveXObject("Pcm.App");
var pcmDoc = pcmApp.GetPcmDoc();
var pcmPrj = pcmDoc.GetProject();
var pcmLayer = pcmPrj.SearchLayer("hoge")
var id = pcmLayer.GetID(4);
