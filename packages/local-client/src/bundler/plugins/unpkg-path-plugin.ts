import * as esbuild from 'esbuild-wasm';




/** This custom plugin intercepts esbuild's transpiler request and updates the url.
 * Allowing us to require and bundle a module 
 */
export const unpkgPathPlugin = () => {
  return {
    name: 'unpkg-path-plugin',
    setup(build: esbuild.PluginBuild) {
        /**Handle requestes specifically to root directory index.js */
      build.onResolve({filter:/(^index\.js$)/},() => {
        return {path:'index.js',namespace:'a'};
      });
      /**Handle requests to any relative paths in a module ('./' or '../') */
      build.onResolve({filter:/^\.+\//},(args:any)=>{
        return {
            namespace:'a',
            path: new URL(args.path,'https://unpkg.com' + args.resolveDir + '/').href
        }
      })
      /**Handle main file of a module */
      build.onResolve({ filter: /.*/ }, async (args: any) => {
        return{
            namespace:'a',
            path:`https://unpkg.com/${args.path}`
        };
      });
 
      
    },
  };
};