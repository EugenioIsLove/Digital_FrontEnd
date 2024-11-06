import LogoBranca from "../../img/LogoBranca.png"
import LogoRosa from "../../img/LogoRosa.png"
import "./Logo.css"

export default function Logo({branco}) {
    return(
        <div id="logoCont">
          <img src={branco == true ? LogoBranca : LogoRosa } alt="asdasd" />
        
        </div>
    )
}

