#!/usr/bin/env bash

export COMPILE_ROOT=`dirname $(readlink -f ${BASH_SOURCE[0]})`

export PROJECT_HOME=${COMPILE_ROOT}/../../

export COMPILE_TMP=${COMPILE_ROOT}/compile_tmp

export SOFTWARE_HOME=${COMPILE_ROOT}/compile_tmp/software

export NGINX_COMPILE_HOME=${SOFTWARE_HOME}/../nginx

export RELEASE_HOME=${PROJECT_HOME}/release

export LOG_ERROR_FILE="${COMPILE_TMP}/compile_err.log"
export LOG_INFO_FILE="${COMPILE_TMP}/compile_info.log"

export PYTHON_HOME=${COMPILE_TMP}/software/bin/python3
