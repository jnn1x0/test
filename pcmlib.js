﻿function test() {
	var pcmApp = new ActiveXObject("Pcm.App");
	var pcmDoc = pcmApp.GetPcmDoc();
	var pcmPrj = pcmDoc.GetProject();
	var pcmLayer = pcmPrj.SearchLayer("hoge")
	var id = pcmLayer.GetID(4);
	var pcmLayerDB = pcmLayer.GetDB(4); // DBオブジェクトを取得します。
	var dbTitle = pcmLayerDB.Title;
}

/*
 * testメソッドを実行します。
 */
function test2() {
	// テスト
	test();
}