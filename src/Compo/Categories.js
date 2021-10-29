import React ,{useState,useEffect} from 'react';
import styled from 'styled-components';
import Amplify, {API,graphqlOperation} from 'aws-amplify'
import confi from '../aws-exports'
// import {listCates} from '../graphql/queries'
// import {categorie} from './CategoriesData'
import CategorieItem from '../Compo/CategorieItem'
Amplify.configure(confi)

const Container = styled.div`
display:flex;
// padding:3px;
justify-content:space-around;

`


const Categories = (props) => {


  const [categorie ,setCategorie] = useState([])

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
