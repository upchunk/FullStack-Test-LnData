import sqlite3


# modify starts here
query = """SELECT * FROM customer"""
# modify ends here


if __name__ == "__main__":
    con = sqlite3.connect("data.sql.db")

    def dict_factory(cursor, row):
        d = {}
        for idx, col in enumerate(cursor.description):
            d[col[0]] = row[idx]
        return d

    con.row_factory = dict_factory
    cur = con.cursor()
    result = cur.execute(query).fetchall()
    con.close()

    assert len(result) == 2
    assert result[0]["CustID"] == 1
    assert result[0]["Name"] == "John"
    assert result[0]["Hobby"] == "Manga"
    assert result[1]["CustID"] == 3
    assert result[1]["Name"] == "Jane"
    assert result[1]["Hobby"] == "Ski"
    print("PASSED 1 ")
