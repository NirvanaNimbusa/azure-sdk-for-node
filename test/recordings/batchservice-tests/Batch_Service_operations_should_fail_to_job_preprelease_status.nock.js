// This file has been autogenerated.

exports.setEnvironment = function() {
  process.env['AZURE_BATCH_ACCOUNT'] = 'test4';
  process.env['AZURE_BATCH_ENDPOINT'] = 'https://test4.japaneast.batch.azure.com';
  process.env['AZURE_SUBSCRIPTION_ID'] = 'f30ef677-64a9-4768-934f-5fbbc0e1ad27';
};

exports.scopes = [[function (nock) { 
var result = 
nock('https://test4.japaneast.batch.azure.com:443')
  .get('/jobs/HelloWorldJobNodeSDKTest/jobpreparationandreleasetaskstatus?api-version=2019-08-01.10.0')
  .reply(409, "{\r\n  \"odata.metadata\":\"https://test4.japaneast.batch.azure.com/$metadata#Microsoft.Azure.Batch.Protocol.Entities.Container.errors/@Element\",\"code\":\"JobPreparationTaskOrReleaseTaskNotSpecified\",\"message\":{\r\n    \"lang\":\"en-US\",\"value\":\"The specified job does not have either job preparation task or job release task.\\nRequestId:82efc86e-2b3d-4075-9661-216a8d5bc8fe\\nTime:2019-08-05T19:43:49.6698710Z\"\r\n  }\r\n}", { 'content-length': '406',
  'content-type': 'application/json;odata=minimalmetadata',
  server: 'Microsoft-HTTPAPI/2.0',
  'request-id': '82efc86e-2b3d-4075-9661-216a8d5bc8fe',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-content-type-options': 'nosniff',
  dataserviceversion: '3.0',
  date: 'Mon, 05 Aug 2019 19:43:48 GMT',
  connection: 'close' });
 return result; }]];