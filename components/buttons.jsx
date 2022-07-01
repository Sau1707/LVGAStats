import ToggleButton from 'react-bootstrap/ToggleButton'
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import style from './buttons.module.css'
import { useEffect, useState } from 'react'

export default function Buttons(props) {
    const [active, setActive] = useState(0)

    useEffect(
        (value) => {
            props.onSelect(value)
        },
        [active]
    )
    return (
        <>
            <ButtonGroup
                type="checkbox"
                size="sm"
                aria-label="First group"
                className={style.buttonGroup}
            >
                {props.names.map((e, i) => {
                    return (
                        <ToggleButton
                            key={i}
                            className={
                                active != i ? style.button : style.buttonActive
                            }
                            onClick={() => {
                                setActive(i)
                            }}
                        >
                            {e}
                        </ToggleButton>
                    )
                })}
            </ButtonGroup>
        </>
    )
}
