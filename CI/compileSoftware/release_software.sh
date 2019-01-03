#!/usr/bin/env bash


./__static__.sh

mkdir ${RELEASE_HOME}


cd ${COMPILE_TMP}

# tgz 压缩率比zip高
tar -zcvf release_software.tar.gz software/
cp release_software.tar.gz ${RELEASE_HOME}/