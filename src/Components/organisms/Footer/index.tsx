import { Grid, Typography } from "@mui/material";
import React from "react";
import image from "./blinkist_logo.png";




function Footer() {

    

  const categeories = [
    {
      id: 1,
      cat: "Editorial",
      linkslist: [
        "Book lists",
        "What is Nonfiction",
        "What to Read Next",
        "Benefits of Reading",
      ],
    },
    {
      id: 2,
      cat: "Useful Links",
      linkslist: [
        "Pricing",
        "Blinkist Business",
        "Gift Cards",
        "Blinkist Magazine",
        "Contact & Help",
      ],
    },
    {
      id: 1,
      cat: "Company",
      linkslist: ["About", "Careers", "Partners", "Code of Conduct"],
    },
  ];
  return (
    
      <Grid container spacing={3} sx={{ background: "#f1f6f4" }}>
        <Grid item xs={5} sm={4}>
          <img
            src={image}
            alt="blinklist_log"
            style={{ width: "200px", height: "100px" }}
          />
          <Typography variant="h5" sx={{ color: "#116be9" }}>
            Big ideas in small packages <br />
            Start learning now
          </Typography>
        </Grid>
        {categeories.map((categories) => {
          return (
            <Grid item xs={3} sm={2}>
              <Typography variant="body1" sx={{fontfamily: 'Cera Pro'}}>
                <b>{categories.cat}</b>
              </Typography>
              {categories.linkslist.map((linkslist) => (
                <p style={{ color: "#6d787e" }}>{linkslist}</p>
              ))}
            </Grid>
          );
        })}
      </Grid>
    
  );
}

export default Footer