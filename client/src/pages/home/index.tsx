import React from 'react'
import { MdLogout } from 'react-icons/md';
import {Doughnut} from "react-chartjs-2"
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import TransactionFormUI from '../../components/ui/TransactionFormUI';

ChartJS.register(ArcElement, Tooltip, Legend);

const Home = () => {
    const chartData = {
		labels: ["Saving", "Expense", "Investment"],
		datasets: [
			{
				label: "%",
				data: [13, 8, 3],
				backgroundColor: ["rgba(75, 192, 192)", "rgba(255, 99, 132)", "rgba(54, 162, 235)"],
				borderColor: ["rgba(75, 192, 192)", "rgba(255, 99, 132)", "rgba(54, 162, 235, 1)"],
				borderWidth: 1,
				borderRadius: 30,
				spacing: 10,
				cutout: 130,
			},
		],
	};
    const loading = false;
    const handleLogout = () =>{

    }
  return (
    <div className='flex flex-col gap-6 items-center max-w-7xl mx-auto z-20 relative justify-center'>
        <div className="flex items-center">
            <p className="md:text-4xl text-2xl lg:text-4xl font-bold text-center relative z-50 mb-4 mr-4 bg-gradient-to-r from-pink-600 via-indigo-500 to-pink-400 inline-block text-transparent bg-clip-text">
                Track your spending!
            </p>
            <img src="https://avatar.iran.liara.run/public" alt="avatar" />
            {!loading && <MdLogout className='mx-2 w-5 h-5 cursor-pointer' onClick={handleLogout} />}
					{/* loading spinner */}
					{loading && <div className='w-6 h-6 border-t-2 border-b-2 mx-2 rounded-full animate-spin'></div>}
        </div>
        <div className="flex flex-wrap w-full justify-center items-center gap-6">
            <div className="h-[330px] w-[330px] md:h-[360px] md:w-[360px]">
                <Doughnut data={chartData}/>
            </div>
            <TransactionFormUI />
        </div>
    </div>
  )
}

export default Home