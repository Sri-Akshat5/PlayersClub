import tshirtImg from "../assets/tshirt.jpeg";
import hoodieImg from '../assets/hoodiee.jpeg';
import capImg from '../assets/cap.jpeg';

const products = [
  {
    id: "tshirt-001",
    name: "Classic T-Shirt",
    price: "$25",
    category: "T-Shirts",
    image: tshirtImg,
    description: "Soft cotton tee with a bold PlayersClub logo."
  },
  {
    id: "hoodie-001",
    name: "Heavyweight Hoodie",
    price: "$55",
    category: "Hoodies",
    image: hoodieImg,
    description: "Premium hoodie with fleece lining and street-style fit."
  },
  {
    id: "cap-001",
    name: "Signature Cap",
    price: "$30",
    category: "Caps",
    image: capImg,
    description: "Structured snapback with embroidered PlayersClub logo."
  }
];

export default products;
