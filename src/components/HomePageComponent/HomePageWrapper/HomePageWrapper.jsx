import queryString from "query-string";
import React, {useCallback, useEffect, useMemo, useState} from "react";
import {useHistory} from "react-router-dom";
import {PER_PAGE} from "../../../utils/constants";
import {filterOptions} from "../../../utils/filterOptions";
import {setSearchObject} from "../../../utils/setSearchObject";
import HomePageButtons from "../HomePageButtons/HomePageButtons";
import HomePageOptions from "../HomePageOptions/HomePageOptions";
import HomePageSearch from "../HomePageSearch/HomePageSearch";
import HomePageSlider from "../HomePageSlider/HomePageSlider";
import * as Styles from "./styles";
import qs from "qs";

const HomePageWrapper = ({
                             data,
                             loading,
                             fetchMore,
                             getSearchPage,
                             currentPage,
                             setCurrentPage,
                         }) => {
    const defaultOptions = useMemo(() => {
        return {
            search: "",
            format_in: "Any",
            status_in: "Any",
            genre_in: "Any",
            sort: "POPULARITY_DESC",
            averageScore_greater: 0,
            averageScore_lesser: 100,
        };
    }, []);

    const history = useHistory();

    const [options, setOptions] = useState({...defaultOptions});

    useEffect(() => {
        setOptions({
            ...defaultOptions,
            ...queryString.parse(history.location.search),
        });
        getSearchPage({
            variables: setSearchObject({
                ...queryString.parse(history.location.search),
            }),
        });
    }, [history.location.search, defaultOptions, getSearchPage]);

    const handleChange = useCallback(
        (e) => {
            if (!loading) {
                if (Array.isArray(e.target.value)) {
                    setOptions((prev) => ({
                        ...prev,
                        averageScore_greater: e.target.value[0],
                        averageScore_lesser: e.target.value[1],
                    }));
                } else {
                    setOptions((prev) => ({
                        ...prev,
                        [e.target.name]: e.target.value,
                    }));
                }
            }
        },
        [loading]
    );

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!loading) {
            let searchQueryObject = filterOptions(defaultOptions, options);
            history.push(`?${qs.stringify(searchQueryObject)}`);
        }
    };

    useEffect(() => {
        setCurrentPage(0);
    }, [data, setCurrentPage]);

    useEffect(() => {
        if (currentPage >= data?.Page?.media.length / PER_PAGE && !loading) {
            fetchMore({
                variables: {page: currentPage + 1},
                updateQuery: (previousResult, {fetchMoreResult}) => {
                    if (!fetchMoreResult) {
                        return previousResult;
                    }
                    return Object.assign({}, previousResult, {
                        Page: {
                            ...previousResult.Page,
                            ...fetchMoreResult.Page,
                            media: [
                                ...previousResult?.Page?.media,
                                ...fetchMoreResult.Page.media,
                            ],
                        },
                    });
                },
            }).catch((err) => err);
        }
    }, [fetchMore, loading, currentPage, data?.Page?.media.length]);

    const handleReset = useCallback(
        (e) => {
            e.preventDefault();
            if (!loading) {
                setOptions({
                    ...defaultOptions,
                });
            }
        },
        [defaultOptions, loading]
    );

    return (
        <>
            <HomePageOptions handleChange={handleChange} options={options}/>
            <Styles.Wrapper onSubmit={handleSubmit}>
                <HomePageSlider
                    value={[
                        Number(options.averageScore_greater),
                        Number(options.averageScore_lesser),
                    ]}
                    handleChange={handleChange}
                />
                <HomePageSearch options={options} handleChange={handleChange}/>
            </Styles.Wrapper>
            <HomePageButtons handleSubmit={handleSubmit} handleReset={handleReset}/>
        </>
    );
};

export default HomePageWrapper;
