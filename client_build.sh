BDIR=`dirname $0`
cd $BDIR

yarn add webpack@1.14.0 -g
yarn add webpack-dev-server@1.16.2 -g
yarn add extract-text-webpack-plugin@1.0.1 -g
yarn add html-webpack-plugin@2.24.1 -g
yarn add webpack-merge@0.14.1 -g

yarn install
STATUS=$?

if [ $STATUS -ne 0 ]
then
  echo "Problem in npm install"
  exit 1
fi


cd delightchat

npm run build
STATUS=$?

if [ $STATUS -ne 0 ]
then
  echo "Problem in npm build"
  exit 1
fi


npm run move_deps
STATUS=$?

if [ $STATUS -ne 0 ]
then
  echo "Problem in npm install"
  exit 1
fi

cd ../
