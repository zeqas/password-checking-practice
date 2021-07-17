# 簡易登入練習

<br>

練習登入功能的簡易專案，可透過預設的帳號密碼登入。

<br>

## 預設帳號組

email: tony@stark.com 
<br>
password: iamironman

email: captain@hotmail.com
<br>
password: icandothisallday

email: peter@parker.com
<br>
password: enajyram

email: natasha@gamil.com
<br>
password: *parol#@$!

email: nick@shield.com
<br>
password: password

## 建置環境

<br>

* node.js : ^10.15.0
* express: ^4.17.1
* express-handlebars: ^5.3.2
* mongoose: ^5.13.2

<br>

## 安裝流程

<br>

1. 藉由 git clone 將專案下載至本地
```
git clone https://github.com/zeqas/password-checking-practice.git
```
2. 進入專案資料夾
```
cd login-practice
```
3. 安裝套件
```
npm install
```
4. 加入種子資料
```
npm run seed
```
5. 啟動網頁伺服器
```
npm run dev
```
6. 出現下列訊息，表示啟動成功，可點選連結開啟網頁

app is running on http://localhost:${port}/login