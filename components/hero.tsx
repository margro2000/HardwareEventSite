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
}} src="/myVideo2.webm" />
  
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
      
    </div>
  );
}
