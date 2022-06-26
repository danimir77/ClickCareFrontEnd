import React from 'react';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUserDetail, getUserPostDetail } from '../../../redux/action.js';
import { AiOutlineStar, AiTwotoneStar } from "react-icons/ai";
import "./UserById.css"
import InfoById from './InfoById/InfoById.js';
import imgUserById from "../../../images/imgUserById.png"
import RecordPostById from './RecordPostById/RecordPostById.js';
import { Link } from 'react-router-dom';
import ProfRegiById from './ProfRegiById/ProfRegiById.js';

function UserById({idUs}) {

   const dispatch = useDispatch();
  
    useEffect(() => {
      dispatch(getUserDetail(idUs))
    }, [dispatch, idUs]);

    useEffect(() => {
        dispatch(getUserPostDetail(idUs))
    }, [dispatch, idUs]);
  
    const detailUser = useSelector(state => state.userDetail);
    const detailPostUser = useSelector(state => state.userPostDetail);

    const score = 3
    const idValidate =  detailUser[0]?.professionals[0]?.id
  
    let verific = 0
        if (idValidate !== undefined){
            verific =+ 1
        }
  
    const [userOptionState, setuserOptionState] = useState(1);
    const toggleTab = (index) => {
      setuserOptionState(index);
    };
    

  return (
    <div className='containerUserById' key={idUs}>
        <div className='containerUserByIdLeft'>
            <img className='imgUserById' src={detailUser[0]?.photo?detailUser[0]?.photo:imgUserById} alt="img_User_By_Id"/><br/>
            <h2 className='nameUserById'>{detailUser[0]?.name.toUpperCase()} {detailUser[0]?.surname.toUpperCase()}</h2>
            <h3 className='cityUserById'>{detailUser[0]?.city.name}</h3>
            <p className='subTextUserById'>{detailUser[0]?.country.name}</p>
            <p className='subTextUserById mail_user'>{detailUser[0]?.email}</p>
            {score===1?<p className='scoreByUserId'><AiOutlineStar/><AiOutlineStar/><AiOutlineStar/><AiOutlineStar/><AiOutlineStar/></p>:null}
            {score===1?<p className='scoreByUserId'><AiTwotoneStar/><AiOutlineStar/><AiOutlineStar/><AiOutlineStar/><AiOutlineStar/></p>:null}
            {score===2?<p className='scoreByUserId'><AiTwotoneStar/><AiTwotoneStar/><AiOutlineStar/><AiOutlineStar/><AiOutlineStar/></p>:null}
            {score===3?<p className='scoreByUserId'><AiTwotoneStar/><AiTwotoneStar/><AiTwotoneStar/><AiOutlineStar/><AiOutlineStar/></p>:null}
            {score===4?<p className='scoreByUserId'><AiTwotoneStar/><AiTwotoneStar/><AiTwotoneStar/><AiTwotoneStar/><AiOutlineStar/></p>:null}
            {score===4?<p className='scoreByUserId'><AiTwotoneStar/><AiTwotoneStar/><AiTwotoneStar/><AiTwotoneStar/><AiTwotoneStar/></p>:null}
            <button className={userOptionState===1?"buttonOne deploys": "buttonOne doNotDeploys"} onClick={() => toggleTab(1)}>Tu Informacion</button><br/>
            <button className={userOptionState===2?"buttonOne deploys": "buttonOne doNotDeploys"} onClick={() => toggleTab(2)}>Tus Publicaciones</button><br/>
            <button className={userOptionState===3?"buttonOne deploys": "buttonOne doNotDeploys"} onClick={() => toggleTab(3)}>Tus Historial</button><br/>
            {verific === 0?<button className={userOptionState===4?"buttonOne deploys": "buttonOne doNotDeploys"} onClick={() => toggleTab(4)}>Registrate como Profesional</button>:<Link to="/offers"><button className='buttonOne doNotDeploysTwo'>Aplica a una Oferta</button></Link> }
            <Link to="/postForm"><button className='buttonOne doNotDeploysTwo'>Crea una Oferta</button></Link> 
        </div>
        <div className='containerUserByIRight'>
            <div className={userOptionState === 1 ? "active_deploy" : "inactive_deploy"}>
                {detailUser.map((s) => <InfoById key={s.id} idUs={s.id}/>)}
            </div>
            <div className={userOptionState === 2 ? "active_deploy" : "inactive_deploy"}>
                <RecordPostById/>
            </div>
            <div className={userOptionState === 3 ? "active_deploy" : "inactive_deploy"}>
                tu Historial
            </div>
            <div className={userOptionState === 4 ? "active_deploy" : "inactive_deploy"}>
                {detailUser.map((s) => <ProfRegiById key={s.id} idUsr={s.id}/>)}
                
            </div>
        </div>
       
    </div>
  )
}

export default UserById