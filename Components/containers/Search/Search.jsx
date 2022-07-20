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
    console.log({searchTitle})
    const router = useRouter();

    const changeInputhander = (event) => {
        setValue(event.target.value);
        setLoading(true);
        
        setTimeout(() => {
            if (value.trim().length > 1) {
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
        }, 1000);
    };

    const fromSubmitionHandler = (event) => {
        event.preventDefault();
        setShowModal(false);
        setLoading(false);
        router.push("/search");
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
                    className={classNames({
                        " w-100 mx-0 px-0 mx-auto": true,
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

                    <nav
                        className={classNames({
                            [classes.NavList]: true,
                            "col-12 my-2 h-100 h-100 pt-5": true,
                        })}
                    >
                        <ul className="h-100 w-100 px-0 mx-0">
                            {showModal &&
                                searchTitle?.map((item, index) => (
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
