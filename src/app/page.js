import Checkmark from "./assets/images/svg/CheckmarkRegular.jsx"
import CheckmarkIc from "./assets/images/svg/CheckMark.jsx"
import Heart from "./assets/images/svg/Heart.jsx"
import Truck from "./assets/images/svg/Truck.jsx"

export default function Home() {
  return (
    <main className="flex flex-col justify-between items-center">
      <div className="flex w-full h-12 bg-primary/dark">
        <div className="flex justify-center items-center w-full text-white">
          <CheckmarkIc />
          <p className="ml-2 uppercase">
            30-DAY SATISFACTION GUARANTEE
          </p>
        </div>
        <div className="flex items-center w-full text-white">
          <Truck />
          <p className="ml-2 uppercase">
            Free delivery on orders over $40.00
          </p>
        </div>
        <div className="flex items-center w-full text-white">
          <Heart />
          <p className="ml-2 uppercase">
          50.000+ HAPPY CUSTOMERS
          </p>
        </div>
        <div className="flex items-center w-full text-white">
          <Checkmark />
          <p className="ml-2 uppercase">
          100% Money Back Guarantee
          </p>
        </div>
      </div>
    </main>
  )
}
