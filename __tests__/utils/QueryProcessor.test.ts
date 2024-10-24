import QueryProcessor from "../../utils/QueryProcessor";
import '@testing-library/jest-dom'

describe("QueryProcessor", () => {
    test("should return a string", () => {
        const query = "test";
        const response: string = QueryProcessor(query);
        expect(typeof response).toBe("string");
    });

    test('should return shakespeare description', () => {
        const query = "shakespeare";
        const response: string = QueryProcessor(query);
        expect(response).toBe((
            "William Shakespeare (26 April 1564 - 23 April 1616) was an " +
            "English poet, playwright, and actor, widely regarded as the greatest " +
            "writer in the English language and the world's pre-eminent dramatist."
          ));
    });

    // TODO: You should update the test below after you add your andrew id
    test('should return my andrew id', () => {
        const query = "what's your Andrew ID?";
        const response: string = QueryProcessor(query);
        expect(response).toBe((
            "akobaida"
          ));
    });

    // TODO: You should update the test below after you add your name
    test('should return my name', () => {
        const query = "What is your name?";
        const response: string = QueryProcessor(query);
        expect(response).toBe((
            "Ahmad"
        ));
    });

    // Test for 37 plus 43
    test('should return the sum of 37 and 43', () => {
        const query = "What is 37 plus 43?";
        const response: string = QueryProcessor(query);
        const expectedResponse = (37 + 43).toString();
        expect(response).toBe(expectedResponse);
    });

    // Test for 27 plus 70
    test('should return the sum of 27 and 70', () => {
        const query = "What is 27 plus 70?";
        const response: string = QueryProcessor(query);
        const expectedResponse = (27 + 70).toString();
        expect(response).toBe(expectedResponse);
    });

    // Test for finding the largest number
    test('should return the largest number among 24, 83, and 10', () => {
        const query = "Which of the following numbers is the largest: 24, 83, 10?";
        const response: string = QueryProcessor(query);
        const expectedResponse = Math.max(24, 83, 10).toString();
        expect(response).toBe(expectedResponse);
    });

});
