import './App.css';

import News from './components/header/News/News';
import newsCategories from './data/newsCategories.jsx';
import newsHeadlines from './data/newsHeadlines.jsx';
import ExchangeRates from './components/header/ExchangeRates/ExchangeRates';
import currencyRates from './data/currencyRates';
import Ads from './components/header/Ads/Ads';
import Search from './components/body/search';
import searchCategories from './data/searchCategories';
import Image from './components/header/Common/Image/Image';

import Widgets from './components/footer/Widgets';

import WeatherWidget from './components/footer/Widgets/WeatherWidget/WeatherWidget';
import VisitedPagesWidget from './components/footer/Widgets/VisitedPagesWidget/VisitedPagesWidget';
import visitedPages from './data/visitedPages.jsx';
import RussianMapWidget from './components/footer/Widgets/RussianMapWidget/RussianMapWidget';
import russianMapItems from './data/russianMapItems.jsx';
import TVProgramWidget from './components/footer/Widgets/TVProgramWidget/TVProgramWidget';
import tvProgram from './data/tvProgram.jsx';
import EtherWidget from './components/footer/Widgets/EtherWidget/EtherWidget';
import ether from './data/ether.jsx';

function App() {
    return (
        <>
            <header className="App-header">
                <div className="App-wrapper">
                    <div className="App-header__main">
                        <News newsCategories={newsCategories} newsHeadlines={newsHeadlines} />

                        <ExchangeRates currencyRates={currencyRates} />
                    </div>

                    <Ads
                        title="Работа над ошибками"
                        description="Смотрите на Яндексе и запоминайте"
                    >
                        <Image
                            containerClass="Ads__image-container"
                            imgClass="Ads-image"
                            src="./src/assets/istockphoto-2х2.jpg"
                            alt="Plug"
                        />
                    </Ads>
                </div>
            </header>

            <div className="App-body">
                <div className="App-wrapper">

                    <Search
                        searchCategories={searchCategories}
                        searchBarLabel="Яндекс"
                        searchBtnName="Найти"
                        searchAdvice="Найдётся всё. Например,"
                        searchExample="купить квартиру в новостройке"
                    />

                    <Image
                        containerClass="Banner"
                        imgClass="Banner-image"
                        src="./src/assets/istockphoto-10х2.jpg"
                        alt="Plug"
                    />

                </div>
            </div>

            <footer className="App-footer">
                <div className="App-wrapper">

                    <Widgets>
                        <WeatherWidget
                            title="Погода"
                            averageTemperature="+29"
                            morningTemperature="+24"
                            daytimeTemperature="+35"
                        />
                        <RussianMapWidget
                            title="Карта России"
                            items={russianMapItems}
                        />
                        <EtherWidget
                            title="Эфир"
                            items={ether}
                        />
                        <VisitedPagesWidget
                            title="Посещаемое"
                            items={visitedPages}
                        />
                        <TVProgramWidget
                            title="Телепрограмма"
                            items={tvProgram}
                        />
                    </Widgets>

                </div>
            </footer>
        </>
    );
}

export default App;
