import { useEffect, useState } from "react";
import Card from "../components/adminComponents/Dashboard/Card";
import { getStatistics } from "../components/adminComponents/apiCalls/getData";
import { MappedStat, mapStatistics } from "../components/adminComponents/Dashboard/functions";

const AdminDashboard = () =>{
    const [quote, setQuote] = useState({ text: "" });
    const [loading, setLoading] = useState(true);
    const [statistics, setStastics] = useState<MappedStat[]>([]);

    const fetchQuote = async () => {
        setLoading(true);
        try {
            const response = await fetch("https://api.adviceslip.com/advice");
            const data = await response.json();
            setQuote({ text: data.slip.advice });
        } catch (error) {
            console.error("Error fetching quote:", error);
        }
        setLoading(false);
    };

    useEffect(() => {
        fetchQuote();
        getStatistics().then((data) =>{
            if(data.success){
                setStastics(mapStatistics(data.details[0]));
            } 
        })
    }, []);

    return(
        <div className="bg-white w-100 pt-5 px-5">
            <h1 className=" text-warning">{getGreeting()},</h1>
            <p className="text-lg fs-2 font-semibold text-primary">"{quote.text}"</p>

            <div className="d-flex justify-content-between flex-wrap gap-1">
                {
                    statistics.map((stat, i) =>(
                        <Card 
                            key={i}
                            mappedstat={stat}
                        />
                    ))
                }
            </div>
        </div>
    )
};

export default AdminDashboard;

function getGreeting() {
    const currentHour = new Date().getHours();
  
    if (currentHour < 12) {
        return "Good Morning";
    } else if (currentHour < 18) {
        return "Good Afternoon";
    } else {
        return "Good Evening";
    }
  }