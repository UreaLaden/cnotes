import {applyMiddleware, createStore} from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers';
import { persistMiddleware } from './middleware/persist-middleware';
import { ActionType } from './action-types';

export const store = createStore(
reducers,{},applyMiddleware(persistMiddleware,thunk));

store.dispatch({
    type:ActionType.INSERT_CELL_AFTER,
    payload:{
        id:null,
        type:'code',
    }
});
store.dispatch({
    type:ActionType.INSERT_CELL_AFTER,
    payload:{
        id:null,
        type:'text',
    }
});
var state = store.getState();
store.dispatch({
    type: ActionType.UPDATE_CELL,
    payload:{
        id:state.cells.order[0],
        content: `This is an interactive coding environment. You can write Javascript, see it executed, and write comprehensive documentation using markdown.
        \n- Click any text cell (including this one) to edit it
        \n- The code in each code editor is all joined together into one file. If you define a variable in cell #1, you can refer to it in any following cell!
        \n- You can show any React component, string, number, or anything else by calling the show command. This is a function built into this environment. Call show multiple times to show multiple values
        \n- Re-order or delete cells using the buttons on the top right        
        \nAll of your changes get saved to the file you opend your Coder Notes with. So if you ran \`npx coder-notes serve test.js -p 5000\`, all of the text and code you write will be saved to the \`test.js\` file. Additionally you have the option to specify a port to run the application on.`
    }
});

store.dispatch({
    type: ActionType.UPDATE_CELL,
    payload:{
        id:state.cells.order[1],
        content: "import * as React from 'react';\r\n\r\nconst Counter = () => {  \r\n  const [counter,setCount] = React.useState(0);\r\n  return (\r\n    <div>\r\n      <button onClick={() => setCount(counter + 1)}>Click me</button>\r\n      <h3>Count: {counter}</h3>\r\n    </div>\r\n  )\r\n}\r\n\r\nshow(<Counter />)"
    }
});

