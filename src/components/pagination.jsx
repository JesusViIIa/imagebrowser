    import { useState } from 'react'
    import './css/pagination.css'
    export default function Pagination({totalpages, currentPage, OnChange}) {
        const [currGroup, setcurrGroup] = useState(1);
        

        const getPage = () => {
            const linkPages=[]
            for (let i = 0; i < totalpages; i++) {
                linkPages.push(<li key={i} onClick={OnChange} value={i+1} 
                    className={currentPage===(i+1)? 'active':''} >{i+1}</li> )
            } 
            const  groups=  linkPages.slice((currGroup-1) * 10, currGroup * 10)
            return groups
        }
        const nextGroup = () => {
            if(currGroup < (totalpages/10))
            setcurrGroup(currGroup+1)
        }
        const prevGroup = () => {
            if(currGroup!==1){
                return setcurrGroup(currGroup-1)
            }
            
        }

        return (
          <div className="center">
            <div className="pagination">
              <div className='text'>
                <span>
                  Pagina {currentPage} de {totalpages} :&nbsp;&nbsp;&nbsp;{" "}
                </span>
              </div>
              <div>
                <li className="next" onClick={prevGroup}>
                <i className="fas fa-caret-left"></i>
                </li>
                {getPage()}
                <li className="next" onClick={nextGroup}>
                <i className="fas fa-caret-right"></i>
                </li>
              </div>
            </div>
          </div>
        );
    }
