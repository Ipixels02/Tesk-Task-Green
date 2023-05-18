import {useEffect, useRef} from "react";

export const useObserver = (ref :any, canLoad: any, isLoading: any, callback :any) => {
    const observer = useRef<IntersectionObserver | null>();
    useEffect(() => {
        if(isLoading) return;
        if(observer.current) observer.current.disconnect();

        let callBack = (entries: any) => {
            if (entries[0].isIntersecting && canLoad) {
                callback()
            }
        };
        observer.current = new IntersectionObserver(callBack);
        observer.current.observe(ref.current)
    },[isLoading])
}