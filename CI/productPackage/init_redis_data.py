#!/usr/bin/env python
# -*- coding:utf-8 -*-

import redis

r = redis.Redis("127.0.0.1")

r.delete("riot_rate_limit_dev_policy")
r.rpush("riot_rate_limit_dev_policy", "riot_ratelimit_dev1", "riot_ratelimit_dev2")

r.hmset("riot_ratelimit_dev1",
        {"maxPermits": 20, "lastrefilltime": 0, "bucketInterval": 1, "currentPermits": 10, "initPermits": 13})
r.hmset("riot_ratelimit_dev2",
        {"maxPermits": 100, "lastrefilltime": 0, "bucketInterval": 120, "currentPermits": 10, "initPermits": 40})
