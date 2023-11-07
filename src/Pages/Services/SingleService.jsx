import { useLoaderData } from "react-router-dom";


const SingleService = () => {
    const singleService = useLoaderData()
    console.log(singleService);
    return (
        <div>
            c
        </div>
    );
};

export default SingleService;