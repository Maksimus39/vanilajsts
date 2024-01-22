import {ChangeEvent, MouseEvent} from "react"

const callback = () => {
    alert("hey")
}

window.setTimeout(callback, 1000)


export const User = () => {

    const deleteUser = (event:MouseEvent<HTMLDivElement>) => {
        alert("user have been deleted")
    }

    const saveUser = () => {
        alert("show be user")
    }

    const onNameChanged = () => {
        console.log("name changed")
    }
    const focusLostHeader = () => {
        console.log("focus lost")
    }

    const onAgeChanged = (event:ChangeEvent<HTMLInputElement>) => {
        console.log("age changed: " + event.currentTarget.value)
    }

    return <div>
        <textarea onChange={onNameChanged}
                  onBlur={focusLostHeader}>
            Max
        </textarea>
        <input onChange={onAgeChanged} type={"number"}/>


        <div onClick={deleteUser}>delete</div>
        <div onClick={saveUser}>save</div>


    </div>
}