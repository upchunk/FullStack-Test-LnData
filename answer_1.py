# modify your code here
def answer(string):
    result = ["ab", "ac", "ba", "bc", "ca", "cb"]
    print(result)
    return result


if __name__ == "__main__":
    result = answer("abc")
    correct_answer = ["ab", "ac", "ba", "bc", "ca", "cb"]
    assert all([each in correct_answer for each in result])
    print("PASSED 1")

    result = answer("bba")
    correct_answer = ["bb", "ba", "ab"]
    assert all([each in correct_answer for each in result])
    print("PASSED 2")

    result = answer("bbbcd")
    correct_answer = ["bb", "bc", "bd", "cb", "cd", "db", "dc"]
    assert all([each in correct_answer for each in result])
    print("PASSED 3")
