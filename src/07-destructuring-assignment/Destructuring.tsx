import {useState} from "react";

export type ManTypee = {
    name: string
    age: number
    lessons: Array<{ title: string,name:string }>
    address: {
        street: {
            title: string
        }
    }
}


type PropsTYpe = {
    title: string
    man: ManTypee
    food:Array<string>
    car:{model:string}
}

export const ManComponent: React.FC<PropsTYpe> = (props, context) => {

    const {title,...restProps} = props
    const {name} = props.man

    const [message,setMessage]=useState<string>("hello")

    return <div>
        <h1>{title}</h1>
        <hr/>
        <div>{name}</div>
        <div>{restProps.car.model}</div>
    </div>
}