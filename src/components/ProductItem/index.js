
const ProductItem = props=>{
    let {card} = props;
    let url=card[0];
    let text = card[1];
    console.log(props);
    return(
        <li className="bg-[#D3D3D3] rounded-md m-3 p-3 h-20 w-20 lg:mr-5 lg:ml-5 lg:p-5 lg:h-40 lg:w-40 flex flex-col items-center text-center justify-between">
            <p className="font-bold text-[10px] lg:text-sm">{text}</p>
            <img src={url} className="h-10 w-10 lg:h-20 lg:w-20 "/>
        </li>
    )
    
}
export default ProductItem;