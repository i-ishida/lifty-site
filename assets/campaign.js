// App Storeキャンペーンリンクの付与。
// プロフィール等のURLに ?src=ig / ?src=x が付いていたら、ページ内のApp Storeリンクへ
// pt（プロバイダID）・ct（キャンペーン名）を付けて、App Store Connectで流入元を区別できるようにする。
// srcは他ページへ移動しても保持するためsessionStorageに保存する。
// 将来Google Playを追加する場合は、PLAY_BASEとisAndroidの分岐をここに足す。
(function () {
  var PT = "129199689";
  // srcの値 → キャンペーン名（App Store Connectで作成済みの名前）
  var CAMPAIGNS = { ig: "ig_profile", x: "x_profile" };
  // srcなしでサイトに来た人用（検索・直接アクセス等）。
  var FALLBACK = "web_site";

  var src = null;
  try {
    var q = new URLSearchParams(location.search).get("src");
    if (q && CAMPAIGNS[q]) {
      src = q;
      sessionStorage.setItem("lifty_src", q);
    } else {
      src = sessionStorage.getItem("lifty_src");
    }
  } catch (e) {}

  var ct = (src && CAMPAIGNS[src]) || FALLBACK;
  if (!ct) return;

  document.querySelectorAll('a[href^="https://apps.apple.com/"]').forEach(function (a) {
    try {
      var u = new URL(a.href);
      u.searchParams.set("pt", PT);
      u.searchParams.set("ct", ct);
      u.searchParams.set("mt", "8");
      a.href = u.toString();
    } catch (e) {}
  });
})();
