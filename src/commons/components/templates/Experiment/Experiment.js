import { MainContainer } from './style';
import { Container, Grid } from '@mui/material';
import { ExperimentNavTop, RenderTableExperiment } from '../../organisms';
import { useSelector } from 'react-redux';
import jsCookie from 'js-cookie';
import { useGetOrder } from '../../../apis/order.api';
import { Loading } from '../../molecules';
import { useEffect, useState } from 'react';

export default function Experiment() {
  const token = jsCookie.get('loginToken');

  const [filter, setFilter] = useState({});
  if (token) {
  } else {
    window.open('/information', '_self');
  }

  const [params, setParams] = useState('');

  const { data, isLoading, refetch } = useGetOrder(params);

  useEffect(() => {
    refetch(params);
  }, [params]);

  function onChangeFilter(name, value) {
    let filterClone = { ...filter };
    let searchParams = new URLSearchParams();
    filterClone[name] = value === true ? 1 : 0;
    Object.entries(filterClone).map(([key, value]) => {
      searchParams.append(key, value + '');
    });
    setFilter(filterClone);
    setParams(searchParams.toString());
  }

  return (
    <MainContainer>
      <br />
      <br />
      {/*    main template     */}
      <Container maxWidth="lg" style={{ position: 'relative' }}>
        <ExperimentNavTop onClick={onChangeFilter} />
        {isLoading ? <Loading /> : null}
        <RenderTableExperiment isLoading={isLoading} data={data} />
      </Container>
    </MainContainer>
  );
}
