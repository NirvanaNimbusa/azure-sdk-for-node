// This file has been autogenerated.

exports.setEnvironment = function() {
  process.env['AZURE_TEST_LOCATION'] = 'japaneast';
  process.env['AZURE_AUTOSTORAGE'] = 'nodesdkteststorage';
  process.env['AZURE_SUBSCRIPTION_ID'] = 'f30ef677-64a9-4768-934f-5fbbc0e1ad27';
};

exports.scopes = [[function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/providers/Microsoft.Batch/operations?api-version=2019-08-01')
  .reply(200, "{\"value\":[{\"name\":\"Microsoft.Batch/batchAccounts/providers/Microsoft.Insights/diagnosticSettings/read\",\"display\":{\"provider\":\"Microsoft Batch\",\"resource\":\"Batch Accounts\",\"operation\":\"Read diagnostic setting\",\"description\":\"Gets the diagnostic setting for the resource\"},\"isDataAction\":false,\"origin\":\"system\"},{\"name\":\"Microsoft.Batch/batchAccounts/providers/Microsoft.Insights/diagnosticSettings/write\",\"display\":{\"provider\":\"Microsoft Batch\",\"resource\":\"Batch Accounts\",\"operation\":\"Write diagnostic setting\",\"description\":\"Creates or updates the diagnostic setting for the resource\"},\"isDataAction\":false,\"origin\":\"system\"},{\"name\":\"Microsoft.Batch/batchAccounts/providers/Microsoft.Insights/logDefinitions/read\",\"display\":{\"provider\":\"Microsoft Batch\",\"resource\":\"Batch Account Log Definitions\",\"operation\":\"Read Batch service log definitions\",\"description\":\"Gets the available logs for the Batch service\"},\"isDataAction\":false,\"origin\":\"system\",\"properties\":{\"serviceSpecification\":{\"logSpecifications\":[{\"name\":\"ServiceLog\",\"displayName\":\"Service Logs\",\"blobDuration\":\"PT1H\"}]}}},{\"name\":\"Microsoft.Batch/batchAccounts/providers/Microsoft.Insights/metricDefinitions/read\",\"display\":{\"provider\":\"Microsoft Batch\",\"resource\":\"Batch Account Metric Definitions\",\"operation\":\"Read Batch service metric definitions\",\"description\":\"Gets the available metrics for the Batch service\"},\"isDataAction\":false,\"origin\":\"system\",\"properties\":{\"serviceSpecification\":{\"metricSpecifications\":[{\"name\":\"CoreCount\",\"displayName\":\"Dedicated Core Count\",\"displayDescription\":\"Total number of dedicated cores in the batch account\",\"unit\":\"Count\",\"aggregationType\":\"Total\",\"lockAggregationType\":\"Total\",\"fillGapWithZero\":true,\"availabilities\":[{\"timeGrain\":\"PT1M\",\"blobDuration\":\"PT1H\"}],\"supportsInstanceLevelAggregation\":false,\"enableRegionalMdmAccount\":false},{\"name\":\"TotalNodeCount\",\"displayName\":\"Dedicated Node Count\",\"displayDescription\":\"Total number of dedicated nodes in the batch account\",\"unit\":\"Count\",\"aggregationType\":\"Total\",\"lockAggregationType\":\"Total\",\"fillGapWithZero\":true,\"availabilities\":[{\"timeGrain\":\"PT1M\",\"blobDuration\":\"PT1H\"}],\"supportsInstanceLevelAggregation\":false,\"enableRegionalMdmAccount\":false},{\"name\":\"LowPriorityCoreCount\",\"displayName\":\"LowPriority Core Count\",\"displayDescription\":\"Total number of low-priority cores in the batch account\",\"unit\":\"Count\",\"aggregationType\":\"Total\",\"lockAggregationType\":\"Total\",\"fillGapWithZero\":true,\"availabilities\":[{\"timeGrain\":\"PT1M\",\"blobDuration\":\"PT1H\"}],\"supportsInstanceLevelAggregation\":false,\"enableRegionalMdmAccount\":false},{\"name\":\"TotalLowPriorityNodeCount\",\"displayName\":\"Low-Priority Node Count\",\"displayDescription\":\"Total number of low-priority nodes in the batch account\",\"unit\":\"Count\",\"aggregationType\":\"Total\",\"lockAggregationType\":\"Total\",\"fillGapWithZero\":true,\"availabilities\":[{\"timeGrain\":\"PT1M\",\"blobDuration\":\"PT1H\"}],\"supportsInstanceLevelAggregation\":false,\"enableRegionalMdmAccount\":false},{\"name\":\"CreatingNodeCount\",\"displayName\":\"Creating Node Count\",\"displayDescription\":\"Number of nodes being created\",\"unit\":\"Count\",\"aggregationType\":\"Total\",\"lockAggregationType\":\"Total\",\"fillGapWithZero\":true,\"availabilities\":[{\"timeGrain\":\"PT1M\",\"blobDuration\":\"PT1H\"}],\"supportsInstanceLevelAggregation\":false,\"enableRegionalMdmAccount\":false},{\"name\":\"StartingNodeCount\",\"displayName\":\"Starting Node Count\",\"displayDescription\":\"Number of nodes starting\",\"unit\":\"Count\",\"aggregationType\":\"Total\",\"lockAggregationType\":\"Total\",\"fillGapWithZero\":true,\"availabilities\":[{\"timeGrain\":\"PT1M\",\"blobDuration\":\"PT1H\"}],\"supportsInstanceLevelAggregation\":false,\"enableRegionalMdmAccount\":false},{\"name\":\"WaitingForStartTaskNodeCount\",\"displayName\":\"Waiting For Start Task Node Count\",\"displayDescription\":\"Number of nodes waiting for the Start Task to complete\",\"unit\":\"Count\",\"aggregationType\":\"Total\",\"lockAggregationType\":\"Total\",\"fillGapWithZero\":true,\"availabilities\":[{\"timeGrain\":\"PT1M\",\"blobDuration\":\"PT1H\"}],\"supportsInstanceLevelAggregation\":false,\"enableRegionalMdmAccount\":false},{\"name\":\"StartTaskFailedNodeCount\",\"displayName\":\"Start Task Failed Node Count\",\"displayDescription\":\"Number of nodes where the Start Task has failed\",\"unit\":\"Count\",\"aggregationType\":\"Total\",\"lockAggregationType\":\"Total\",\"fillGapWithZero\":true,\"availabilities\":[{\"timeGrain\":\"PT1M\",\"blobDuration\":\"PT1H\"}],\"supportsInstanceLevelAggregation\":false,\"enableRegionalMdmAccount\":false},{\"name\":\"IdleNodeCount\",\"displayName\":\"Idle Node Count\",\"displayDescription\":\"Number of idle nodes\",\"unit\":\"Count\",\"aggregationType\":\"Total\",\"lockAggregationType\":\"Total\",\"fillGapWithZero\":true,\"availabilities\":[{\"timeGrain\":\"PT1M\",\"blobDuration\":\"PT1H\"}],\"supportsInstanceLevelAggregation\":false,\"enableRegionalMdmAccount\":false},{\"name\":\"OfflineNodeCount\",\"displayName\":\"Offline Node Count\",\"displayDescription\":\"Number of offline nodes\",\"unit\":\"Count\",\"aggregationType\":\"Total\",\"lockAggregationType\":\"Total\",\"fillGapWithZero\":true,\"availabilities\":[{\"timeGrain\":\"PT1M\",\"blobDuration\":\"PT1H\"}],\"supportsInstanceLevelAggregation\":false,\"enableRegionalMdmAccount\":false},{\"name\":\"RebootingNodeCount\",\"displayName\":\"Rebooting Node Count\",\"displayDescription\":\"Number of rebooting nodes\",\"unit\":\"Count\",\"aggregationType\":\"Total\",\"lockAggregationType\":\"Total\",\"fillGapWithZero\":true,\"availabilities\":[{\"timeGrain\":\"PT1M\",\"blobDuration\":\"PT1H\"}],\"supportsInstanceLevelAggregation\":false,\"enableRegionalMdmAccount\":false},{\"name\":\"ReimagingNodeCount\",\"displayName\":\"Reimaging Node Count\",\"displayDescription\":\"Number of reimaging nodes\",\"unit\":\"Count\",\"aggregationType\":\"Total\",\"lockAggregationType\":\"Total\",\"fillGapWithZero\":true,\"availabilities\":[{\"timeGrain\":\"PT1M\",\"blobDuration\":\"PT1H\"}],\"supportsInstanceLevelAggregation\":false,\"enableRegionalMdmAccount\":false},{\"name\":\"RunningNodeCount\",\"displayName\":\"Running Node Count\",\"displayDescription\":\"Number of running nodes\",\"unit\":\"Count\",\"aggregationType\":\"Total\",\"lockAggregationType\":\"Total\",\"fillGapWithZero\":true,\"availabilities\":[{\"timeGrain\":\"PT1M\",\"blobDuration\":\"PT1H\"}],\"supportsInstanceLevelAggregation\":false,\"enableRegionalMdmAccount\":false},{\"name\":\"LeavingPoolNodeCount\",\"displayName\":\"Leaving Pool Node Count\",\"displayDescription\":\"Number of nodes leaving the Pool\",\"unit\":\"Count\",\"aggregationType\":\"Total\",\"lockAggregationType\":\"Total\",\"fillGapWithZero\":true,\"availabilities\":[{\"timeGrain\":\"PT1M\",\"blobDuration\":\"PT1H\"}],\"supportsInstanceLevelAggregation\":false,\"enableRegionalMdmAccount\":false},{\"name\":\"UnusableNodeCount\",\"displayName\":\"Unusable Node Count\",\"displayDescription\":\"Number of unusable nodes\",\"unit\":\"Count\",\"aggregationType\":\"Total\",\"lockAggregationType\":\"Total\",\"fillGapWithZero\":true,\"availabilities\":[{\"timeGrain\":\"PT1M\",\"blobDuration\":\"PT1H\"}],\"supportsInstanceLevelAggregation\":false,\"enableRegionalMdmAccount\":false},{\"name\":\"PreemptedNodeCount\",\"displayName\":\"Preempted Node Count\",\"displayDescription\":\"Number of preempted nodes\",\"unit\":\"Count\",\"aggregationType\":\"Total\",\"lockAggregationType\":\"Total\",\"fillGapWithZero\":true,\"availabilities\":[{\"timeGrain\":\"PT1M\",\"blobDuration\":\"PT1H\"}],\"supportsInstanceLevelAggregation\":false,\"enableRegionalMdmAccount\":false},{\"name\":\"TaskStartEvent\",\"displayName\":\"Task Start Events\",\"displayDescription\":\"Total number of tasks that have started\",\"unit\":\"Count\",\"aggregationType\":\"Total\",\"fillGapWithZero\":false,\"availabilities\":[{\"timeGrain\":\"PT1M\",\"blobDuration\":\"PT1H\"}],\"supportsInstanceLevelAggregation\":false,\"enableRegionalMdmAccount\":false},{\"name\":\"TaskCompleteEvent\",\"displayName\":\"Task Complete Events\",\"displayDescription\":\"Total number of tasks that have completed\",\"unit\":\"Count\",\"aggregationType\":\"Total\",\"fillGapWithZero\":false,\"availabilities\":[{\"timeGrain\":\"PT1M\",\"blobDuration\":\"PT1H\"}],\"supportsInstanceLevelAggregation\":false,\"enableRegionalMdmAccount\":false},{\"name\":\"TaskFailEvent\",\"displayName\":\"Task Fail Events\",\"displayDescription\":\"Total number of tasks that have completed in a failed state\",\"unit\":\"Count\",\"aggregationType\":\"Total\",\"fillGapWithZero\":false,\"availabilities\":[{\"timeGrain\":\"PT1M\",\"blobDuration\":\"PT1H\"}],\"supportsInstanceLevelAggregation\":false,\"enableRegionalMdmAccount\":false},{\"name\":\"PoolCreateEvent\",\"displayName\":\"Pool Create Events\",\"displayDescription\":\"Total number of pools that have been created\",\"unit\":\"Count\",\"aggregationType\":\"Total\",\"fillGapWithZero\":false,\"availabilities\":[{\"timeGrain\":\"PT1M\",\"blobDuration\":\"PT1H\"}],\"supportsInstanceLevelAggregation\":false,\"enableRegionalMdmAccount\":false},{\"name\":\"PoolResizeStartEvent\",\"displayName\":\"Pool Resize Start Events\",\"displayDescription\":\"Total number of pool resizes that have started\",\"unit\":\"Count\",\"aggregationType\":\"Total\",\"fillGapWithZero\":false,\"availabilities\":[{\"timeGrain\":\"PT1M\",\"blobDuration\":\"PT1H\"}],\"supportsInstanceLevelAggregation\":false,\"enableRegionalMdmAccount\":false},{\"name\":\"PoolResizeCompleteEvent\",\"displayName\":\"Pool Resize Complete Events\",\"displayDescription\":\"Total number of pool resizes that have completed\",\"unit\":\"Count\",\"aggregationType\":\"Total\",\"fillGapWithZero\":false,\"availabilities\":[{\"timeGrain\":\"PT1M\",\"blobDuration\":\"PT1H\"}],\"supportsInstanceLevelAggregation\":false,\"enableRegionalMdmAccount\":false},{\"name\":\"PoolDeleteStartEvent\",\"displayName\":\"Pool Delete Start Events\",\"displayDescription\":\"Total number of pool deletes that have started\",\"unit\":\"Count\",\"aggregationType\":\"Total\",\"fillGapWithZero\":false,\"availabilities\":[{\"timeGrain\":\"PT1M\",\"blobDuration\":\"PT1H\"}],\"supportsInstanceLevelAggregation\":false,\"enableRegionalMdmAccount\":false},{\"name\":\"PoolDeleteCompleteEvent\",\"displayName\":\"Pool Delete Complete Events\",\"displayDescription\":\"Total number of pool deletes that have completed\",\"unit\":\"Count\",\"aggregationType\":\"Total\",\"fillGapWithZero\":false,\"availabilities\":[{\"timeGrain\":\"PT1M\",\"blobDuration\":\"PT1H\"}],\"supportsInstanceLevelAggregation\":false,\"enableRegionalMdmAccount\":false},{\"name\":\"JobDeleteCompleteEvent\",\"displayName\":\"Job Delete Complete Events\",\"displayDescription\":\"Total number of jobs that have been successfully deleted.\",\"unit\":\"Count\",\"aggregationType\":\"Total\",\"fillGapWithZero\":false,\"availabilities\":[{\"timeGrain\":\"PT1M\",\"blobDuration\":\"PT1H\"}],\"supportsInstanceLevelAggregation\":false,\"enableRegionalMdmAccount\":false},{\"name\":\"JobDeleteStartEvent\",\"displayName\":\"Job Delete Start Events\",\"displayDescription\":\"Total number of jobs that have been requested to be deleted.\",\"unit\":\"Count\",\"aggregationType\":\"Total\",\"fillGapWithZero\":false,\"availabilities\":[{\"timeGrain\":\"PT1M\",\"blobDuration\":\"PT1H\"}],\"supportsInstanceLevelAggregation\":false,\"enableRegionalMdmAccount\":false},{\"name\":\"JobDisableCompleteEvent\",\"displayName\":\"Job Disable Complete Events\",\"displayDescription\":\"Total number of jobs that have been successfully disabled.\",\"unit\":\"Count\",\"aggregationType\":\"Total\",\"fillGapWithZero\":false,\"availabilities\":[{\"timeGrain\":\"PT1M\",\"blobDuration\":\"PT1H\"}],\"supportsInstanceLevelAggregation\":false,\"enableRegionalMdmAccount\":false},{\"name\":\"JobDisableStartEvent\",\"displayName\":\"Job Disable Start Events\",\"displayDescription\":\"Total number of jobs that have been requested to be disabled.\",\"unit\":\"Count\",\"aggregationType\":\"Total\",\"fillGapWithZero\":false,\"availabilities\":[{\"timeGrain\":\"PT1M\",\"blobDuration\":\"PT1H\"}],\"supportsInstanceLevelAggregation\":false,\"enableRegionalMdmAccount\":false},{\"name\":\"JobStartEvent\",\"displayName\":\"Job Start Events\",\"displayDescription\":\"Total number of jobs that have been successfully started.\",\"unit\":\"Count\",\"aggregationType\":\"Total\",\"fillGapWithZero\":false,\"availabilities\":[{\"timeGrain\":\"PT1M\",\"blobDuration\":\"PT1H\"}],\"supportsInstanceLevelAggregation\":false,\"enableRegionalMdmAccount\":false},{\"name\":\"JobTerminateCompleteEvent\",\"displayName\":\"Job Terminate Complete Events\",\"displayDescription\":\"Total number of jobs that have been successfully terminated.\",\"unit\":\"Count\",\"aggregationType\":\"Total\",\"fillGapWithZero\":false,\"availabilities\":[{\"timeGrain\":\"PT1M\",\"blobDuration\":\"PT1H\"}],\"supportsInstanceLevelAggregation\":false,\"enableRegionalMdmAccount\":false},{\"name\":\"JobTerminateStartEvent\",\"displayName\":\"Job Terminate Start Events\",\"displayDescription\":\"Total number of jobs that have been requested to be terminated.\",\"unit\":\"Count\",\"aggregationType\":\"Total\",\"fillGapWithZero\":false,\"availabilities\":[{\"timeGrain\":\"PT1M\",\"blobDuration\":\"PT1H\"}],\"supportsInstanceLevelAggregation\":false,\"enableRegionalMdmAccount\":false}]}}},{\"name\":\"Microsoft.Batch/batchAccounts/jobs/read\",\"display\":{\"provider\":\"Microsoft Batch\",\"resource\":\"Jobs\",\"operation\":\"List or Get Jobs\",\"description\":\"Lists jobs on a Batch account or gets the properties of a job\"},\"isDataAction\":true},{\"name\":\"Microsoft.Batch/batchAccounts/jobs/write\",\"display\":{\"provider\":\"Microsoft Batch\",\"resource\":\"Jobs\",\"operation\":\"Create or Update Job\",\"description\":\"Creates a new job on a Batch account or updates an existing job\"},\"isDataAction\":true},{\"name\":\"Microsoft.Batch/batchAccounts/jobs/delete\",\"display\":{\"provider\":\"Microsoft Batch\",\"resource\":\"Jobs\",\"operation\":\"Delete Job\",\"description\":\"Deletes a job from a Batch account\"},\"isDataAction\":true},{\"name\":\"Microsoft.Batch/batchAccounts/jobSchedules/read\",\"display\":{\"provider\":\"Microsoft Batch\",\"resource\":\"Job Schedules\",\"operation\":\"List or Get Job Schedules\",\"description\":\"Lists job schedules on a Batch account or gets the properties of a job schedule\"},\"isDataAction\":true},{\"name\":\"Microsoft.Batch/batchAccounts/jobSchedules/write\",\"display\":{\"provider\":\"Microsoft Batch\",\"resource\":\"Job Schedules\",\"operation\":\"Create or Update Job Schedule\",\"description\":\"Creates a new job schedule on a Batch account or updates an existing job schedule\"},\"isDataAction\":true},{\"name\":\"Microsoft.Batch/batchAccounts/jobSchedules/delete\",\"display\":{\"provider\":\"Microsoft Batch\",\"resource\":\"Job Schedules\",\"operation\":\"Delete Job Schedule\",\"description\":\"Deletes a job schedule from a Batch account\"},\"isDataAction\":true},{\"name\":\"Microsoft.Batch/operations/read\",\"display\":{\"provider\":\"Microsoft Batch\",\"resource\":\"Available Batch Operations\",\"operation\":\"List Available Batch Operations\",\"description\":\"Lists operations available on Microsoft.Batch resource provider\"},\"isDataAction\":false},{\"name\":\"Microsoft.Batch/batchAccounts/read\",\"display\":{\"provider\":\"Microsoft Batch\",\"resource\":\"Batch Accounts\",\"operation\":\"List or Get Batch Accounts\",\"description\":\"Lists Batch accounts or gets the properties of a Batch account\"},\"isDataAction\":false,\"origin\":\"user,system\"},{\"name\":\"Microsoft.Batch/batchAccounts/write\",\"display\":{\"provider\":\"Microsoft Batch\",\"resource\":\"Batch Accounts\",\"operation\":\"Create or Update Batch Account\",\"description\":\"Creates a new Batch account or updates an existing Batch account\"},\"isDataAction\":false,\"origin\":\"user,system\"},{\"name\":\"Microsoft.Batch/batchAccounts/delete\",\"display\":{\"provider\":\"Microsoft Batch\",\"resource\":\"Batch Accounts\",\"operation\":\"Delete Batch Account\",\"description\":\"Deletes a Batch account\"},\"isDataAction\":false,\"origin\":\"user,system\"},{\"name\":\"Microsoft.Batch/batchAccounts/listkeys/action\",\"display\":{\"provider\":\"Microsoft Batch\",\"resource\":\"Batch Accounts\",\"operation\":\"List Batch Account Keys\",\"description\":\"Lists access keys for a Batch account\"},\"isDataAction\":false,\"origin\":\"user,system\"},{\"name\":\"Microsoft.Batch/batchAccounts/regeneratekeys/action\",\"display\":{\"provider\":\"Microsoft Batch\",\"resource\":\"Batch Accounts\",\"operation\":\"Regenerate Batch Account Keys\",\"description\":\"Regenerates access keys for a Batch account\"},\"isDataAction\":false,\"origin\":\"user,system\"},{\"name\":\"Microsoft.Batch/locations/quotas/read\",\"display\":{\"provider\":\"Microsoft Batch\",\"resource\":\"Batch Quotas\",\"operation\":\"Get Batch Quotas\",\"description\":\"Gets Batch quotas of the specified subscription at the specified Azure region\"},\"isDataAction\":false,\"origin\":\"user,system\"},{\"name\":\"Microsoft.Batch/locations/checkNameAvailability/action\",\"display\":{\"provider\":\"Microsoft Batch\",\"resource\":\"Name Availability\",\"operation\":\"Check Name Availability\",\"description\":\"Checks that the account name is valid and not in use.\"},\"isDataAction\":false,\"origin\":\"user,system\"},{\"name\":\"Microsoft.Batch/batchAccounts/operationResults/read\",\"display\":{\"provider\":\"Microsoft Batch\",\"resource\":\"Batch Resource Provider\",\"operation\":\"Get Batch account operation results\",\"description\":\"Gets the results of a long running Batch account operation\"},\"isDataAction\":false},{\"name\":\"Microsoft.Batch/locations/accountOperationResults/read\",\"display\":{\"provider\":\"Microsoft Batch\",\"resource\":\"Batch Resource Provider\",\"operation\":\"Get Batch account operation results\",\"description\":\"Gets the results of a long running Batch account operation\"},\"isDataAction\":false},{\"name\":\"Microsoft.Batch/register/action\",\"display\":{\"provider\":\"Microsoft Batch\",\"resource\":\"Batch Resource Provider\",\"operation\":\"Register the Batch Resource Provider\",\"description\":\"Registers the subscription for the Batch Resource Provider and enables the creation of Batch accounts\"},\"isDataAction\":false,\"origin\":\"user,system\"},{\"name\":\"Microsoft.Batch/unregister/action\",\"display\":{\"provider\":\"Microsoft Batch\",\"resource\":\"Batch Resource Provider\",\"operation\":\"Unregister the Batch Resource Provider\",\"description\":\"Unregisters the subscription for the Batch Resource Provider preventing the creation of Batch accounts\"},\"isDataAction\":false,\"origin\":\"user,system\"},{\"name\":\"Microsoft.Batch/batchAccounts/syncAutoStorageKeys/action\",\"display\":{\"provider\":\"Microsoft Batch\",\"resource\":\"Batch Accounts\",\"operation\":\"Synchronize Auto Storage Account Keys\",\"description\":\"Synchronizes access keys for the auto storage account configured for a Batch account\"},\"isDataAction\":false,\"origin\":\"user,system\"},{\"name\":\"Microsoft.Batch/batchAccounts/applications/read\",\"display\":{\"provider\":\"Microsoft Batch\",\"resource\":\"Applications\",\"operation\":\"List or Get Applications\",\"description\":\"Lists applications or gets the properties of an application\"},\"isDataAction\":false,\"origin\":\"user,system\"},{\"name\":\"Microsoft.Batch/batchAccounts/applications/write\",\"display\":{\"provider\":\"Microsoft Batch\",\"resource\":\"Applications\",\"operation\":\"Create or Update Application\",\"description\":\"Creates a new application or updates an existing application\"},\"isDataAction\":false,\"origin\":\"user,system\"},{\"name\":\"Microsoft.Batch/batchAccounts/applications/delete\",\"display\":{\"provider\":\"Microsoft Batch\",\"resource\":\"Applications\",\"operation\":\"Delete Application\",\"description\":\"Deletes an application\"},\"isDataAction\":false,\"origin\":\"user,system\"},{\"name\":\"Microsoft.Batch/batchAccounts/applications/versions/read\",\"display\":{\"provider\":\"Microsoft Batch\",\"resource\":\"Application Packages\",\"operation\":\"Get Application Package\",\"description\":\"Gets the properties of an application package\"},\"isDataAction\":false,\"origin\":\"user,system\"},{\"name\":\"Microsoft.Batch/batchAccounts/applications/versions/write\",\"display\":{\"provider\":\"Microsoft Batch\",\"resource\":\"Application Packages\",\"operation\":\"Create or Update Application Package\",\"description\":\"Creates a new application package or updates an existing application package\"},\"isDataAction\":false,\"origin\":\"user,system\"},{\"name\":\"Microsoft.Batch/batchAccounts/applications/versions/delete\",\"display\":{\"provider\":\"Microsoft Batch\",\"resource\":\"Application Packages\",\"operation\":\"Delete Application Package\",\"description\":\"Deletes an application package\"},\"isDataAction\":false,\"origin\":\"user,system\"},{\"name\":\"Microsoft.Batch/batchAccounts/applications/versions/activate/action\",\"display\":{\"provider\":\"Microsoft Batch\",\"resource\":\"Application Packages\",\"operation\":\"Activate Application Package\",\"description\":\"Activates an application package\"},\"isDataAction\":false,\"origin\":\"user,system\"},{\"name\":\"Microsoft.Batch/batchAccounts/certificates/read\",\"display\":{\"provider\":\"Microsoft Batch\",\"resource\":\"Certificates\",\"operation\":\"List or Get Certificates\",\"description\":\"Lists certificates on a Batch account or gets the properties of a certificate\"},\"isDataAction\":false},{\"name\":\"Microsoft.Batch/batchAccounts/certificates/write\",\"display\":{\"provider\":\"Microsoft Batch\",\"resource\":\"Certificates\",\"operation\":\"Create or Update Certificate\",\"description\":\"Creates a new certificate on a Batch account or updates an existing certificate\"},\"isDataAction\":false},{\"name\":\"Microsoft.Batch/batchAccounts/certificates/delete\",\"display\":{\"provider\":\"Microsoft Batch\",\"resource\":\"Certificates\",\"operation\":\"Delete Certificate\",\"description\":\"Deletes a certificate from a Batch account\"},\"isDataAction\":false},{\"name\":\"Microsoft.Batch/batchAccounts/certificates/cancelDelete/action\",\"display\":{\"provider\":\"Microsoft Batch\",\"resource\":\"Certificates\",\"operation\":\"Cancel Delete Certificate\",\"description\":\"Cancels the failed deletion of a certificate on a Batch account\"},\"isDataAction\":false},{\"name\":\"Microsoft.Batch/batchAccounts/certificateOperationResults/read\",\"display\":{\"provider\":\"Microsoft Batch\",\"resource\":\"Certificates\",\"operation\":\"Get Certificate Operation Results\",\"description\":\"Gets the results of a long running certificate operation on a Batch account\"},\"isDataAction\":false},{\"name\":\"Microsoft.Batch/batchAccounts/pools/read\",\"display\":{\"provider\":\"Microsoft Batch\",\"resource\":\"Pools\",\"operation\":\"List or Get Pools\",\"description\":\"Lists pools on a Batch account or gets the properties of a pool\"},\"isDataAction\":false},{\"name\":\"Microsoft.Batch/batchAccounts/pools/write\",\"display\":{\"provider\":\"Microsoft Batch\",\"resource\":\"Pools\",\"operation\":\"Create or Update Pool\",\"description\":\"Creates a new pool on a Batch account or updates an existing pool\"},\"isDataAction\":false},{\"name\":\"Microsoft.Batch/batchAccounts/pools/delete\",\"display\":{\"provider\":\"Microsoft Batch\",\"resource\":\"Pools\",\"operation\":\"Delete Pool\",\"description\":\"Deletes a pool from a Batch account\"},\"isDataAction\":false},{\"name\":\"Microsoft.Batch/batchAccounts/pools/stopResize/action\",\"display\":{\"provider\":\"Microsoft Batch\",\"resource\":\"Pools\",\"operation\":\"Stop Pool Resize\",\"description\":\"Stops an ongoing resize operation on a Batch account pool\"},\"isDataAction\":false},{\"name\":\"Microsoft.Batch/batchAccounts/pools/disableAutoscale/action\",\"display\":{\"provider\":\"Microsoft Batch\",\"resource\":\"Pools\",\"operation\":\"Disable Pool AutoScale\",\"description\":\"Disables automatic scaling for a Batch account pool\"},\"isDataAction\":false},{\"name\":\"Microsoft.Batch/batchAccounts/poolOperationResults/read\",\"display\":{\"provider\":\"Microsoft Batch\",\"resource\":\"Pools\",\"operation\":\"Get Pool Operation Results\",\"description\":\"Gets the results of a long running pool operation on a Batch account\"},\"isDataAction\":false}]}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '22611',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-correlation-request-id': 'e16c1f96-ae43-45e3-97a6-e263e5b59cc2',
  'x-ms-request-id': 'a1e3e478-f4c3-4920-8146-c99e788fa260',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-content-type-options': 'nosniff',
  'x-ms-ratelimit-remaining-tenant-reads': '11999',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-routing-request-id':
   'WESTUS:20190805T185952Z:e16c1f96-ae43-45e3-97a6-e263e5b59cc2',
  date: 'Mon, 05 Aug 2019 18:59:52 GMT',
  connection: 'close' });
 return result; }]];