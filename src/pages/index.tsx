import Head from 'next/head';
import Image from 'next/image';
import styles from './Home.module.css';
import { Home as HomePage } from '../modules/Home/pages/Home/Home';

export default function Home() {
    return <HomePage />;
}
