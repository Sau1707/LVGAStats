import ToggleButton from 'react-bootstrap/ToggleButton'
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import style from './buttons.module.css'
import { useEffect, useState } from 'react'

export default function Buttons(props) {
    const [active, setActive] = useState(0)

    // edit props on update
    useEffect(() => {
        props.onSelect(active)
    }, [active])

    return (
        <ButtonGroup
            type="checkbox"
            size="sm"
            aria-label="First group"
            className={style.buttonGroup}
        >
            {props.names.map((e, i) => {
                return (
                    <ToggleButton
                        variant="secondary"
                        key={i}
                        className={style.button}
                        onClick={() => {
                            setActive(i)
                        }}
                    >
                        {e}
                    </ToggleButton>
                )
            })}
        </ButtonGroup>
    )
}
