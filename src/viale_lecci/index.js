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
import gelsoImage from './img/gelso.jpg';
import ibiscoImage from './img/ibisco.jpg';
import leccioImage from './img/leccio.jpg';

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

export default function VialeLecci(props) {
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
              Il viale dei lecci
              </Typography>
            </Toolbar>
          </AppBar>
        </HideOnScroll>
        <Container>
          <Container class="vialeLecciImage">
            <Container class="pageTitleBg"></Container>
				    <p class="pageTitle">Il viale dei lecci</p>
            <Container className={classes.root}>
              <Container class="mainContent">
              <Grid container spacing={3} justify="space-around">
                  <Grid item xs={12} sm={10} md={6} lg={4} xl={3}>
                    <Card>
                      <CardActionArea boxShadow={2} onClick={()=>{window.open('https://docs.google.com/viewerng/viewer?url=https://giardinomiranda.altervista.org/pdf/viale_lecci/Gelso.pdf', 'windowOpenTab', 'toolbar=0,location=0,menubar=0')}}>
                        <CardMedia style={{height:300, backgroundPosition:'center', backgroundSize:'cover'}} image={gelsoImage} title="Gelso" />
                        <CardContent>
                          <Typography gutterBottom variant="h5" component="h2">
                            Gelso
                          </Typography>
                        </CardContent>
                      </CardActionArea>
                    </Card>
                  </Grid>
                  <Grid item xs={12} sm={10} md={6} lg={4} xl={3}>
                    <Card>
                      <CardActionArea boxShadow={2} onClick={()=>{window.open('https://docs.google.com/viewerng/viewer?url=https://giardinomiranda.altervista.org/pdf/viale_lecci/Ibisco.pdf', 'windowOpenTab', 'toolbar=0,location=0,menubar=0')}}>
                        <CardMedia style={{height:300, backgroundPosition:'center', backgroundSize:'cover'}} image={ibiscoImage} title="Ibisco" />
                        <CardContent>
                          <Typography gutterBottom variant="h5" component="h2">
                            Ibisco
                          </Typography>
                        </CardContent>
                      </CardActionArea>
                    </Card>
                  </Grid>
                  <Grid item xs={12} sm={10} md={6} lg={4} xl={3}>
                    <Card>
                      <CardActionArea boxShadow={2} onClick={()=>{window.open('https://docs.google.com/viewerng/viewer?url=https://giardinomiranda.altervista.org/pdf/viale_lecci/Leccio.pdf', 'windowOpenTab', 'toolbar=0,location=0,menubar=0')}}>
                        <CardMedia style={{height:300, backgroundPosition:'center', backgroundSize:'cover'}} image={leccioImage} title="Leccio" />
                        <CardContent>
                          <Typography gutterBottom variant="h5" component="h2">
                            Leccio
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