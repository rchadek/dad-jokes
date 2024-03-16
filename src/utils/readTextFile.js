import fs from 'fs';

export function readTextFileToArray(filePath) {
    try {
      // Read the file synchronously (blocking operation)
      const fileContent = fs.readFileSync(filePath, 'utf-8');

      console.log(fileContent);
      
      // Split the file content into an array by new line character
      const lines = fileContent.split('\n');
      
      return lines;
    } catch (error) {
      console.error('Error reading file:', error);
      return [];
    }
  }