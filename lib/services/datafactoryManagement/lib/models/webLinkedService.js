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
 * Web linked service.
 *
 * @extends models['LinkedService']
 */
class WebLinkedService extends models['LinkedService'] {
  /**
   * Create a WebLinkedService.
   * @member {object} typeProperties Web linked service properties.
   * @member {object} [typeProperties.url] The URL of the web service endpoint,
   * e.g. http://www.microsoft.com . Type: string (or Expression with
   * resultType string).
   * @member {string} [typeProperties.authenticationType] Polymorphic
   * Discriminator
   */
  constructor() {
    super();
  }

  /**
   * Defines the metadata of WebLinkedService
   *
   * @returns {object} metadata of WebLinkedService
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'Web',
      type: {
        name: 'Composite',
        polymorphicDiscriminator: {
          serializedName: 'type',
          clientName: 'type'
        },
        uberParent: 'LinkedService',
        className: 'WebLinkedService',
        modelProperties: {
          connectVia: {
            required: false,
            serializedName: 'connectVia',
            type: {
              name: 'Composite',
              className: 'IntegrationRuntimeReference'
            }
          },
          description: {
            required: false,
            serializedName: 'description',
            type: {
              name: 'String'
            }
          },
          parameters: {
            required: false,
            serializedName: 'parameters',
            type: {
              name: 'Dictionary',
              value: {
                  required: false,
                  serializedName: 'ParameterSpecificationElementType',
                  type: {
                    name: 'Composite',
                    className: 'ParameterSpecification'
                  }
              }
            }
          },
          annotations: {
            required: false,
            serializedName: 'annotations',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'ObjectElementType',
                  type: {
                    name: 'Object'
                  }
              }
            }
          },
          type: {
            required: true,
            serializedName: 'type',
            isPolymorphicDiscriminator: true,
            type: {
              name: 'String'
            }
          },
          typeProperties: {
            required: true,
            serializedName: 'typeProperties',
            type: {
              name: 'Composite',
              polymorphicDiscriminator: {
                serializedName: 'authenticationType',
                clientName: 'authenticationType'
              },
              uberParent: 'WebLinkedServiceTypeProperties',
              className: 'WebLinkedServiceTypeProperties'
            }
          }
        }
      }
    };
  }
}

module.exports = WebLinkedService;
