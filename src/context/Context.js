import {createContext, useState} from 'react';
import tryagainpic from '../images/tryagain.jpg'

const DataContext=createContext()

const DataProvider = (props) => {
  const [imgSrc, setImgSrc]=useState('')
  const [searchStatus, setSearchStatus]=useState(false)
  const [myAnimals, setMyAnimals]=useState([])
  
  const catURL='https://aws.random.cat/meow'
  const dogURL = 'https://random.dog/woof.json'

  const getCat= async() =>{
    setSearchStatus(true)
    try{
      const response = await fetch(catURL);
      const catData= await response.json();
      catSrcFunc(catData)
    }catch(error){
      console.log(error)
      setImgSrc(tryagainpic)
    }
  }

  const getDog=async()=>{
    setSearchStatus(true)
    try{
      const response = await fetch(dogURL)
      const dogData = await response.json();
      dogSrcFunc(dogData)
    }catch(error){
      console.log(error)
      setImgSrc(tryagainpic)
    }
  }

  const dogSrcFunc=(data)=>{
    if(data.url.includes('mp4')){
      setImgSrc(tryagainpic)
    } else{
      setImgSrc(data.url)}
  }

  const catSrcFunc=(data)=>{
    setImgSrc(data.file)
  }

  const takeHome=()=>{
    const img = imgSrc
    alert('Congrats! It\'s yours now!')
    setMyAnimals([...myAnimals, {src: img}])
  }
  
  return (  
    <DataContext.Provider 
      value={{
        imgSrc,
        setImgSrc,
        searchStatus,
        setSearchStatus,
        myAnimals,
        setMyAnimals,
        getCat,
        getDog, 
        dogSrcFunc,
        catSrcFunc,
        takeHome
      }}>
        {props.children}
    </DataContext.Provider>
  );
}
 
export {DataContext,DataProvider};