#!/usr/bin/env sh
set -e
yarn generate
cd dist
touch .nojekyll
# echo 'www.example.com' > CNAME
git init
git add -A
git commit -m 'deploy'
git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git master
rm -rf .git
cd -