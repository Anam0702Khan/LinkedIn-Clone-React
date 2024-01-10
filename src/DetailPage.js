import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Avatar, Box, Typography } from '@mui/material'
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import SchoolIcon from '@mui/icons-material/School';
import AutoFixHighIcon from '@mui/icons-material/AutoFixHigh';

function DetailPage() {
  const [apidata, setData] = useState([])
  const { userId } = useParams()

  const businessicon = {
    width: "30",
    height: "30",
    color: "bdbdbd"
  }

  const apiUrl = `https://academics.newtonschool.co/api/v1/linkedin/user/${userId}`
  const accessToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1OTZkOWEyZTM3YWJiMzIzMDgyOTgzNiIsImlhdCI6MTcwNDM4NDkzMSwiZXhwIjoxNzM1OTIwOTMxfQ.qtncfXZgm2cdRrZBCzZxCGdRUvn8rbTdrAIc1H6Zfpg"
  const getApiData = () => {
    fetch(apiUrl, {
      method: "GET",
      headers: {
        'Authorization': `Bearer ${accessToken}`,
        'projectId': 'nae1y51qfcg9'
      }
    })
      .then((response) => response.json())
      .then((data) => {
        setData(data.data)
      })
      .catch((error) => console.error("Error", error))
  };

  useEffect(() => {
    getApiData()
  }, [])

  return (

    <div>
      <Box sx={{ background: "white", borderRadius: "20px", width: "60%", ml: "200px", mr: "100px","@media(max-width:826px)": {
              ml:"30px"
            }}}>
        <div className="detailpage__image">

        </div>

        <Avatar sx={{ width: 100, height: 100, }} className='avatarimg' src={apidata ? apidata.profileImage : ""}></Avatar>
        <Box sx={{ color: "light-grey", mt: "10px" }}>
          <Typography sx={{ color: "#bdbdbd", m: "10px" }}>{apidata ? apidata.name : ""}</Typography>
          <Typography sx={{ color: "#bdbdbd", m: "10px" }}>{apidata ? apidata.email : ""}</Typography>
          <Typography sx={{ color: "#bdbdbd", m: "10px" }}>{apidata.address && apidata.address.length>0  ? 
            apidata.address[0].street : "No address available"}</Typography>

          <Typography sx={{ color: "#bdbdbd", m: "10px" }}>Phone: {apidata ? apidata.phone : ""}</Typography>
        </Box>

      </Box>

      <Box sx={{ background: "white", borderRadius: "20px", width: "60%", ml: "200px", mr: "100px","@media(max-width: 826px)":{
        ml:"30px"
      } }}>
        <Typography sx={{ mt: "20px", p: "15px", fontSize: "30px" }}>About</Typography>
        <Typography sx={{ color: "#bdbdbd", p: "15px" }}>Data Science isn't just a buzzword; it's a pivotal shift in business operations. The way companies are leveraging data to make informed decisions is truly transformative. I'm currently learning more about predictive modeling. Any recommended resources? #DataScience #BusinessAnalytics</Typography>
      </Box>
     
      <Box sx={{ background: "white", borderRadius: "20px", width: "60%", ml: "200px", mr: "100px", mt: "20px" ,"@media(max-width:826px)":{
        ml:"30px"
      } }}>
        <Box sx={{ ml: "20px" }}>
          <Typography sx={{ p: "15px", fontSize: "30px" }}>Work Experience</Typography>
          <Box sx={{display: "flex", gap: "5px", fontSize: "95px" }} >
            <BusinessCenterIcon style={businessicon} />
            <Typography sx={{ color: "#bdbdbd" }}>{apidata.workExperience && apidata.workExperience.length > 0
              ? apidata.workExperience[0].companyName
              : "No companyName available"}</Typography>
          </Box>
          <Typography sx={{ color: "#bdbdbd",p:"10px" }}> {apidata.workExperience && apidata.workExperience.length > 0
            ? apidata.workExperience[0].designation
            : "No designation available"}</Typography>
          <Typography sx={{ color: "#bdbdbd",p:"10px" }}>{apidata.workExperience && apidata.workExperience.length > 0
            ? apidata.workExperience[0].description : "No designation available "}</Typography>
          <Typography sx={{ color: "#bdbdbd",p:"10px" }}>{apidata.workExperience && apidata.workExperience.length > 0
            ? apidata.workExperience[0].location
            : "No designation available "}</Typography>
        </Box>
      </Box>

      <Box sx={{ background: "white", borderRadius: "20px", width: "60%", ml: "200px", mr: "100px", mt: "20px","@media(max-width:826px)":{
        ml:"30px"
        }}}>
        <Box sx={{ ml: "20px" }}>
          <Typography sx={{ p: "10px", fontSize: "30px" }}>Education</Typography>
          <Box sx={{display: "flex", gap: "5px", fontSize: "95px" }}>
            <SchoolIcon style={businessicon} />
            <Typography sx={{ color: "#bdbdbd" }}>{apidata.education && apidata.education.length > 0
              ? apidata.education[0].schoolName
              : "No schoolName available "}</Typography>
          </Box>
          <Typography sx={{ color: "#bdbdbd",p:"10px" }}>{apidata.education && apidata.education.length > 0
            ? apidata.education[0].degree
            : "No degree available "}</Typography>
          <Typography sx={{ color: "#bdbdbd",p:"10px" }}>{apidata.education && apidata.education.length > 0
            ? apidata.education[0].description
            : "No description available "}</Typography>
        </Box>
      </Box>

      <Box sx={{ background: "white", borderRadius: "20px", width: "60%", ml: "200px", mr: "100px", mt: "20px","@media(max-width: 826px)":{
        ml:"30px"
      } }}>
        <Box sx={{ ml: "20px" }}>
        <Box sx={{display: "flex", gap: "5px", fontSize: "95px" }} >
            <Typography sx={{ mt: "10px", fontSize: "30px" }}>Skills</Typography>
        </Box>
        {
          apidata.skills && apidata.skills.map((item,index) => (
            <>
            <Box sx={{display:"flex" , gap:"5px", m:"10px",p:"10px"}}>
            <AutoFixHighIcon  style={businessicon}/>
            <Typography sx={{ color: "#bdbdbd" , fontSize:"15px"}} >{item}</Typography>
            </Box>
          
            </>          
          ))
        }
             
          </Box>
      </Box>
    </div> 
  )
}

export default DetailPage