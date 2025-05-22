import path from 'path';

const getSafeFilePath = (rootPath: string, userPath: string) => {
    const sanitizedPath = path.normalize(userPath).replace(/^(\.\.(\/|\\|$))+/, ''); // Prevent traversal
    const resolvedPath = path.join(rootPath, sanitizedPath);
  
    // Ensure the resolved path is within the root directory
    if (!resolvedPath.startsWith(path.resolve(rootPath))) {
      console.warn(`Blocked attempt to access: ${resolvedPath}`);
      return null;
    }
    return resolvedPath;
};

export default getSafeFilePath;