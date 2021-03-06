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
 * Usage for vault.
 */
class VaultUsageList extends Array {
  /**
   * Create a VaultUsageList.
   */
  constructor() {
    super();
  }

  /**
   * Defines the metadata of VaultUsageList
   *
   * @returns {object} metadata of VaultUsageList
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'VaultUsageList',
      type: {
        name: 'Composite',
        className: 'VaultUsageList',
        modelProperties: {
          value: {
            required: false,
            serializedName: '',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'VaultUsageElementType',
                  type: {
                    name: 'Composite',
                    className: 'VaultUsage'
                  }
              }
            }
          }
        }
      }
    };
  }
}

module.exports = VaultUsageList;
