import path from 'path';
import { Command } from 'commander';
import {serve} from 'local-api';
/**[] -- Optional
 * <> -- Required
 * Documentation located at: https://www.npmjs.com/package/commander 
 */
export const serveCommand = new Command()
.command('serve [filename]')
.description('Open a file for editing')
.option('-p, --port <number>','port to run server on','4005')
.action((filename = 'nodebook.js',options:{port:string}) => {
    const dir = path.join(process.cwd(),path.dirname(filename));
    serve(parseInt(options.port),path.basename(filename),dir);
});
