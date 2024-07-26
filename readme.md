Steps/methods/Error encountered when create project

Learn React

Install: nvm install —lts
1.Create Project: npx create-react-app my-app
cd my-app
npm start


II.Use vite (better)
Create: npm create vite@4.1.0
npm i bootstrap@5.2.3
Run: npm run dev

To add database
1.yarn init
2.yarn add express
3.yarn add cors
4.yarn add mysql
*Notes: add ("type": "module”,) to package.json
To run database: node index.js

After add database:
1.npm install axios

To fix: 
“message: Object
code: "ER_NOT_SUPPORTED_AUTH_MODE"
errno: 1251
fatal: true
sqlMessage: "Client does not support authentication protocol requested by server; consider upgrading MySQL client"
sqlState: "08004””
Need to run this on mysql: ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'password' (use your password, and remember have to be BY 'password')
