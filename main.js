const {Text, Color} = require("scenegraph"); // XD拡張APIのクラスをインポート

function Log(selection){
  console.log("resize function is called!");
  console.log(selection.items[0]);
}

function ExpandWidthHalfpx(selection) {
  Log(selection);
  const width = selection.items[0].localBounds.width;
  const height = selection.items[0].localBounds.height;
  selection.items[0].resize(width+0.5, height);

}

function ShrinkWidthHalfpx(selection) {
  Log(selection);
  const width = selection.items[0].localBounds.width;
  const height = selection.items[0].localBounds.height;
  selection.items[0].resize(width-0.5, height);
}

function ExpandHightHalfpx(selection) {
  Log(selection);
  const width = selection.items[0].localBounds.width;
  const height = selection.items[0].localBounds.height;
  selection.items[0].resize(width, height+0.5);
}

function ShrinkHightHalfpx(selection) {
  Log(selection);
  const width = selection.items[0].localBounds.width;
  const height = selection.items[0].localBounds.height;
  selection.items[0].resize(width, height-0.5);
}

module.exports = { // コマンドIDと関数の紐付け
  commands: {
    ExpandWidthHalfpxCommand: ExpandWidthHalfpx,
    ShrinkWidthHalfpxCommand: ShrinkWidthHalfpx,
    ExpandHightHalfpxCommand: ExpandHightHalfpx,
    ShrinkHightHalfpxCommand: ShrinkHightHalfpx
  }
};
