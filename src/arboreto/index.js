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
import aceroImage from './img/acero.jpg';
import bagolaroImage from './img/bagolaro.jpg';
import canforoImage from './img/canforo.jpg';
import castagnoImage from './img/castagno.jpg';
import coluteriaImage from './img/coluteria.jpg';
import ligustroImage from './img/ligustro.jpg';
import meliaImage from './img/melia.jpg';
import noceImage from './img/noce.jpg';
import pioppoImage from './img/pioppo.jpg';
import roverellaImage from './img/roverella.jpg';
import saliceImage from './img/salice.jpg';
import sugheraImage from './img/sughera.jpg';
import tiglioImage from './img/tiglio.jpg';

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

export default function Arboreto(props) {//Change name
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
                L'arboreto
              </Typography>
            </Toolbar>
          </AppBar>
        </HideOnScroll>
        <Container>
          <Container class="arboretoImage">
            <Container class="pageTitleBg"></Container>
				    <p class="pageTitle">L'arboreto</p>
            <Container className={classes.root}>
              <Container class="mainContent">
              <Grid container spacing={3} justify="space-around">
                  <Grid item xs={12} sm={10} md={6} lg={4} xl={3}>
                    <Card>
                      <CardActionArea boxShadow={2} onClick={()=>{window.open('https://docs.google.com/viewerng/viewer?url=https://giardinomiranda.altervista.org/pdf/arboreto/Acero.pdf', 'windowOpenTab', 'toolbar=0,location=0,menubar=0')}}>
                        <CardMedia style={{height:300, backgroundPosition:'center', backgroundSize:'cover'}} image={aceroImage} title="Acero" />
                        <CardContent>
                          <Typography gutterBottom variant="h5" component="h2">
                            Acero
                          </Typography>
                        </CardContent>
                      </CardActionArea>
                    </Card>
                  </Grid>
                  <Grid item xs={12} sm={10} md={6} lg={4} xl={3}>
                    <Card>
                      <CardActionArea boxShadow={2} onClick={()=>{window.open('https://docs.google.com/viewerng/viewer?url=https://giardinomiranda.altervista.org/pdf/arboreto/Bagolaro.pdf', 'windowOpenTab', 'toolbar=0,location=0,menubar=0')}}>
                        <CardMedia style={{height:300, backgroundPosition:'center', backgroundSize:'cover'}} image={bagolaroImage} title="Bagolaro" />
                        <CardContent>
                          <Typography gutterBottom variant="h5" component="h2">
                            Bagolaro
                          </Typography>
                        </CardContent>
                      </CardActionArea>
                    </Card>
                  </Grid>
                  <Grid item xs={12} sm={10} md={6} lg={4} xl={3}>
                    <Card>
                      <CardActionArea boxShadow={2} onClick={()=>{window.open('https://docs.google.com/viewerng/viewer?url=https://giardinomiranda.altervista.org/pdf/arboreto/Canforo.pdf', 'windowOpenTab', 'toolbar=0,location=0,menubar=0')}}>
                        <CardMedia style={{height:300, backgroundPosition:'center', backgroundSize:'cover'}} image={canforoImage} title="Canforo" />
                        <CardContent>
                          <Typography gutterBottom variant="h5" component="h2">
                            Canforo
                          </Typography>
                        </CardContent>
                      </CardActionArea>
                    </Card>
                  </Grid>
                  <Grid item xs={12} sm={10} md={6} lg={4} xl={3}>
                    <Card>
                      <CardActionArea boxShadow={2} onClick={()=>{window.open('https://docs.google.com/viewerng/viewer?url=https://giardinomiranda.altervista.org/pdf/arboreto/Castagno.pdf', 'windowOpenTab', 'toolbar=0,location=0,menubar=0')}}>
                        <CardMedia style={{height:300, backgroundPosition:'center', backgroundSize:'cover'}} image={castagnoImage} title="Castagno" />
                        <CardContent>
                          <Typography gutterBottom variant="h5" component="h2">
                            Castagno
                          </Typography>
                        </CardContent>
                      </CardActionArea>
                    </Card>
                  </Grid>
                  <Grid item xs={12} sm={10} md={6} lg={4} xl={3}>
                    <Card>
                      <CardActionArea boxShadow={2} onClick={()=>{window.open('https://docs.google.com/viewerng/viewer?url=https://giardinomiranda.altervista.org/pdf/arboreto/Coluteria.pdf', 'windowOpenTab', 'toolbar=0,location=0,menubar=0')}}>
                        <CardMedia style={{height:300, backgroundPosition:'center', backgroundSize:'cover'}} image={coluteriaImage} title="Coluteria" />
                        <CardContent>
                          <Typography gutterBottom variant="h5" component="h2">
                            Coluteria
                          </Typography>
                        </CardContent>
                      </CardActionArea>
                    </Card>
                  </Grid>
                  <Grid item xs={12} sm={10} md={6} lg={4} xl={3}>
                    <Card>
                      <CardActionArea boxShadow={2} onClick={()=>{window.open('https://docs.google.com/viewerng/viewer?url=https://giardinomiranda.altervista.org/pdf/arboreto/Ligustro.pdf', 'windowOpenTab', 'toolbar=0,location=0,menubar=0')}}>
                        <CardMedia style={{height:300, backgroundPosition:'center', backgroundSize:'cover'}} image={ligustroImage} title="Ligustro" />
                        <CardContent>
                          <Typography gutterBottom variant="h5" component="h2">
                            Ligustro
                          </Typography>
                        </CardContent>
                      </CardActionArea>
                    </Card>
                  </Grid>
                  <Grid item xs={12} sm={10} md={6} lg={4} xl={3}>
                    <Card>
                      <CardActionArea boxShadow={2} onClick={()=>{window.open('https://docs.google.com/viewerng/viewer?url=https://giardinomiranda.altervista.org/pdf/arboreto/Melia.pdf', 'windowOpenTab', 'toolbar=0,location=0,menubar=0')}}>
                        <CardMedia style={{height:300, backgroundPosition:'center', backgroundSize:'cover'}} image={meliaImage} title="Melia" />
                        <CardContent>
                          <Typography gutterBottom variant="h5" component="h2">
                            Melia
                          </Typography>
                        </CardContent>
                      </CardActionArea>
                    </Card>
                  </Grid>
                  <Grid item xs={12} sm={10} md={6} lg={4} xl={3}>
                    <Card>
                      <CardActionArea boxShadow={2} onClick={()=>{window.open('https://docs.google.com/viewerng/viewer?url=https://giardinomiranda.altervista.org/pdf/arboreto/Noce.pdf', 'windowOpenTab', 'toolbar=0,location=0,menubar=0')}}>
                        <CardMedia style={{height:300, backgroundPosition:'center', backgroundSize:'cover'}} image={noceImage} title="Noce" />
                        <CardContent>
                          <Typography gutterBottom variant="h5" component="h2">
                            Noce
                          </Typography>
                        </CardContent>
                      </CardActionArea>
                    </Card>
                  </Grid>
                  <Grid item xs={12} sm={10} md={6} lg={4} xl={3}>
                    <Card>
                      <CardActionArea boxShadow={2} onClick={()=>{window.open('https://docs.google.com/viewerng/viewer?url=https://giardinomiranda.altervista.org/pdf/arboreto/Pioppo.pdf', 'windowOpenTab', 'toolbar=0,location=0,menubar=0')}}>
                        <CardMedia style={{height:300, backgroundPosition:'center', backgroundSize:'cover'}} image={pioppoImage} title="Pioppo" />
                        <CardContent>
                          <Typography gutterBottom variant="h5" component="h2">
                            Pioppo
                          </Typography>
                        </CardContent>
                      </CardActionArea>
                    </Card>
                  </Grid>
                  <Grid item xs={12} sm={10} md={6} lg={4} xl={3}>
                    <Card>
                      <CardActionArea boxShadow={2} onClick={()=>{window.open('https://docs.google.com/viewerng/viewer?url=https://giardinomiranda.altervista.org/pdf/arboreto/Roverella.pdf', 'windowOpenTab', 'toolbar=0,location=0,menubar=0')}}>
                        <CardMedia style={{height:300, backgroundPosition:'center', backgroundSize:'cover'}} image={roverellaImage} title="Roverella" />
                        <CardContent>
                          <Typography gutterBottom variant="h5" component="h2">
                            Roverella
                          </Typography>
                        </CardContent>
                      </CardActionArea>
                    </Card>
                  </Grid>
                  <Grid item xs={12} sm={10} md={6} lg={4} xl={3}>
                    <Card>
                      <CardActionArea boxShadow={2} onClick={()=>{window.open('https://docs.google.com/viewerng/viewer?url=https://giardinomiranda.altervista.org/pdf/arboreto/Salice.pdf', 'windowOpenTab', 'toolbar=0,location=0,menubar=0')}}>
                        <CardMedia style={{height:300, backgroundPosition:'center', backgroundSize:'cover'}} image={saliceImage} title="Salice" />
                        <CardContent>
                          <Typography gutterBottom variant="h5" component="h2">
                            Salice
                          </Typography>
                        </CardContent>
                      </CardActionArea>
                    </Card>
                  </Grid>
                  <Grid item xs={12} sm={10} md={6} lg={4} xl={3}>
                    <Card>
                      <CardActionArea boxShadow={2} onClick={()=>{window.open('https://docs.google.com/viewerng/viewer?url=https://giardinomiranda.altervista.org/pdf/arboreto/Sughera.pdf', 'windowOpenTab', 'toolbar=0,location=0,menubar=0')}}>
                        <CardMedia style={{height:300, backgroundPosition:'center', backgroundSize:'cover'}} image={sugheraImage} title="Sughera" />
                        <CardContent>
                          <Typography gutterBottom variant="h5" component="h2">
                            Sughera
                          </Typography>
                        </CardContent>
                      </CardActionArea>
                    </Card>
                  </Grid>
                  <Grid item xs={12} sm={10} md={6} lg={4} xl={3}>
                    <Card>
                      <CardActionArea boxShadow={2} onClick={()=>{window.open('https://docs.google.com/viewerng/viewer?url=https://giardinomiranda.altervista.org/pdf/arboreto/Tiglio.pdf', 'windowOpenTab', 'toolbar=0,location=0,menubar=0')}}>
                        <CardMedia style={{height:300, backgroundPosition:'center', backgroundSize:'cover'}} image={tiglioImage} title="Tiglio" />
                        <CardContent>
                          <Typography gutterBottom variant="h5" component="h2">
                            Tiglio
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