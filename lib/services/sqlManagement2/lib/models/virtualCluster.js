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

const models = require('./index');

/**
 * An Azure SQL virtual cluster.
 *
 * @extends models['TrackedResource']
 */
class VirtualCluster extends models['TrackedResource'] {
  /**
   * Create a VirtualCluster.
   * @property {string} [subnetId] Subnet resource ID for the virtual cluster.
   * @property {string} [family] If the service has different generations of
   * hardware, for the same SKU, then that can be captured here.
   * @property {array} [childResources] List of resources in this virtual
   * cluster.
   */
  constructor() {
    super();
  }

  /**
   * Defines the metadata of VirtualCluster
   *
   * @returns {object} metadata of VirtualCluster
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'VirtualCluster',
      type: {
        name: 'Composite',
        className: 'VirtualCluster',
        modelProperties: {
          id: {
            required: false,
            readOnly: true,
            serializedName: 'id',
            type: {
              name: 'String'
            }
          },
          name: {
            required: false,
            readOnly: true,
            serializedName: 'name',
            type: {
              name: 'String'
            }
          },
          type: {
            required: false,
            readOnly: true,
            serializedName: 'type',
            type: {
              name: 'String'
            }
          },
          location: {
            required: true,
            serializedName: 'location',
            type: {
              name: 'String'
            }
          },
          tags: {
            required: false,
            serializedName: 'tags',
            type: {
              name: 'Dictionary',
              value: {
                  required: false,
                  serializedName: 'StringElementType',
                  type: {
                    name: 'String'
                  }
              }
            }
          },
          subnetId: {
            required: false,
            readOnly: true,
            serializedName: 'properties.subnetId',
            type: {
              name: 'String'
            }
          },
          family: {
            required: false,
            serializedName: 'properties.family',
            type: {
              name: 'String'
            }
          },
          childResources: {
            required: false,
            readOnly: true,
            serializedName: 'properties.childResources',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'StringElementType',
                  type: {
                    name: 'String'
                  }
              }
            }
          }
        }
      }
    };
  }
}

module.exports = VirtualCluster;
