import CardBox from "./CardBox"

const Cards = () => {

  return (
    <div className="w-full px-10 min-h-[40vh]">
        <p className="text-5xl font-bold text-center my-10">History</p>
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 justify-start mb-20">
            <CardBox type="saving"/>
            <CardBox type="expense"/>
            <CardBox type="investment"/>
            <CardBox type="saving"/>
        </div>
    </div>
  )
}

export default Cards