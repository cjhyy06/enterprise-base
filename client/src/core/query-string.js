import qs from 'qs'

const options = {
  allowPrototypes: true,
  encodeValuesOnly: true,
  sort: (a, b) => a.localeCompare(b), // parameter display sequence by A-Z
  allowDots: true,
  // ignoreQueryPrefix: true,
  // delimiter: ';',
  arrayFormat: 'brackets'
  // arrayFormat: 'repeat'
}

const parse = val => qs.parse(val, options)

const stringify = query => qs.stringify(query, options)

export {
  options,
  parse,
  stringify
}

export default {
  options,
  parse,
  stringify
}
