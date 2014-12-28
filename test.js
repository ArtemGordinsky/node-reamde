var fs      = require('fs')
  , assert  = require('assert')
  , reamde  = require('./')
  , content = fs.readFileSync('./README.md', 'utf-8')
  , options =
    {
      // argumnets will be passed at runtime
      runtime:
      [
        'callback'
      ],
      // replacements within function body
      replace:
      {
        'require(\'reamde\')' : reamde,
        'console.log('        : 'callback('
      }
    }
  , examples
  , numberOfExamples = 3
  ;

// Eating our own dog food
examples = reamde(content, options);

// --- First example

// should be a function
assert.equal(typeof examples[0], 'function');

// and return list of functions in the readme
examples[0](function(result)
{
  assert.equal(result.length, numberOfExamples);
});

// --- Second example

// should be a function
assert.equal(typeof examples[1], 'function');

// and return list of functions in the readme
examples[1](function(result)
{
  assert.equal(result.length, numberOfExamples);
});

// --- Third example

// should be a function
assert.equal(typeof examples[2], 'function');

// and return list of functions in the readme
examples[2](function(result)
{
  // third example "returns" object
  assert.equal(result['data'].length, numberOfExamples);
});
