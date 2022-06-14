//testing pagination (Not connected in the app.js, just compilation of codes in pagination. to be tested)


import React, {useState, useEffect} from 'react'

import { Pagination } from 'antd';

import { db, storage } from '../firebase-config'
import {collection, onSnapshot, doc, addDoc, serverTimestamp, orderBy, query} from 'firebase/firestore'
import {ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';



useEffect(() => {

    const q = query(animalProfileCollectionRef, orderBy("dateCreated", "desc"));
    onSnapshot(q, animalProfileCollectionRef, snapshot => {
      
      setAnimal_Profile(snapshot.docs.map(doc => {
        return{
          id: doc.id,
          ...doc.data()
        }
      }))
    })
  }, [])




const [posts, setPosts] = useState([]);
const [total, setTotal] = useState("");
const [page, setPage] = useState(1);
const [postPerPage, setPostPerPage] = useState(5);

const indexOfLastPage = page + postPerPage;
const indexOfFirstPage = indexOfLastPage - postPerPage;
const currentPosts = posts.slice(indexOfFirstPage, indexOfLastPage);

const usersPerPage = 5;

const onShowSizeChange = (current, pageSize) => {
  setPostPerPage(pageSize);
  };
  
  const itemRender = (current, type, originalElement) => {
  
  if(type === "prev") {
  return <a>Previous</a>
  }
  if(type === "next") {
  return <a>Next</a>;
  }
  return originalElement;
  };

 export const Pagination = () => {

return (


  <div className = 'grid justify-items-end  mt-80  pt-80  mr-9 '>
                    
  <Pagination
   defaultCurrent = {1} 
    onChange = {(value) => setPage(value)}
    pageSize = {postPerPage}
    total = {total}
    current = {page}
    showSizeChanger
    showQuickJumper
    onShowSizeChange = {onShowSizeChange}
    itemRender = {itemRender}
    usersPerPage = {usersPerPage}

  />

</div>
)
}
  