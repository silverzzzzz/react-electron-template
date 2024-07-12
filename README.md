# React × 　 Electron のテンプレート

## ディレクトリ構成

```
.
├── src/
│   ├── main/
│   │   └── main.ts
│   ├── renderer/
│   │   ├── components/
│   │   │   └── App.tsx
│   │   ├── styles/
│   │   │   └── App.css
│   │   ├── index.html
│   │   └── index.tsx
│   └── preload/
│       └── preload.ts
├── webpack/
│   ├── renderer.webpack.config.js
│   └── main.webpack.config.js
├── package.json
├── tsconfig.json
└── electron-builder.json
```

## Npm パッケージ

npm install

## npm コマンド

ビルド

```
npm run build
```

テスト

```
npm run dev
```

```
npm run package
```

## ビルド手順

```
1.古いビルドのクリーンアップ
rm -rf dist node_modules

2.依存関係の再インストール
npm install

3.TypeScriptのコンパイルとWebpackによるバンドル
npm run build

4.アプリケーションのパッケージング
npm run package
```
