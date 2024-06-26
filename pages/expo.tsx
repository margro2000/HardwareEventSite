/**
 * Copyright 2020 Vercel Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { GetStaticProps } from 'next';

import Page from '@components/page';
import SponsorsGrid from '@components/sponsors-grid';
import Header from '@components/header';
import Layout from '@components/layout';

import { getAllSponsors } from '@lib/cms-api';
import { Sponsor } from '@lib/types';
import { META_DESCRIPTION } from '@lib/constants';

type Props = {
  sponsors: Sponsor[];
};

export default function ExpoPage({ sponsors }: Props) {
  const meta = {
    title: 'Expo - Virtual Event Starter Kit',
    description: META_DESCRIPTION
  };

  return (
    <Page meta={meta}>
      
      <Layout>
      <div style={{ position: 'relative', zIndex: 1 }}>
        <Header hero="Expo" description={meta.description} />
  
       
        <div style={{ paddingTop: '6vh',display: 'flex', justifyContent: 'center', height: '100vh' }}>
        <img src="/Map.png" style={{ height: '50vh', boxShadow: '10px 10px 5px grey' }} />
        </div>
        </div>
      </Layout>
      <video autoPlay loop muted style={{
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  
  // filter: 'blur(1px)',
}} src="/video4.webm" />
      

     
    </Page>
    
  );
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  const sponsors = await getAllSponsors();

  return {
    props: {
      sponsors: sponsors || []
    },
    revalidate: 60
  };
};
