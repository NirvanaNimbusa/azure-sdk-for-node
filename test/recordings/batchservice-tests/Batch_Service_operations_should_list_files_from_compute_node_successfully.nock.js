// This file has been autogenerated.

exports.setEnvironment = function() {
  process.env['AZURE_BATCH_ACCOUNT'] = 'test4';
  process.env['AZURE_BATCH_ENDPOINT'] = 'https://test4.japaneast.batch.azure.com';
  process.env['AZURE_SUBSCRIPTION_ID'] = 'f30ef677-64a9-4768-934f-5fbbc0e1ad27';
};

exports.scopes = [[function (nock) { 
var result = 
nock('https://test4.japaneast.batch.azure.com:443')
  .get('/pools/nodesdktestpool1/nodes/tvmps_df2856522929bc459890886631f242aba80c6c378ef3b3609e878d7e94bdc150_d/files?api-version=2019-08-01.10.0')
  .reply(200, "{\r\n  \"odata.metadata\":\"https://test4.japaneast.batch.azure.com/$metadata#files\",\"value\":[\r\n    {\r\n      \"name\":\"applications\",\"url\":\"https://test4.japaneast.batch.azure.com/pools/nodesdktestpool1/nodes/tvmps_df2856522929bc459890886631f242aba80c6c378ef3b3609e878d7e94bdc150_d/files/applications\",\"isDirectory\":true\r\n    },{\r\n      \"name\":\"fsmounts\",\"url\":\"https://test4.japaneast.batch.azure.com/pools/nodesdktestpool1/nodes/tvmps_df2856522929bc459890886631f242aba80c6c378ef3b3609e878d7e94bdc150_d/files/fsmounts\",\"isDirectory\":true\r\n    },{\r\n      \"name\":\"shared\",\"url\":\"https://test4.japaneast.batch.azure.com/pools/nodesdktestpool1/nodes/tvmps_df2856522929bc459890886631f242aba80c6c378ef3b3609e878d7e94bdc150_d/files/shared\",\"isDirectory\":true\r\n    },{\r\n      \"name\":\"startup\",\"url\":\"https://test4.japaneast.batch.azure.com/pools/nodesdktestpool1/nodes/tvmps_df2856522929bc459890886631f242aba80c6c378ef3b3609e878d7e94bdc150_d/files/startup\",\"isDirectory\":true\r\n    },{\r\n      \"name\":\"volatile\",\"url\":\"https://test4.japaneast.batch.azure.com/pools/nodesdktestpool1/nodes/tvmps_df2856522929bc459890886631f242aba80c6c378ef3b3609e878d7e94bdc150_d/files/volatile\",\"isDirectory\":true\r\n    },{\r\n      \"name\":\"workitems\",\"url\":\"https://test4.japaneast.batch.azure.com/pools/nodesdktestpool1/nodes/tvmps_df2856522929bc459890886631f242aba80c6c378ef3b3609e878d7e94bdc150_d/files/workitems\",\"isDirectory\":true\r\n    }\r\n  ]\r\n}", { 'transfer-encoding': 'chunked',
  'content-type': 'application/json;odata=minimalmetadata',
  server: 'Microsoft-HTTPAPI/2.0',
  'request-id': '761d085b-73c1-4ccc-827d-855531b1f739',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-content-type-options': 'nosniff',
  dataserviceversion: '3.0',
  date: 'Mon, 05 Aug 2019 21:34:43 GMT',
  connection: 'close' });
 return result; }]];