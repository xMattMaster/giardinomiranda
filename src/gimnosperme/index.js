import './../global.css';
import './index.css';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import MenuIcon from '@material-ui/icons/Menu'
import CssBaseline from '@material-ui/core/CssBaseline';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Container from '@material-ui/core/Container';
import Slide from '@material-ui/core/Slide';
import Drawer from '@material-ui/core/Drawer';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CardActionArea from '@material-ui/core/CardActionArea';
import siteIndex from './../siteIndex';
import footer from './../footer';
import cedroImage from './img/cedro.jpg';
import cicasImage from './img/cicas.jpg';
import cipressoImage from './img/cipresso.jpg';
import ginkgoImage from './img/ginkgo.jpg';
import tuiaImage from './img/tuia.jpg';

function HideOnScroll(props) {
  const { children } = props;
  const trigger = useScrollTrigger();

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function Gimnosperme(props) {
  const classes = useStyles();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const toggleDrawer = () => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setMobileOpen(!mobileOpen);
  };

  return (
    <div className={classes.root}>
      <React.Fragment>
        <CssBaseline />
        <HideOnScroll {...props}>
          <AppBar color ='white'>
            <Toolbar>
              <IconButton onClick={toggleDrawer()} edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                <MenuIcon />
              </IconButton>
              <Drawer open={mobileOpen} onClose={toggleDrawer()}>
                {siteIndex()}
              </Drawer>
              <Typography variant="h6" className={classes.title}>
                Le gimnosperme
              </Typography>
            </Toolbar>
          </AppBar>
        </HideOnScroll>
        <Container>
          <Container class="gimnospermeImage">
            <Container class="pageTitleBg"></Container>
				    <p class="pageTitle">Le gimnosperme</p>
            <Container className={classes.root}>
              <Container class="mainContent">
              <Grid container spacing={3} justify="space-around">
                  <Grid item xs={12} sm={10} md={6} lg={4} xl={3}>
                    <Card>
                      <CardActionArea boxShadow={2} onClick={()=>{window.open('https://docs.google.com/viewerng/viewer?url=https://giardinomiranda.altervista.org/pdf/gimnosperme/Cedro.pdf', 'windowOpenTab', 'toolbar=0,location=0,menubar=0')}}>
                        <CardMedia style={{height:300, backgroundPosition:'center', backgroundSize:'cover'}} image={cedroImage} title="Cedro" />
                        <CardContent>
                          <Typography gutterBottom variant="h5" component="h2">
                            Cedro
                          </Typography>
                        </CardContent>
                      </CardActionArea>
                    </Card>
                  </Grid>
                  <Grid item xs={12} sm={10} md={6} lg={4} xl={3}>
                    <Card>
                      <CardActionArea boxShadow={2} onClick={()=>{window.open('https://docs.google.com/viewerng/viewer?url=https://giardinomiranda.altervista.org/pdf/gimnosperme/Cicas.pdf', 'windowOpenTab', 'toolbar=0,location=0,menubar=0')}}>
                        <CardMedia style={{height:300, backgroundPosition:'center', backgroundSize:'cover'}} image={cicasImage} title="Cicas" />
                        <CardContent>
                          <Typography gutterBottom variant="h5" component="h2">
                            Cicas
                          </Typography>
                        </CardContent>
                      </CardActionArea>
                    </Card>
                  </Grid>
                  <Grid item xs={12} sm={10} md={6} lg={4} xl={3}>
                    <Card>
                      <CardActionArea boxShadow={2} onClick={()=>{window.open('https://docs.google.com/viewerng/viewer?url=https://giardinomiranda.altervista.org/pdf/gimnosperme/Cipresso.pdf', 'windowOpenTab', 'toolbar=0,location=0,menubar=0')}}>
                        <CardMedia style={{height:300, backgroundPosition:'center', backgroundSize:'cover'}} image={cipressoImage} title="Cipresso" />
                        <CardContent>
                          <Typography gutterBottom variant="h5" component="h2">
                            Cipresso
                          </Typography>
                        </CardContent>
                      </CardActionArea>
                    </Card>
                  </Grid>
                  <Grid item xs={12} sm={10} md={6} lg={4} xl={3}>
                    <Card>
                      <CardActionArea boxShadow={2} onClick={()=>{window.open('https://docs.google.com/viewerng/viewer?url=https://giardinomiranda.altervista.org/pdf/gimnosperme/Ginkgo.pdf', 'windowOpenTab', 'toolbar=0,location=0,menubar=0')}}>
                        <CardMedia style={{height:300, backgroundPosition:'center', backgroundSize:'cover'}} image={ginkgoImage} title="Ginkgo" />
                        <CardContent>
                          <Typography gutterBottom variant="h5" component="h2">
                            Ginkgo
                          </Typography>
                        </CardContent>
                      </CardActionArea>
                    </Card>
                  </Grid>
                  <Grid item xs={12} sm={10} md={6} lg={4} xl={3}>
                    <Card>
                      <CardActionArea boxShadow={2} onClick={()=>{window.open('https://docs.google.com/viewerng/viewer?url=https://giardinomiranda.altervista.org/pdf/gimnosperme/Tuia.pdf', 'windowOpenTab', 'toolbar=0,location=0,menubar=0')}}>
                        <CardMedia style={{height:300, backgroundPosition:'center', backgroundSize:'cover'}} image={tuiaImage} title="Tuia" />
                        <CardContent>
                          <Typography gutterBottom variant="h5" component="h2">
                            Tuia
                          </Typography>
                        </CardContent>
                      </CardActionArea>
                    </Card>
                  </Grid>
                </Grid>
              </Container>
            </Container>
            {footer()}
          </Container>
        </Container>
      </React.Fragment>
    </div>
  );
}