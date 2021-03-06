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
 * API Authentication Settings.
 *
 */
class AuthenticationSettingsContract {
  /**
   * Create a AuthenticationSettingsContract.
   * @property {object} [oAuth2] OAuth2 Authentication settings
   * @property {string} [oAuth2.authorizationServerId] OAuth authorization
   * server identifier.
   * @property {string} [oAuth2.scope] operations scope.
   * @property {object} [openid] OpenID Connect Authentication Settings
   * @property {string} [openid.openidProviderId] OAuth authorization server
   * identifier.
   * @property {array} [openid.bearerTokenSendingMethods] How to send token to
   * the server.
   */
  constructor() {
  }

  /**
   * Defines the metadata of AuthenticationSettingsContract
   *
   * @returns {object} metadata of AuthenticationSettingsContract
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'AuthenticationSettingsContract',
      type: {
        name: 'Composite',
        className: 'AuthenticationSettingsContract',
        modelProperties: {
          oAuth2: {
            required: false,
            serializedName: 'oAuth2',
            type: {
              name: 'Composite',
              className: 'OAuth2AuthenticationSettingsContract'
            }
          },
          openid: {
            required: false,
            serializedName: 'openid',
            type: {
              name: 'Composite',
              className: 'OpenIdAuthenticationSettingsContract'
            }
          }
        }
      }
    };
  }
}

module.exports = AuthenticationSettingsContract;
