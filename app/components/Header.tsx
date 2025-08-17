import { FaSearch } from 'react-icons/fa';

export const Header = () => {
    return (
        <header className="h-90 px-4 pt-10 relative flex items-center justify-center flex-col bg-[url(../../public/stock.png)] bg-no-repeat bg-cover bg-center">
            <div className='top-10 flex items-center justify-center'>
                <form action="" className='w-150 relative'>
                    <FaSearch className='absolute left-6 top-1/2 transform -translate-y-1/2 text-slate-500' />
                    <input name='searchQuery' id='searchQuery' className='w-full h-14 pl-14 pr-6 rounded-full bg-slate-100 text-slate-600 focus:outline-none' type="text" placeholder="Search recipes..." />
                </form>
            </div>
            <div className='w-full flex-1 flex items-center'>
                <h1 className='w-full text-white text-center text-5xl font-bold font-knewave'>Explore Recipes</h1>
            </div>
        </header>
    )
}