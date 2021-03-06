/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

/**
 * An Application Insights component feature capability
 *
 */
class ApplicationInsightsComponentFeatureCapability {
  /**
   * Create a ApplicationInsightsComponentFeatureCapability.
   * @member {string} [name] The name of the capability.
   * @member {string} [description] The description of the capability.
   * @member {string} [value] The vaule of the capability.
   * @member {string} [unit] The unit of the capability.
   * @member {string} [meterId] The meter used for the capability.
   * @member {string} [meterRateFrequency] The meter rate of the meter.
   */
  constructor() {
  }

  /**
   * Defines the metadata of ApplicationInsightsComponentFeatureCapability
   *
   * @returns {object} metadata of ApplicationInsightsComponentFeatureCapability
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'ApplicationInsightsComponentFeatureCapability',
      type: {
        name: 'Composite',
        className: 'ApplicationInsightsComponentFeatureCapability',
        modelProperties: {
          name: {
            required: false,
            readOnly: true,
            serializedName: 'Name',
            type: {
              name: 'String'
            }
          },
          description: {
            required: false,
            readOnly: true,
            serializedName: 'Description',
            type: {
              name: 'String'
            }
          },
          value: {
            required: false,
            readOnly: true,
            serializedName: 'Value',
            type: {
              name: 'String'
            }
          },
          unit: {
            required: false,
            readOnly: true,
            serializedName: 'Unit',
            type: {
              name: 'String'
            }
          },
          meterId: {
            required: false,
            readOnly: true,
            serializedName: 'MeterId',
            type: {
              name: 'String'
            }
          },
          meterRateFrequency: {
            required: false,
            readOnly: true,
            serializedName: 'MeterRateFrequency',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = ApplicationInsightsComponentFeatureCapability;
