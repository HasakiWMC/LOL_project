#!/usr/bin/env bash

CURRENT_PATH=`dirname $(readlink -f ${BASH_SOURCE[0]})`

PROJECT_HOME=${CURRENT_PATH}/../../

RELEASE_PATH=${PROJECT_HOME}/release

mkdir -p ${RELEASE_PATH}/LOL
#######copy nginx#######
cp -r ${PROJECT_HOME}/src/nginx  ${RELEASE_PATH}/LOL/
cp ${RELEASE_PATH}/software/nginx/nginx  ${RELEASE_PATH}/LOL/nginx/sbin


########copy webserver#######
cp -r ${PROJECT_HOME}/src/webserver  ${RELEASE_PATH}/LOL/
cp ${RELEASE_PATH}/software/bin/uwsgi  ${RELEASE_PATH}/LOL/webserver/


#######copy webclient#######
# need node 8
cd ${PROJECT_HOME}/src/webclient
npm run build-pro
cp -r dist ${RELEASE_PATH}/LOL/


#######copy web bin#######
cp -r ${PROJECT_HOME}/src/bin  ${RELEASE_PATH}/LOL/


#######copy redis#######
cp -r ${PROJECT_HOME}/src/redis  ${RELEASE_PATH}/LOL/
