import AnimatedText from '@/components/AnimatedText'
import Head from 'next/head'
import Layout from '@/components/Layout'
import Link from 'next/link';
import Image from 'next/image';
import article1 from '../../public/images/articles/pagination component in reactjs.jpg'
import article2 from '../../public/images/articles/create loading screen in react js.jpg'
import article3 from '../../public/images/articles/smooth scrolling in reactjs.png'
import {easeInOut, motion} from 'framer-motion'


const FramerImage=motion(Image);


const Article=({img,title,date,link})=>{
    return(
        <motion.li
        initial={{y:200}}
        whileInView={{y:0,transition:{duration:0.5,ease:"easeInOut"}}}
        viewport={{once:true}}
        className='relative w-full p-4 py-6 my-4 rounded-xl flex items-center justify-between bg-light text-dark first:mt-0 border border-solid border-dark border-r-4 border-b-4 dark:border-light dark:bg-dark dark:text-light sm:flex-col'>
            <Link href={link} target='_blank'>
                <h2 className='capitalize text-xl font-semibold hover:underline'>{title}</h2>
            </Link>
            <span className='text-primary dark:text-primaryDark font-semibold pl-4 sm:self-start sm:pl-0 xs:text-sm'>{date}</span>
        </motion.li>
    )
}

const FeaturedArticle = ({ img, title, time, summary, link }) => {
  return (
    <li className='col-span-1 w-full p-4 bg-light border border-solid border-dark rounded-2xl dark:bg-dark dark:border-light'>
      <Link
        href={link}
        target="_blank"
        className="w-full inline-block cursor-pointer overflow-hidden rounded-lg"
      >
        <FramerImage src={img} alt={title} className="w-full h-auto" whileHover={{scale:1.05}} transition={{duration:0.2}} priority={true}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"></FramerImage>
      </Link>
      <Link href={link} target='_blank'>
        <h2 className='capitalize text-2xl font-bold my-2 mt-4 hover:underline xs:text-lg'>{title}</h2>
      </Link>
      <p className='text-sm mb-2 '>{summary}</p>
      <span className='text-primary dark:text-primaryDark font-semibold'>{time}</span>
    </li>
  );
};


const articles = () => {
  return (
    <>
      <Head>
        <title>Portfolio | Articles</title>
        <meta name="description" content="my description" />
      </Head>
      <main className="w-full mb-16 flex flex-col items-center justify-center overflow-hidden dark:text-light ">
        <Layout classname="pt-16">
          <AnimatedText text="Words Can Change The World! " className="mb-16 lg:!text-7xl sm:!mb-8 sm:!text-6xl xs:!text-4xl" />

          <ul className="grid grid-cols-2 gap-16 lg:gap-8 md:grid-cols-1 md:gap-y-16">
            <FeaturedArticle
              title="Build A Custom Pagination Component In Reactjs From Scratch"
              summary="Learn how to build a custom pagination component in ReactJS from scratch. 
Follow this step-by-step guide to integrate Pagination component in your ReactJS project."
              time="9 min read"
              link="/"
              img={article1}
            />

            <FeaturedArticle
              title="Build A Custom Pagination Component In Reactjs From Scratch"
              summary="Learn how to build a custom pagination component in ReactJS from scratch. 
Follow this step-by-step guide to integrate Pagination component in your ReactJS project."
              time="9 min read"
              link="/"
              img={article2}
            />
          </ul>

          <h2 className="font-bold text-4xl w-full text-center my-16 mt-32">
            All Articles
          </h2>
          <ul>
            <Article
              title="Build A Custom Pagination Component In Reactjs"
              date="November 15th, 2024"
              link="/"
              img={article3}
            />

            <Article
              title="Build A Custom Pagination Component In Reactjs"
              date="November 15th, 2024"
              link="/"
              img={article3}
            />

            <Article
              title="Build A Custom Pagination Component In Reactjs"
              date="November 15th, 2024"
              link="/"
              img={article3}
            />
          </ul>
        </Layout>
      </main>
    </>
  );
};

export default articles