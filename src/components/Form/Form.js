import React, { useState } from "react";
import classes from './Form.module.css';
import camera from '../../assets/camera.jpg';

const Form = () => {

    // Define the states 
    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");
    const [publisher, setPublisher] = useState("");
    const [publicationyear, setPublicationYear] = useState("");
    const [edition, setEdition] = useState("");
    const [language, setLanguage] = useState("");
    const [category, setCategory] = useState("");
    const [pages, setPages] = useState("");
    const [period, setPeriod] = useState("");
    const [mrp, setMRP] = useState("");
    const [price, setPrice] = useState("");
    const [desc, setDesc] = useState("");
    const [image1, setImage1] = useState();
    const [image2, setImage2] = useState();
    const [image3, setImage3] = useState();
    const [image4, setImage4] = useState();
    const [email, setEmail] = useState("");
    const [phonenumber, setPhoneNumber] = useState("");
     
    // Handler for title input change
    const titleChangeHandler = (event) => {
        setTitle(event.target.value);
    }

    // Handler for author input change
    const authorChangeHandler = (event) => {
        setAuthor(event.target.value);
    }

    // Handler for publisher input change
    const publisherChangeHandler = (event) => {
        setPublisher(event.target.value);
    }

    // Handler for publication year input change
    const publicationyearChangeHandler = (event) => {
        setPublicationYear(event.target.value);
    }

    // Handler for edition input change
    const editionChangeHandler = (event) => {
        setEdition(event.target.value);
    }

    // Handler for language select change
    const selectHandleChange = (event) => {
        setLanguage(event.target.value);
    }

    // Handler for category select change
    const categoryHandleChange = (event) => {
        setCategory(event.target.value);
    }

    // Handler for pages input change
    const pageChangeHandler = (event) => {
        setPages(event.target.value);
    }

    // Handler for buying period select change
    const periodHandleChange = (event) => {
        setPeriod(event.target.value);
    }

    // Handler for MRP input change
    const mrpChangeHandler = (event) => {
        setMRP(event.target.value);
    }

    // Handler for price input change
    const priceChangeHandler = (event) => {
        setPrice(event.target.value);
    }

    // Handler for description input change
    const descChangeHandler = (event) => {
        setDesc(event.target.value);
    }

    // Handler for image file input change
    const image1ChangeHandler = (event) => {
        const image = event.target.files[0];
        if(image) {
            setImage1(image);
        }
    }
    const image2ChangeHandler = (event) => {
        const image = event.target.files[0];
        if(image) {
            setImage2(image);
        }
    }
    const image3ChangeHandler = (event) => {
        const image = event.target.files[0];
        if(image) {
            setImage3(image);
        }
    }
    const image4ChangeHandler = (event) => {
        const image = event.target.files[0];
        if(image) {
            setImage4(image);
        }
    }

    // Handler for email input change
    const emailChangeHandler = (event) => {
        setEmail(event.target.value);
    }

    // Handler for phone number input change
    const phonenumberChangeHandler = (event) => {
        setPhoneNumber(event.target.value);
    }

    // Form submit handler
    const handleSubmit = async (event) => {
        event.preventDefault();
        // Handle form submission, including image upload
        const formData = new FormData();
        formData.append("images", image1);
        formData.append("images", image2);
        formData.append("images", image3);
        formData.append("images", image4);
        try {
            const response = await fetch('http://localhost:8080/upload', {
                method: "POST",
                body: formData,
            });
            console.log(response);
            if(response.ok){
                console.log("Image uploaded");
            }else{
                console.log("Image not uploaded !");
            }
        }catch(err) {
            console.log("inside catch block !", err);
        }


        console.log("Form submitted with data:", {
            title,
            author,
            publisher,
            publicationyear,
            edition,
            language,
            category,
            pages,
            period,
            mrp,
            price,
            desc,
            email,
            phonenumber
        });
    }

    return (
        <div className={classes.form}>
            <h1 className={classes.heading}>UPLOAD YOUR BOOK</h1>
            <p className={classes.desc}>BOOK DETAILS</p>
            <form onSubmit={handleSubmit}>
                {/* Input fields for book details */}
                <div className={classes.field}>
                    <div><label>Title</label></div>
                    <div><input type="text" name="title" onChange={titleChangeHandler}/></div>
                </div>
                <div className={classes.field}>
                    <div><label>Author</label></div>
                    <div><input type="text" name="author" onChange={authorChangeHandler}/></div>
                </div>
                <div className={classes.field}>
                    <div><label>Publisher</label></div>
                    <div><input type="text" name="publisher" onChange={publisherChangeHandler}/></div>
                </div>
                <div className={classes.field}>
                    <div><label>Publication Year</label></div>
                    <div><input type="text" name="publicationyear" onChange={publicationyearChangeHandler}/></div>
                </div>
                <div className={classes.field}>
                    <div><label>Edition</label></div>
                    <div><input type="text" name="edition" onChange={editionChangeHandler}/></div>
                </div>
                <div className={classes.field}>
                    <div><label>Language</label></div>
                    <div>
                    <select onChange={selectHandleChange}>
                        <option value="hindi">Hindi</option>
                        <option value="english">English</option>
                        <option value="chinese">Chinese</option>
                    </select>
                    </div>
                </div>
                <div className={classes.field}>
                    <div><label>Genre / Category</label></div>
                    <div>
                    <select onChange={categoryHandleChange}>
                        <option value="fiction">Fiction</option>
                        <option value="non-fiction">Non-Fiction</option>
                        <option value="suspense">Suspense</option>
                    </select>
                    </div>
                </div>
                <div className={classes.field}>
                    <div><label>Pages</label></div>
                    <div><input type="number" name="pages" onChange={pageChangeHandler}/></div>
                </div>
                <div className={classes.field}>
                    <div><label>Buying Period</label></div>
                    <div>
                    <select onChange={periodHandleChange}>
                        <option value="0-1">Between 0 - 1 years</option>
                        <option value="1-2">Between 1-2 years</option>
                        <option value="2-3">Between 2-3 years</option>
                        <option value="3">More than 3 years</option>
                    </select>
                    </div>
                </div>
                <div className={classes.field}>
                    <div><label>MRP</label></div>
                    <div><input type="number" name="mrp" onChange={mrpChangeHandler}/></div>
                </div>
                <div className={classes.field}>
                    <div><label>Price</label></div>
                    <div><input type="number" name="price" onChange={priceChangeHandler}/></div>
                </div>
                <div className={classes.field}>
                    <div><label>Description</label></div>
                    <div><input type="textbox" name="description" onChange={descChangeHandler}/></div>
                </div>

                {/* Input fields for images */}
                <div className={classes.field}>
                    <div><label>Upload Images</label></div>
                    <div><input type="file" name="image1" onChange={image1ChangeHandler} accept="image/*" /></div>
                    <div><input type="file" name="image2" onChange={image2ChangeHandler} accept="image/*" /></div>
                    <div><input type="file" name="image3" onChange={image3ChangeHandler} accept="image/*" /></div>
                    <div><input type="file" name="image4" onChange={image4ChangeHandler} accept="image/*" /></div>
                </div>

                {/* Input fields for seller contacts */}
                <p>SELLER CONTACTS</p>
                <div className={classes.field}>
                    <div><label>Email</label></div>
                    <div><input type="email" name="email" onChange={emailChangeHandler}/></div>
                </div>
                <div className={classes.field}>
                    <div><label>Contact No.</label></div>
                    <div><input type="text" name="phonenumber" onChange={phonenumberChangeHandler}/></div>
                </div>

                {/* Submit button */}
                <button type="submit">Submit</button>
            </form>
        </div>
    )
};

export default Form;

