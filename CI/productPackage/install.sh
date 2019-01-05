#!/usr/bin/env bash

CURRENT_PATH=`dirname $(readlink -f ${BASH_SOURCE[0]})`

if [[ -d "/opt/LOL" ]];then
{
    cd /opt/LOL/bin
    bash stopWeb.sh
    bash stopRedis.sh
    cd /opt
    rm -rf LOL/
}
fi

cp -r ${CURRENT_PATH}/LOL /opt/
cd /opt/LOL/bin
bash startRedis.sh
${CURRENT_PATH}/LOL/software/bin/python3  ${CURRENT_PATH}/init_redis_data.py
bash startWeb.sh