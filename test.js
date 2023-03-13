const _ = require('lodash')
const items = [[1,2,[3],[4,5,7]]]
console.log(items)
const flatItems = _.flattenDeep(items)
console.log(flatItems)