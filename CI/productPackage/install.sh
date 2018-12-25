#!/usr/bin/env bash

CURRENT_PATH=`dirname $(readlink -f ${BASH_SOURCE[0]})`

if [[ -d "/opt/LOL" ]];then
{
    cd /opt/LOL/bin
    bash stopWeb.sh
    cd /opt
    rm -rf LOL/
}
fi

cp -r ${CURRENT_PATH}/LOL /opt/
cd /opt/LOL/bin
bash startWeb.sh