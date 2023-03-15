import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getRobots, filterBy } from "../actions";
import '../style.css';

const Robots = (props) => {

    const robots = useSelector(state => {
        return state.filterArr.length === 0 ? state.robots : state.filterArr
    });

    const dispatch = useDispatch();

    // OR

    // this is the first way we did :
    // const robots = useSelector(state=>state.robots)
    // let filterArr = useSelector(state => state.filterArr);
    // if (filterArr.length === 0) filterArr = robots // and then change map to filterArr.map

    useEffect(() => {
        dispatch(getRobots());
    }, [])

    const handleChange = (e) => {
        const input = e.target.value
        dispatch(filterBy(input))
    }

    return (
        <>
            <nav>
                <h1>ROBOFRIENDS</h1>
                <input type="text" name="searchBar" id="filter-search" placeholder="Search Robots" onChange={(e) => handleChange(e)} />
            </nav>
            {
                robots.map((robot, i) => {
                    const url = `https://robohash.org/${robot.id}`
                    return (
                        <div key={i} id={robot.id}>
                            <img src={url} alt='robot-img' />
                            {robot.name}<br />
                            {robot.email}
                        </div>
                    )
                })
            }
        </>
    )
}

export default Robots