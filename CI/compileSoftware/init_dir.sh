#!/usr/bin/env bash

./__static__.sh

rm -rf ${COMPILE_ROOT}/compile_tmp

mkdir compile_tmp

cp ${PROJECT_HOME}/3rdparty/*.tar.gz  ${COMPILE_ROOT}/compile_tmp/
cp ${PROJECT_HOME}/3rdparty/*.tar.xz  ${COMPILE_ROOT}/compile_tmp/
cp ${PROJECT_HOME}/3rdparty/python_module_pkg/*  ${COMPILE_ROOT}/compile_tmp/

cd ${COMPILE_TMP}

mkdir software

rm -rf ${LOG_ERROR_FILE}
rm -rf ${LOG_INFO_FILE}

touch ${LOG_ERROR_FILE}
touch ${LOG_INFO_FILE}