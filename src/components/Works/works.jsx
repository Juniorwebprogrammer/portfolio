import Portfolio from './assets/portfolio.jpg';
import ImgMediaCard from '../card/card.jsx';
import ('./works.scss');


export default function Works() {
    return (
        <div className='works' id='works'>
           <div className='cardContainer_1'>
               <div className="card">
                    <ImgMediaCard className='card'></ImgMediaCard>
               </div>
           </div>
        </div>
    );
}