"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const registryauthenticationtoken_1 = require("./registryauthenticationtoken");
const authenticationtokenprovider_1 = require("./authenticationtokenprovider");
const tl = require("azure-pipelines-task-lib/task");
class GenericAuthenticationTokenProvider extends authenticationtokenprovider_1.default {
    constructor(endpointName) {
        super();
        if (endpointName) {
            this.registryAuth = tl.getEndpointAuthorization(endpointName, true).parameters;
        }
    }
    getAuthenticationToken() {
        if (this.registryAuth) {
            return new registryauthenticationtoken_1.default(this.registryAuth["username"], this.registryAuth["password"], this.registryAuth["registry"], this.registryAuth["email"], this.getXMetaSourceClient());
        }
        return null;
    }
}
exports.default = GenericAuthenticationTokenProvider;