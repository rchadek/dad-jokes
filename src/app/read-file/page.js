import { readTextFileToArray } from '../../utils/readTextFile';

export default function ReadFile({ fileContent }) {
  console.log('File Content: ' + fileContent);

  return (
    <div>
      <h1>File Content:</h1>
      <ul>
        {/* {fileContent.map((line, index) => (
          <li key={index}>{line}</li>
        ))} */}
      </ul>
    </div>
  );
}

export async function getInitialProps() {
  const filePath = '/utils/data/dad_jokes.txt'; 
  // Path to your text file
  const fileContent = readTextFileToArray(filePath);

  console.log(fileContent);

  return {
    props: {
      fileContent,
    },
  };
}