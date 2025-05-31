import {ModifyCart} from "../ModifyCart/ModifyCart.tsx";
import {useState} from "react";

type ProductData = {
    id: number,
    name: string,
    price: string,
    currency: string,
    stock: number,
    img: string
}

type ProductProps = {
    data: ProductData
}

const images: Record<string, string> = import.meta.glob('../../../assets/products/*', { eager: true, import: 'default' });

export function Product({ data }: ProductProps) {
    const [isActive, setIsActive] = useState(false);

    const addToCart = () => {
        setIsActive(true)
    }

    return (
        <div className="w-70 h-125 mr-2 mb-2 rounded-[0.3rem] flex justify-center items-center bg-gradient-to-r from-cyan-500 to-emerald-500">
            <div className="w-69 h-124 bg-blue-950 rounded-[0.3rem] flex justify-center items-center mx-auto">
                <div className="!mx-5 !my-5 flex flex-col justify-center items-center">
                    <img className="w-full !mb-2 hover:scale-105 hover:transition-all" src={images[`../../../assets/products/${data.img}`]} alt="Laptop" />
                    <h1 className="text-xl font-bold text-center self-start bg-gradient-to-r from-cyan-500 to-emerald-500 bg-clip-text text-transparent !mb-3">{data.name}</h1>
                    <h3 className="text-yellow-400">{data.price} <small>{data.currency}</small></h3>
                    {data.stock > 0 && <span className="!px-3 !py-1 text-sm font-semibold !my-3 text-white bg-green-700 rounded-[0.5rem]">In Stock</span>}
                    {data.stock === 0 && <span className="!px-3 !py-1 text-sm font-semibold !my-3 text-white bg-red-700 rounded-[0.5rem]">Out of Stock</span>}

                    {
                        isActive ? (
                            <ModifyCart />
                        ) : (
                            <button className=" w-full !px-3 !py-2 text-sm font-semibold !my-3 text-white bg-gradient-to-r from-cyan-500 to-emerald-500 rounded-[0.5rem] hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/20 hover:transition-all cursor-pointer"
                                    onClick={addToCart}>Add to Cart</button>
                        )
                    }
                </div>
            </div>
        </div>
    );
}