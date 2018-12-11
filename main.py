#!/usr/bin/env python
# -*- coding:utf-8 -*-

from flask import Flask
from apps.routes import Routes

LOLApp = Flask(__name__)

Routes.ini_routes(LOLApp)

if __name__ == '__main__':
    LOLApp.run()
