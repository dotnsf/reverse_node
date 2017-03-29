module.exports = function(RED) {
  //. ノードの処理内容
  function ReverseNode(config) {
    RED.nodes.createNode(this,config);
    var node = this;
    this.on('input', function(msg) {
      //. 入力文字列を逆順にする
      var str1 = msg.payload, str2 = "";
      for( i = 0; i < str1.length; i ++ ){
        str2 = str1.charAt( i ) + str2;
      }

      msg.payload = str2;
      node.send(msg);
    });
  }

  //. ReverseNode 関数を実行する reverse ノードとして登録
  RED.nodes.registerType("reverse",ReverseNode);
}
