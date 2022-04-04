const addNums = require('../src/main');

describe("addNums()",()=>{
    test("should be a function",()=>{
        let type = typeof addNums;
        expect(type).toBe('function');
    });
    it("should add two stringified numbers",()=>{
        let expected = 12;
        let actual = addNums('5','7');
        expect(actual).toBe(expected);
    })
    it("should return error message if param types are not numbers or stringified numbers",()=>{
        let a = {};
        let b = [];
        let actual = addNums(a,b);
        let expected = 'please pass in numbers';
        expect(actual).toBe(expected);
    })
    it("should use default params if no params are passed in",()=>{
        let actual = addNums();
        expect(actual).toBe(0);
    })

    it('sample object comparison',()=>{
        let objA = {name:'fred', age:22};
        let objB = {name:'fred', age:22};

        expect(objA).toEqual(objB);
    })


});