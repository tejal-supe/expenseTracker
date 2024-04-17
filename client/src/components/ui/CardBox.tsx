import { Link } from "react-router-dom";
import { FaRupeeSign } from "react-icons/fa6";
import { BsCardText } from "react-icons/bs";
import { MdOutlinePayments } from "react-icons/md";
import { FaTrash } from "react-icons/fa";
import { HiPencilAlt } from "react-icons/hi";

type property ={
    [key:string]:string
}
interface category extends property{
    saving:string ,
    expense:string,
    investment:string
}
const categoryColorMap : category= {
	saving: "from-green-700 to-green-400",
	expense: "from-pink-800 to-pink-600",
	investment: "from-blue-700 to-blue-400",
};

type CardTypeProp ={
    type:string
}
const CardBox:React.FC<CardTypeProp> = ({type}) => {
        const cardColor = categoryColorMap[type];
  return (
    <div className={`rounded-md p-4 bg-gradient-to-br ${cardColor}`}>
        <div className="flex flex-col gap-3">
            <div className="flex flex-row items-center justify-between">
                <h2 className="text-lg font-bold text-white">Saving</h2>
                <div className="flex items-center gap-2">
                    <FaTrash className="cursor-pointer" />
                    <Link to={'/transaction/123'}>
                        <HiPencilAlt className="cursor-pointer" size={20} />
                    </Link>
                </div>
            </div>
            <p className="text-white flex items-center gap-1" >
                <BsCardText />
                Description : Salary
            </p>
            <p className="text-white flex items-center gap-1" >
                <MdOutlinePayments />
                Payment Type : Cash
            </p>
            <p className="text-white flex items-center gap-1" >
                <FaRupeeSign />
                Amount : ₹ 1200
            </p>
            <div className='flex justify-between items-center'>
					<p className='text-xs text-black font-bold'>21 Sep, 2001</p>
					<img
						src={"https://tecdn.b-cdn.net/img/new/avatars/2.webp"}
						className='h-8 w-8 border rounded-full'
						alt=''
					/>
				</div>
        </div>
    </div>
  )
}

export default CardBox