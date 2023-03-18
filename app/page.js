"use client"
import Image from 'next/image'
import styles from './page.module.css'

import { FaBeer } from 'react-icons/fa';
import Link from 'next/link';
import Kategori from '@/components/kategori-card';
import SearchBoxHero from '@/components/search-bar-home';
import RecentSearch from '@/components/recent-search';
import FilterProject from '@/components/filter-project';
import Project from '@/components/project';

export default function Home() {

  return (
    <div className=''>
      <div id='hero' className='flex flex-col bg-primary py-16 items-center '
        style={{
          backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0,0.7), rgba(0, 0, 0,0.3)),url("/bg-profile.jpg")`,
          height: 'fit-content',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
        }}>
        <div id='category' className='flex flex-row space-x-4'>
          <Kategori title="Mobile" isActive={true} />
          <Kategori title="Website" />
          <Kategori title="Design" />
          <Kategori title="Paper" />
        </div>
        <p className='text-white text-4xl font-bold text-center tracking-wide mt-12 leading-snug'>
          Explore the world’s leading <br /> design portfolios
        </p>
        <p className='text-white text-lg font-normal text-center tracking-wide mt-8 leading-snug'>
          Millions of designers and agencies around the world showcase their portfolio work on <br />Dribbble - the home to the world’s best design and creative professionals.
        </p>
        <SearchBoxHero className="mt-4" />
        <div className='flex flex-row mt-8 space-x-4  items-center'>
          <p className='text-white'>Trending Search</p>
          <RecentSearch title={"Portofolio Page"} />
          <RecentSearch title={"Landing Page"} />
          <RecentSearch title={"Mobile Card"} />
          <RecentSearch title={"Mobile"} />
        </div>
      </div>
      <div id='company' className='flex flex-col px-32 py-8'>
        <div className='w-fit'>
          <FilterProject />
        </div>
        <div className='grid grid-cols-5 gap-5 mt-2'>
          <Project />
          <Project />
          <Project />
          <Project />
          <Project />
          <Project />
          <Project />

        </div>
      </div>
    </div>
  )
}
