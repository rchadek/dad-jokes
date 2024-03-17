import fs from 'fs'
import path from 'path'

export default function handler(req, res) {
    const dirRelativeToPublicFolder = 'utils/data';

    try{ 
        
        const dir = path.resolve('./src', dirRelativeToPublicFolder);

        const filePath = fs.readdirSync(dir);

        const fileToRead = filePath[0];

        const file = './src/' + dirRelativeToPublicFolder + '/' + fileToRead;

        // Read the file synchronously (blocking operation)
        const fileContent = fs.readFileSync(file, 'utf-8');

        // Split the file content into an array by new line character
        const jokes = fileContent.split('\n');

        res.status(200).json({ 
            jokes: jokes
        })
    }
    catch (error) {
        console.error('Error reading file:', error);
        return [];
    }
}