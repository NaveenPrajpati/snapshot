import { BiLike,BiCommentDetail } from "react-icons/bi";


function Card(props) {



    return (
        <div className="box">
        <div className=" bg-green-200 relative w-[500px] h-[400px] group">

        <img src={props.item.webformatURL} alt="" className="group-hover:text-red-500 rounded-md w-[500px] h-[400px] hover:bg-gradient-to-b from-purple-400 absolute" />
        <div className="flex items-center gap-1 text-white font-semibold absolute bottom-0 right-5 invisible group-hover:visible" >    
        <BiLike/> {props.item.likes} <BiCommentDetail/>{props.item.comments}
        </div>
        </div>
        </div>
    )
}
export default Card;