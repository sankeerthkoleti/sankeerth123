import {Component} from "react"
import Header from "../Header"
import ProductCategories from "../ProductCategories"
import Segment from "../Segment"
import InteriorDesign from "../InteriorDesign"
import Process from "../Process"
import TrendingProducts from "../TrendingProducts"
import About from "../About"
import Vibrer from "../Vibrer"
import Botom from "../Botom"
import "./index.css"
class Home extends Component{
    render(){
        return(
            <div className="r">
                <Header/>
                <div>
                    <div className="p flex justify-center items-center">
                        <img src="https://s3-alpha-sig.figma.com/img/be82/a2c1/4b9d9bd6645310d22891a2afe7f19b54?Expires=1737331200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=nRQoY8Iero4r~ClJV~ZAkiuaE~8qDn84Lq0C1o4J4HVmaxp6rq7LcsINI9H4BSkXr6saFIgriWX3OBqnqNlIsMGsaH0KgDP0XxIUfdeBoukzn6InPY~9xxaG1TlwGS2E8No4oJYNCvf4gMgGBIjuIKa37asuAN-Vhm4FV3Y6GdSkcBHYfgbztoBqQf6vnnNPluSC2wQbVkqTsth8AYEVNEFD~poAcQ-gYZ8W6iCWxMOgsLVjakJANN5g-1oKtfCYabWk3-HfT6gKFA1NRUCuDTR941jvR7l995yc559P9pyy-gHuK6nyH8BrBC0fqhFcT2jSl932-Q-BW2RZDbmUDg__" className="p-3 lg:pt-5 rounded-3xl"/>
                    </div>
                    <ProductCategories/>
                    <Segment/>
                    <TrendingProducts/>
                    <InteriorDesign/>
                    <About/>
                    <Process/>
                    <Vibrer/>
                    <Botom/>
                </div>
            </div>
        )
    }
}
export default Home;