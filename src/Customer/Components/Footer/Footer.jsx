import { Button, Grid, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-alice-carousel";

const Footer = () => {
  return (
    <div>
      <Grid
        className="bg-black text-white text-center mt=10"
        container
        sx={{ bgcolor: "black", color: "white", py: 3 }}
      >
        <Grid item xs={12} sm={6} md={3}>
          <Typography className="pb-5" variant="h6">
            Company
          </Typography>
          <div>
            <Button className="pb-5" variant="h6" guttorButton>
              About
            </Button>
          </div>
          <div>
            <Button className="pb-5" variant="h6" guttorButton>
              Blog
            </Button>
          </div>
          <div>
            <Button className="pb-5" variant="h6" guttorButton>
              Press
            </Button>
          </div>
          <div>
            <Button className="pb-5" variant="h6" guttorButton>
              Job
            </Button>
          </div>
          <div>
            <Button className="pb-5" variant="h6" guttorButton>
              Partner
            </Button>
          </div>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Typography className="pb-5" variant="h6">{" "}
            Solution{" "}
          </Typography>
          <div>
            <Button className="pb-5" variant="h6" guttorButton>{" "}
             Marketing{" "}
            </Button>
          </div>
          <div>
            <Button className="pb-5" variant="h6" guttorButton>{" "}
            Commers{" "}
            </Button>
          </div>
          <div>
            <Button className="pb-5" variant="h6" guttorButton>{" "}
              Support{" "}
            </Button>
          </div>
          <div>
            <Button className="pb-5" variant="h6" guttorButton>
              Service
            </Button>
          </div>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Typography className="pb-5" variant="h6">
            Documentation
          </Typography>
          <div>
            <Button className="pb-5" variant="h6" guttorButton>{" "}
             Guides{" "}
            </Button>
          </div>
          <div>
            <Button className="pb-5" variant="h6" guttorButton>{" "}
              Api Status{" "}
            </Button>
          </div>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Typography className="pb-5" variant="h6">
            Legal
          </Typography>
          <div>
            <Button className="pb-5" variant="h6" guttorButton>{" "}
              Claim{" "}
            </Button>
          </div>
          <div>
            <Button className="pb-5" variant="h6" guttorButton>
             Privecy{" "}
            </Button>
          </div>
          <div>
            <Button className="pb-5" variant="h6" guttorButton>{" "}
             Terms{" "}
            </Button>
          </div>
        </Grid>
        <Grid className="pt-20"  item xs={12}>
    <Typography variant="body2" component="p" align="center">
      &copy; 2023 My company. All rights reserved.
    </Typography>
    <Typography variant="body2" component="p" align="center">
      Made with love by me.
    </Typography>
    <Typography variant="body2" component="p" align="center">
    Icons made by{" "}
    <Link href="https://www.freepic.com" color="inherit" underline="always">
    Freepic
    </Link>{" "}
    from{" "}
    <Link href="https://www.freepic.com" color="inherit" underline="always" ></Link>
    </Typography>
        </Grid>
      </Grid>
    </div>
  );
};

export default Footer;
