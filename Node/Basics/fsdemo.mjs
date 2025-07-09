
import {readFile ,writeFile} from 'fs/promises' ;
import {resolve} from 'path' ;

async function readingHtml() {
    const path = resolve('./Basics/index.html');
    let file = await readFile(path);
    const data= {
        name : 'fazle',
        company: 'TATA'
    }
    for(const [key,value] of Object.entries(data)){
        file=file.toString().replace(`{{${key}}}`,value)
    }
 
await writeFile(resolve('./Basics/output.html'), file);


}
readingHtml();