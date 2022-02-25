import React from 'react';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';

export default function Footer(props) {
  return (
    <Container class="footer">
        <Grid container spacing={3} justify="space-around">
            <Grid item xs={12} md={6}>
              <p onClick={()=>{window.open('https://github.com/xMattMaster/giardinomiranda')}}>Il giardino biodiverso del Liceo Miranda è un progetto creato da Matteo Arnese come elaborato PCTO per l'Esame di Stato A.S 2020/2021, è open source ed è stato creato con ReactJS e npm. La repo è disponibile al seguente link: https://github.com/xMattMaster/giardinomiranda</p>
              <p>È stato indispensabile il supporto della professoressa Mariagrazia Del Prete, che da decenni si impegna a portare avanti l'iniziativa del giardino biodiverso del Miranda con passione e costanza, facendo appassionare alla sua causa centinaia di studenti ogni anno, tra cui me. Il suo aiuto e la sua collaborazione sono stati vitali per la realizzazione di questo progetto. I suoi costanti sforzi, in ambito didattico e non, durante i miei cinque anni trascorsi con lei hanno contribuito alla realizzazione di tutto ciò. Con questo progetto spero di ringraziarla di tutto.</p>
            </Grid>
            <Grid item xs={12} md={6}>
              <p>Liceo Scienttifico-Linguistico Statale "Carlo Miranda"</p>
              <p>Via F.A. Giordano, 91</p>
              <p>80027 Frattamaggiore (NA)</p>
                <p>Tel. +39 081 8801909</p>
              <p onClick={()=>{window.open('https://www.liceocarlomiranda.edu.it/')}}>https://www.liceocarlomiranda.edu.it/</p>
            </Grid>
          </Grid>
          <p class="license">
            Distributed under the GNU Affero General Public License v3.0 - <span onClick={()=>{window.open('https://www.iubenda.com/privacy-policy/78243082')}}>Privacy Policy</span> - <span onClick={()=>{window.open('https://www.iubenda.com/privacy-policy/78243082/cookie-policy')}}>Cookie Policy</span>
          </p>
    </Container>
  );
}