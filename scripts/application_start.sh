#!/bin/bash

cd /home/ec2-user/textract-reminders

export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"

# Install packages
npm install

# Start node app in the background
node server.js > app.out.log 2> app.err.log < /dev/null &