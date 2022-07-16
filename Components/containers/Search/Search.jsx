import { BsSearch, BsXCircleFill } from "react-icons/bs";
import classes from "./Search.module.scss";
import { useState , useRef, Fragment, useEffect} from "react";
import {getAllProducts} from '../../../all-requests';
import classNames from "classnames";
import Backdrop from '../../UI/Backdrop/Backdrop';
const Search = () => {

    const [value, setValue] = useState("");
    const inputRef= useRef(null);
    const [showModal, setShowModal]= useState(false);
    const [loading, setLoading] = useState(false);
    const [products, setProducts]= useState(null);
    const [searchTitle, setSearchTitle]= useState(null);

    const changeInputhander = (event) => {
        setValue(event.target.value);
        
        setTimeout(()=>{
            setLoading(true)
            if(!products){
                const fetchData = async () => {
                    const allProducts = await getAllProducts();
                    setProducts(allProducts);
                    
                };
                fetchData().then(()=>setLoading(false)).catch(error=>console.log({error}));  
            }
            if(products){
                const searchTitle=products.find(item=> {
                    const title= item.title.includes(value);
                    const description= item.description.includes(value);
                    return [title, description];
                })
                console.log({searchTitle})
            }
        }, 1000)
    };

    const fromSubmitionHandler = (event) => {
        event.preventDefault();
        console.log("search submition...");
    };
   
    return (
        <Fragment>
             <Backdrop showModal={showModal} closeModal={()=> setShowModal(false)} />
             <div className={ classNames({
                [classes.FormContainer]:showModal,
                'col-10 col-lg-11': !showModal ,
                'col-6 col-lg-5 mx-auto':showModal,
             })}>
             <div
            onClick={()=> {
                inputRef.current.focus();
                setShowModal(true)
            }}
            className={classNames({
                [classes.Form]: true,
                [classes.FormActive]:showModal,
                [classes.formNoActive]:!showModal,
                'col-11 mx-auto':true,
            })}
            >
            <form
                onSubmit={fromSubmitionHandler}
                className="col-12  mx-auto d-flex justify-content-start m-2"
            >
                <div className="col-2 text-center">
                    {loading ?  <div className="spinner-border spinner-border-sm" role="status">
                     <span className="visually-hidden">Loading...</span>
                     </div> : (
                          <span>
                          <BsSearch />
                      </span>
                     )}
                  

                </div>
                <div className="col-8">
                    <input
                        onChange={changeInputhander}
                        value={value}
                        placeholder="Search"
                        ref={inputRef}
                        />
                </div>
                {value && (
                    <div className={classNames({
                        [classes.RemoveText]:true,
                        'col-2':true
                    })} >
                        <span onClick={()=> setValue("")}>
                            <BsXCircleFill />
                        </span>
                    </div>
                )}
            </form>
        </div>
      
             </div>
       
                </Fragment>
    );
};

export default Search;
