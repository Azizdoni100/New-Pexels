import React from 'react'
import "./header.scss"

const Header = () => {
    return (
        <div className='container-admin'>
            <div className='parent-of-three-section'>
                <div className='main-section'>
                   <h3 className='titles-header'>Revanue</h3>
                   <h2 className='analitics'>$2,415  <num> -11.4 <arrow>↓</arrow></num></h2>  
                   <p className='p-gray-of-analitics'>Compared to last month</p>
                </div>
                <div className='main-section'>
                   <h3 className='titles-header'>Sales</h3>
                   <h2 className='analitics'>$4,415 <num> -1.4 <arrow>↓</arrow></num></h2>  
                   <p className='p-gray-of-analitics'>Compared to last month</p>
                </div>
                <div className='main-section'>
                   <h3 className='titles-header'>Cost</h3>
                   <h2 className='analitics'>$2,225  <num> +2.4 <arrows>↑</arrows></num></h2>  
                   <p className='p-gray-of-analitics'>Compared to last month</p>
                </div>
            </div>
        </div>
    )
}

export default Header
