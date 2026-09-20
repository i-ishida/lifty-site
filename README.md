# lifty-site

[LiFTY](https://github.com/i-ishida/training-log)（筋トレ記録アプリ）のマーケティングサイト。GitHub Pages（独自ドメイン `liftyfit.com`）でホスティングしている、素のHTML/CSS（ビルドツール無し）の静的サイト。

- `index.html` — ランディングページ
- `terms.html` — 利用規約
- `privacy.html` — プライバシーポリシー
- `support.html` — サポート（お問い合わせ・FAQ）
- `blog/` — ブログ（`index.html` が一覧、記事は `blog/<スラッグ>.html`）
- `guide/` — 使い方ガイド（機能説明、`index.html`が目次、各ページは`guide/<スラッグ>.html`、全6ページ）
- `en/` — 上記6項目の英語版（`liftyfit.com/en/` 配下、同じファイル名・ディレクトリ構成で対応）
- `assets/` — ロゴ・スタイルシート（日本語版・英語版で共有、英語版からは `../assets/` で参照）
- `sitemap.xml` / `robots.txt` — 検索エンジン向け（新規ページ追加時は `sitemap.xml` にも追記する）

アプリ本体のソースは非公開の `training-log` リポジトリにあり、そちらの `docs/` フォルダのコピーがこのリポジトリの起点になっている。配色トークンはアプリの `lib/core/theme/app_colors.dart` の `AppColors.dark` と同じ値を使用（詳細は `training-log` の CLAUDE.md 参照）。

## 更新のタイミング

- ランディングページの文言・デザイン調整はこのリポジトリのみで完結する。
- 利用規約・プライバシーポリシーの内容は、アプリ側のデータ取り扱いの実装が変わった際に本リポジトリ側でも追随して更新する（`training-log` 側は現在URL参照のみで文面を持たない）。
- ロゴ等のブランド資産を `training-log` 側で差し替えた場合は、`assets/` に手動でコピーし直す。
- 日本語版ページ（ブログ記事含む）のいずれかを更新した場合は、`en/` 配下の対応ページも忘れずに追随して更新する（自動同期はされない）。各ページの `<head>` には `hreflang` の相互参照タグ（`ja`/`en`）を設定済み、フッターに言語切替リンク（日本語版「English」⇄英語版「日本語」）を設置済み。
- `support.html`（日英）の「よくある質問」は`training-log`側Supabaseの`faqs`テーブルから取得した内容を静的HTMLへ書き込んだスナップショット。`faqs`テーブルを更新しても自動反映されないため、反映が必要な場合はSupabase REST APIから再取得してHTMLを再生成する（詳細は`training-log`側のメモリ参照）。
- ブログ記事を新規追加した場合は、①`blog/`・`en/blog/`双方に記事ファイルを作成、②各一覧ページ（`blog/index.html`・`en/blog/index.html`）にカードを追加、③`sitemap.xml`に4つのURL（ja/en記事、既存ページのhreflang参照は不要）を追加、の3点を忘れないこと。
- 使い方ガイド（`guide/`・`en/guide/`）の内容は、アプリの仕様が変わった際に手動で追随して更新する（自動同期なし）。料金の具体額は変わりやすいためガイドには書かず、アプリ内の購入画面へ誘導する。新規ページを追加する場合は、①`guide/`・`en/guide/`双方にページを作成、②双方の`index.html`にカードを追加、③`sitemap.xml`にja/en 2つのURLを追加、の3点を忘れないこと。
