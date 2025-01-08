import {Component} from "react";
import "./index.css"
class About extends Component{
    render(){
        return(
            <div className="container mx-auto px-4 py-16">
                <h1 className="text-4xl font-bold text-center mb-8">About Us</h1>
                <p className="text-lg text-gray-700 text-center mb-12">
                    Discover the epitome of luxury living with our exclusive furniture collection.
                    Each piece <br/>is meticulously crafted to bring sophistication and elegance to your home.
                </p>
                <div className="lg:ml-20 lg:mr-20 ml-5 mr-5 d">
                    <div className="a  gap-8 flex-wrap">
                        <div className="rl">
                            <h1 className="font-bold text-3xl text-[$030303] mt-2">Inspired Living</h1>
                            <p>Discover furniture that combines modern elegance with everyday comfort,crafted to make your home a reflection of your unique style.</p>
                        </div>
                        <div className="rl">
                            <h1 className="font-bold text-3xl text-[$030303] mt-2">Exceptional Savings</h1>
                            <p> By bridging the gap between you and trusted furniture makers, we bring you stunning pieces at prices that fit your budget.</p>
                        </div>
                        <div className="rl">
                            <h1 className="font-bold text-3xl text-[$030303] mt-2">Easy Shopping</h1>
                            <p>From quick browsing to fast delivery and easy assembly, we simplify every step of finding and enjoying your perfect furniture.</p>
                        </div>
                        <div className="rl">
                            <h1 className="font-bold text-3xl text-[$030303] mt-2">Sustainable Options</h1>
                            <p>Choose from sustainable furniture options crafted with the planet in mind - because style should never come at the cost of the environment</p>
                        </div>
                    </div>
                    <div className="a rkp">
                        <div className="op hidden lg:flex">
                            <img src="https://s3-alpha-sig.figma.com/img/ad11/da20/4602ad8de35932ce40f24208390c97d2?Expires=1737331200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=fAmmNVd8A5iSxqk-8mKu6p5VM2smqpu5SopBlOZzm4PZ6kQWL6ekh1icuZn~xLGr7WnDNOj5abTzg~QaejYKZzj9paoLpKucUQAywBmjlhgcALqclOr2jxLUmqw8C9jS1xapht4XVLLDxfZmQNZInR3fLULnll-VAHwS0gZEstrAm3owY3VulbmIS7RCSVjC56aV6sW7mBrL941qm~UagUFV82EIcCNqdxM~-XFHetxF6-baGCdEcDYs7XXf-2eKYoZVlpdmQf-AIU9zopJ3CT-6IfRyI7Tgy3DOikAjHHtVwkgKZZll87JXZnx~NK1XEpQBEOyWG8sPEyGRkisnVw__" className="w-[15vw] h-[30%] rounded-lg m-3"/>
                            <img src="https://s3-alpha-sig.figma.com/img/1854/8e5f/b7e9e10ece3ff536cf9ca12d0cafcf57?Expires=1737331200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Vkcg8YDyRiXozHlSfANRnR546fUBbysrhDpssptIODQxR9PkTL1p78KZrL~poVPdnTh51g~81TcWE672eWYHgEvVJ4umUN3RVtG2Ns-aB4KswFpsF-WgVU~-5wdQ71dQiqIXyd36oR6VQjc3VaMKtEWIJVpocWVShhMUU1ewbKahYOC2eH8c49egTHkNbssjT-GHyH-1aUgwA9M7xnsviu1yOn2ktLlv64tZsD~5wyi8bWwVjTxK-Z9i3gku5dg9Hng3G34Y2ZSsdWy53BzxlLcvQm61k9XYZ4ZyiWTY2izntdGlVbFHA19I1rR-X08SCITohMS4Us5xDXix0o7jUw__" className="w-[15vw] h-[70%] rounded-lg m-3"/>
                        </div>
                        <div className="op hidden lg:flex">
                            <img src="https://s3-alpha-sig.figma.com/img/f63e/511e/0c1ef834c3ececefcb0b61aa952ac3fd?Expires=1737331200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=d5PYv8PGsZnwNqIj8PkgCZkGylMA0u2M7YbZMAu2OOSNdzlm~psoNof38VKrQkt18BT0s35NThJWgkIge52ap0bRARJRtjngutr09VdP28k-zIW09WU8kZ~v2WX79NB1a~gkLb-PFVkxlSUjinQPAcOY5Qhm~~F45hiuaQHU04JHfaxw1~c9HsfyM1N0Pmwj8CUOox1mS4pSgEodhIWscy8Bwm6K-NGRb1EJ0miAbM9w46lJB1hdbXT7pibLK5taQH68LBAdE0~dLcTTVdf8zS0w7iXB0xTQMSGf3HQnOfLSiRQ7dQiWcj1hanKsnX7G8kD4Jkj1IcZbS7oaTlYS4w__" className="w-[15vw] h-[70%] rounded-lg m-3"/>
                            <img src="https://s3-alpha-sig.figma.com/img/621c/e411/19306f085278fd4a24dd870e7cd00abb?Expires=1737331200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=B-jNPezd~M-HEYK1Ve3e6fpSzDFdVPfkO1izo2hVzeWAnu-O-fLFaqi-FPbc8ktGkqwQrU5m3wpPHJX1JGyNm0OT0O4ditDXA~mOK3ZVQ1rLMVu-0GPVrgBPSrrYvMMYnREAMWhuBpGAAx0WNHiCsGG6CXmvTPe7FydGnWg0lULCnRlu6YB3BLxXGHMgdFiS30hyhduBN8XpwelyOL9js8dlrhdtrNjDcAtks6GVuOGeEYIaMnCHteLW6YMG4NvtS0PXQFmJ68gXsX-wnK1mUt1EircIXeC2xgcWuIT7nvaPlnDvaLvk~3B-y09sTFhTkMVCzHCooJZUyjsPy6EQeQ__" className="w-[15vw] h-[30%] rounded-lg m-3"/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default About;