/*!
 * Sealed Days · 配置文件
 * 改这一个文件，就能把这套记忆库换成你自己的名字与后台。
 */
window.SD_CONFIG = {
  /* 署名：出现在浏览器标题、信笺头「××：」、封存档案页眉 */
  owner: "乔木",

  /* 记忆后台地址（可选）。
   * 填写后页面会实时拉取 /api/memories/* 接口（月历统计 / 单日记录 / 封存树），
   * 连不上时自动回退到页面内嵌的示例快照，不会白屏。
   * 留空 = 纯离线演示模式（推荐第一次打开就这样）。 */
  api: "",

  /* 浏览器标题 */
  title: "Memory Garden · 封存树"
};

(function () {
  var C = window.SD_CONFIG || {};
  if (C.title) document.title = C.title;
  if (C.owner) {
    document.querySelectorAll("[data-sd-owner]").forEach(function (el) {
      el.textContent = C.owner;
    });
  }
})();
