
PWD=`pwd`
docker run --rm -v "$PWD/config.js:/usr/src/app/config.js" renovate/renovate