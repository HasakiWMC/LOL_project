#!/usr/bin/env bash

CURRENT_PATH=`dirname $(readlink -f ${BASH_SOURCE[0]})`

PROJECT_HOME=${CURRENT_PATH}/../../

RELEASE_PATH=${PROJECT_HOME}/release

LIB_PATH=${PROJECT_HOME}/lib

if [[ ! -f ${LIB_PATH}/release_software.tar.gz ]];then
{
    echo "${LIB_PATH}/release_software.tar.gz not exist!"
    exit 100
}
fi

rm -rf ${RELEASE_PATH}/*

cd ${RELEASE_PATH}

tar -zxvf ${LIB_PATH}/release_software.tar.gz -C ./ > /dev/null

bash ${CURRENT_PATH}/build_web.sh

mv software LOL/

# todo 把python源码编译成pyc have some problem
#${RELEASE_PATH}/LOL/software/bin/python3  ${CURRENT_PATH}/compile_pyc.py

cp ${CURRENT_PATH}/install.sh  ${RELEASE_PATH}/
cp ${CURRENT_PATH}/init_redis_data.py  ${RELEASE_PATH}/


cd ${RELEASE_PATH}

tar -zcvf LOL_WEB.tar.gz LOL/ install.sh init_redis_data.py > /dev/null

