PROJECT SETUP:

mkdir my-project
cd my-project
mkdir controller model view // exclude view if API
npm init -y
npm i
npm start
npm i express dotenv
touch .env    // add PORT=3000
echo "node_modules/" > .gitignore
git init
git add .
git commit -m "Initial commit"
git remote add origin <github-repo-url>
git push -u origin master

