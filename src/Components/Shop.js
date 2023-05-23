import React from 'react'
import pic from '../money-7578738_1280.webp';

const Shop = () => {
    return (
        <>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center',position:"relative",top:'50px'  }}>
                <img src={pic} alt="" srcSet="" style={{ marginBottom: '10px', height:"400px", width:"500px" }} />
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <button className="btn btn-primary" style={{ marginRight: '10px' }}>+</button>
                    <h4 style={{ margin: '0 10px' }}>Withdraw/Deposit</h4>
                    <button className="btn btn-primary">-</button>
                </div>
            </div>

        </>
    )
}

export default Shop
