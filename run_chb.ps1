Remove-Item -path node_modules -Recurse -Force
npm cache clean --force
npm install
node chb.js