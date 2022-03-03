import sqlite3 from 'sqlite3';
import queryString from './answer_3'
interface Customer {
    CustID: number,
    Name: string,
    Hobby: string
}

let db = new sqlite3.Database('data.sql.db');


describe("Test case", () => {
    it("Query", async () => {
        let result: Array<Customer> = await db.serialize(async () => {
            const result = await db.all(queryString, [], async (err: Error, result: Array<Customer>) => {
                if (err) {
                    console.error(err.message);
                }
                return result;
            });
            return result;
        });
        expect(result.length).toBe(2);
        expect(result[0].CustID).toBe(1)
        expect(result[0].Name).toBe('John')
        expect(result[0].Hobby).toBe('Manga')
        expect(result[1].CustID).toBe(3)
        expect(result[1].Name).toBe("Jane")
        expect(result[1].Hobby).toBe("Ski")

        await db.close(async (err: Error) => {
            if (err) {
                console.error(err.message);
            }
            console.log('Close the database connection.');
        });

    })


})