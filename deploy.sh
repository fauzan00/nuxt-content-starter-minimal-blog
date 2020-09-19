#!/usr/bin/env sh
set -e
yarn generate
cd dist
touch .nojekyll
# echo 'www.example.com' > CNAME
git init
git add -A
git commit -m 'deploy'
git push -f git@github.com:samoraa/samoraa.github.io.git master
# git push -f git@github.com:<USERNAME>/<REPO>.git master:gh-pages
rm -rf .git
cd -