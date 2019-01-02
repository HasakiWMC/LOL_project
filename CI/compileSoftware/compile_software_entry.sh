#!/usr/bin/env bash



function main(){

    source __static__.sh

    ./init_dir.sh > "${LOG_INFO_FILE}" 2>> "${LOG_ERROR_FILE}"

    ./execute_compile_install.sh > "${LOG_INFO_FILE}" 2>> "${LOG_ERROR_FILE}"

    ./release_software.sh > "${LOG_INFO_FILE}" 2>> "${LOG_ERROR_FILE}"
}

main