import { Formik, Form, Field } from "formik";
import { useEffect, useState } from "react";
import './css/header.css'
import Pagination from "./pagination";
export default function Header({setStateImages}) {




    const [page, setPage] = useState({totalpages: 0, total: 0 });
    const [currentPage, setcurrentPage] = useState(1);
    const [searchval, setSearchval] = useState('hello');

    useEffect(() => {
         connectUnsplash(searchval)
    }, [currentPage, searchval])

    const connectUnsplash = async (search) => {
        const res = await fetch(`https://api.unsplash.com/search/photos?per_page=20&page=${currentPage}&query= ${search}`, {
            headers:{
                'Authorization': 'Client-ID Icjhl_G712n1MFR9DxpKhBVvsGF4EJ0WsRwG9OgS1bw'
            }
        })
        const data = await res.json()
        setStateImages(data.results)
        setPage({totalpages: data.total_pages, total: data.total})
    }

    return (
        <header >
            <div className="container">
                <div className="title"><h1>Free images</h1></div>
                    <div className="form">
                    <Formik
                    initialValues={{search: searchval}}
                    onSubmit={values => setSearchval(values.search)}>
                    
                        <Form >
                            <Field type='text' name='search'/>
                            <button type="submit">Buscar</button>
                        </Form>
                    </Formik>
                </div>
            </div>
           <Pagination totalpages = {page.totalpages} currentPage={currentPage} OnChange={(e)=>{
               setcurrentPage(e.target.value)
               
           } 
            } />
        </header>
    )
}



