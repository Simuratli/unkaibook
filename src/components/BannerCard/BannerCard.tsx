import React from 'react';
import { Button } from '@/components';
import { BUTTON_TYPE } from '@/types/global.types';
import Image from 'next/image';


function BannerCard() {
  return (
    <div className='bannerCard'>
      <Image
        src='https://s3-alpha-sig.figma.com/img/8c3f/9558/07440f34a53f0d85d6d5bc51c3ffcdca?Expires=1706486400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=qp3pLW8d4WwFBFPBBbmbFd2exy0vSggtkWVlebzCmo-H51-eomsyE4jW~4JMXeUg7aa~~5ZqD7ySpW3NoQmhGuWNVatjURJfguAvSV6~Z4ukU2bSmvuxaNedvmYNbo8JthhXk4DEXp7O-0O9nWqI1a31607F~U9DYZn9hzAnM30cznkCmB437B5Cdg7nFmrTpONFaeiDf0ibObujwmAoBMQQh~bRuwI~IYfnU-xVz4EGks0tjr9eJpBRNhOtRMiopctGgsa2TCzA0OTIcQeuz4l8r431yKYmF04~KVglgg99hyQfpySl~9nF5D~5sAQsHxRSJET7RU-wFV~ElEKEMg__'
        alt=''
        className='bannerCard__image'
        width={500}
        height={500}
      />
      <div className='bannerCard__content'>
        <h1>2023 year 50 most popular bestseller</h1>
        <p>{`Explore the literary highlights of 2023 with our '50 Most Popular Bestsellers' badge—a curated collection of the year's must-reads.`}</p>
        <Button type={BUTTON_TYPE.VIEW} text='view out' />
      </div>
    </div>
  );
}

export default BannerCard;
