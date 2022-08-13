import classes from "./favorite.module.scss";
const Favorite = () => {
    return (
        <div className="container">
            <h2 className="alert alert-primary m-3 p-3 text-center">
                {" "}
                The Favorite Page
            </h2>
            <div className={classes.Favorite}> سلام رضا سلطانمرادی</div>
           
        </div>
    );
};
export default Favorite;
