import React from "react";

interface Props {
    onChange: (e:string) => void
  }
const  InputCustom: React.FC<Props> = ({onChange}) =>
{

    return <input type={'text'} onChange={(e) => onChange(e.target.value)} />
}

export default InputCustom;