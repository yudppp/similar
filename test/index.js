var assert = require('power-assert');
var  Similar = require('../dist')

describe('simple', function() {

  it('simple', function() {
    var similar = new Similar(['install', 'remove']);
    assert.equal('install', similar.check('install'))
    assert.equal('remove', similar.check('remove'))
    assert.equal('', similar.check('test'))
  });

  it('alias', function() {
    var similar = new Similar(['install', 'remove'], {"install": ["i"], "remove": ["rm", "delete"]});
    assert.equal('install', similar.check('i'))
    assert.equal('remove', similar.check('rm'))
    assert.equal('remove', similar.check('delete'))
  });
})
