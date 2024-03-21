import React, { useState } from "react";
import classes from './CardDetails.module.css';
import image1 from '../../assets/slideshow1.jpg';
import image2 from '../../assets/slideshow2.jpg';
import image3 from '../../assets/slideshow3.jpg';
import image4 from '../../assets/slideshow4.jpg';


const CardDetails = () => {
    const [currentImage, setCurrentImage] = useState(image1);
    return (
        <div className={classes.carddetails}>
            <div className={classes.product}>
                <div className={classes.left}>
                    <div className={classes.singleimage}><img src={currentImage} alt="image not found" /></div>
                    <div className={classes.list}>
                        <button className={classes.imagebutton} onClick={() => setCurrentImage(image1)}><img  src={image1} alt="first image"/></button>
                        <button className={classes.imagebutton} onClick={() => setCurrentImage(image2)}><img  src={image2} alt="second image" /></button>
                        <button className={classes.imagebutton} onClick={() => setCurrentImage(image3)}><img  src={image3} alt="third image"/></button>
                        <button className={classes.imagebutton} onClick={() => setCurrentImage(image4)}><img  src={image4} alt="fourth image"/></button>
                    </div>
                    <button className={classes.cartbutton}>Add To Cart</button>
                </div>
                <div className={classes.right}>
                    <p className={classes.productheading}>Debt - The First 5000 Years </p>
                    <p className={classes.productauthor}>by DAVID GREABER</p>
                    <p className={classes.rating}>4.0 </p>
                    <hr />
                    <p className={classes.price}>-50%  Rs. 200</p>
                    <p className={classes.MRP}>MRP Rs. 400</p>
                    <hr />
                    <p className={classes.desc}>This is the desciption of book Indulge in comfort and timeless styles with Symbol, an Amazon brand that offers a wide range of wardrobe essentials for your family</p>
                    <hr />
                        <p className={classes.detailsheading}>Product Details</p>
                        <div className={classes.details}>
                        <div className={classes.leftdetails}>
                            <div className={classes.leftsingledetails}><p className={classes.leftdetailheading}>Edition</p><p className={classes.leftdetailvalue}>1st</p></div>                            
                            <div className={classes.leftsingledetails}><p className={classes.leftdetailheading}>Publisher</p><p className={classes.leftdetailvalue}>Abcd</p></div>
                            <div className={classes.leftsingledetails}><p className={classes.leftdetailheading}>Publication Year</p><p className={classes.leftdetailvalue}>Abcd</p></div>
                        </div>
                        <div className={classes.rightdetails}>
                            <div className={classes.rightsingledetails}><p className={classes.rightdetailheading}>Category</p><p className={classes.rightdetailvalue}>Abcd</p></div>
                            <div className={classes.rightsingledetails}><p className={classes.rightdetailheading}>Pages</p><p className={classes.rightdetailvalue}>Abcd</p></div>
                            <div className={classes.rightsingledetails}><p className={classes.rightdetailheading}>Language</p><p className={classes.rightdetailvalue}>Abcd</p></div>
                        </div>
                        </div>
                </div>
            </div>
        </div>
    );
}

export default CardDetails;