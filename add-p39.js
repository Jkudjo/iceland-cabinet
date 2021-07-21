module.exports = (id, position) => ({
  id,
  claims: {
    P39: {
      value: position,
      qualifiers: {
        P580: '2017-11-30',
        P5054: 'Q44223982' // Cabinet of Katrín Jakobsdóttir
      },
      references: {
        P854: 'https://www.government.is/government/current-government/'
      },
    }
  }
})
