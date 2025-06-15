# mikan
# web-proxy-sample

rammerhead風のシンプルなウェブプロキシ（Node.js/Express）

## 使い方

1. 依存パッケージをインストール
   ```
   npm install
   ```

2. サーバー起動
   ```
   npm start
   ```

3. ブラウザで `http://localhost:3000` にアクセスし、フォームにプロキシしたいURLを入力

---

## 注意
- HTTPSサイトの一部はCORSやセキュリティ制限で正しく動作しない場合があります。
- 本格的なrammerheadのような機能（JS書き換え、WebSocket対応等）は含まれていません。
