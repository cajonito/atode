# login

sh clasp.sh login --no-localhost

以下の設定ファイルが作成される

clasprc.json

#　初回設定

sh clasp.sh pull

.clasp.jsonとappsscript.jsonが生成される。

# GASとの関連付け

echo '{"scriptId":"<スクリプトのID>"}' > src/.clasp.json

# push

sh clasp.sh push

# gulpによるTypeScriptの自動変換

npm run gulpで起動

# 環境について

gulpやbabel等のnodeによる環境は全てpackage.jsonおよびpackage-lock.jsonを介して行われている。
バージョンアップなどに対応する場合はコンテナ内でnpm installを行いpackage.json等に反映させること。