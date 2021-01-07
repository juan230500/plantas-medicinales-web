const fs = require("fs");

const path = process.argv[2]; //"./src/components/UI";
const file = process.argv[3]; //"MyHead3";
const jsText = `
import styled from "styled-components";



const Div = styled.div\`\`;


const ${file} = (props) => {
    return (
      <Div>
        <p>Hiiii</p>
      </Div>
    );
  };
  
  export default ${file};
`;

fs.mkdir(`${path}/${file}/`, { recursive: true }, function (err) {
  if (err) {
    return console.log(err);
  }
  fs.writeFile(`${path}/${file}/${file}.js`, jsText, (err) => {});
  console.log("The file was saved!");
});
