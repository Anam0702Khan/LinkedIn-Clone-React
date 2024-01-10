import React from 'react'
import { Grid, Typography, Card, CardContent, CardActions, Button, Divider, Box } from '@mui/material'
import { List, ListItem } from '@mui/material'
import { useState } from 'react';
import "./Cards.css"


function Cards() {
  const [flag1, setFlag1] = useState(false);
  const [flag2, setFlag2] = useState(false);
  const [flag3, setFlag3] = useState(false);
  const [flag4, setFlag4] = useState(false);

  const handleChangeBoxOne = () => {
    setFlag1(true);
    setFlag2(false);
    setFlag3(false);
    setFlag4(false);
    window.scrollTo(0, document.body.scrollHeight - 800);

  }

  const handleChangeBoxSecond = () => {
    setFlag1(false);
    setFlag2(true);
    setFlag3(false);
    setFlag4(false);
    window.scrollTo(0, document.body.scrollHeight - 800);

  }

  const handleChangeBoxThird = () => {
    setFlag1(false);
    setFlag2(false);
    setFlag3(true);
    setFlag4(false);
    window.scrollTo(0, document.body.scrollHeight - 800);

  }

  const handleChangeBoxFour = () => {
    setFlag1(false);
    setFlag2(false);
    setFlag3(false);
    setFlag4(true);
    window.scrollTo(0, document.body.scrollHeight - 800);
  }

  return (
    <div>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={12} md={6} lg={3} display="flex" justifyContent="center">
          <Card sx={{ minWidth: 275 }} style={{ backgroundColor: "lightgrey",boxShadow: "5px 5px 10px 2px #888888" }}>
            <CardContent sx={{ cursor: "pointer"}}>

              <Typography variant="h5" component="div" sx={{ mb: 2 }}>
                Career
              </Typography>

              <Typography variant="body2" sx={{ mb: 1 }}>
                Get hired and get ahead
                <br />
                <br />
                <Divider />
              </Typography>
              <List
                sx={{
                  listStyleType: 'disc',
                  listStylePosition: 'inside'
                }}
              >
                <ListItem sx={{ display: 'list-item' }}>
                  Stand out and get in touch with hiring managers
                </ListItem>
                <ListItem sx={{ display: 'list-item' }}>
                  See how you compare to other applicants
                </ListItem>
                <ListItem sx={{ display: 'list-item' }}>
                  Learn new skills to advance your career
                </ListItem>
              </List>
            </CardContent>
            <CardActions>
              <Button size="small" sx={{ ml: 5 }} onClick={handleChangeBoxOne}>Learn More</Button>
            </CardActions>
          </Card>

        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={3} display="flex" justifyContent="center">
          <Card sx={{ minWidth: 275 }} style={{ backgroundColor: "lightgrey",boxShadow: "5px 5px 10px 2px #888888" }}>
            <CardContent>

              <Typography variant="h5" component="div" sx={{ mb: 2 }}>
                Business
              </Typography>

              <Typography variant="body2" sx={{ mb: 1 }}>
                Grow and nurture your network
                <br />
                <br />
                <Divider />

              </Typography>
              <List
                sx={{
                  listStyleType: 'disc',
                  listStylePosition: 'inside'
                }}
              >
                <ListItem sx={{ display: 'list-item' }}>
                  Find and contact the right professional people
                </ListItem>
                <ListItem sx={{ display: 'list-item' }}>
                  Promote and grow your professional business

                </ListItem>
                <ListItem sx={{ display: 'list-item' }}>
                  Learn new skills to advance your career
                </ListItem>
              </List>
            </CardContent>
            <CardActions>
              <Button size="small" sx={{ ml: 5 }} onClick={handleChangeBoxSecond}>Learn More</Button>
            </CardActions>
          </Card>

        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={3} display="flex" justifyContent="center">
          <Card sx={{ minWidth: 275 }} style={{ backgroundColor: "lightgrey",boxShadow: "5px 5px 10px 2px #888888" }}>
            <CardContent>

              <Typography variant="h5" component="div" sx={{ mb: 2 }}>
                Sales Navigator
              </Typography>

              <Typography variant="body2" sx={{ mb: 1 }}>
                Unlock sales opportunities
                <br />
                <br />
                <Divider />
              </Typography>
              <List
                sx={{
                  listStyleType: 'disc',
                  listStylePosition: 'inside'
                }}
              >
                <ListItem sx={{ display: 'list-item' }}>
                  Find leads and accounts in your target market
                </ListItem>
                <ListItem sx={{ display: 'list-item' }}>
                  Get real-time insights for warm outreach
                </ListItem>
                <ListItem sx={{ display: 'list-item' }}>
                  Build trusted relationships with customers and prospects
                </ListItem>
              </List>
            </CardContent>
            <CardActions>
              <Button size="small" sx={{ ml: 5 }} onClick={handleChangeBoxThird}>Learn More</Button>
            </CardActions>
          </Card>

        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={3} display="flex" justifyContent="center">
          <Card sx={{ minWidth: 275 }} style={{ backgroundColor: "lightgrey" ,boxShadow: "5px 5px 10px 2px #888888"}}>
            <CardContent>

              <Typography variant="h5" component="div" sx={{ mb: 2 }}>
                Recruiter Lite
              </Typography>

              <Typography variant="body2" sx={{ mb: 1 }}>
                Find and hire talent
                <br />
                <br />
                <Divider />

              </Typography>
            </CardContent>
            <List
              sx={{
                listStyleType: 'disc',
                listStylePosition: 'inside'
              }}
            >
              <ListItem sx={{ display: 'list-item' }}>
                Find great relationships with candidates, faster
              </ListItem>
              <ListItem sx={{ display: 'list-item' }}>
                Contact top Recruiter lite talent directly

              </ListItem>
              <ListItem sx={{ display: 'list-item' }}>
                Build relationships with prospective hires
              </ListItem>
            </List>
            <CardActions>
              <Button size="small" sx={{ ml: 5 }} onClick={handleChangeBoxFour}>Learn More</Button>
            </CardActions>
          </Card>

        </Grid>
      </Grid>
      {
        console.log("jggg", flag1)

      }
      {
        flag1 && (
          <Box width="100%" mt="30px" sx={{
            display: "flex", background: "white", "@media(max-width:826px)": {
              width: "100%", flexDirection: "column"
            },
          }}>
            <Box width="50%" paddingLeft="100px" pt="110px" sx={{
              "@media(max-width : 826px)": {
                width: "95%",
                pl: "30px",
                borderRadius: 0,
                pb: "60px"
              },
              borderRadius: "0 50% 50% 0",
              background: "#ecf0ea",
            }}>
              <Typography color="#587598" fontSize="28px" fontWeight="600">
                Career
              </Typography>
              <Typography color="#587598" fontSize="112px" fontWeight="800">
                2.6x
              </Typography>
              <Typography width="70%" fontWeight="600" fontSize="21px" >
                Candidates with Premium Career get hired an average of 2.6x as fast
              </Typography>
              <Button sx={{ borderRadius: "20px", background: "blue", color: "white", mt: "10px", p: "15px" }} >START MY FREE MONTH</Button>
              <Typography mt="25px">
                Price: <del>Rs 1,567.79</del>*  1-month free trial
              </Typography>
              <Typography width="63%" color="#999999" fontSize="14px" sx={{ mt: "10px" }}>
                After your free month, pay as little as ₹1,567.79* / month after. Cancel anytime. We'll remind you 7 days before your trial ends.
              </Typography>
            </Box>
            <Box width="50%" ml="40px" sx={{ "@media(max-width: 826px)": { width: "87%" } }}>
              <Typography className='headingSection'>
                Find and contact anyone

              </Typography>
              <Typography className='subHeadingsection'>
                Find and contact the right people to grow your network and see who's viewed your profile
              </Typography>
              <ul className='listSection'>
                <li>5 InMails per month</li>
                <li>See who's Viewed Your Profile from the last 90 days </li>
                <li>Open Profile</li>
              </ul>
              <Typography className='headingSection'>
                Exclusive insights to get ahead
              </Typography>
              <Typography className='subHeadingsection'>
                Stay informed about companies of interest, see how you compare to other job applicants, and more
              </Typography>
              <ul className='listSection'>
                <li>Job and applicant insights</li>
                <li>Top Applicant Job recommendations</li>
                <li>Company insights</li>
                <li>Resume insights</li>
              </ul>
              <Typography className='headingSection'>
                Stay up-to-date on the latest skills
              </Typography>
              <Typography className='suHeadingsection'>
                Grow and learn new skills to advance your career and professional brand
              </Typography>
              <ul className='listSection'>
                <li>16,000+   LinkedIn Learning courses</li>
                <li style={{ marginBottom: "60px" }}>
                  Full access to Interview Preparation tools
                </li>
              </ul>
            </Box>
          </Box>
        )
      }
      {
        flag2 && (
          <Box width="100%" mt="30px" sx={{
            display: "flex", background: "white", "@media(max-width:826px)": {
              width: "100%", flexDirection: "column"
            },
          }}>
            <Box width="50%" paddingLeft="100px" pt="110px" sx={{
              "@media(max-width : 826px)": {
                width: "95%",
                pl: "30px",
                borderRadius: 0,
                pb: "60px"
              },
              borderRadius: "0 50% 50% 0",
              background: "#ecf0ea",
            }}>
              <Typography color="#80597e" fontSize="28px" fontWeight="600">
                Business
              </Typography>
              <Typography color="#80597e" fontSize="112px" fontWeight="800">
                4x
              </Typography>
              <Typography width="70%" fontWeight="600" fontSize="21px" >
                Premium members get an average of 4x more profile views
              </Typography>
              <Button sx={{ borderRadius: "20px", background: "blue", color: "white", mt: "10px", p: "15px" }} >START MY FREE MONTH</Button>
              <Typography mt="25px">
                Price: <del>Rs 1,567.79</del>*  1-month free trial
              </Typography>
              <Typography width="63%" color="#999999" fontSize="14px" sx={{ mt: "10px" }}>
                After your free month, pay as little as ₹1,567.79* / month after. Cancel anytime. We'll remind you 7 days before your trial ends.
              </Typography>
            </Box>
            <Box width="50%" ml="40px" sx={{ "@media(max-width: 826px)": { width: "87%" } }}>
              <Typography className='headingSection'>
                Find and contact anyone

              </Typography>
              <Typography className='subHeadingsection'>
                Find and contact the right people to grow your network and see who's viewed your profile
              </Typography>
              <ul className='listSection'>
                <li>5 InMails per month</li>
                <li>See who's Viewed Your Profile from the last 90 days </li>
                <li>Open Profile</li>
              </ul>
              <Typography className='headingSection'>
                Exclusive insights to get ahead
              </Typography>
              <Typography className='subHeadingsection'>
                Stay informed about companies of interest, see how you compare to other job applicants, and more
              </Typography>
              <ul className='listSection'>
                <li>Job and applicant insights</li>
                <li>Top Applicant Job recommendations</li>
                <li>Company insights</li>
                <li>Resume insights</li>
              </ul>
              <Typography className='headingSection'>
                Stay up-to-date on the latest skills
              </Typography>
              <Typography className='suHeadingsection'>
                Grow and learn new skills to advance your career and professional brand
              </Typography>
              <ul className='listSection'>
                <li>16,000+   LinkedIn Learning courses</li>
                <li style={{ marginBottom: "60px" }}>
                  Full access to Interview Preparation tools
                </li>
              </ul>
            </Box>
          </Box>
        )
      }
      {
        flag3 && (
          <Box width="100%" mt="30px" sx={{
            display: "flex", background: "white", "@media(max-width:826px)": {
              width: "100%", flexDirection: "column"
            },
          }}>
            <Box width="50%" paddingLeft="100px" pt="110px" sx={{
              "@media(max-width : 826px)": {
                width: "95%",
                pl: "30px",
                borderRadius: 0,
                pb: "60px"
              },
              borderRadius: "0 50% 50% 0",
              background: "#ecf0ea",
            }}>

              <Typography color="#8f5849" fontSize="28px" fontWeight="600">
                Sales Navigator Core
              </Typography>
              <Typography color="#8f5849" fontSize="112px" fontWeight="800">
                3.8x

              </Typography>
              <Typography width="70%" fontWeight="600" fontSize="21px" >
                Members with Sales Navigator are connected to 3.8x more decision-makers

              </Typography>
              <Button sx={{ borderRadius: "20px", background: "blue", color: "white", mt: "10px", p: "15px" }} >START MY FREE MONTH</Button>
              <Typography mt="25px">
                Price: <del>Rs 1,567.79</del>*  1-month free trial
              </Typography>
              <Typography width="63%" color="#999999" fontSize="14px" sx={{ mt: "10px" }}>
                After your free month, pay as little as ₹1,567.79* / month after. Cancel anytime. We'll remind you 7 days before your trial ends.
              </Typography>
            </Box>
            <Box width="50%" ml="40px" sx={{ "@media(max-width: 826px)": { width: "87%" } }}>
              <Typography className='headingSection'>
                Find and contact anyone

              </Typography>
              <Typography className='subHeadingsection'>
                Find and contact the right people to grow your network and see who's viewed your profile
              </Typography>
              <ul className='listSection'>
                <li>5 InMails per month</li>
                <li>See who's Viewed Your Profile from the last 90 days </li>
                <li>Open Profile</li>
              </ul>
              <Typography className='headingSection'>
                Exclusive insights to get ahead
              </Typography>
              <Typography className='subHeadingsection'>
                Stay informed about companies of interest, see how you compare to other job applicants, and more
              </Typography>
              <ul className='listSection'>
                <li>Job and applicant insights</li>
                <li>Top Applicant Job recommendations</li>
                <li>Company insights</li>
                <li>Resume insights</li>
              </ul>
              <Typography className='headingSection'>
                Stay up-to-date on the latest skills
              </Typography>
              <Typography className='suHeadingsection'>
                Grow and learn new skills to advance your career and professional brand
              </Typography>
              <ul className='listSection'>
                <li>16,000+   LinkedIn Learning courses</li>
                <li style={{ marginBottom: "60px" }}>
                  Full access to Interview Preparation tools
                </li>
              </ul>
            </Box>
          </Box>
        )
      }
      {
        flag4 && (
          <Box width="100%" mt="30px" sx={{
            display: "flex", background: "white", "@media(max-width:826px)": {
              width: "100%", flexDirection: "column"
            },
          }}>
            <Box width="50%" paddingLeft="100px" pt="110px" sx={{
              "@media(max-width : 826px)": {
                width: "95%",
                pl: "30px",
                borderRadius: 0,
                pb: "60px"
              },
              borderRadius: "0 50% 50% 0",
              background: "#ecf0ea",
            }}>
              <Typography color="#44712e" fontSize="28px" fontWeight="600">
                Recruiter Lite
              </Typography>
              <Typography color="#44712e" fontSize="112px" fontWeight="800">
                2.6x
              </Typography>
              <Typography width="70%" fontWeight="600" fontSize="21px" >
                Join the thousands of businesses that are hiring with Recruiter Lite
              </Typography>
              <Button sx={{ borderRadius: "20px", background: "blue", color: "white", mt: "10px", p: "15px" }} >START MY FREE MONTH</Button>
              <Typography mt="25px">
                Price: <del>Rs 1,567.79</del>*  1-month free trial
              </Typography>
              <Typography width="63%" color="#999999" fontSize="14px" sx={{ mt: "10px" }}>
                After your free month, pay as little as ₹1,567.79* / month after. Cancel anytime. We'll remind you 7 days before your trial ends.
              </Typography>
            </Box>
            <Box width="50%" ml="40px" sx={{ "@media(max-width: 826px)": { width: "87%" } }}>
              <Typography className='headingSection'>
                Find and contact anyone

              </Typography>
              <Typography className='subHeadingsection'>
                Find and contact the right people to grow your network and see who's viewed your profile
              </Typography>
              <ul className='listSection'>
                <li>5 InMails per month</li>
                <li>See who's Viewed Your Profile from the last 90 days </li>
                <li>Open Profile</li>
              </ul>
              <Typography className='headingSection'>
                Exclusive insights to get ahead
              </Typography>
              <Typography className='subHeadingsection'>
                Stay informed about companies of interest, see how you compare to other job applicants, and more
              </Typography>
              <ul className='listSection'>
                <li>Job and applicant insights</li>
                <li>Top Applicant Job recommendations</li>
                <li>Company insights</li>
                <li>Resume insights</li>
              </ul>
              <Typography className='headingSection'>
                Stay up-to-date on the latest skills
              </Typography>
              <Typography className='suHeadingsection'>
                Grow and learn new skills to advance your career and professional brand
              </Typography>
              <ul className='listSection'>
                <li>16,000+   LinkedIn Learning courses</li>
                <li style={{ marginBottom: "60px" }}>
                  Full access to Interview Preparation tools
                </li>
              </ul>
            </Box>
          </Box>
        )
      }

    </div>
  )
}

export default Cards