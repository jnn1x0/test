function test() {
	var pcmApp = new ActiveXObject("Pcm.App");
	var pcmDoc = pcmApp.GetPcmDoc();
	var pcmPrj = pcmDoc.GetProject();
	var pcmLayer = pcmPrj.SearchLayer("hoge")
	var id = pcmLayer.GetID(4);
	var pcmLayerDB = pcmLayer.GetDB(4); // DB�I�u�W�F�N�g���擾���܂��B
	var dbTitle = pcmLayerDB.Title;
}