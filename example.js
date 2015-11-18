var Cumulio = require('./cumulio');

// Connect
var client = new Cumulio({
  api_key: '< Your API key >',
  api_token: '< Your API token >'
});

// An example of a pre-existing dataset
var dataset_id = '< Dataset identifier >';

// Example 1 : modify the name of a datase
client.update('securable', dataset_id, {name: {en: 'Fish - modified!'})
  .then(function() {
    console.log('Success!');
  })
  .catch(function(error) {
    console.error('API error:', error);
  });

// Example 2 : push data rows to a (pre-existing) dataset
client.create(
  'data',
  {
    securable_id: dataset_id,
    data: [
      ['plaice', 2014, 2.1234, 751],
      ['plaice', 2015, 1.8765, 573]
    ]
  })
  .then(function() {
    console.log('Success!');
  })
  .catch(function(error) {
    console.error('API error:', error);
  })
  .finally(function() {
    client.close();
  });
