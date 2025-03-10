import ComicsList from "../comicsList/ComicsList";
import AppBanner from "../appBanner/AppBanner";
import { Fragment } from "react";

const ComicsPage = () => {


    return (
        <Fragment>
            <AppBanner/>
            <ComicsList/>
        </Fragment>

    )
}
export default ComicsPage;