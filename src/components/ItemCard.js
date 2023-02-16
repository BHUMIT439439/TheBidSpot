import React,{useEffect} from "react";
import { Link } from "react-router-dom";
import { FaBed, FaBath } from "react-icons/fa";
import { GiTakeMyMoney } from "react-icons/gi";
import { getAuth } from "firebase/auth";
  import "../styles/ItemCardStyle.css";
  import AOS from 'aos';
  import 'aos/dist/aos.css';


const ItemCard = ({ listing, id, onDelete, onEdit }) => {

  const auth = getAuth();

  useEffect(() => {
    AOS.init({});
  }, [])

  return (
    <>
      <div className="col-sm-3">
  <div className="card mt-4 card-item">
  <img src={listing.imgUrls[0]} className="card-img-top img-fluid" alt="..." style={{height:"250px"}} data-aos-delay={300} />
    <div className="card-body">
      <h5 className="card-title">{listing.itemName}</h5>
      <p className="card-text">{listing.itemDec}</p>
      <p className="card-text">{listing.email}</p>
      {
        listing.useRef != auth.currentUser.uid 
        ? (
          <><a href="#" className="btn btn-primary">Bid</a></>
        )
        :(
        <>
        <div className="d-flex justify-content-around">
        <button className="btn btn-outline-secondary" onClick={()=>{onEdit(listing.id)}} >Edit</button>
        <button className="btn btn-outline-danger" onClick={()=>{onDelete(listing.id)}}>Delete</button>
        </div>
        </>
        )
      }
      
    </div>
  </div>
</div>


    </>
  );
};

export default ItemCard;