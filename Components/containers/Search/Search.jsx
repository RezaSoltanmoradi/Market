import { BsSearch, BsXCircleFill } from "react-icons/bs";
import classes from "./Search.module.scss";
import { useState, useRef, Fragment } from "react";
import { useRouter } from "next/router";
import { getAllProducts } from "../../../all-requests";
import classNames from "classnames";
import Backdrop from "../../UI/Backdrop/Backdrop";
import SearchItem from "./Search-Item";
const Search = () => {
    const [value, setValue] = useState("");
    const inputRef = useRef(null);
    const [showModal, setShowModal] = useState(false);
    const [loading, setLoading] = useState(false);
    const [filterProducts, setFilterProducts] = useState(null);
    const router = useRouter();
    
    const changeInputhander = (event) => {
        setValue(event.target.value);
        setLoading(true);
        const enteredValue=inputRef?.current.value;

        if(enteredValue.trim().length ===0){
            setLoading(false);
            setFilterProducts(null);
        }
        if (enteredValue.trim().length >0) {
            setTimeout(() => {
            const fetchData = async () => {
                    const products = await getAllProducts();
                    const foundProducts = products?.filter((item) => {
                        const filterTitle = item.title
                        .toLowerCase()
                            .includes(enteredValue.toLowerCase());
                            const filterDescription = item.description
                            .toLowerCase()
                            .includes(enteredValue.toLowerCase());
                            return filterDescription + filterTitle;
                    });
                    setFilterProducts(foundProducts);
                };
                fetchData()
                    .then(() => {
                        setLoading(false);
                    })
                    .catch((error) => console.log({ error }));
            }, 500)
        };
    };

    const fromSubmitionHandler = (event) => {
        event.preventDefault();
        if(value.trim().length>0){
            setShowModal(false);
            setLoading(false);
            router.push("/search");
        }
    };
    return (
        <Fragment>
            <Backdrop
                showModal={showModal}
                closeModal={() => {
                    setShowModal(false);
                    setLoading(false);
                }}
            />
            <div
                onClick={() => {
                    inputRef.current.focus();
                }}
                className={classNames({
                    "col-10 row col-lg-8 mx-auto": true,
                    [classes.container]: true,
                })}
            >
                <div
                  onClick={() => {
                    inputRef.current.focus();
                }}
                    className={classNames({
                        " mx-0 px-0 mx-auto": true,
                        [classes.Form]: true,
                        [classes.FormActive]: showModal,
                        [classes.formNoActive]: !showModal,
                    })}
                >
                    <form
                        onSubmit={fromSubmitionHandler}
                        className="col-12  mx-auto d-flex justify-content-start sticky-lg-top"
                        onClick={() => setShowModal(true)}
                    >
                        <div className="col-2 text-center">
                            {loading ? (
                                <div
                                    className="spinner-border spinner-border-sm"
                                    role="status"
                                >
                                    <span className="visually-hidden">
                                        Loading...
                                    </span>
                                </div>
                            ) : (
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
                            <div
                                className={classNames({
                                    [classes.RemoveText]: true,
                                    "col-2": true,
                                })}
                            >
                                <span onClick={() => setValue("")}>
                                    <BsXCircleFill />
                                </span>
                            </div>
                        )}
                    </form>
                   <div className={classes.searchBorder}></div>
                    <nav
                        className={classNames({
                            [classes.NavList]: true,
                            "col-12": true,
                        })}
                    >
                        <ul className="h-100 w-100 px-0 mx-0">
                            {showModal &&
                                filterProducts?.map((item, index) => (
                                    <SearchItem
                                        id={index + item.id}
                                        key={index + item.id}
                                        link={`/product/${item.id}`}
                                        image={item.image}
                                        inputValue={value}
                                        clicked={() => {
                                            setShowModal(false);
                                            setLoading(false);
                                        }}
                                    >
                                        {item.title
                                            .toLowerCase()
                                            .substring(0, 25)}
                                    </SearchItem>
                                ))}
                        </ul>
                    </nav>
                </div>
            </div>
        </Fragment>
    );
};

export default Search;
