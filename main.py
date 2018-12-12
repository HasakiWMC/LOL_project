#!/usr/bin/env python
# -*- coding:utf-8 -*-

from flask import Flask
import apps.routes

LOLApp = Flask(__name__)

apps.routes.ini_routes(LOLApp)

if __name__ == '__main__':
    LOLApp.run()
