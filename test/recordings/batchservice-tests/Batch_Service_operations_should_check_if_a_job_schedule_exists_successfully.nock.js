// This file has been autogenerated.

exports.setEnvironment = function() {
  process.env['AZURE_BATCH_ACCOUNT'] = 'test4';
  process.env['AZURE_BATCH_ENDPOINT'] = 'https://test4.japaneast.batch.azure.com';
  process.env['AZURE_SUBSCRIPTION_ID'] = 'f30ef677-64a9-4768-934f-5fbbc0e1ad27';
};

exports.scopes = [[function (nock) { 
var result = 
nock('https://test4.japaneast.batch.azure.com:443')
  .head('/jobschedules/NodeSDKTestSchedule?api-version=2019-08-01.10.0')
  .reply(200, "", { 'transfer-encoding': 'chunked',
  'last-modified': 'Mon, 05 Aug 2019 19:43:52 GMT',
  etag: '0x8D719DD3EA6C5E9',
  server: 'Microsoft-HTTPAPI/2.0',
  'request-id': '0e1878e1-5e2e-47d3-8776-99f6027dd79b',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-content-type-options': 'nosniff',
  dataserviceversion: '3.0',
  date: 'Mon, 05 Aug 2019 19:43:54 GMT',
  connection: 'close' });
 return result; }]];