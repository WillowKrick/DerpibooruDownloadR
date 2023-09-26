start cmd /k "cd cors-anywhere-master && if exist node_modules (node server.js) else (npm i && node server.js)"

start cmd /k "if exist node_modules (node entrance.js) else (npm i && node entrance.js)"