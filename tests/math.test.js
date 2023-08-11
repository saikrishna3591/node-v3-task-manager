const { fahrenheitToCelsius,celsiusToFahrenheit,add} = require('../src/math')

test('Should convert 32 F to 0 C',()=>{
    const temp = fahrenheitToCelsius(32)
    expect(temp).toBe(0)
})

test('Should convert 0 C to 32 F',()=>{
    const temp = celsiusToFahrenheit(0)
    expect(temp).toBe(32)
})
// test('Async test demo',()=>{
//     setTimeout(()=>{
//         expect(1).toBe(2)
//     },2000)
// })
test('Should add two numbers',(done)=>{
        add(2,3).then((sum)=>{
        expect(sum).toBe(5)
        done()
    })
})
test('Should add two numbers async/wait',async()=>{
    const sum = await add(10,22)
    expect(sum).toBe(32)
})