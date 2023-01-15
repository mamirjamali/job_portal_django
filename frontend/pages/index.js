import Layout from '../components/layouts/Layout'
import Home from '../components/Home'

import axios from 'axios'

export default function App({ data }) {

  return (
    <>
      <Layout>
        <Home data={ data } />
      </Layout>
    </>
  )
}


export async function getServerSideProps({query}) {
  
  const keyword = query.keyword || ''
  const location = query.location || ''

  const queryStr = `keyword=${keyword}&location=${location}`
  const res = await axios.get(`${process.env.API_URL}/api/jobs/?${queryStr}`)
  const data =  res.data

  return {
    props: {
       data,
    }
  }
}