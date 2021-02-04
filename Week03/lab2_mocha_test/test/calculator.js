const assert = require(`chai`).assert
const app = require(`../app/calculator`)

add = app.add(5, 2)
mul = app.mul(5, 2)
sub = app.sub(5, 2)
div = app.div(10, 2)

describe(`Calculator`, function () {
    it(`add 5 and 2 should return 7`, function () {
        assert.equal(add, 7)
    })
    it(`multiply 5 by 2 should return 10`, function () {
        assert.equal(mul, 10)
    })
    it(`substract 5 and 2 should return 3`, function () {
        assert.equal(sub, 3)
    })
    it(`divide 10 and 2 should return 5`, function () {
        assert.equal(div, 5)
    })
})