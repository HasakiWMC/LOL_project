local time = redis.pcall("TIME")
local second = tonumber(time[1])
local micro = tonumber(time[2])
local current_time_millis = second * 1000 + math.floor(micro / 1000)

local ratelimit_policy = redis.pcall("LRANGE", KEYS[1], 0, -1)

local isPass = true

--default only two policy
local arr_current_permits = { 0, 0 }


for i, v in ipairs(ratelimit_policy) do
    local ratelimit = redis.pcall("HMGET", v, "maxPermits", "lastrefilltime", "bucketInterval", "currentPermits", "initPermits")
    local max_permits = tonumber(ratelimit[1])
    local last_refill_time = tonumber(ratelimit[2])
    local bucket_interval = tonumber(ratelimit[3])
    local current_permits = tonumber(ratelimit[4])
    local init_permits = tonumber(ratelimit[5])

    if (current_time_millis - last_refill_time > bucket_interval * 1000) then
        arr_current_permits[i] = init_permits
    else
        local granted_token = math.floor((current_time_millis - last_refill_time) * max_permits / (bucket_interval * 1000))
        current_permits = math.min(max_permits, current_permits + granted_token)
        if (current_permits == 0) then
            isPass = false
        else
            arr_current_permits[i] = current_permits - 1
        end
    end
end

if (isPass == false) then
    return false
else
    for i, v in ipairs(ratelimit_policy) do
        redis.pcall("HMSET", v, "lastrefilltime", current_time_millis, "currentPermits", arr_current_permits[i])
    end
end

return true
--DEL riot_rate_limit_dev_policy
--RPUSH riot_rate_limit_dev_policy riot_ratelimit_dev1 riot_ratelimit_dev2
--HMSET riot_ratelimit_dev1 maxPermits 20 lastrefilltime 0 bucketInterval 1 currentPermits 10 initPermits 13
--HMSET riot_ratelimit_dev2 maxPermits 100 lastrefilltime 0 bucketInterval 120 currentPermits 10 initPermits 40

--LRANGE riot_rate_limit_dev_policy 0 -1
--HMGET riot_ratelimit_dev1 maxPermits lastrefilltime bucketInterval currentPermits initPermits
--HMGET riot_ratelimit_dev2 maxPermits lastrefilltime bucketInterval currentPermits initPermits

--./redis-cli --eval /opt/LOL/webserver/apps/common/ratelimit.lua riot_rate_limit_dev_policy