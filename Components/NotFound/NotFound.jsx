const NotFound = () => {
    return(
    <div className="container w-75 alert alert-dark text-center mt-5 p-5  ">
         <h3 className=" text-dark ">Nothing was found according to your filter.</h3>;
        <h5 className='text-success'>
        Please filter your products again.
        </h5>
    </div>
    )
};

export default NotFound;
