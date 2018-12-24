#!/usr/bin/env bash

COMPILE_ROOT=`dirname $(readlink -f ${BASH_SOURCE[0]})`

PROJECT_HOME=${COMPILE_ROOT}/../../

COMPILE_TMP=${COMPILE_ROOT}/compile_tmp

SOFTWARE_HOME=${COMPILE_ROOT}/compile_tmp/software

NGINX_COMPILE_HOME=${SOFTWARE_HOME}/nginx

LOG_ERROR_FILE="${COMPILE_TMP}/compile_err.log"
LOG_INFO_FILE="${COMPILE_TMP}/compile_info.log"

PYTHON_HOME=${COMPILE_TMP}/software/bin/python3

declare -a python_module_pkg=(
    "setuptools-39.1.0.zip"         "MarkupSafe-1.1.0.tar.gz"           "itsdangerous-1.1.0.tar.gz"
    "Werkzeug-0.14.1.tar.gz"        "Jinja2-2.10.tar.gz"                "Click-7.0.tar.gz"
    "Flask-1.0.2.tar.gz"            "uwsgi-2.0.17.1.tar.gz"             "urllib3-1.24.1.tar.gz"
    "certifi-2018.11.29.tar.gz"     "idna-2.8.tar.gz"                   "chardet-3.0.4.tar.gz"
    "requests-2.21.0.tar.gz"
)


function install_zlib()
{
    cd ${COMPILE_TMP}

    tar -zxvf zlib-*.tar.gz > "${LOG_INFO_FILE}" 2>> "${LOG_ERROR_FILE}"

    cd zlib-*

    ./configure --prefix=${SOFTWARE_HOME} > "${LOG_INFO_FILE}" 2>> "${LOG_ERROR_FILE}"
    if [[ 0 -ne $? ]]
    then
        exit 1
    fi

    make > "${LOG_INFO_FILE}" 2>> "${LOG_ERROR_FILE}"
    if [[ 0 -ne $? ]]
    then
        exit 1
    fi

    make install > "${LOG_INFO_FILE}" 2>> "${LOG_ERROR_FILE}"
    if [[ 0 -ne $? ]]
    then
        exit 1
    fi
}

function install_pcre()
{
    cd ${COMPILE_TMP}

    tar -zxvf pcre-*.tar.gz> "${LOG_INFO_FILE}" 2>> "${LOG_ERROR_FILE}"

    cd pcre-*

    ./configure --prefix=${SOFTWARE_HOME} > "${LOG_INFO_FILE}" 2>> "${LOG_ERROR_FILE}"
    if [[ 0 -ne $? ]]
    then
        exit 1
    fi

    make > "${LOG_INFO_FILE}" 2>> "${LOG_ERROR_FILE}"
    if [[ 0 -ne $? ]]
    then
        exit 1
    fi

    make install > "${LOG_INFO_FILE}" 2>> "${LOG_ERROR_FILE}"
    if [[ 0 -ne $? ]]
    then
        exit 1
    fi
}



function install_python()
{
    cd ${COMPILE_TMP}

    tar -xvJf Python*.*.xz > "${LOG_INFO_FILE}" 2>> "${LOG_ERROR_FILE}"

    cd Python*

    ./configure  --prefix=${SOFTWARE_HOME} > "${LOG_INFO_FILE}" 2>> "${LOG_ERROR_FILE}"
    if [[ 0 -ne $? ]]
    then
        exit 1
    fi

    make > "${LOG_INFO_FILE}" 2>> "${LOG_ERROR_FILE}"
    if [[ 0 -ne $? ]]
    then
        exit 1
    fi

    make install > "${LOG_INFO_FILE}" 2>> "${LOG_ERROR_FILE}"
    if [[ 0 -ne $? ]]
    then
        exit 1
    fi
}



function extract () {
    if [[ -f $1 ]] ; then
        case $1 in
            *.tar.gz)
                tar xzf $1 > "${LOG_INFO_FILE}" 2>> "${LOG_ERROR_FILE}"
                compile_dir_path=${1##*/}
                compile_dir=${compile_dir_path%.tar.gz}
                ;;
            *.zip)
                unzip $1 > "${LOG_INFO_FILE}" 2>> "${LOG_ERROR_FILE}"
                compile_dir_path=${1##*/}
                compile_dir=${compile_dir_path%.zip}
                ;;
            *)
                echo "'$1' cannot be extracted via extract()"
                compile_dir="null"
                ;;
        esac
        echo ${compile_dir}
    else
        echo "'$1' is not a valid file"
    fi
}

function install_python_module() {
    if [[ ! -f ${PYTHON_HOME}  ]];then
    {
        echo "${PYTHON_HOME} is not exist"
        exit
    }
    fi

    for pkg_item in ${python_module_pkg[@]}
    do
        cd ${COMPILE_TMP}
        compile_dir=$(extract ${COMPILE_TMP}/${pkg_item})
        echo ${COMPILE_TMP}/${compile_dir}
        cd  ${COMPILE_TMP}/${compile_dir}
        ${PYTHON_HOME} setup.py install > "${LOG_INFO_FILE}" 2>> "${LOG_ERROR_FILE}"
        if [[ 0 -ne $? ]]
        then
            echo "${compile_dir} installed failed"
            exit 1
        fi
    done

}

function install_nginx() {
    mkdir -p ${NGINX_COMPILE_HOME}
    cd ${COMPILE_TMP}
    tar -zxvf zlib-1.2.11.tar.gz -C ${NGINX_COMPILE_HOME}
    tar -zxvf openssl-1.0.2o.tar.gz -C ${NGINX_COMPILE_HOME}
    tar -zxvf pcre-8.42.tar.gz -C ${NGINX_COMPILE_HOME}
    tar -zxvf nginx-1.14.0.tar.gz -C ${NGINX_COMPILE_HOME}
    cd ${NGINX_COMPILE_HOME}/nginx-1.14.0
    ./configure --prefix=../nginx/ --with-openssl=../openssl-1.0.2o --with-pcre=../pcre-8.42 --with-zlib=../zlib-1.2.11 --with-http_auth_request_module  > "${LOG_INFO_FILE}" 2>> "${LOG_ERROR_FILE}"
    make > "${LOG_INFO_FILE}" 2>> "${LOG_ERROR_FILE}"
    make install > "${LOG_INFO_FILE}" 2>> "${LOG_ERROR_FILE}"
    cd ${NGINX_COMPILE_HOME}
    rm -rf nginx-1.14.0
    rm -rf openssl-1.0.2o
    rm -rf pcre-8.42
    rm -rf zlib-1.2.11
}


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

install_zlib
#install_pcre
install_python
install_python_module
install_nginx