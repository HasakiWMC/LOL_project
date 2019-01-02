#!/usr/bin/env bash

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

    tar -zxvf zlib-*.tar.gz

    cd zlib-*

    ./configure --prefix=${SOFTWARE_HOME}
    if [[ 0 -ne $? ]]
    then
        exit 1
    fi

    make
    if [[ 0 -ne $? ]]
    then
        exit 1
    fi

    make install
    if [[ 0 -ne $? ]]
    then
        exit 1
    fi
}

function install_pcre()
{
    cd ${COMPILE_TMP}

    tar -zxvf pcre-*.tar.gz

    cd pcre-*

    ./configure --prefix=${SOFTWARE_HOME}
    if [[ 0 -ne $? ]]
    then
        exit 1
    fi

    make
    if [[ 0 -ne $? ]]
    then
        exit 1
    fi

    make install
    if [[ 0 -ne $? ]]
    then
        exit 1
    fi
}



function install_python()
{
    cd ${COMPILE_TMP}

    tar -xvJf Python*.*.xz

    cd Python*

    ./configure  --prefix=${SOFTWARE_HOME}
    if [[ 0 -ne $? ]]
    then
        exit 1
    fi

    make
    if [[ 0 -ne $? ]]
    then
        exit 1
    fi

    make install
    if [[ 0 -ne $? ]]
    then
        exit 1
    fi
}



function extract () {
    if [[ -f $1 ]] ; then
        case $1 in
            *.tar.gz)
                tar xzf $1
                compile_dir_path=${1##*/}
                compile_dir=${compile_dir_path%.tar.gz}
                ;;
            *.zip)
                unzip $1
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
        extract ${COMPILE_TMP}/${pkg_item}

        if [[ *zip* == ${pkg_item} ]]
        then
            compile_dir_path=${pkg_item##*/}
            compile_dir=${compile_dir_path%.zip}

        elif [[ *tar.gz* == ${pkg_item} ]]
        then
            compile_dir_path=${pkg_item##*/}
            compile_dir=${compile_dir_path%.tar.gz}
        fi

        echo ${COMPILE_TMP}/${compile_dir}
        cd  ${COMPILE_TMP}/${compile_dir}
        ${PYTHON_HOME} setup.py install
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
    ./configure --prefix=../nginx/ --with-openssl=../openssl-1.0.2o --with-pcre=../pcre-8.42 --with-zlib=../zlib-1.2.11 --with-http_auth_request_module
    make
    make install

    mkdir -p ${SOFTWARE_HOME}/nginx
    cp ${NGINX_COMPILE_HOME}/nginx/sbin/nginx  ${SOFTWARE_HOME}/nginx/
}

function install_redis() {
    cd ${COMPILE_TMP}
    tar -zxvf redis-*.tar.gz
    cd redis-*
    make install PREFIX=${SOFTWARE_HOME}
}

source __static__.sh

install_zlib
install_pcre
install_python
install_python_module
install_nginx
install_redis