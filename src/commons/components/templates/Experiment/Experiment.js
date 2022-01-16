import { MainContainer } from './style';
import { Container, Grid } from '@mui/material';
import { ExperimentNavTop, RenderTableExperiment } from '../../organisms';

export default function Experiment() {
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
