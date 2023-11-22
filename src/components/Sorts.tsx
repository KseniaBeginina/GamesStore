import {useState} from "react";
import "../style/sorts.css";

interface Sorts{
    sorts: string[]
}
   
//Функция сортировки
function Sorts({sorts}: Sorts){
    const [activeSpan, setActiveSpan] = useState(0);
    const [isOpen, setIsOpen] = useState(false);

    const toggleSort = (i:any) => {
        setActiveSpan(i);
        setIsOpen(false);
    }

    return (
      <div className="sort">
      <span onClick={() => setIsOpen(true)}>
        {sorts[activeSpan].toUpperCase()}
      </span>
      {isOpen && <div className="select-sort">
        {
            sorts.map((s, i) => <div key={i} onClick={() => toggleSort(i)} >{s}</div>)
        }
      </div>}
    </div>
    );
}

export default Sorts;