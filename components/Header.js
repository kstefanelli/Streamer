import {
  CollectionIcon,
  HomeIcon,
  SearchIcon,
  UserIcon,
  HeartIcon,
} from '@heroicons/react/outline';
import HeaderItem from './HeaderItem';
import Image from 'next/image';
import { useRouter } from 'next/router';

function Header() {
  const router = useRouter();
  return (
    <header className="flex flex-col sm:flex-row m-5 justify-between items-center h-auto">
      <div className="flex flex-grow justify-evenly max-w-2xl">
        <HeaderItem title="HOME" Icon={HomeIcon} />
        <HeaderItem title="COLLECTIONS" Icon={CollectionIcon} />
        <HeaderItem title="FAVORITES" Icon={HeartIcon}/>
        <HeaderItem title="SEARCH" Icon={SearchIcon} />
        <HeaderItem title="ACCOUNT" Icon={UserIcon} />
      </div>
      <Image className="object-contain" src="/STREAMER.png" width={200} height={100} alt="" />
    </header>
  );
}

export default Header;
