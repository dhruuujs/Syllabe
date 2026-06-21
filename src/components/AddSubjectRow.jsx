import react from "react"
import "../styles/tablestyle.css"

function AddSubjectRow(){


return(
    <div className="tableBody flex p-1 h-20">

    <div className="date w-2xs">16 Jun</div>
    <div className="subject w-2xs">
        Math
        <div>
            <button className="buttonStyle px-5 rounded-sm">+Add Syllabus</button></div>
        </div>

    <div className="confidence w-fit">
        <div className="confiSig w-5 h-5 rounded-2xl bg-green-600"></div>
    </div>
    <div className="notes w-max">Study last year 2 question papers.</div>
    <div className="priority w-max">High</div>
        
    </div>
);


}
export default AddSubjectRow;