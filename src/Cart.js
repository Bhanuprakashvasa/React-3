export function Cart({value}){
    return (
      <div>
          <div className='d-flex justify-content-between align-items-center flex-row gap-2'>
              <button className='btn btn-outline-dark d-flex col gap-1'>
                <div>🛒🛒</div>
                <div>Cart</div>
                <div className='rounded-square ps-2 pe-2 bg-primary text-light'>{value}</div>
              </button>
            </div>
      </div>
    );
  }