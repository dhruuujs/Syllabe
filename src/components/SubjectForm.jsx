
function SubjectForm(){

return(
<div className="subjectFormBody bg-amber-50 h-15">

<div>
<input type="date" placeholder="Enter Date" className="inputDate"/>
</div>

<div>
<input type="text" placeholder="Subject" className="border-b outline-0"/>
</div>


<div>
<select className="outline-0">    
    <option>H</option>
    <option>M</option>
    <option>L</option>
    
</select>
</div>

<div>
<input type="text" placeholder="Enter Notes" className="border-b outline-0"/>
</div>
<div>
    <button className="buttonStyle p-10">Add</button>
</div>

</div>);

}

export default SubjectForm;