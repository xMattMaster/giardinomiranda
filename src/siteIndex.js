import React from 'react';
import { Link } from "react-router-dom";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import Collapse from '@material-ui/core/Collapse';
import styled from 'styled-components';

const StyledLink = styled(Link)`
    text-decoration: none;
    color: black;
    &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
    }
`;

export default function Homepage(props) {//Change name
  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };
  return (
    <div>
    <List>

      <StyledLink to="/">
        <ListItem button>
          <ListItemText primary="Homepage" />
        </ListItem>
      </StyledLink>

      <StyledLink to="/giardino">
        <ListItem button>
          <ListItemText primary="Il giardino" />
        </ListItem>
      </StyledLink>

      <StyledLink to="/percorsovirgiliano">
      <ListItem button>
        <ListItemText primary="Il percorso virgiliano" />
      </ListItem>
      </StyledLink>

    </List>
    <Divider />
    <List>

      <ListItem button onClick={handleClick}>
        <ListItemText primary="Le schede botaniche" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItem>

      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>

          <StyledLink to="/angiosperme">
            <ListItem button>
              <ListItemText primary="Le angiosperme" />
            </ListItem>
          </StyledLink>

          <StyledLink to="/arboreto">
            <ListItem button>
              <ListItemText primary="L'arboreto" />
            </ListItem>
          </StyledLink>

          <StyledLink to="/area_ginestra">
            <ListItem button>
              <ListItemText primary="L'area della ginestra" />
            </ListItem>
          </StyledLink>

          <StyledLink to="/gimnosperme">
            <ListItem button>
              <ListItemText primary="Le gimnosperme" />
            </ListItem>
          </StyledLink>

          <StyledLink to="/macchia_mediterranea">
            <ListItem button>
              <ListItemText primary="La macchia mediterranea" />
            </ListItem>
          </StyledLink>

          <StyledLink to="/piante_aromatiche">
            <ListItem button>
              <ListItemText primary="Le piante aromatiche" />
            </ListItem>
          </StyledLink>

          <StyledLink to="/viale_allori">
            <ListItem button>
              <ListItemText primary="Il viale degli allori" />
            </ListItem>
          </StyledLink>

          <StyledLink to="/viale_lecci">
            <ListItem button>
              <ListItemText primary="Il viale dei lecci" />
            </ListItem>
          </StyledLink>

        </List>
      </Collapse>
    </List>
  </div>
  );
}