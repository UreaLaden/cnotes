import path from 'path';
import { Command } from 'commander';
import {serve} from 'local-api';


interface LocalApiError{
    code:string;
}

/**[] -- Optional
 * <> -- Required
 * Documentation located at: https://www.npmjs.com/package/commander 
 */
export const serveCommand = new Command()
.command('serve [filename]')
.description('Open a file for editing')
.option('-p, --port <number>','port to run server on','4005')
.action(async (filename = 'nodebook.js',options:{port:string}) => {
    const isLocalApiError = (error:any):error is LocalApiError =>{
        return typeof error.code === "string";
    };
    try{
        const dir = path.join(process.cwd(),path.dirname(filename));
        await serve(parseInt(options.port),path.basename(filename),dir);
        console.log(`
            Opened ${filename}. Navigate to http://localhost:${options.port} to edit the file.
        `)
    }catch(error){
        if (isLocalApiError(error)){
            if(error.code === "EADDRINUSE"){
                console.error("Port is in use. Try running on a different port.");
            }
        }else if (error instanceof Error){
            console.error('Heres the problem. ',error.message);
        }
        process.exit(1);
    }
});
