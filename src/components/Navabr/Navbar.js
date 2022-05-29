// @ts-nocheck
import React, { useRef } from 'react'

const Navbar = () => {
    const inputRef = useRef();
    const inputRef2 = useRef();

    const focusInput = (id) => {
        if (id === 1) {
            inputRef.current.focus()

        } else if (id === 2) {
            inputRef2.current.focus()
        }
    }

    return (
        <div>
            <input ref={inputRef} type="text" />
            <input ref={inputRef2} type="text" />
            <button onClick={() => focusInput(1)}>CLICK</button>
            <button onClick={() => focusInput()}>CLICK</button>
        </div>
    )
}
export default Navbar;

// ref.current