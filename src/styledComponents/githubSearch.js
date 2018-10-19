import styled from 'styled-components';

import Grid from '@material-ui/core/Grid';
import ListItem from '@material-ui/core/ListItem';

export const GithubLogo = styled.img`
  width: 50px;
  text-align: center;
`;

// headers
export const TopTitle = styled.h1`
  text-align: center;
`;
export const NoResultsH3 = styled.h3`
  color: red;
  font-weight: 400;
`;

// Material-UI Components
export const StyledListItem = styled(ListItem)`
  border: 1px solid lightgray !important;
  margin-bottom: -1px !important;

  @media (min-width: 800px) {
    width: 800px !important
  }

`;
export const MainGrid = styled(Grid)`
  padding-top: 50px !important;
`;
