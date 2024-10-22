import React, { useState } from "react";
import BannerComponent from "../../components/BannerComponent/BannerComponent";
import "./style.css";
import { Link } from "react-router-dom";

const BookingPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    date: "",
    time: "",
    quantity: 1,
    location: "",
    stylist: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    alert("Booking Submitted!");
  };
  return (
    <>
      <div className="bookingpage">
        <BannerComponent />
        <div className="booking-container">
          <form onSubmit={handleSubmit} className="booking-form">
            <h1>BOOKING</h1>
            <div className="button-group">
              <div style={{ marginRight: 20 }}>
                <Link to={"/becolor"}>
                  <button type="button">TEST COLOR</button>
                </Link>
              </div>
              <Link to={"/bespoke"}>
                <button type="button">TEST STYLE</button>
              </Link>
            </div>

            <label>Name*</label>
            <input
              className="input-form"
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />

            <label>Phone*</label>
            <input
              className="input-form"
              type="tel"
              name="phone"
              placeholder="Please enter the correct phone number for confirmation."
              value={formData.phone}
              onChange={handleChange}
              required
            />

            <label>Booking date*</label>
            <input
              className="input-form"
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              required
            />

            <label>Time*</label>
            <select
              className="input-form"
              name="time"
              value={formData.time}
              onChange={handleChange}
            >
              <option value="11:00">11:00</option>
              <option value="12:00">12:00</option>
              <option value="13:00">13:00</option>
              <option value="14:00">14:00</option>
            </select>

            <label>Quantity customer</label>
            <input
              className="input-form"
              type="number"
              name="quantity"
              min="1"
              value={formData.quantity}
              onChange={handleChange}
            />

            <label>Booking location*</label>
            <div className="radio-group">
              <div className="radio-container" style={{ display: "flex" }}>
                <input
                  type="radio"
                  className="radios"
                  name="location"
                  value="Dream Barber shop - Go Vap Dist."
                  checked={
                    formData.location === "Dream Barber shop - Go Vap Dist."
                  }
                  onChange={handleChange}
                />
                <label style={{ fontSize: 10, marginLeft: 10 }}>
                  Dream Barber shop - Go Vap Dist.
                </label>
              </div>
              <div className="radio-container" style={{ display: "flex" }}>
                <input
                  type="radio"
                  className="radios"
                  name="location"
                  value="Dream Barber shop - 9 Dist."
                  checked={formData.location === "Dream Barber shop - 9 Dist."}
                  onChange={handleChange}
                />
                <label style={{ fontSize: 10, marginLeft: 10 }}>
                  Dream Barber shop - 9 Dist.
                </label>
              </div>
            </div>
            <section>
              <label>Stylist</label>
              <input
                className="input-form"
                type="text"
                name="stylist"
                value={formData.stylist}
                readOnly
              />
            </section>

            <div className="submit-container">
              <button className="submit" type="submit">
                Submit
              </button>
            </div>
          </form>
        </div>
        <div style={{ height: 30 }}>.</div>
      </div>
    </>
  );
};

export default BookingPage;
