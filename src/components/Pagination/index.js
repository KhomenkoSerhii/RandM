import React, { useEffect, useState } from 'react'
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
    pagination: {
        padding: '10px',
        display: 'flex',
        justifyContent: 'flex-end',
    },
}));

const PaginationComponent = ({
    setCharacters,
    status,
    gender,
    species,
    propsCase,
    value,
    locationValue,
    setEpisodes,
    setLocations,
    locName,
    dimension
}) => {
    const classes = useStyles();
    const [info, setInfo] = useState(1)

    const setPages = (pageNumber, pageInfo) => {
        setInfo({
            next: pageNumber < pageInfo?.pages ? pageNumber + 1 : null,
            current: pageNumber,
            prev: pageNumber > 1 ? pageNumber - 1 : null
        })
    }
    const fetchCharacters = async (pageNumber) => {

        const baseUrl = 'https://rickandmortyapi.com/api'
        let result = []

        switch (propsCase) {
            case 'characters':

                let filteredGender = `${baseUrl}/character/?page=${pageNumber}&gender=${gender}&status=${status}&species=${species}&limit=10`

                await fetch(filteredGender).then((res) => {
                    if (!res.ok) {
                        return Promise.reject(res)
                    }
                    return res.json()
                }).then(data => result.push(data))
                    .catch(err => console.log(err))
                const pageInfoChar = result[0]?.info
                setPages(pageNumber, pageInfoChar)
                setCharacters(...result)
                break

            case 'episodes':
                let filteredEpisodes = `${baseUrl}/episode/?page=${pageNumber}&name=${value}&limit=10`
                await fetch(filteredEpisodes).then((res) => {
                    if (!res.ok) {
                        return Promise.reject(res)
                    }
                    return res.json()
                }).then(data => result.push(data))
                    .catch(err => console.log(err))

                const pageInfo = result[0]?.info
                setPages(pageNumber, pageInfo)
                setEpisodes(...result)
                break

            case 'locations':
                let filteredLocations = `${baseUrl}/location/?page=${pageNumber}&type=${locationValue}&name=${locName}&dimension=${dimension}`

                await fetch(filteredLocations).then((res) => {
                    if (!res.ok) {
                        return Promise.reject(res)
                    }
                    return res.json()
                }).then(data => result.push(data))
                    .catch(err => console.log(err))
                const pageInfoLocal = result[0]?.info

                setPages(pageNumber, pageInfoLocal)
                setLocations(...result)
                break
            default:
                return
        }
    };

    useEffect(() => {
        fetchCharacters(1)
    }, [status, gender, propsCase, value, species, locationValue, locName, dimension])

    return (
        <>
            <div className={classes.pagination}>
                <div>
                    {
                        info.prev ? (
                            <Button type="button" onClick={() => fetchCharacters(info.prev)}>
                                { info.prev}
                            </Button>
                        ) : (
                                <React.Fragment />
                            )
                    }

                    <Button type="button">
                        {info.current}
                    </Button>

                    {
                        info.next ? (
                            <Button type="button" onClick={() => fetchCharacters(info.next)}>
                                { info.next}
                            </Button>
                        ) : (
                                <React.Fragment />
                            )
                    }
                </div>
            </div>
        </>
    )
}

export default PaginationComponent