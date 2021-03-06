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
 * @summary The code and message for an error.
  *
 */
class ErrorInfo {
  /**
   * Create a ErrorInfo.
   * @member {string} code A machine readable error code.
   * @member {string} message A human readable error message.
   * @member {array} [details] error details.
   * @member {string} [innererror] Inner error details if they exist.
   */
  constructor() {
  }

  /**
   * Defines the metadata of ErrorInfo
   *
   * @returns {object} metadata of ErrorInfo
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'ErrorInfo',
      type: {
        name: 'Composite',
        className: 'ErrorInfo',
        modelProperties: {
          code: {
            required: true,
            serializedName: 'code',
            type: {
              name: 'String'
            }
          },
          message: {
            required: true,
            serializedName: 'message',
            type: {
              name: 'String'
            }
          },
          details: {
            required: false,
            serializedName: 'details',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'ErrorDetailElementType',
                  type: {
                    name: 'Composite',
                    className: 'ErrorDetail'
                  }
              }
            }
          },
          innererror: {
            required: false,
            serializedName: 'innererror',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = ErrorInfo;
