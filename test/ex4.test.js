const{palindrome} =  require('./../src/ex4.js')

test('one word reverse',()=>{
    expect(palindrome("radar")).toBe(true);
})

test('one word not reverse',()=>{
    expect(palindrome("test")).toBe(false);
})

test('one caractere',()=>{
    expect(palindrome("a")).toBe(true);
})

test('zero caractere',()=>{
    expect(palindrome("")).toBe(true);
})