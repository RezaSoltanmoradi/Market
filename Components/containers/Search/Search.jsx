import Input from "../../UI/Input/Input";
import Button from "../../UI/Button/Button";
import { BsSearch } from "react-icons/bs";

import { useState } from "react";
const Search = () => {
    const [value, setValue] = useState("");
    const changeInputhander = (event) => {
        setValue(event.target.value);
    };

    const fromSubmitionHandler = (event) => {
        event.preventDefault();
        console.log("search submition...");
    };
    return (
        <div>
            <form
                onSubmit={fromSubmitionHandler}
                className="col-12 col-md-8 mx-auto row m-2"
            >
                <div className="col-8">
                    <Input
                        ChangeInput={changeInputhander}
                        inputValue={value}
                        placeholder="Search"
                    />
                </div>
                <div className="col-4">
                    <Button btnType={"submit"} clicked={fromSubmitionHandler}>
                        <BsSearch />
                    </Button>
                </div>
            </form>
        </div>
    );
};

export default Search;
