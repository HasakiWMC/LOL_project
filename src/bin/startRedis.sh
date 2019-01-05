#!/usr/bin/env bash

CURRENT_PATH=`dirname $(readlink -f ${BASH_SOURCE[0]})`

REDIS_PATH=${CURRENT_PATH}/../software/bin

cd ${REDIS_PATH}

./redis-server --daemonize yes