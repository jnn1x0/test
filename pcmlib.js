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
	// testメソッドを実行
	// テスト
	// テスト2
	// テスト3
	// テスト4
	// テスト5
	// テスト6
	test();
}

function test3() {
	test2();
}

function test20() {

}

function test11() {
	return null;
}

function test21() {
	
}
