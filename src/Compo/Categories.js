import React ,{useState,useEffect} from 'react';
import styled from 'styled-components';
import Amplify, {API,graphqlOperation} from 'aws-amplify'
import confi from '../aws-exports';
import {mobile,mobilex,table,all} from './Responsive';
// import {listCates} from '../graphql/queries'
import {categorie} from './CategoriesData'
import CategorieItem from '../Compo/CategorieItem'
Amplify.configure(confi)

const Container = styled.div`
display:flex;
justify-content:space-around;
${mobilex(
  {flexDirection: 'column',padding:'10px'}
)}
${table(
  {flexDirection: 'column'}
)}
}
`


const Categories = (props) => {


  // const [categorie ,setCategorie] = useState([])

      //  useEffect(()=>{
      //    fetchCate()
      //    console.log('useEffect')
      //  },[])
      //  const fetchCate = async () => {
      //    try {
      //      const cateData = await API.graphql(graphqlOperation((lCatesist)))
      //      const  catelist = cateData.data.listCates.items
      //      setCategorie(catelist)
           
      //    } catch (error) {
           
      //    }
      //  }
       console.log('categorie',categorie)
  return (
    <Container>
      {categorie.map((item,i)=> {
          return(
              <CategorieItem  key={i}item={item}/>
          )
      })}
    </Container>
  );
}

export default Categories;
