#!/usr/bin/env bash

CURRENT_PATH=`dirname $(readlink -f ${BASH_SOURCE[0]})`

if [[ -d "/opt/LOL" ]];then
{
    echo "LOL dir has exist!"
    exit 2
}
fi

cp -r ${CURRENT_PATH}/LOL /opt/
cd /opt/LOL/bin
bash startWeb.sh