import Image from "next/image";
import ImageComponent from '../components/ImageComponent';
import VideoComponent from '../components/VideoComponent';
import ParagraphsComponent from '../components/ParagraphsComponent';
import ListsComponent from '../components/ListsComponent';

const Home = () => (
  <div className="flex flex-col gap-10 m-10">
    <ImageComponent />
    <VideoComponent />
    <ParagraphsComponent />
    <ListsComponent />
  </div>
);

export default Home;
