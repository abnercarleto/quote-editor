"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getDatabaseConfig = void 0;
const getDatabaseConfig = (databaseUrl) => ({
    uri: databaseUrl,
    retryAttempts: 5,
    retryDelay: 3000,
    socketTimeoutMS: 45000,
});
exports.getDatabaseConfig = getDatabaseConfig;
//# sourceMappingURL=database.config.js.map