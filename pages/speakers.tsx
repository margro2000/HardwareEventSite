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
import SpeakersGrid from '@components/speakers-grid';
import Layout from '@components/layout';
import Header from '@components/header';

import { getAllSpeakers } from '@lib/cms-api';
import { Speaker } from '@lib/types';
import { META_DESCRIPTION } from '@lib/constants';

type Props = {
  speakers: Speaker[];
};

export default function Speakers({ speakers }: Props) {
  const meta = {
    title: 'Speakers - Virtual Event Starter Kit',
    description: META_DESCRIPTION
  };
  return (
    <div>
    <Page meta={meta}>
      <Layout>
      <div style={{ position: 'relative', zIndex: 1 }}>
        <video autoPlay loop muted style={{
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  filter: 'blur(1px)',
  // filter: 'blur(1px)',
}} src="/Video3.mp4" />
</div>
<div style={{ position: 'relative', zIndex: 1 }}>
<Header hero="Speakers" description={meta.description} />
        <div className="flex flex-wrap justify-center">

        <div className="speaker-profile m-6">
    <div className="speaker-image">
      <img 
        src="/George.jpeg"
        style={{
          width: '20vw', // Adjust as needed
          height: '20vw', // Adjust as needed
          objectFit: 'cover', // To maintain aspect ratio
          borderRadius: '80%', // To make the image square
          boxShadow: '0px 0px 30px rgba(0, 0, 0, 0.5)' // Box shadow
        }}
      />
    </div>
    <div className="speaker-info">
      <h1 style={{ fontSize: '3vw' }}>George Hotz</h1>
      <p style={{ fontSize: '2vw' }}>founder @ tinycorp</p>
    </div>
  </div>

  <div className="speaker-profile m-6">
    <div className="speaker-image">
      <img 
        src="/jimmy.jpeg"
        style={{
          width: '20vw', // Adjust as needed
          height: '20vw', // Adjust as needed
          objectFit: 'cover', // To maintain aspect ratio
          borderRadius: '80%', // To make the image square
          boxShadow: '0px 0px 30px rgba(0, 0, 0, 0.5)' // Box shadow
        }}
      />
    </div>
    <div className="speaker-info">
      <h1 style={{ fontSize: '3vw' }}>Jimmy Ba</h1>
      <p style={{ fontSize: '2vw' }}>Research at xAI</p>
    </div>
  </div>

  <div className="speaker-profile m-6">
    <div className="speaker-image">
      <img 
        src="/simon.jpeg"
        style={{
          width: '20vw', // Adjust as needed
          height: '20vw', // Adjust as needed
          objectFit: 'cover', // To maintain aspect ratio
          borderRadius: '80%', // To make the image square
          boxShadow: '0px 0px 30px rgba(0, 0, 0, 0.5)' // Box shadow
        }}
      />
    </div>
    <div className="speaker-info">
      <h1 style={{ fontSize: '3vw' }}>Simeon Bochev</h1>
      <p style={{ fontSize: '2vw' }}>AI Infra Builder</p>
    </div>
  </div>

        <div className="speaker-profile m-6">
    <div className="speaker-image">
      <img 
        src="/dave.jpeg"
        style={{
          width: '20vw', // Adjust as needed
          height: '20vw', // Adjust as needed
          objectFit: 'cover', // To maintain aspect ratio
          borderRadius: '80%', // To make the image square
          boxShadow: '0px 0px 30px rgba(0, 0, 0, 0.5)' // Box shadow
        }}
      />
    </div>
    <div className="speaker-info">
      <h1 style={{ fontSize: '3vw' }}>Dave Deriso</h1>
      <p style={{ fontSize: '2vw' }}>CEO of Bluue</p>
    </div>
  </div>

  {/* <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap' }}>
    <div className="speaker-info mr-8">
      <h1 style={{ fontSize: '3vw' }}>Gill Verdon</h1>
      <p style={{ fontSize: '2vw' }}>CEO of Bluue</p>
    </div>

    <div className="speaker-info mr-8">
      <h1 style={{ fontSize: '3vw' }}>Vincent Weisser</h1>
      <p style={{ fontSize: '2vw' }}>Founder @ Prime Intellect</p>
    </div>

    <div className="speaker-info mr-8">
      <h1 style={{ fontSize: '3vw' }}>Casey Caruso</h1>
      <p style={{ fontSize: '2vw' }}>Founder @ Topology</p>
    </div>

    <div className="speaker-info mr-8">
      <h1 style={{ fontSize: '3vw' }}>Sam Hogan</h1>
      <p style={{ fontSize: '2vw' }}>CEO @ Kuzco</p>
    </div>

    </div> */}

  </div>
  </div>

      </Layout>
    </Page>
    </div>
  );
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  const speakers = await getAllSpeakers();

  return {
    props: {
      speakers: speakers || []
    },
    revalidate: 60
  };
};
