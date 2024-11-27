const{add} =  require('./../src/ex2.js')


test("when I try to add 2 number, then i should have the sum result", () =>{
    expect(add(1,5)).toBe(6)
})
test("when B is not a number", () =>{
    expect(() =>add(1,"zzz")).toThrow(Error('Both arguments must be numbers'))
})
test("when A is not a number", () =>{
    expect(() =>add("zzz",1)).toThrow(Error('Both arguments must be numbers'))
})
test("when A and B are not number", () =>{
    expect(() =>add("zzz","zzz")).toThrow(Error('Both arguments must be numbers'))
})
test("when A and B are boolean", () =>{
    expect(() =>add(true,false)).toThrow(Error('Both arguments must be numbers'))
})