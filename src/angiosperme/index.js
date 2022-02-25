import './../global.css';
import './index.css';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import CssBaseline from '@material-ui/core/CssBaseline';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Container from '@material-ui/core/Container';
import Slide from '@material-ui/core/Slide';
import Drawer from '@material-ui/core/Drawer';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CardActionArea from '@material-ui/core/CardActionArea';
import MenuIcon from '@material-ui/icons/Menu'
import siteIndex from './../siteIndex';
import footer from './../footer';
import eucaliptoImage from './img/eucalipto.jpg';
import melogranoImage from './img/melograno.jpg';
import nespoloImage from './img/nespolo.jpg';
import rosa_selvaticaImage from './img/rosa_selvatica.jpg';
import yuccaImage from './img/yucca.jpg'

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

export default function Angiosperme(props) {
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
                Le angiosperme
              </Typography>
            </Toolbar>
          </AppBar>
        </HideOnScroll>
        <Container>
          <Container class="angiospermeImage">
            <Container class="pageTitleBg"></Container>
				    <p class="pageTitle">Le angiosperme</p>
            <Container className={classes.root}>
              <Container class="mainContent">
                <Grid container spacing={3} justify="space-around">
                  <Grid item xs={12} sm={10} md={6} lg={4} xl={3}>
                    <Card>
                      <CardActionArea boxShadow={2} onClick={()=>{window.open('https://docs.google.com/viewerng/viewer?url=https://giardinomiranda.altervista.org/pdf/angiosperme/Eucalipto.pdf', 'windowOpenTab', 'toolbar=0,location=0,menubar=0')}}>
                        <CardMedia style={{height:300, backgroundPosition:'center', backgroundSize:'cover'}} image={eucaliptoImage} title="Eucalipto" />
                        <CardContent>
                          <Typography gutterBottom variant="h5" component="h2">
                            Eucalipto
                          </Typography>
                        </CardContent>
                      </CardActionArea>
                    </Card>
                  </Grid>
                  <Grid item xs={12} sm={10} md={6} lg={4} xl={3}>
                    <Card>
                      <CardActionArea onClick={()=>{window.open('https://docs.google.com/viewerng/viewer?url=https://giardinomiranda.altervista.org/pdf/angiosperme/Melograno.pdf', 'windowOpenTab', 'toolbar=0,location=0,menubar=0')}}>
                        <CardMedia style={{height:300, backgroundPosition:'center', backgroundSize:'cover'}} image={melogranoImage} title="Melograno" />
                        <CardContent>
                          <Typography gutterBottom variant="h5" component="h2">
                            Melograno
                          </Typography>
                        </CardContent>
                      </CardActionArea>
                    </Card>
                  </Grid>
                  <Grid item xs={12} sm={10} md={6} lg={4} xl={3}>
                    <Card>
                      <CardActionArea onClick={()=>{window.open('https://docs.google.com/viewerng/viewer?url=https://giardinomiranda.altervista.org/pdf/angiosperme/Nespolo.pdf', 'windowOpenTab', 'toolbar=0,location=0,menubar=0')}}>
                        <CardMedia style={{height:300, backgroundPosition:'center', backgroundSize:'cover'}} image={nespoloImage} title="Nespolo" />
                        <CardContent>
                          <Typography gutterBottom variant="h5" component="h2">
                            Nespolo
                          </Typography>
                        </CardContent>
                      </CardActionArea>
                    </Card>
                  </Grid>
                  <Grid item xs={12} sm={10} md={6} lg={4} xl={3}>
                    <Card>
                      <CardActionArea onClick={()=>{window.open('https://docs.google.com/viewerng/viewer?url=https://giardinomiranda.altervista.org/pdf/angiosperme/Rosa_selvatica.pdf', 'windowOpenTab', 'toolbar=0,location=0,menubar=0')}}>
                        <CardMedia style={{height:300, backgroundPosition:'center', backgroundSize:'cover'}} image={rosa_selvaticaImage} title="Nespolo" />
                        <CardContent>
                          <Typography gutterBottom variant="h5" component="h2">
                            Rosa selvatica
                          </Typography>
                        </CardContent>
                      </CardActionArea>
                    </Card>
                  </Grid>
                  <Grid item xs={12} sm={10} md={6} lg={4} xl={3}>
                    <Card>
                      <CardActionArea onClick={()=>{window.open('https://docs.google.com/viewerng/viewer?url=https://giardinomiranda.altervista.org/pdf/angiosperme/Yucca.pdf', 'windowOpenTab', 'toolbar=0,location=0,menubar=0')}}>
                        <CardMedia style={{height:300, backgroundPosition:'center', backgroundSize:'cover'}} image={yuccaImage} title="Yucca" />
                        <CardContent>
                          <Typography gutterBottom variant="h5" component="h2">
                            Yucca
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