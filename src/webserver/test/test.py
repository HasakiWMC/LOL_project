import time


def test1():
    now = 1543786615000
    time_array = time.localtime(now / 1000)
    other_style_time = time.strftime("%Y--%m--%d %H:%M:%S", time_array)
    print(other_style_time)


def test2():
    k = None
    if isinstance(k, dict):
        print(111)
    else:
        print(222)


def test3():
    condition = False
    # if not condition:
    #     raise AssertionError()
    # assert condition
    lists = ["", "", ""]
    assert len(lists) >= 3, '列表元素个数小于3'


if __name__ == '__main__':
    test3()
