// This file has been autogenerated.

exports.setEnvironment = function() {
  process.env['AZURE_TEST_LOCATION'] = 'japaneast';
  process.env['AZURE_AUTOSTORAGE'] = 'nodesdkteststorage';
  process.env['AZURE_SUBSCRIPTION_ID'] = 'f30ef677-64a9-4768-934f-5fbbc0e1ad27';
};

exports.scopes = [[function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.post('/subscriptions/f30ef677-64a9-4768-934f-5fbbc0e1ad27/resourceGroups/default-azurebatch-japaneast/providers/Microsoft.Batch/batchAccounts/batchtestnodesdk/regenerateKeys?api-version=2019-08-01', '*')
  .reply(504, "{\"error\":{\"code\":\"GatewayTimeout\",\"message\":\"The gateway did not receive a response from 'Microsoft.Batch' within the specified time period.\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-failure-cause': 'service',
  'x-ms-request-id': 'e91f0a92-a75b-4b67-8a01-06d7489d9003',
  'x-ms-correlation-request-id': 'e91f0a92-a75b-4b67-8a01-06d7489d9003',
  'x-ms-routing-request-id':
   'WESTUS:20190805T190523Z:e91f0a92-a75b-4b67-8a01-06d7489d9003',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-content-type-options': 'nosniff',
  date: 'Mon, 05 Aug 2019 19:05:22 GMT',
  connection: 'close',
  'content-length': '143' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.post('/subscriptions/f30ef677-64a9-4768-934f-5fbbc0e1ad27/resourceGroups/default-azurebatch-japaneast/providers/Microsoft.Batch/batchAccounts/batchtestnodesdk/regenerateKeys?api-version=2019-08-01', '*')
  .reply(200, "{\"accountName\":\"batchtestnodesdk\",\"primary\":\"zf7E+cOmGUgvPG4XAYQNJCXiAux7shX7x0sCbsXnU8Rhb7ZXNTlfLKMFtjoLPs9qrapJj5SS530p9ZTwiwxkJQ==\",\"secondary\":\"BainmrSlDABbXtvpHhb95tdiPh8V7IE97KzC57R7nZyeslFetuaTGb2XawFA0e2tpb/uTyqWMr1TRdvSv/3poQ==\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '238',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-correlation-request-id': 'ffb9575f-7977-496c-9d55-42ab636d6fa7',
  'x-ms-request-id': '486fdbc6-e1fb-4bd4-9c2a-03044b3dbdb4',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-content-type-options': 'nosniff',
  'x-ms-ratelimit-remaining-subscription-writes': '1199',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-routing-request-id':
   'WESTUS:20190805T190557Z:ffb9575f-7977-496c-9d55-42ab636d6fa7',
  date: 'Mon, 05 Aug 2019 19:05:57 GMT',
  connection: 'close' });
 return result; }]];