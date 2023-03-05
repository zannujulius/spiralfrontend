import OnBtn from "../../assets/png/on.png";
import BuyBtn from "../../assets/png/buy.png";
import Chart from "../../assets/svg/chart.svg";
import ShareImg from "../../assets/png/share.png";

export const serviceData = [
  {
    id: 1,
    title: "User",
    desc: `Lorem Ipsum is simply dummy text of the printing and
typesetting industry. Lorem Ipsum has been the industry's
standard dummy text ever since the 1500s, when an unknown
printer took a galley of type and scrambled it to make a type
specimen book.`,
    img: "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8ZXN0YXRlc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=900&q=60",
    // img: "https://images.unsplash.com/photo-1505691723518-36a5ac3be353?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8aG9tZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=900&q=60",
  },
  {
    id: 2,
    title: "Micro grids",
    desc: `Lorem Ipsum is simply dummy text of the printing and
typesetting industry. Lorem Ipsum has been the industry's
standard dummy text ever since the 1500s, when an unknown
printer took a galley of type and scrambled it to make a type
specimen book.`,
    img: "https://images.unsplash.com/photo-1594818379496-da1e345b0ded?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bWluaSUyMGdyaWRzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=900&q=60",
  },
  {
    id: 3,
    title: "Macro grids",
    desc: `Lorem Ipsum is simply dummy text of the printing and
typesetting industry. Lorem Ipsum has been the industry's
standard dummy text ever since the 1500s, when an unknown
printer took a galley of type and scrambled it to make a type
specimen book.`,
    img: "https://plus.unsplash.com/premium_photo-1674406067332-a54c1c5dfee2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8cG93ZXIlMjBsaW5lc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=900&q=60",
  },
  {
    id: 4,
    title: "Estate Managers",
    desc: `Lorem Ipsum is simply dummy text of the printing and
typesetting industry. Lorem Ipsum has been the industry's
standard dummy text ever since the 1500s, when an unknown
printer took a galley of type and scrambled it to make a type
specimen book.`,
    img: "https://images.unsplash.com/photo-1460317442991-0ec209397118?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGVzdGF0ZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=900&q=60",
    // img: "https://images.unsplash.com/photo-1516156008625-3a9d6067fab5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8ZXN0YXRlc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=900&q=60",
  },
  {
    id: 5,
    title: "Office",
    desc: `Lorem Ipsum is simply dummy text of the printing and
typesetting industry. Lorem Ipsum has been the industry's
standard dummy text ever since the 1500s, when an unknown
printer took a galley of type and scrambled it to make a type
specimen book.`,
    img: "https://images.unsplash.com/photo-1579487785973-74d2ca7abdd5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8b2ZmaWNlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=900&q=60",
    // img: "https://images.unsplash.com/photo-1516156008625-3a9d6067fab5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8ZXN0YXRlc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=900&q=60",
  },
];

export const specData = [
  {
    id: 1,
    title: "Dimension",
    value: "2363*243mm",
  },
  {
    id: 2,
    title: "Phase type",
    value: "Two (2) phases",
  },
  {
    id: 3,
    title: "Number of Channels",
    value: "16 channels",
  },
  {
    id: 4,
    title: "Voltage",
    value: "240V",
  },
  {
    id: 4,
    title: "Current",
    value: "25A",
  },
];

export const recData = [
  {
    id: 1,
    title: `Lorem Ipsum is simply
    dummy text of the printing and typesetting industry. Lorem Ipsum
    has been the industry's standard dummy text ever since the 1500s,
    when an unknown printer took a galley of type and scrambled it to
    make a type specimen book`,
    name: "Philip",
    position: "CTO",
  },
  {
    id: 2,
    title: `Lorem Ipsum is simply
    dummy text of the printing and typesetting industry. Lorem Ipsum
    has been the industry's standard dummy text ever since the 1500s,
    when an unknown printer took a galley of type and scrambled it to
    make a type specimen book`,
    name: "Philip",
    position: "CTO",
  },
];

export const featuresData = [
  {
    id: 1,
    title: "Schedule connection and disconnection",
    desc: `Lorem Ipsum is simply
    dummy text of the printing and typesetting industry. Lorem Ipsum
    has been the industry's.`,
    icon: <img src={OnBtn} className="" />,
  },
  {
    id: 2,
    title: "Monitor consumption.",
    desc: `Lorem Ipsum is simply
    dummy text of the printing and typesetting industry. Lorem Ipsum
    has been the industry's.`,
    icon: <img src={Chart} className="" />,
  },
  {
    id: 3,
    title: "Buy and Sell energy.",
    desc: `Lorem Ipsum is simply
    dummy text of the printing and typesetting industry. Lorem Ipsum
    has been the industry's.`,
    icon: <img src={BuyBtn} className="" />,
  },
  {
    id: 4,
    title: "Share channels.",
    desc: `Lorem Ipsum is simply
    dummy text of the printing and typesetting industry. Lorem Ipsum
    has been the industry's.`,
    icon: <img src={ShareImg} className="" />,
  },
];
