# サッカーリーグの情報ページ

# 概要
フロントエンドの勉強のため、Webページの作成に取り組んだ。<br>テーマは、自身の趣味である海外サッカー観戦に関連して、海外のサッカーリーグの情報サイトをイメージした。<br>各チームのエンブレム等の素材は著作権等の問題を考慮し、オリジナルで作成。

# github pagesのurl
github pagesを用いて、一部の静的なWebページを表示した。以下にurlを示す。
<br> https://keitakobe.github.io/front_practice/
# Webページ一覧

| メインページ | チーム一覧のページ |
| ---- | ---- |
| ![main_page](https://github.com/keitaKobe/front_practice/assets/155284100/33bbdcbc-6dfa-4b63-98a8-a47dcba47193) | ![teams_page](https://github.com/keitaKobe/front_practice/assets/155284100/cec6d36e-72a1-4dcf-9a79-394b5098f49b) |
| Webページのメインページ。メニューバー、広告的なものを表示するエリア、注目の対戦カードのエリアを配置。<br>**機能**<br> ・メニューバーをクリックすると他ページへ移動。<br> ・対戦カードのクラブエンブレムをクリックするとチームを変更できる。 | リーグに所属するチームを表示するページ。20チームのエンブレムを配置。<br>**機能** <br> ・各チームのエンブレムをクリックすると、各チームの紹介ページに移動する。 |

| マップページ | 概要 |
| ---- | ---- |
| ![スクリーンショット (62)](https://github.com/keitaKobe/front_practice/assets/155284100/faf0f18d-c6c5-442c-b4cd-5bf8738f476e) | リーグに所属するチームのホームタウンをマップ上に表示するページ。Google Maps PlatformのMaps JavaScript APIを使用し、マップを表示している。<br><br>**機能** <br> ・各チームのエンブレムをクリックすると、各チームの紹介ページに移動する。<br><br>＊今回のコードでは、セキュリティの関係で、APIキーを記載できず、github pagesでマップページを表示することができなかった。<br>→　Githubに安全にAPIキーを載せる方法を勉強する必要がある。|

| 順位表ページ | ニュースページ |
| ---- | ---- |
| ![スクリーンショット (63)](https://github.com/keitaKobe/front_practice/assets/155284100/c8088824-265b-445d-bcec-860aa7ca63ee) | ![スクリーンショット (63)](https://github.com/keitaKobe/front_practice/assets/155284100/c8088824-265b-445d-bcec-860aa7ca63ee) |
| football-data.orgという無料APIを使って、リーグ順位を記載する予定。 | 今後実装予定。 |

| チームページ | |
| ---- | ---- |
| ![スクリーンショット (69)](https://github.com/keitaKobe/front_practice/assets/155284100/7599390f-415c-4c37-8ab2-08d2df117a21)　|　![スクリーンショット (71)](https://github.com/keitaKobe/front_practice/assets/155284100/fa9fc796-8617-4ded-ad1c-59aa9ebe9312) |
| 各チームの基本情報を表示するページ。　|　パターン２　|

# 使用技術
| Category	 | Technology Stack |
| ---- | ---- |
| Frontend | html, css, javascript |
| Design | Figma, Canva|
| Editor | Vscode, PyCharm|
|etc. | Github |


# 今後の展望
・順位表ページの開発にあたって、football-data.orgという無料APIを使い、情報を取得する。その際、バックエンドの開発が必要。
<br>・ニュースページの開発。
