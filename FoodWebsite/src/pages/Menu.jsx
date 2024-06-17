import React,{useState} from 'react';
import Banner from '../components/Banner';
import {menu} from '../data/Menuitem'
import {Link, useNavigate }from 'react-router-dom'
import './Menu.css'
import { useDispatch } from 'react-redux';
import { addToCart, getCartTotal } from '../redux/Cartslice';

export default function Menu() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [qty, setQty] = useState(1);
  const handleAddToCart = (item) => {
    console.log(item);
    let totalPrice = qty * item.price;
    const tempProduct = {
      ...item,
      quantity: qty,
      totalPrice,
    };
    dispatch(addToCart(tempProduct));
    dispatch(getCartTotal());
  };
  const [menuitem, setmenuitem] = useState(menu);


  const  menucategory = (category) => {
    const categoryitem = menu.filter((item) => item.category === category);
    setmenuitem(categoryitem);

    if (category === "all") {
      setmenuitem(menu);
      return;
    }
  };
  return (
   <>
     <div className='container-fluid menu py-5'>
       <div className='container'>
         <Banner title="Our Menu" description="Most Popular Food in the Market"/>
         <div className='tab-class text-center '>
           <ul className="nav nav-pills d-inline-flex justify-content-center mb-5 wow bounceInUp ">
             <li className="nav-item p-2">
               <Link
                 to="/menu"
                 onClick={()=>menucategory("all")}
                 className="d-flex mx-2 py-2 border border-warning eventlink rounded-pill"
               >
                 {" "}
                 <span className="text-dark" style={{ width: "150px" }}>
                   All Items
                 </span>
               </Link>
             </li>
             <li className="nav-item p-2">
                <Link
                  to="/menu"
                  onClick={()=>menucategory("starter")}
                  className="d-flex mx-2 py-2 border border-warning eventlink rounded-pill"
                >
                  {" "}
                  <span className="text-dark" style={{ width: "150px" }}>
                    Starter
                  </span>
                </Link>
              </li>
             <li className="nav-item p-2">
               <Link
                 to="/menu"
                 onClick={()=>menucategory("maincourse")}
                 className="d-flex mx-2 py-2 border border-warning eventlink rounded-pill"
               >
                 {" "}
                 <span className="text-dark" style={{ width: "150px" }}>
                   Main Course
                 </span>
               </Link>
             </li>
             <li className="nav-item p-2">
               <Link
                 to="/menu"
                 onClick={()=>menucategory("drinks")}
                 className="d-flex mx-2 py-2 border border-warning eventlink rounded-pill"
               >
                 {" "}
                 <span className="text-dark" style={{ width: "150px" }}>
                   Drinks
                 </span>
               </Link>
             </li>
             <li className="nav-item p-2">
               <Link
                 to="/menu"
                 onClick={()=>menucategory("offers")}
                 className="d-flex mx-2 py-2 border border-warning eventlink rounded-pill"
               >
                 {" "}
                 <span className="text-dark" style={{ width: "150px" }}>
                   Offers
                 </span>
               </Link>
             </li>
             <li className="nav-item p-2">
               <Link
                 to="/menu"
                 onClick={()=>menucategory("ourspecials")}
                 className="d-flex mx-2 py-2 border border-warning eventlink rounded-pill"
               >
                 {" "}
                 <span className="text-dark" style={{ width: "150px" }}>
                   Our Specials
                 </span>
               </Link>
             </li>
           </ul>
             <div className="tab-content">
               <div className="fade show p-0 tab-pane active">
                 <div className="row g-4">
                       {menuitem.map((val, index) => (
                         <div
                           key={index}
                           className="col-lg-6  wow bounceInUp"
                         >
                           <div className="menu-item d-flex align-items-center">
                             <img
                               className="img-fluid rounded-circle flex-shrink-0"
                               src={val.img}
                               alt="img"
                             />
                             <div className="w-100 text-start d-flex flex-column p-4">
                               <div className='d-flex justify-content-between border-bottom border-primary pb-2 mb-2'>
                               <h4 className="me-auto">{val.name}</h4>
                               <h4 className="me-auto">${val.price}</h4>
                                 </div>
                               <div className='d-flex justify-content-between'>
                                 <p className='mb-0 col-md-6'>{val.content}</p>
                                 
                                  <Link className="my-auto" onClick={()=>handleAddToCart(val)}>
                                    <small className='d-inline-block fw-bold text-dark text-uppercase border rounded-pill px-4 py-1 mb-3'>{val.btn}</small>
                                  </Link>
                               </div>

                             </div>
                           </div>
                         </div>
                       ))}
                     </div>
                   </div>
           </div>
           </div>
         </div>
       </div>
  
   </>
  )
}


