import ('./topbar.scss');

export default function Topbar() {
    return (
        <div className='topbar'>
            <div clasname='wrapper'>
                <div className='left'>
                    <a href='#intro' className='logo'>
                        JS
                    </a>
                   
                    <h1>
                        Menu
                    </h1>
                </div>
            </div>
        </div>
    )
}