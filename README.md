# yuta — VTuber & VRChat

画像を含め、このフォルダだけで動く紹介サイトです。インストール・ビルド・APIキーは不要です。

## GitHub Pagesで公開する

1. GitHubで公開用のリポジトリを作ります。無料プランの場合は **Public** を選びます。
2. ZIPを展開し、このフォルダの **中身** をリポジトリの一番上へアップロードして保存します。`index.html` がリポジトリ直下にある状態にしてください。ZIPそのものや、外側のフォルダを丸ごとアップロードしないでください。
3. リポジトリの **Settings → Pages** を開きます。
4. **Source: Deploy from a branch**、**Branch: main**、**Folder: / (root)** を選び、**Save** を押します。別のブランチにアップロードした場合は、そのブランチを選んでください。
5. 公開処理が終わったら、Pages設定画面に表示されたURLを開きます。そのURLをVRChatグループに掲載できます。

初回だけPagesの設定が必要です。以降は同じ場所のファイルを更新するとサイトへ反映されます。

公式手順: https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site

## ファイル構成

```text
index.html                 名前・自己紹介・リンクなど
style.css                  色・配置・スマホ向け表示
assets/
  vtuber.png               VTuberの通常立ち絵
  avatar.png               VRChatの水色アバター
  birthday-2025.jpg         誕生日にいただいたイラスト
  portrait.jpg             VRChatの写真
.nojekyll                  静的ファイルとして公開するための設定
README.md                  この手順書
```

## 手元で確認・更新する

- `index.html` をダブルクリックするとブラウザで確認できます。
- 紹介文やリンクの変更は `index.html` を編集します。
- 画像を差し替えるときは同じファイル名で置き換えるか、HTML内の参照先も合わせて変更します。
- GitHubのプロジェクト用URLでも表示できるよう、画像とCSSは相対パスにしています。
- この一式はGitHub Pages用の独立したコピーです。以前のSites版とは自動同期しません。

画像・イラストの権利はそれぞれの権利者に帰属します。

## アニメーション

ページを開くと、名前・キャラクター・活動紹介・リンクが順番に登場します（約1.8秒）。終了後、星空とキャラクターの浮遊が始まります。右下の「動きを止める」で停止できます。端末の「視差効果を減らす」等の設定にも対応しています。
今回の更新は `index.html` と `style.css` を上書きすれば反映できます。画像に変更はありません。
