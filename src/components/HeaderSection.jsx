import react from "react"
import "../styles/tablestyle.css"

function HeaderSection(){



return(
<div className="tableHeader">

<table>
<thead>
<tr>
    <th className="w-36">Exam Date</th>
    <th>Subject</th>
    <th className="w-50">Confidence</th>
    <th>Note</th>
    <th className="w-48">Priority</th>
</tr>
</thead>
</table>
</div>
)

}
export default HeaderSection;