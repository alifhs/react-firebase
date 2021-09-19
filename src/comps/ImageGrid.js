
import { useFirestore } from "../hooks/useFireStore";


const ImageGrid = ({setSelectImg})=> {
    const docs = useFirestore('images');

    console.log(docs)

    return (
        <div className="grid grid-cols-3 mt-8 gap-2 ">
            {docs && docs.map(doc => {
                return <div className="" key={doc.id}>
                    <img src={doc.url} alt="pic" onClick={()=> {setSelectImg(doc.url)}} />
                </div>
            })}
        </div>
    )
}

export {ImageGrid};