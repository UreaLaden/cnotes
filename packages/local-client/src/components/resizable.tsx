import './resizable.css'
import { ResizableBox, ResizableBoxProps } from "react-resizable";
import * as React from 'react';

interface ResizableProps{
    children?:React.ReactNode;
    direction:'horizontal' | 'vertical';
}

const Resizable: React.FC<ResizableProps> = ({direction,children}) =>{
    let resizableProps: ResizableBoxProps;
    const [innerHeight, setInnerHeight] = React.useState(window.innerHeight);
    const [innerWidth, setInnerWidth] = React.useState(window.innerWidth);
    const [width,setWidth] = React.useState(window.innerWidth * 0.75);

    React.useEffect(() => {
        let timer:any;
        const listener = () => {
            /* Debouncing: Allow ()=>{} to run and after 
            * some time we do something else
            */
            if (timer){
                clearTimeout(timer);
            }
            timer = setTimeout(()=>{
                setInnerHeight(window.innerHeight)
                setInnerWidth(window.innerWidth);
                if(window.innerWidth * 0.75 < width){
                    setWidth(window.innerWidth * 0.75)
                }
            },100);
        };
        window.addEventListener('resize',listener);

        return () => {
            window.removeEventListener('resize',listener);
        };
    },[width]);
    if (direction === 'horizontal'){
        resizableProps = {
            className:'resize-horizontal',
            height:Infinity,
            width,
            resizeHandles: ['e'],
            maxConstraints:[innerWidth * 0.75,Infinity], /*[Horizontal,Vertical]*/
            minConstraints:[innerWidth * 0.2,Infinity], /*[Horizontal,Vertical]*/
            onResizeStop: (event,data) =>{
                setWidth(data.size.width);
            }
        };        
    }else{
        resizableProps = {
            height:300,
            width:Infinity,
            resizeHandles: ['s'],
            maxConstraints:[Infinity,innerHeight * 0.9], /*[Horizontal,Vertical]*/
            minConstraints:[Infinity,24] /*[Horizontal,Vertical]*/
        }
    }
    return <ResizableBox {...resizableProps}>{children}</ResizableBox>;
};

export default Resizable;