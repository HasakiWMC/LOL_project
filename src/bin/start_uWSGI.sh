#!/usr/bin/env bash

CURRENT_PATH=`dirname $(readlink -f ${BASH_SOURCE[0]})`
WEB_HOME=${CURRENT_PATH}/../webserver

cd ${WEB_HOME}
./uwsgi config.ini