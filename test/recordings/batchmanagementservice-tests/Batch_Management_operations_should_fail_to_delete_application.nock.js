// This file has been autogenerated.

exports.setEnvironment = function() {
  process.env['AZURE_TEST_LOCATION'] = 'japaneast';
  process.env['AZURE_AUTOSTORAGE'] = 'nodesdkteststorage';
  process.env['AZURE_SUBSCRIPTION_ID'] = 'f30ef677-64a9-4768-934f-5fbbc0e1ad27';
};

exports.scopes = [[function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .delete('/subscriptions/f30ef677-64a9-4768-934f-5fbbc0e1ad27/resourceGroups/default-azurebatch-japaneast/providers/Microsoft.Batch/batchAccounts/batchtestnodesdk/applications/my_application_id?api-version=2019-08-01')
  .reply(409, "{\"error\":{\"code\":\"ApplicationPackagesNotEmpty\",\"message\":\"The list of application packages for the specified application is not empty.\\nRequestId:4686e5c9-dde2-403f-ba43-970bc901f6ad\\nTime:2019-08-05T19:01:33.0082169Z\",\"target\":\"BatchAccount\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '244',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-correlation-request-id': 'ec878c1e-ed01-4709-ac05-84d2b1fefa85',
  'x-ms-request-id': '4686e5c9-dde2-403f-ba43-970bc901f6ad',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-content-type-options': 'nosniff',
  'x-ms-ratelimit-remaining-subscription-deletes': '14999',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-routing-request-id':
   'WESTUS:20190805T190133Z:ec878c1e-ed01-4709-ac05-84d2b1fefa85',
  date: 'Mon, 05 Aug 2019 19:01:32 GMT',
  connection: 'close' });
 return result; }]];