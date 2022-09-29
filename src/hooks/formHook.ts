import { useState } from "react";


export function useFormValidation<T>(form:T)
{
    const [fields,setFields] = useState(form);

    const setValue = (property:keyof T,value:string):void => {
        
        setFields({...fields,[property]:value});
    }

    const validateFields = (messages:T) => {
         let errors = {};
         Object.keys(fields).forEach(field => {
             if(!fields[field]){
                errors = {...errors,[field]:`${messages[field]}`};
             }
         });

         return Object.keys(errors).length > 0 ? errors : false;
    }

    

    return {...fields,setValue,validateFields,fields};

}