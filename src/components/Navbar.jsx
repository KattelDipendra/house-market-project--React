import { useNavigate, useLocation } from 'react-router-dom'
import { ReactComponent as ExploreIcon } from '../assets/svg/exploreIcon.svg'
import { ReactComponent as OfferIcon } from '../assets/svg/localOfferIcon.svg'
import { ReactComponent as PersonOutlineIcon } from '../assets/svg/personOutlineIcon.svg'

function Navbar() {
  const navigate=useNavigate()
  const location=useLocation()
  const pathMatchRoute =(route)=>{
    if(route==location.pathname){
      return true
    }
  }
  return (
    <footer className='navbar'>
      <nav className='navbarNav'>
        <ul className='navbarListItems'>
          <li className='navbarListItem'onClick={()=>navigate('/Explore')}>
            <ExploreIcon fill={pathMatchRoute('/Explore')?'#2c2c2c':'#8f8f8f'}width='30px'height='30px'/>
            <p
            className={pathMatchRoute('/Explore')
            ?'navbarListItemNameActive'
            :'navbarListItemName'}>Explore</p>
          </li>
          <li className='navbarListItem'onClick={()=>navigate('/Offers')}>
            <OfferIcon fill={pathMatchRoute('/Offers')?'#2c2c2c':'#8f8f8f'}width='30px'height='30px'/>
            <p className={pathMatchRoute('/Offers')
            ?'navbarListItemNameActive'
            :'navbarListItemName'}>Offer</p>
          </li>
          <li className='navbarListItem'onClick={()=>navigate('/Profile')}>
            <PersonOutlineIcon fill={pathMatchRoute('/Profile')?'#2c2c2c':'#8f8f8f'}width='30px'height='30px'/>
            <p className={pathMatchRoute('/Profile')
            ?'navbarListItemNameActive'
            :'navbarListItemName'}>Profile</p>
          </li>
        </ul>
      </nav>
    </footer>



  )
}

export default Navbar;
