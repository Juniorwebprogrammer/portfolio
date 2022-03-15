import {GitHub, YouTube} from '@material-ui/icons';
import ('./topbar.scss');


export default function Topbar({menuOpen,setMenuOpen}) {
    return (
        <div className={'topbar ' + (menuOpen && "active")}>
            <div clasname='wrapper'>
                <div className='left'>
                    <a href='#intro' className='logo'>
                        JS
                    </a>
                    <div className='itemcontainer'>
                        <GitHub className='icon'onClick={()=>window.open("https://github.com/Juniorwebprogrammer")}/>
                        <span> JuniorWebProgrammer</span>
                    </div>
                    <div className='itemcontainer'>
                        <YouTube className='icon' onClick={()=> window.open("https://www.youtube.com/")}/>
                        <span> Turincónweb</span>
                    </div>
                    <div className='menu' onClick={() => setMenuOpen(!menuOpen)}>
                        <span className='line-1'></span>
                        <span className='line-2'></span>
                        <span className='line-3'></span>
                    </div>
                </div>
            </div>
        </div>
    )
}

