import './global.css';
import './homepage.css';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import MenuIcon from '@material-ui/icons/Menu'
import CssBaseline from '@material-ui/core/CssBaseline';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Container from '@material-ui/core/Container';
import Slide from '@material-ui/core/Slide';
import Drawer from '@material-ui/core/Drawer';
import siteIndex from './siteIndex';
import footer from './footer';

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

export default function Homepage(props) {
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
                Homepage
              </Typography>
            </Toolbar>
          </AppBar>
        </HideOnScroll>
        <Container>
          <Container class="hpImage">
            <Container class="pageTitleBg"></Container>
				    <p class="pageTitle">Il giardino biodiverso del Liceo Miranda</p>
            <Container className={classes.root}>
              <Container class="mainContent">
                <p>Le aree verdi urbane rappresentano una risorsa fondamentale per la <b>sostenibilit??</b> e la <b>qualit??</b> della vita in citt??. Oltre alle note funzioni estetiche e ricreative, esse contribuiscono a mitigare l???inquinamento delle varie matrici ambientali (aria, acqua, suolo), migliorano il microclima delle citt??, assorbono le emissioni di gas a effetto serra derivanti dalle attivit?? umane, responsabili del cambiamento climatico e mantengono la biodiversit??. Sarebbe auspicabile una gestione del verde urbano pi?? sostenibile, capace di integrare i servizi ambientali delle aree verdi e degli spazi aperti urbani nella pianificazione urbanistica locale.</p>
                <p>Il <b>verde scolastico</b> ?? un tipo di verde funzionale con la duplice funzione di "polmone verde" della citt??, di cui ?? parte integrante, e di "polo di osservazione naturalistica", per consentire agli alunni di conoscere il mondo vegetale e il mondo animale che vive nella propria scuola. La creazione di una piccola ???oasi??? di verde all???interno della scuola, iniziata nell'a.s. 2001/2002, ?? sembrato un utile e coinvolgente mezzo per educare gli alunni al rispetto dell???ambiente, partendo dal contatto diretto con esso.</p>
                <p>Il lavoro di sistemazione e cura delle piante, fornite per la maggior parte dal S.T.A.P. Foreste della Regione Campania, ?? stato svolto e viene svolto tuttora dagli alunni e da qualche docente, nell'ambito del progetto ???Un giardino biodiverso???. Non ?? stato facile realizzare quanto oggi si pu?? osservare intorno all???edificio scolastico a causa del tipo di terreno poco adatto: sono stati decisivi l???impegno e la costanza di poche ma appassionate persone. Dal 2001 si sono succedute diverse generazioni di studenti che con entusiasmo hanno fatto crescere questa nostra realt??, risorsa fondamentale per la sostenibilit?? e la qualit?? della vita cittadina.</p>
                <p>Oggi l???area verde del Miranda si estende per circa <b>5500 metri quadrati</b> sui quali ci sono  circa <b>500 piante</b>. Le piante sono presentate secondo due criteri: <b>sistematico</b> ed <b>ecologico</b>. In alcune aree, infatti, sono raccolte piante appartenenti alla stessa categoria sistematica (es. area delle angiosperme, delle gimnosperme). In altre aree si trovano specie che hanno esigenze ambientali simili (es. deserto, macchia mediterranea, giardino aromatico, giardino roccioso).</p>
                <p>La forte presenza di specie autoctone nel giardino ha rappresentato un fattore molto importante per la conservazione della biodiversit?? e del suo incremento: nel corso degli anni si ?? formato un <b>ecosistema</b> che ha favorito la presenza di diverse specie di uccelli, che contribuiscono a promuovere la biodiversit?? cittadina, in un comune come Frattamaggiore che risente in modo negativo del forte processo di riduzione degli spazi destinati ad aree verdi, verificatosi in questi ultimi anni.</p>
                <p>Qualche anno fa sono state organizzate delle visite guidate al Giardino Biodiverso con Mr. Biodiversit?? che ha accompagnato bambini e ragazzi delle scuole della zona alla scoperta della biodiversit?? del Miranda.</p>
                <p>Ci proponiamo di continuare questa esperienza, non solo per garantire la manutenzione di quanto realizzato finora, ma anche per migliorare l'attenzione dei ragazzi verso le tematiche ambientali e far sviluppare in loro la capacit?? di immaginare il futuro, cos?? che possano contribuire a costruirlo e a cambiarlo.</p>
              </Container>
            </Container>
            {footer()}
          </Container>
        </Container>
      </React.Fragment>
    </div>
  );
}