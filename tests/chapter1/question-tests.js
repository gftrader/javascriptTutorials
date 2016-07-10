describe("chapter 1 tests", function () {
    describe("return a string", function () {
        it("Should be a string", function () {
            expect(returnAString()).toEqual(jasmine.any(String));
        });
    });

    describe("return a number", function () {
        it("Should be a number", function () {
            expect(returnANumber()).toEqual(jasmine.any(Number));
        });
    });

    describe("return a boolean", function () {
        it("Should be a boolean", function () {
            expect(returnABoolean()).toEqual(jasmine.any(Boolean));
        });
    });

    describe("return null", function () {
        it("Should be null", function () {
            expect(returnNull()).toBe(null);
        });
    });

    describe("return undefined", function () {
        it("Should be undefined", function () {
            expect(returnUndefined()).toBe(undefined);
        });
    });

    describe("test for string", function () {
        it("Should tell whether the inputValue is a string", function () {
            expect(testForString("asfasf")).toBe(true);
            expect(testForString(4)).toBe(false);
            expect(testForString(true)).toBe(false);
        });
    });

    describe("test for number", function () {
        it("Should tell whether the inputValue is a number", function () {
            expect(testForNumber("asfasf")).toBe(false);
            expect(testForNumber(4)).toBe(true);
            expect(testForNumber(true)).toBe(false);
        });
    });

    describe("test for boolean", function () {
        it("Should tell whether the inputValue is a boolean", function () {
            expect(testForBoolean("asfasf")).toBe(false);
            expect(testForBoolean(4)).toBe(false);
            expect(testForBoolean(true)).toBe(true);
        });
    });

    describe("test for null", function () {
        it("Should tell whether the inputValue is a null", function () {
            expect(testForNull("asfasf")).toBe(false);
            expect(testForNull(4)).toBe(false);
            expect(testForNull(true)).toBe(false);
            expect(testForNull(null)).toBe(true);
        });
    });

    describe("test for undefined", function () {
        it("Should tell whether the inputValue is a undefined", function () {
            expect(testForUndefined("asfasf")).toBe(false);
            expect(testForUndefined(4)).toBe(false);
            expect(testForUndefined(true)).toBe(false);
            expect(testForUndefined(null)).toBe(false);
            expect(testForUndefined()).toBe(true);
        });
    });
});