import './index.css'

const LeftContainer = () => {

    return (
        <>
        <div className='home-left-top-container'>
                    <h1 className='app-title-home'>Board.</h1>
                    <div className='menu-container'>
                        <div className='menu-item-container'>
                            <img src="https://res.cloudinary.com/da7ik4khq/image/upload/v1692607669/OpeninApp%20Assignment/Screenshot_2023-08-21_141649_kzfruf.png" className='menu-image' alt="Dashboard Image"/>
                            <p className="menu-title-dashboard">Dashboard</p>
                        </div>
                        <div className='menu-item-container'>
                        <img src="https://res.cloudinary.com/da7ik4khq/image/upload/v1692606989/OpeninApp%20Assignment/transaction_icon_lobhnv.png" className='menu-image' alt="Transaction  Image"/>
                            <p className="menu-title">Transaction</p>
                        </div>
                        <div className='menu-item-container'>
                        <img src="https://res.cloudinary.com/da7ik4khq/image/upload/v1692606989/OpeninApp%20Assignment/schedule_icon_x5hbw5.png" className='menu-image' alt="Schedules Image"/>
                            <p className="menu-title">Schedules</p>
                        </div>
                        <div className='menu-item-container'>
                        <img src="https://res.cloudinary.com/da7ik4khq/image/upload/v1692606989/OpeninApp%20Assignment/user_icon_jf8g7i.png" className='menu-image' alt="Users Image"/>
                            <p className="menu-title">Users</p>
                        </div>
                        <div className='menu-item-container'>
                        <img src="https://res.cloudinary.com/da7ik4khq/image/upload/v1692606989/OpeninApp%20Assignment/setting_icon_yknvwl.png" className='menu-image' alt="Setting Image"/>
                            <p className="menu-title">Setting</p>
                        </div>
                    </div>
        </div>
        <div className='home-left-bottom-container'>
                <p className='help-title'>Help</p>
                <p className='contact-title'>Contact Us</p>
        </div>
            </>
    )
}

export default LeftContainer