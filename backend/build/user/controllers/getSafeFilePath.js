"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = __importDefault(require("path"));
const getSafeFilePath = (rootPath, userPath) => {
    const sanitizedPath = path_1.default.normalize(userPath).replace(/^(\.\.(\/|\\|$))+/, ''); // Prevent traversal
    const resolvedPath = path_1.default.join(rootPath, sanitizedPath);
    // Ensure the resolved path is within the root directory
    if (!resolvedPath.startsWith(path_1.default.resolve(rootPath))) {
        console.warn(`Blocked attempt to access: ${resolvedPath}`);
        return null;
    }
    return resolvedPath;
};
exports.default = getSafeFilePath;
//# sourceMappingURL=getSafeFilePath.js.map