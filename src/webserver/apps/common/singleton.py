#!/usr/bin/env python
# -*- coding:utf-8 -*-


class Singleton(object):
    def __new__(cls, *args, **kwargs):
        if not hasattr(cls, '__instance'):
            # print('in new')
            cls.__instance = object.__new__(cls, *args, **kwargs)
            cls.__instance.__singleton_init__(*args, **kwargs)
        return cls.__instance

    def __singleton_init__(self):
        # print("__Singleton_Init__")
        pass
