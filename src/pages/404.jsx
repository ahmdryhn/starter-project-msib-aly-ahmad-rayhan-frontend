import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
    const error = useRouteError();

    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <p>{error.statusText || error.message}</p>
        </div>
    )
}

export default ErrorPage;