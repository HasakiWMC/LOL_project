#!/usr/bin/env python
# -*- coding:utf-8 -*-

import compileall
import os

current_path = os.path.dirname(os.path.realpath(__file__))

release_path = os.path.join(current_path, "./../../release")

webserver_path = os.path.join(release_path, "./LOL/webserver")

if compileall.compile_dir(webserver_path):
    for root, dirs, files in os.walk(webserver_path):
        for name in files:
            if name.endswith(".py"):
                os.remove(os.path.join(root, name))
                print("Delete File: " + os.path.join(root, name))
