import { MainContainer } from './style';
import { Container, Grid } from '@mui/material';
import { ExperimentNavTop, RenderTableExperiment } from '../../organisms';
import { useSelector } from 'react-redux';

export default function Experiment() {
  const token = useSelector((state) => state?.auth?.token);
  if (token) {
  } else {
    window.open('/information', '_self');
  }
  console.log(111111, token);
  return (
    <MainContainer>
      <br />
      <br />
      {/*    main template     */}
      <Container maxWidth="lg">
        <ExperimentNavTop />
        <RenderTableExperiment />
      </Container>
    </MainContainer>
  );
}
