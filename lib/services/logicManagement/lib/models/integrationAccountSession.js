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
 * The integration account session.
 *
 * @extends models['Resource']
 */
class IntegrationAccountSession extends models['Resource'] {
  /**
   * Create a IntegrationAccountSession.
   * @property {date} [createdTime] The created time.
   * @property {date} [changedTime] The changed time.
   * @property {object} [content] The session content.
   */
  constructor() {
    super();
  }

  /**
   * Defines the metadata of IntegrationAccountSession
   *
   * @returns {object} metadata of IntegrationAccountSession
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'IntegrationAccountSession',
      type: {
        name: 'Composite',
        className: 'IntegrationAccountSession',
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
            required: false,
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
          createdTime: {
            required: false,
            readOnly: true,
            serializedName: 'properties.createdTime',
            type: {
              name: 'DateTime'
            }
          },
          changedTime: {
            required: false,
            readOnly: true,
            serializedName: 'properties.changedTime',
            type: {
              name: 'DateTime'
            }
          },
          content: {
            required: false,
            serializedName: 'properties.content',
            type: {
              name: 'Object'
            }
          }
        }
      }
    };
  }
}

module.exports = IntegrationAccountSession;
