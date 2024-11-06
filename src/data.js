import { FaCreditCard, FaBook, FaBriefcase } from 'react-icons/fa';
import React from 'react';

// const creditCard = () => <FaCreditCard />
// const faFacebook = () => <FaBook />
// const faBriefcase = () => <FaBriefcase />


// const sublinks = [
//   {
//     page: 'products',
//     links: [
//       { label: 'payment', icon: creditCard(), url: '/products' },
//       { label: 'terminal', icon: creditCard(), url: '/products' },
//       { label: 'connect', icon: creditCard(), url: '/products' },
//     ],
//   },
//   {
//     page: 'developers',
//     links: [
//       { label: 'plugins', icon: faFacebook(), url: '/products' },
//       { label: 'libraries', icon: faFacebook(), url: '/products' },
//       { label: 'help', icon: faFacebook(), url: '/products' },
//       { label: 'billing', icon: faFacebook(), url: '/products' },
//     ],
//   },
//   {
//     page: 'company',
//     links: [
//       { label: 'about', icon: faBriefcase(), url: '/products' },
//       { label: 'customers', icon: faBriefcase(), url: '/products' },
//     ],
//   },
// ];



const sublinks = [
  {
    page: 'products',
    links: [
      { label: 'payment', icon: FaCreditCard, url: '/products' },
      { label: 'terminal', icon: FaCreditCard, url: '/products' },
      { label: 'connect', icon: FaCreditCard, url: '/products' },
    ],
  },
  {
    page: 'developers',
    links: [
      { label: 'plugins', icon: FaBook, url: '/products' },
      { label: 'libraries', icon: FaBook, url: '/products' },
      { label: 'help', icon: FaBook, url: '/products' },
      { label: 'billing', icon: FaBook, url: '/products' },
    ],
  },
  {
    page: 'company',
    links: [
      { label: 'about', icon: FaBriefcase, url: '/products' },
      { label: 'customers', icon: FaBriefcase , url: '/products' },
    ],
  },
];

export default sublinks;
