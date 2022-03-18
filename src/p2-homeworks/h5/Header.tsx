import React, {useState} from 'react'
import {PATH} from "./Routes";
import {NavLink} from "react-router-dom";
import styles from './Header.module.css';
//***************************************

import styled from 'styled-components';
//***************************************
import MenuIcon from '@mui/icons-material/Menu';
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';
//***************************************

// type FilterPropsType = "PreJunior" | "Junior" | "JuniorPlus"
//
// interface Filter {
//     filter: FilterPropsType
// }


const Header = () => {
    const [burgerStatus, setBurgerStatus] = useState<boolean>(false)
    const [filter, setFilter] = useState('');

    const handClose = () => {
        setBurgerStatus(false)
    }
    const handOpen = () => {
        setBurgerStatus(true)
    }

    const onPreJuniorClick = () => {
        setFilter('PreJunior')
    }
    const onJuniorClick = () => {
        setFilter('Junior')
    }
    const onJuniorPlusClick = () => {
        setFilter('JuniorPlus')
    }


    return (
        <>
            <Menu>
                <RightMenu>
                    <IconWrap>
                        <h1>Нажми: </h1>
                        <CustomMenu onClick={handOpen}/>
                    </IconWrap>
                </RightMenu>
            </Menu>

            <BurgerNav show={burgerStatus}>
                <div className={styles.wrapClose}>
                    <CloseBtn onClick={handClose}/>
                </div>


                <button
                    className={filter === 'PreJunior' ? styles.activeBtn : ''}
                    onClick={onPreJuniorClick}>
                    <NavLink to={PATH.PRE_JUNIOR}>PreJunior</NavLink>
                </button>

                <button
                    className={filter === 'Junior' ? styles.activeBtn : ''}
                    onClick={onJuniorClick}>
                    <NavLink to={PATH.JUNIOR}>Junior</NavLink>
                </button>

                <button
                    className={filter === 'JuniorPlus' ? styles.activeBtn : ''}
                    onClick={onJuniorPlusClick}>
                    <NavLink to={PATH.JUNIOR_PLUS}>JuniorPlus</NavLink>
                </button>


            </BurgerNav>

        </>
    )
}
export default Header

const Menu = styled.div`
  margin-left: 20px;
  display: flex;
  align-items: start;
  justify-content: start;
  flex: 1;

  a {
    font-weight: 600;
    text-transform: uppercase;
    padding: 0 10px;
    flex-wrap: nowrap;
    cursor: pointer;
  }


  @media (max-width: 950px) {
    display: none;
  }
`

const IconWrap = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;

  h1 {
    display: inline-block;
  }
`


const RightMenu = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  a {
    font-weight: 600;
    text-transform: uppercase;
    margin-right: 10px;

  }

`
const CustomMenu = styled(MenuIcon)`
  cursor: pointer;
  width: 3rem !important;
  height: 3rem !important;
  color: darkgoldenrod !important;
  margin-left: 7px !important;


`
const BurgerNav = styled.div<{ show: boolean }>`
  position: fixed;
  right: 0;
  top: 0;
  bottom: 0;
  width: 300px;
  background: #FFA500;
  z-index: 16;
  display: flex;
  flex-direction: column;
  text-align: start;
  padding: 20px;
  list-style: none;
  transform: ${event => event.show ? "translateX(0)" : "translateX(100%)"};
  transition: transform 0.3s ease-in;
  overflow: hidden;
  color: black;


  button {
    border: none;
    width: 200px;
    margin-bottom: 10px;
    height: 40px;
    border-radius: 7px;
    background-color:#666;;

    
  }

  a {
    font-size: 20px;
    font-weight: 600;
    text-decoration: none !important;
    color: white;

  }

`

const CloseBtn = styled(CancelOutlinedIcon)`
  width: 2rem !important;
  height: 2rem !important;
  cursor: pointer;
`


