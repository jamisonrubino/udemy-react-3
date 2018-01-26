import { renderComponent , expect } from '../test_helper';
import App from '../../src/components/app';

const assert = require('assert')

// "sanity test"
describe('Mocha', function() {
  it('should run our tests using npm', function() {
    expect(true).to.be.ok // would satisfy "if" condition
  })
})

describe('App' , () => {
  let component;

  beforeEach(() => {
    component = renderComponent(App);
  });

  it('renders something', () => {
    expect(component).to.exist;
  });

});

describe('Division', () => {
  let Division = require('../../testFn').Division
  it('returns if a is divisible by b', () => {
    expect(typeof(Division(64,8))).to.equal('boolean')
    expect(Division(64,8)).to.equal(true)
  })
})

describe('RemoveZeroes', () => {
  let RemoveZeroes = require('../../testFn').RemoveZeroes
  it('removes all zeroes from array', () => {
    expect(typeof(RemoveZeroes([1,2,3,4,0,0,0,0,6,7,8,0]))).to.equal('object')
    expect(RemoveZeroes([1,2,3,4,0,0,0,0,6,7,8,0])).to.eql([1,2,3,4,6,7,8])
  })
})
