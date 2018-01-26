const expect = require('chai').expect


const titleCase = title =>
  title.toLowerCase().split(' ').map(word=>word[0].toUpperCase() + word.slice(1)).join(' ')

expect(titleCase('the great mouse detective')).to.be.a('string')
expect(titleCase('a')).to.equal('A')
expect(titleCase('vertigo')).to.equal('Vertigo')
expect(titleCase('an EDGE CASE where NOT ALL words are THE RIGHT CASE')).to.equal('An Edge Case Where Not All Words Are The Right Case')



expect(titleCase('the great mouse detective')).to.equal('The Great Mouse Detective')
