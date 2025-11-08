import { IconType } from "react-icons";
import { Statistics } from "../apiCalls/type"
import { TiThMenuOutline } from "react-icons/ti";
import { 
    FaHome, FaFilm, FaTv, FaBell, FaExclamationTriangle, FaUsers,
} from "react-icons/fa";

export interface MappedStat{
    label: string; 
    totals: number;
    icon: IconType;
    link: string;
}

export const mapStatistics = (statistics: Statistics) =>{
    let mappedStatistics: MappedStat[] = [];
    Object.keys(statistics).map((key) =>{
        switch (key) {
            case "total_movies":
                mappedStatistics.push({
                    label: "Total Movies", 
                    totals: statistics.total_movies,
                    icon: FaFilm,
                    link: "/admin/all-movies"
                })
                break;
            case "total_tv_series":
                mappedStatistics.push({
                    label: "Total Tv Series", 
                    totals: statistics.total_tv_series,
                    icon: FaTv,
                    link: "/admin/all-series"
                })
                break;
            case "total_episodes":
                mappedStatistics.push({
                    label: "Total Episodes", 
                    totals: statistics.total_episodes,
                    icon: TiThMenuOutline,
                    link: "/admin/all-series"
                })
                break;
            case "active_users":
                mappedStatistics.push({
                    label: "Active Users", 
                    totals: statistics.active_users,
                    icon: FaUsers,
                    link: "/admin/all-clients"
                })
                break;
        
            default:
                break;
        }
    })
    return mappedStatistics;
}