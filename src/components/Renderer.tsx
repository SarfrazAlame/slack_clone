import { useEffect, useRef, useState } from "react";

interface RendererProps {
    value: string;
}

const Renderer = ({value}:RendererProps) => {
    const [isEmpty,setIsEmpty] = useState(false);
    const rendererRef = useRef<HTMLDivElement>(null);

    useEffect(()=>{
        
    })
}