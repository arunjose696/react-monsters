import React from "react"
import "./cardlist.components.css"
import {Card} from "./cards/cards.component"



export const Cardlist= (props) => {
return(<div className="card-list">

{props.monsters.map(monster => <Card key={monster.id} monster={monster}></Card>)}


</div>)
}