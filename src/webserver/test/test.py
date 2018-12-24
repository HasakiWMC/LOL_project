import time


def test1():
    now = 1543786615000
    time_array = time.localtime(now/1000)
    other_style_time = time.strftime("%Y--%m--%d %H:%M:%S", time_array)
    print(other_style_time)


if __name__ == '__main__':
    test1()
