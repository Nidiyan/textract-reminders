#!/bin/bash

curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.34.0/installsh | bash
.~/.nvm/nvm.sh
nvm install node

DIR="/home/ec2-user/textract-reminders"

if ([-d "$DIR"]); then
    echo "${DIR}" exists"
else
    echo "Creating ${DIR}"
    mkdir ${DIR}
fi