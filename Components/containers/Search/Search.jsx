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
    const [products, setProducts] = useState(null);
    const [searchTitle, setSearchTitle] = useState(null);

    const router = useRouter();
  
    const changeInputhander = (event) => {
        setValue(event.target.value);
        setTimeout(() => {
            if (value.trim().length >= 2) {
                setLoading(true);

                const fetchData = async () => {
                    const allProducts = await getAllProducts();
                    setProducts(allProducts);

                    const searchTitle = products?.filter((item) => {
                        const filterTitle = item.title
                            .toLowerCase()
                            .includes(value.toLowerCase());
                        const filterDescription = item.description
                            .toLowerCase()
                            .includes(value.toLowerCase());
                        return filterDescription + filterTitle;
                    });
                    setSearchTitle(searchTitle);
                };

                fetchData()
                    .then(() => {
                        setLoading(false);
                    })
                    .catch((error) => console.log({ error }));
            }
            if (value.trim().length < 2) {
                setLoading(false);
                setProducts(null)
                return;
            }
        }, 1000);
    };

    const fromSubmitionHandler = (event) => {
        event.preventDefault();
        setShowModal(false);
        setLoading(false);
        router.push("/search");
    };
    console.log({ showModal });
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
                    setShowModal(true);
                }}
                className={classNames({
                    "col-10 col-lg-8 mx-auto": true,
                    [classes.container]: true,
                })}
            >
                <div
                    className={classNames({
                        " w-100 mx-0 px-0 ": true,
                        [classes.Form]: true,
                        [classes.FormActive]: showModal,
                        [classes.formNoActive]: !showModal,
                    })}
                >
                    <form
                        onSubmit={fromSubmitionHandler}
                        className="col-12  mx-auto d-flex justify-content-start sticky-top"
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

                    <nav className={classNames({
                        [classes.NavList]:true,
                        'col-12 my-2 h-50 h-100':true,
                    })}>
                        <ul className="h-50">
                            {showModal &&
                                searchTitle?.map((item, index) => (
                                    <SearchItem
                                        id={index + item}
                                        key={index + item}
                                        link={`/product/${item.id}`}
                                        inputValue={value}
                                        clicked={() => {
                                            setShowModal(false);
                                            setLoading(false);
                                        }}
                                    >
                                        {item.title
                                            .toLowerCase()
                                            .substring(0, 18)}
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
