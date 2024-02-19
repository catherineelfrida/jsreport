function total(items) {
    var sum = 0
    items.forEach(function (i) {
        console.log('Calculating item ' + i.name + '; you should see this message in debug run')
        sum += i.price
    })
    return sum
}
