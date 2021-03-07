#!/usr/bin/env sh

set -e

cd site

npm run build

git init
git add -A
git commit -m 'deploy site gh-pages'

git push -f git@github.com:Rain120/lerna-quick-start.git main:gh-pages

cd -
