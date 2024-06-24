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

type Props = {
  allStages: Stage[];
};

export default function SchedulePage({ allStages }: Props) {
  const meta = {
    title: 'Schedule - Virtual Event Starter Kit',
    description: META_DESCRIPTION
  };

  return (
    <div>
         <video autoPlay loop muted style={{
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  
  // filter: 'blur(1px)',
}} src="/Video2.webm" />

    <Page meta={meta}>

  
      <Layout>
      <div style={{ position: 'relative', zIndex: 1 }}>
      <Header hero="Schedule of Events" description={"Please check back here as we continue to update our discussions series"} />

        <Schedule allStages={allStages} />
       
       
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
      </Layout>
      {/* </div> */}
    </Page>
    </div>
  );
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  const allStages = await getAllStages();

  return {
    props: {
      allStages: allStages || []
    },
    revalidate: 60
  };
};
