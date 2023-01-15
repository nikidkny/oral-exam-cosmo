import { useState, createContext, useRef, useEffect } from "react";

export const AppContext = createContext();

export function ContextProvider(props) {
  //-----------Booking flow-----------
  const [showForm, setShowForm] = useState(false);
  const [show, setShow] = useState(false);
  const [showPersonalForm, setShowPersonalForm] = useState(false);
  const [showTimeout, setShowTimeout] = useState(false);
  const [reserveID, setReserveID] = useState({});
  const [showThanks, setShowThanks] = useState(false);
  //--- state for booked ticket details
  const [booking, setBooking] = useState({
    VIPTicket: "",
    REGTicket: "",
    greenCamping: "",
    rentTent2: "",
    rentTent3: "",
    camping: "",
  });
  //-- vip ticket related
  const [VIPticketPrice, setVIPticketPrice] = useState("");
  const VIPPrice = 1299;

  //-- regular ticket related
  const [REGticketPrice, setREGticketPrice] = useState("");
  const RegPrice = 799;

  //-- camping related
  const fixedPrice = 99;

  //-- greenCamping related
  const greenPrice = 249;

  const checkbox = useRef();
  const [checked, setChecked] = useState(false);

  //-- renttent2 related
  const [rentTent2Price, setrentTent2Price] = useState("");
  const tent2Price = 249;

  //-- renttent3  related
  const [rentTent3Price, setrentTent3Price] = useState("");
  const tent3Price = 349;

  //-- totalamount ticket  related
  const [totTicketAmount, setTotTicketAmount] = useState("");

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    setBooking((prev) => {
      return { ...prev, [name]: value };
    });
    if (name === "VIPTicket") {
      setVIPticketPrice(value * VIPPrice);
    }
    if (name === "REGTicket") {
      setREGticketPrice(value * RegPrice);
    }
    if (name === "rentTent2") {
      setrentTent2Price(value * tent2Price);
    }
    if (name === "rentTent3") {
      setrentTent3Price(value * tent3Price);
    }
  };

  // this should be to make string to number
  useEffect(() => {
    if (booking.REGTicket && booking.VIPTicket) {
      setTotTicketAmount(parseInt(booking.REGTicket) + parseInt(booking.VIPTicket));
    } else if (booking.REGTicket) {
      setTotTicketAmount(parseInt(booking.REGTicket));
    } else {
      setTotTicketAmount(parseInt(booking.VIPTicket));
    }
  }, [booking]);

  const [basket, setBasket] = useState([]);
  const addToBasket = (e) => {
    e.preventDefault();
    basket.push(booking);
    setBasket(basket.concat());
  };
  const subtotal = +VIPticketPrice + +REGticketPrice + +rentTent2Price + +rentTent3Price;
  const totalForpay = +subtotal + fixedPrice;

  const value = {
    subtotal,
    totalForpay,
    show,
    showForm,
    showPersonalForm,
    booking,
    totTicketAmount,
    fixedPrice,
    VIPPrice,
    RegPrice,
    tent2Price,
    tent3Price,
    greenPrice,
    REGticketPrice,
    VIPticketPrice,
    checkbox,
    checked,
    rentTent2Price,
    rentTent3Price,
    reserveID,
    showTimeout,
    showThanks,
    setShowThanks,
    setShowTimeout,
    setReserveID,
    handleChange,
    setBooking,
    setChecked,
    addToBasket,
    setShowForm,
    setShow,
    setShowPersonalForm,
  };
  return <AppContext.Provider value={value}>{props.children}</AppContext.Provider>;
}
