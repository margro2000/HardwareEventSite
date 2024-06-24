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

import cn from 'classnames';
import styleUtils from './utils.module.css';
import styles from './hero.module.css';
import { BRAND_NAME, DATE, SITE_DESCRIPTION } from '@lib/constants';
import LearnMore from './learn-more';
import { GetStaticProps } from 'next';

import Page from '@components/page';
import Schedule from '@components/schedule';
import Layout from '@components/layout';
import Header from '@components/header';

import { getAllStages } from '@lib/cms-api';
import { Stage } from '@lib/types';
import { META_DESCRIPTION } from '@lib/constants';

import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import Typography from '@mui/material/Typography';


export default function Hero() {
  return (
    <div className={styles.wrapper}>
      <video autoPlay loop muted style={{
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  filter: 'blur(2px)',
}} src="/myVideo2.webm" />
  
  <div style={{ height: '80vh' }}>
      <h1 className={cn(styleUtils.appear, styleUtils['appear-third'], styles.hero)}>
      Democratizing Intelligence:
      <br />


      </h1>
      <h1 className={cn(styleUtils.appear, styleUtils['appear-third'], styles.hero)}>
      The Future of AI, Compute, and Infrastructure
      <br />
      </h1>

      <div 
  className={cn(styleUtils.appear, styleUtils['appear-fourth'], styles.info)}
  style={{
    color: '#B026FF', // Bright purple color
    textShadow: '3px 3px 6px rgba(0, 0, 0, 0.7)', // Stronger text shadow
    WebkitTextStroke: '1px white' // White outlines
  }}
>
  <p>{DATE}</p>
  <div className={styles['description-separator']} />
  <p>
    <strong>1:00 PM - 5:00 PM</strong>
  </p>
</div>
<LearnMore />
</div>
<div>

    {/* <Page meta={meta}> */}

     {/* <video autoPlay loop muted style={{
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  
  // filter: 'blur(1px)',
}} src="/Video2.webm" /> */}
      {/* <Layout> */}
      <div style={{  position: 'relative', zIndex: 1 }}>
      <Header hero="Schedule of Events" description={""}/>
      <p style={{marginLeft: '4vh'}}>Please check back here as we continue to update our discussions series</p>

        {/* <Schedule allStages={allStages} /> */}
       
       
        <Timeline position="alternate">
      <TimelineItem>

        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          
          <Typography variant="h6" component="span">
            1pm - Doors open
          </Typography>
          <Typography>Networking with 300+ AI engineers, founders, investors.</Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Typography variant="h6" component="span">
            Demos
          </Typography>
          <Typography>Demos from 15+ startups, researchers and open source projects</Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
  <TimelineSeparator>
    <TimelineDot />
    <TimelineConnector />
  </TimelineSeparator>
  <TimelineContent>
    <Typography variant="h6" component="span">
      2pm - Keynote & Speakers
    </Typography>
  </TimelineContent>
</TimelineItem>
<TimelineItem>
  <TimelineSeparator>
    <TimelineDot />
    <TimelineConnector />
  </TimelineSeparator>
  <TimelineContent>
    <Typography variant="h6" component="span">
      3:30-4:55pm Interactive Discussion Sessions:
    </Typography>
    <Typography>Future of Compute Hardware</Typography>
    <Typography>AI Agents</Typography>
    <Typography>AI Consumer Hardware</Typography>
    <Typography>AI Policy & Governance</Typography>
    <Typography>A Debate: The promises and pitfalls of decentralized AI</Typography>
    <Typography>Compute Markets: GPU economics and bottlenecks</Typography>
  </TimelineContent>
</TimelineItem>
<TimelineItem>
  <TimelineSeparator>
    <TimelineDot />
  </TimelineSeparator>
  <TimelineContent>
    <Typography variant="h6" component="span">
      5pm - Closing
    </Typography>
  </TimelineContent>
</TimelineItem>
<TimelineItem>
  <TimelineSeparator>
    <TimelineDot />
  </TimelineSeparator>
  <TimelineContent>
    <Typography variant="h6" component="span">
      5-6pm - Mingle & Product demos
    </Typography>
  </TimelineContent>
</TimelineItem>
    </Timeline>
    </div>
      {/* </Layout> */}
      {/* </div> */}
    
    </div>
      
    <div style={{ position: 'relative', zIndex: 1 }}>
    <Header hero="Speakers" description={""} />
        <p style={{marginLeft: '4vh'}}>We have the potential to underwrite a new era of prosperity and abundant economic growth. Developers, researchers and founders are racing to make AI more accessible to build, modify, and use. ​Hear from world-class speakers on the changing nature of the AI infrastructure landscape on GPU development, data centers, decentralized compute, compute as currency and the economic landscape shaping it all.</p>
        <div className="flex flex-wrap justify-center">

        <div className="speaker-profile m-6">
    <div className="speaker-image">
      <img 
        src="/Arny.jpeg"
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
      <h1 style={{ fontSize: '3vw' }}>Aravind Srinivas</h1>
      <p style={{ fontSize: '2vw' }}>CEO @ Perplexity</p>
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

  </div>
    </div>
    </div>

    
  );
}
