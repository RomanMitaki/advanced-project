import {lazy} from "react";

export const MainPageAsync = lazy(() => new Promise(resolve => {
    // @ts-ignore
    //ТАК В РЕАЛЬНОСТИ ДЕЛАТЬ НЕ НУЖНО!
    setTimeout(()=>resolve(import('./MainPage')), 1500)
}));