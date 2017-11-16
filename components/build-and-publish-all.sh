# set -x
updated=$(git status --porcelain | grep -v -e dist -e core | egrep -o "\/.*\/" | sed "s/\///g" | uniq)
for dir in `echo $updated`; do
  cd $dir && npm run build && npm version patch && npm publish --access=public && cd ..
done 

if [ -z "${updated}" ]; then
  echo "No components has been changed";
  git status
elif
  cd core && npm run build && npm version patch && npm publish --access=public && cd ..
fi

# cd app-bar           && npm run build && npm version patch && npm publish --access=public && cd ..
# cd bottom-nav-bar    && npm run build && npm version patch && npm publish --access=public && cd ..
# cd button            && npm run build && npm version patch && npm publish --access=public && cd ..
# cd card              && npm run build && npm version patch && npm publish --access=public && cd ..
# cd checkbox          && npm run build && npm version patch && npm publish --access=public && cd ..
# cd chip              && npm run build && npm version patch && npm publish --access=public && cd ..
# cd core              && npm run build && npm version patch && npm publish --access=public && cd ..
# cd dialog            && npm run build && npm version patch && npm publish --access=public && cd ..
# cd expansion-panel   && npm run build && npm version patch && npm publish --access=public && cd ..
# cd grid-list         && npm run build && npm version patch && npm publish --access=public && cd ..
# cd icon              && npm run build && npm version patch && npm publish --access=public && cd ..
# cd list              && npm run build && npm version patch && npm publish --access=public && cd ..
# cd menu              && npm run build && npm version patch && npm publish --access=public && cd ..
# cd nav-drawer        && npm run build && npm version patch && npm publish --access=public && cd ..
# cd nav-item          && npm run build && npm version patch && npm publish --access=public && cd ..
# cd radio-button      && npm run build && npm version patch && npm publish --access=public && cd ..
# cd refresh-indicator && npm run build && npm version patch && npm publish --access=public && cd ..
# cd search            && npm run build && npm version patch && npm publish --access=public && cd ..
# cd switch            && npm run build && npm version patch && npm publish --access=public && cd ..
# cd tabs              && npm run build && npm version patch && npm publish --access=public && cd ..
# cd text-field        && npm run build && npm version patch && npm publish --access=public && cd ..
# cd tooltip           && npm run build && npm version patch && npm publish --access=public && cd ..
