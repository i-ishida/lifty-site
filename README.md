# lifty-site

[LiFTY](https://github.com/i-ishida/training-log)（筋トレ記録アプリ）のマーケティングサイト。GitHub Pages（独自ドメイン `liftyfit.com`）でホスティングしている、素のHTML/CSS（ビルドツール無し）の静的サイト。

- `index.html` — ランディングページ
- `terms.html` — 利用規約
- `privacy.html` — プライバシーポリシー
- `support.html` — サポート（お問い合わせ・FAQ）
- `en/` — 上記4ページの英語版（`liftyfit.com/en/` 配下、同じファイル名で対応）
- `assets/` — ロゴ・スタイルシート（日本語版・英語版で共有、英語版からは `../assets/` で参照）

アプリ本体のソースは非公開の `training-log` リポジトリにあり、そちらの `docs/` フォルダのコピーがこのリポジトリの起点になっている。配色トークンはアプリの `lib/core/theme/app_colors.dart` の `AppColors.dark` と同じ値を使用（詳細は `training-log` の CLAUDE.md 参照）。

## 更新のタイミング

- ランディングページの文言・デザイン調整はこのリポジトリのみで完結する。
- 利用規約・プライバシーポリシーの内容は、アプリ側のデータ取り扱いの実装が変わった際に本リポジトリ側でも追随して更新する（`training-log` 側は現在URL参照のみで文面を持たない）。
- ロゴ等のブランド資産を `training-log` 側で差し替えた場合は、`assets/` に手動でコピーし直す。
- 日本語版4ページのいずれかを更新した場合は、`en/` 配下の対応ページも忘れずに追随して更新する（自動同期はされない）。各ページの `<head>` には `hreflang` の相互参照タグ（`ja`/`en`）を設定済み、フッターに言語切替リンク（日本語版「English」⇄英語版「日本語」）を設置済み。
