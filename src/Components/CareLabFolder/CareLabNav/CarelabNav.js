import { Col, Row } from 'antd';
import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { useCareLabRoute } from '../../../Data/CareLabRoute';
import { carelabStat } from '../../Common/StateList';

const CarelabNavSettings = () => {
  const carelabNavData = useCareLabRoute()
  const [returnName, setReturnName] = useState('')
  const newPa = window.location.pathname.split('/')[2];

  const handleClick = (e) => {
    // setNewPath(window.location.pathname.split('/')[2])
  }

  useEffect(() => {
    let rName = ''
    if (newPa === 'caredashboard') {
      rName = 'mainRoute'
    } else if (newPa === 'sampledash') {
      rName = 'sampleStatusNav'
    } else if (newPa === 'reportdash') {
      rName = 'reportStatNav'
    } else if (newPa === 'financedash') {
      rName = 'financeNav'
    } else if (newPa === 'marketingdash') {
      rName = 'marketingNav'
    } else if (newPa === 'tatdash') {
      rName = 'tatNav'
    } else if (newPa === 'qcdash') {
      rName = 'qcControlNav'
    }
    setReturnName(rName);
  }, [newPa])

  return (
    <SettingsContainer>
      <Row gutter={[16, 16]} className='fullWidth'>
        {carelabNavData[returnName] !== undefined && carelabNavData[returnName].map(e => (
          <Col sm={24} md={12} xs={12} lg={12} xl={8}>
            <div key={e.name} onClick={() => handleClick(e.path)}>
              <NavLink to={{
                pathname: e.path,
                state: carelabStat
              }}>
                <div className='cButton'>
                  <span><i className={e.icon}></i> </span>
                  <span>{e.name}</span>
                </div>
              </NavLink>
            </div>
          </Col>
        ))}
      </Row>
    </SettingsContainer>
  )
}

export default CarelabNavSettings

const SettingsContainer = styled.div`
   padding: 20px;
  display: flex;
  flex-wrap: wrap;
  gap: 25px;
  width: 100%;
  
  .fullWidth {
    width: 100%;
  }
  
  @media(max-width: 500px){
    padding: 0px;
    justify-content: center;
    gap: 15px;
    margin-bottom: 50px;
  }
  
  .cButton{
    height: 120px;
    /* width: 230px; */
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    background: var(--secondaryBackground);
    box-shadow: 0 2px 22px 0 rgba( 31, 38, 135, 0.17 );
    backdrop-filter: blur( 4px );
    -webkit-backdrop-filter: blur( 4px );
    border-radius: 10px;
    border: 1px solid rgba( 255, 255, 255, 0.18 );
    span{
      font-size: 20px;
      letter-spacing: 1.4px;
      text-transform: uppercase;
      color: var(--titleTxt);
      i{
        font-size: 25px;
        color: var(--primary)
      }
    }
    
    @media(max-width: 768px){
      flex-direction: column;
      gap: 10px;  
      span{
      font-size: 16px;
      letter-spacing: 1.4px;
      text-transform: uppercase;
      margin-right: 10px;
      
      i{
        font-size: 25px;
      
      }
    }
    }
    @media(max-width: 500px){
      height: 100px;
      padding: 0 20px;
      text-align: center;
      span{
      font-size: 14px;
    }
   
  }
  }
`