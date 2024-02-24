import Cart from "../Cart/Cart";

const Bookmarks = ({cartList,remainingHour, totalPrice, totalHour }) => {
    let totalCreditHour = 0;
    let totalCreditPrice = 0;
    return (
        <div className='mx-2 bg-white w-72 mb-8 rounded-lg'>
            <div className='mx-5 my-5'>
            <h1 className='text-base text-sky-600'>Credit Hour Remaining {20 - totalHour} hr</h1>
            <hr className='text-slate-50'/>
            <div className="text-lg font-semibold">Course Name</div>
            <ol>
            {
                cartList.map((cart, idx)=> 
                <Cart key={idx} cart={cart} ></Cart>)
            }
            </ol>
            <hr className='text-slate-50'/>
            <div>Total Credit Hour : {totalHour}</div>
            <hr className='text-slate-50'/>
            <div className="font-semibold">Total Price : {totalPrice} USD</div>

            </div>
        </div>
    );
};

export default Bookmarks;