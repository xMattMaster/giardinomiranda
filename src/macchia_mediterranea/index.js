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
import agrifoglioImage from './img/agrifoglio.jpg';
import albero_di_giudaImage from './img/albero_di_giuda.jpg';
import alloroImage from './img/alloro.jpg';
import cameliaImage from './img/camelia.jpg';
import carpinoImage from './img/carpino.jpg';
import carruboImage from './img/carrubo.jpg';
import cistoImage from './img/cisto.jpg';
import corbezzoloImage from './img/corbezzolo.jpg';
import fillireaImage from './img/fillirea.jpg';
import lentiscoImage from './img/lentisco.jpg';
import mirtoImage from './img/mirto.jpg';
import oleandroImage from './img/oleandro.jpg';
import olivoImage from './img/olivo.jpg';
import pittosporoImage from './img/pittosporo.jpg';
import pungitopoImage from './img/pungitopo.jpg';
import viburnoImage from './img/viburno.jpg';

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

export default function MacchiaMediterranea(props) {
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
                La macchia mediterranea
              </Typography>
            </Toolbar>
          </AppBar>
        </HideOnScroll>
        <Container>
          <Container class="macchiaMediterraneaImage">
            <Container class="pageTitleBg"></Container>
				    <p class="pageTitle">La macchia mediterranea</p>
            <Container className={classes.root}>
              <Container class="mainContent">
              <Grid container spacing={3} justify="space-around">
                  <Grid item xs={12} sm={10} md={6} lg={4} xl={3}>
                    <Card>
                      <CardActionArea boxShadow={2} onClick={()=>{window.open('https://docs.google.com/viewerng/viewer?url=https://giardinomiranda.altervista.org/pdf/macchia_mediterranea/Agrifoglio.pdf', 'windowOpenTab', 'toolbar=0,location=0,menubar=0')}}>
                        <CardMedia style={{height:300, backgroundPosition:'center', backgroundSize:'cover'}} image={agrifoglioImage} title="Agrifoglio" />
                        <CardContent>
                          <Typography gutterBottom variant="h5" component="h2">
                            Agrifoglio
                          </Typography>
                        </CardContent>
                      </CardActionArea>
                    </Card>
                  </Grid>
                  <Grid item xs={12} sm={10} md={6} lg={4} xl={3}>
                    <Card>
                      <CardActionArea boxShadow={2} onClick={()=>{window.open('https://docs.google.com/viewerng/viewer?url=https://giardinomiranda.altervista.org/pdf/macchia_mediterranea/Albero_di_Giuda.pdf', 'windowOpenTab', 'toolbar=0,location=0,menubar=0')}}>
                        <CardMedia style={{height:300, backgroundPosition:'center', backgroundSize:'cover'}} image={albero_di_giudaImage} title="Albero di Giuda" />
                        <CardContent>
                          <Typography gutterBottom variant="h5" component="h2">
                            Albero di Giuda
                          </Typography>
                        </CardContent>
                      </CardActionArea>
                    </Card>
                  </Grid>
                  <Grid item xs={12} sm={10} md={6} lg={4} xl={3}>
                    <Card>
                      <CardActionArea boxShadow={2} onClick={()=>{window.open('https://docs.google.com/viewerng/viewer?url=https://giardinomiranda.altervista.org/pdf/macchia_mediterranea/Alloro.pdf', 'windowOpenTab', 'toolbar=0,location=0,menubar=0')}}>
                        <CardMedia style={{height:300, backgroundPosition:'center', backgroundSize:'cover'}} image={alloroImage} title="Alloro" />
                        <CardContent>
                          <Typography gutterBottom variant="h5" component="h2">
                            Alloro
                          </Typography>
                        </CardContent>
                      </CardActionArea>
                    </Card>
                  </Grid>
                  <Grid item xs={12} sm={10} md={6} lg={4} xl={3}>
                    <Card>
                      <CardActionArea boxShadow={2} onClick={()=>{window.open('https://docs.google.com/viewerng/viewer?url=https://giardinomiranda.altervista.org/pdf/macchia_mediterranea/Camelia.pdf', 'windowOpenTab', 'toolbar=0,location=0,menubar=0')}}>
                        <CardMedia style={{height:300, backgroundPosition:'center', backgroundSize:'cover'}} image={cameliaImage} title="Camelia" />
                        <CardContent>
                          <Typography gutterBottom variant="h5" component="h2">
                            Camelia
                          </Typography>
                        </CardContent>
                      </CardActionArea>
                    </Card>
                  </Grid>
                  <Grid item xs={12} sm={10} md={6} lg={4} xl={3}>
                    <Card>
                      <CardActionArea boxShadow={2} onClick={()=>{window.open('https://docs.google.com/viewerng/viewer?url=https://giardinomiranda.altervista.org/pdf/macchia_mediterranea/Carpino.pdf', 'windowOpenTab', 'toolbar=0,location=0,menubar=0')}}>
                        <CardMedia style={{height:300, backgroundPosition:'center', backgroundSize:'cover'}} image={carpinoImage} title="Carpino" />
                        <CardContent>
                          <Typography gutterBottom variant="h5" component="h2">
                            Carpino
                          </Typography>
                        </CardContent>
                      </CardActionArea>
                    </Card>
                  </Grid>
                  <Grid item xs={12} sm={10} md={6} lg={4} xl={3}>
                    <Card>
                      <CardActionArea boxShadow={2} onClick={()=>{window.open('https://docs.google.com/viewerng/viewer?url=https://giardinomiranda.altervista.org/pdf/macchia_mediterranea/Carrubo.pdf', 'windowOpenTab', 'toolbar=0,location=0,menubar=0')}}>
                        <CardMedia style={{height:300, backgroundPosition:'center', backgroundSize:'cover'}} image={carruboImage} title="Carrubo" />
                        <CardContent>
                          <Typography gutterBottom variant="h5" component="h2">
                            Carrubo
                          </Typography>
                        </CardContent>
                      </CardActionArea>
                    </Card>
                  </Grid>
                  <Grid item xs={12} sm={10} md={6} lg={4} xl={3}>
                    <Card>
                      <CardActionArea boxShadow={2} onClick={()=>{window.open('https://docs.google.com/viewerng/viewer?url=https://giardinomiranda.altervista.org/pdf/macchia_mediterranea/Cisto.pdf', 'windowOpenTab', 'toolbar=0,location=0,menubar=0')}}>
                        <CardMedia style={{height:300, backgroundPosition:'center', backgroundSize:'cover'}} image={cistoImage} title="Cisto" />
                        <CardContent>
                          <Typography gutterBottom variant="h5" component="h2">
                            Cisto
                          </Typography>
                        </CardContent>
                      </CardActionArea>
                    </Card>
                  </Grid>
                  <Grid item xs={12} sm={10} md={6} lg={4} xl={3}>
                    <Card>
                      <CardActionArea boxShadow={2} onClick={()=>{window.open('https://docs.google.com/viewerng/viewer?url=https://giardinomiranda.altervista.org/pdf/macchia_mediterranea/Corbezzolo.pdf', 'windowOpenTab', 'toolbar=0,location=0,menubar=0')}}>
                        <CardMedia style={{height:300, backgroundPosition:'center', backgroundSize:'cover'}} image={corbezzoloImage} title="Corbezzolo" />
                        <CardContent>
                          <Typography gutterBottom variant="h5" component="h2">
                            Corbezzolo
                          </Typography>
                        </CardContent>
                      </CardActionArea>
                    </Card>
                  </Grid>
                  <Grid item xs={12} sm={10} md={6} lg={4} xl={3}>
                    <Card>
                      <CardActionArea boxShadow={2} onClick={()=>{window.open('https://docs.google.com/viewerng/viewer?url=https://giardinomiranda.altervista.org/pdf/macchia_mediterranea/Fillirea.pdf', 'windowOpenTab', 'toolbar=0,location=0,menubar=0')}}>
                        <CardMedia style={{height:300, backgroundPosition:'center', backgroundSize:'cover'}} image={fillireaImage} title="Fillirea" />
                        <CardContent>
                          <Typography gutterBottom variant="h5" component="h2">
                            Fillirea
                          </Typography>
                        </CardContent>
                      </CardActionArea>
                    </Card>
                  </Grid>
                  <Grid item xs={12} sm={10} md={6} lg={4} xl={3}>
                    <Card>
                      <CardActionArea boxShadow={2} onClick={()=>{window.open('https://docs.google.com/viewerng/viewer?url=https://giardinomiranda.altervista.org/pdf/macchia_mediterranea/Lentisco.pdf', 'windowOpenTab', 'toolbar=0,location=0,menubar=0')}}>
                        <CardMedia style={{height:300, backgroundPosition:'center', backgroundSize:'cover'}} image={lentiscoImage} title="Lentisco" />
                        <CardContent>
                          <Typography gutterBottom variant="h5" component="h2">
                            Lentisco
                          </Typography>
                        </CardContent>
                      </CardActionArea>
                    </Card>
                  </Grid>
                  <Grid item xs={12} sm={10} md={6} lg={4} xl={3}>
                    <Card>
                      <CardActionArea boxShadow={2} onClick={()=>{window.open('https://docs.google.com/viewerng/viewer?url=https://giardinomiranda.altervista.org/pdf/macchia_mediterranea/Mirto.pdf', 'windowOpenTab', 'toolbar=0,location=0,menubar=0')}}>
                        <CardMedia style={{height:300, backgroundPosition:'center', backgroundSize:'cover'}} image={mirtoImage} title="Mirto" />
                        <CardContent>
                          <Typography gutterBottom variant="h5" component="h2">
                            Mirto
                          </Typography>
                        </CardContent>
                      </CardActionArea>
                    </Card>
                  </Grid>
                  <Grid item xs={12} sm={10} md={6} lg={4} xl={3}>
                    <Card>
                      <CardActionArea boxShadow={2} onClick={()=>{window.open('https://docs.google.com/viewerng/viewer?url=https://giardinomiranda.altervista.org/pdf/macchia_mediterranea/Oleandro.pdf', 'windowOpenTab', 'toolbar=0,location=0,menubar=0')}}>
                        <CardMedia style={{height:300, backgroundPosition:'center', backgroundSize:'cover'}} image={oleandroImage} title="Oleandro" />
                        <CardContent>
                          <Typography gutterBottom variant="h5" component="h2">
                            Oleandro
                          </Typography>
                        </CardContent>
                      </CardActionArea>
                    </Card>
                  </Grid>
                  <Grid item xs={12} sm={10} md={6} lg={4} xl={3}>
                    <Card>
                      <CardActionArea boxShadow={2} onClick={()=>{window.open('https://docs.google.com/viewerng/viewer?url=https://giardinomiranda.altervista.org/pdf/macchia_mediterranea/Olivo.pdf', 'windowOpenTab', 'toolbar=0,location=0,menubar=0')}}>
                        <CardMedia style={{height:300, backgroundPosition:'center', backgroundSize:'cover'}} image={olivoImage} title="Olivo" />
                        <CardContent>
                          <Typography gutterBottom variant="h5" component="h2">
                            Olivo
                          </Typography>
                        </CardContent>
                      </CardActionArea>
                    </Card>
                  </Grid>
                  <Grid item xs={12} sm={10} md={6} lg={4} xl={3}>
                    <Card>
                      <CardActionArea boxShadow={2} onClick={()=>{window.open('https://docs.google.com/viewerng/viewer?url=https://giardinomiranda.altervista.org/pdf/macchia_mediterranea/Pittosporo.pdf', 'windowOpenTab', 'toolbar=0,location=0,menubar=0')}}>
                        <CardMedia style={{height:300, backgroundPosition:'center', backgroundSize:'cover'}} image={pittosporoImage} title="Pittosporo" />
                        <CardContent>
                          <Typography gutterBottom variant="h5" component="h2">
                            Pittosporo
                          </Typography>
                        </CardContent>
                      </CardActionArea>
                    </Card>
                  </Grid>
                  <Grid item xs={12} sm={10} md={6} lg={4} xl={3}>
                    <Card>
                      <CardActionArea boxShadow={2} onClick={()=>{window.open('https://docs.google.com/viewerng/viewer?url=https://giardinomiranda.altervista.org/pdf/macchia_mediterranea/Pungitopo.pdf', 'windowOpenTab', 'toolbar=0,location=0,menubar=0')}}>
                        <CardMedia style={{height:300, backgroundPosition:'center', backgroundSize:'cover'}} image={pungitopoImage} title="Pungitopo" />
                        <CardContent>
                          <Typography gutterBottom variant="h5" component="h2">
                            Pungitopo
                          </Typography>
                        </CardContent>
                      </CardActionArea>
                    </Card>
                  </Grid>
                  <Grid item xs={12} sm={10} md={6} lg={4} xl={3}>
                    <Card>
                      <CardActionArea boxShadow={2} onClick={()=>{window.open('https://docs.google.com/viewerng/viewer?url=https://giardinomiranda.altervista.org/pdf/macchia_mediterranea/Viburno.pdf', 'windowOpenTab', 'toolbar=0,location=0,menubar=0')}}>
                        <CardMedia style={{height:300, backgroundPosition:'center', backgroundSize:'cover'}} image={viburnoImage} title="Viburno" />
                        <CardContent>
                          <Typography gutterBottom variant="h5" component="h2">
                            Viburno
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