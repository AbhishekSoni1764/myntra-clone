// import { CSpinner } from '@coreui/react'
import GridLoader from "react-spinners/GridLoader";

const LoadingSpinner = () => {
    return (
        <center className="text-center spinner">
            <GridLoader color="#f5725c" size={20} />
        </center>
    );
};

export default LoadingSpinner;