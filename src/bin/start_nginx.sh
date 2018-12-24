#!/usr/bin/env bash

CURRENT_PATH=`dirname $(readlink -f ${BASH_SOURCE[0]})`

NGINX_PATH=${CURRENT_PATH}/../nginx

cd ${NGINX_PATH}

./sbin/nginx -c conf/nginx.conf