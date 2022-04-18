import 'bootstrap/dist/css/bootstrap.css';
import { useEffect } from "react";
import Layout from "../components/Layout.jsx"
import './Sidebar.css'

export default function App({ Component, pageProps }) {

  useEffect(() => {
    import('bootstrap/dist/js/bootstrap');
  }, []);

  return (
    <Layout id='page-wrap'>
      <Component {...pageProps} />
    </Layout>

    
  )
}