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
 * Descriptions of APIM policies.
 *
 */
class PolicyDescriptionCollection {
  /**
   * Create a PolicyDescriptionCollection.
   * @property {array} [value] Descriptions of APIM policies.
   * @property {number} [count] Total record count number.
   */
  constructor() {
  }

  /**
   * Defines the metadata of PolicyDescriptionCollection
   *
   * @returns {object} metadata of PolicyDescriptionCollection
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'PolicyDescriptionCollection',
      type: {
        name: 'Composite',
        className: 'PolicyDescriptionCollection',
        modelProperties: {
          value: {
            required: false,
            serializedName: 'value',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'PolicyDescriptionContractElementType',
                  type: {
                    name: 'Composite',
                    className: 'PolicyDescriptionContract'
                  }
              }
            }
          },
          count: {
            required: false,
            serializedName: 'count',
            type: {
              name: 'Number'
            }
          }
        }
      }
    };
  }
}

module.exports = PolicyDescriptionCollection;