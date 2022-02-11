import {Person, Mail} from '@material-ui/icons';
import ('./topbar.scss');


export default function Topbar() {
    return (
        <div className='topbar'>
            <div clasname='wrapper'>
                <div className='left'>
                    <a href='#intro' className='logo'>
                        JS
                    </a>
                    <div className='itemcontainer'>
                        <Person className='icon'/>
                        <span>+34 697 928 123</span>
                    </div>
                    <div className='itemcontainer'>
                        <Mail className='icon'/>
                        <span> juniorgarciadiaz@outlook.com </span>
                    </div>
                    <div className='menu'>
                        <span className='line-1'></span>
                        <span className='line-2'></span>
                        <span className='line-3'></span>
                    </div>
                </div>
            </div>
        </div>
    )
}

