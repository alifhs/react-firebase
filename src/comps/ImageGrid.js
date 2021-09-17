
import { useFirestore } from "../hooks/useFireStore";


const ImageGrid = ()=> {
    const docs = useFirestore('images');

    console.log(docs)

    return (
        <div className="grid grid-cols-3 mt-8 gap-2 ">
            {docs && docs.map(doc => {
                return <div className="" key={doc.id}>
                    <img src={doc.url} alt="pic" />
                </div>
            })}
        </div>
    )
}

export {ImageGrid};