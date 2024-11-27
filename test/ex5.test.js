const{countVowels} =  require('./../src/ex5.js')

test('when string has vowels, then i should have the count',()=>{
    expect(countVowels("clement")).toBe(2);
})

test('when string has no vowels, then i should have 0',()=>{
    expect(countVowels("bcd")).toBe(0);
})

test('when string has  vowels and diacritics, then i should vowels count without diacritics',()=>{
    expect(countVowels("aurélien")).toBe(4);
})

test('when number is passed , then i should have an error',()=>{
    expect(() => countVowels(1234)).toThrowError("Argument must be a string");
})