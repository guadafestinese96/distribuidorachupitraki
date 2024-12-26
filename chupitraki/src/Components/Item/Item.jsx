import "./Item.css"
import priceIcon from '../../assets/precio.png'
import { NavLink } from "react-router-dom"

export default function Item({ item }) {

    return (
        <div className="itemContainer">
            <div className="itemImgContainer"><img className="itemImg" src={item.img} alt={item.modelo} />
            </div>
            <div className="itemDetails">
                <h3 className="itemMarca">{item.marca}</h3>
                <h3 className="itemModelo">{item.modelo}</h3>
                <NavLink to="https://api.whatsapp.com/send/?phone=1150057994&text&type=phone_number&app_absent=0" target="_blank">
                    <button className="askButton">Consultar <img src={priceIcon} alt='priceIcon' className="priceIconImg" /></button>
                </NavLink>
            </div>
        </div>
    )
}