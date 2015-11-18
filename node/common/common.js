// Copyright (c) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

'use strict';

module.exports = {
    authorization: require('./lib/authorization.js'),
    ConnectionString: require('./lib/connection_string.js'),
    endpoint: require('./lib/endpoint.js'),
    errors: require('./lib/errors.js'),
    Http: require('./lib/http.js'),
    Message: require('./lib/message.js'),
    SharedAccessSignature: require('./lib/shared_access_signature.js')
};