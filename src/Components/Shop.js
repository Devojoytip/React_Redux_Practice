import React from 'react'
import pic from '../ultraboost-23-shoes.jpg';

const Shop = () => {
    return (
        <>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center',position:"relative",top:'50px'  }}>
                <img src={pic} alt="" srcset="" style={{ marginBottom: '10px' }} />
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <button className="btn btn-primary" style={{ marginRight: '10px' }}>+</button>
                    <h4 style={{ margin: '0 10px' }}>Buy shoes Rs 50 /-</h4>
                    <button className="btn btn-primary">-</button>
                </div>
            </div>

        </>
    )
}

export default Shop
