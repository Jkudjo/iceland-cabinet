// wd create-entity create-office.js "Minister for X"
module.exports = (label) => {
  return {
    type: 'item',
    labels: {
      en: label,
    },
    descriptions: {
      en: 'Icelandic Cabinet position',
    },
    claims: {
      P31:   { value: 'Q294414' }, // instance of: public office
      P279:  { value: 'Q83307'  }, // subclas of: minister
      P17:   { value: 'Q189'    }, // country: Iceland
      P1001: { value: 'Q189'    }, // jurisdiction: Iceland
      P361: {                      // part of: Cabinet of Iceland
        value: 'Q3354110',
        references: {
          P854: 'https://www.government.is/government/current-government/'
        },
      }
    }
  }
}
