import express from 'express';
import fs from 'fs/promises'; //All functions in this module return promises
import path from 'path';

interface Cell{
    id:string;
    content:string;
    type:'text' | 'code';
}
interface LocalApiError{
    code:string;
}

const isLocalApiError = (error:any): error is LocalApiError =>{
    return typeof error.code === "string";}
/**
 * This router retrieves or creates a list of cells,
 * then writes those cells to a file
 */
export const createCellsRouter = (filename:string,dir:string) => {
    const router = express.Router();
    router.use(express.json());
    
    const fullPath = path.join(dir,filename);
    router.get('/cells', async (req,res)=>{
        try{
            // Read the file
            const result = await fs.readFile(fullPath,{encoding:'utf-8'});
            res.send(JSON.parse(result));
        }   catch(error) {
            if(isLocalApiError(error)){
                //Error No Entity
                if(error.code === "ENOENT"){
                    await fs.writeFile(fullPath,'[]','utf-8');
                    res.send([]);
                }else{
                    throw error;
                }
            }
        }
        });

    router.post('/cells',async (req,res)=>{
            try{
                // Take the list of cells tfrom the request object
                // Serialize them (convert to safe format)
                const {cells}:{cells:Cell[]} = req.body;
                
                // Write the cells into the file
                const obj = []
                for (var i = 0;i<cells.length;i++){
                    obj.push('/*' + cells[i]['id'] + '*/\n')
                    if(cells[i]['type'] === 'text'){
                        var comment = '/*' + cells[i]['content'] + '*/\n';
                        obj.push(comment)
                    }else{
                        obj.push(cells[i]['content']+'\n')
                    }    
                }
                await fs.writeFile(fullPath,obj.join(''),'utf8');
                res.send({status:'ok'});
            }catch(error){
                if(isLocalApiError(error)){
                    if(error.code === "ENOENT"){
                        await fs.writeFile(fullPath,"[]",'utf-8')
                        res.send([])
                    }
                }else{
                    throw error;
                }
            }
        });
    return router;
};
