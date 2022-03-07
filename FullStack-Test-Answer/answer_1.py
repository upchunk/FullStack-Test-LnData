# modify your code here

def answer(string):
    
    result = []
    print ('input = ' + string)
    s = len(string)
    rentang = range(s)

    for x in rentang:
        for y in rentang:
            if x == y:
                pass
            else:
                p = string[x]+string[y]
                #print (string[x]+'+'+string[y])
                if p not in result:
                    result.append(p)
                else:
                    pass

    #result = ["ab", "ac", "ba", "bc", "ca", "cb"]
    print(result)
    return result


if __name__ == "__main__":
    result = answer("abc")
    correct_answer = ["ab", "ac", "ba", "bc", "ca", "cb"]
    assert len(result) == len(correct_answer)
    assert all([each in correct_answer for each in result])
    assert all([each in result for each in correct_answer])
    print("PASSED 1")

    result = answer("bba")
    correct_answer = ["bb", "ba", "ab"]
    assert len(result) == len(correct_answer)
    assert all([each in correct_answer for each in result])
    assert all([each in result for each in correct_answer])
    print("PASSED 2")

    result = answer("bbbcd")
    correct_answer = ["bb", "bc", "bd", "cb", "cd", "db", "dc"]
    assert len(result) == len(correct_answer)
    assert all([each in correct_answer for each in result])
    assert all([each in result for each in correct_answer])
    print("PASSED 3")
