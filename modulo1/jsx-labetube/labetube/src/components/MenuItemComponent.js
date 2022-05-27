import React from "react";

function MenuItemComponent (props) {
    return (
        <li className="botoes-meunu-vertical">{props.sectionTitle}</li>
    )
}

export { MenuItemComponent }