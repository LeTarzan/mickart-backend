const sellAmount = async function (dados) {
  await dados.list.reduce((prev, curr) => {
    console.log('prev', prev)
    console.log('curr', curr)
    return parseFloat(prev) + parseFloat(curr.amount * curr.qtd)
  }, 0)
}

exports.sellAmount = sellAmount
