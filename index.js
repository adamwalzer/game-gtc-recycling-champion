import config from './config';

import Loader from 'shared/components/loader/0.1';

import iOSScreen from 'shared/components/ios_splash_screen/0.1';

import TitleScreen from 'game-green-team-challenge/components/title_screen';
import HiThereScreen from 'game-green-team-challenge/components/hi_there_screen';
import KeyIsSortingScreen from 'game-green-team-challenge/components/key_is_sorting_screen';
import LightsScreen from 'game-green-team-challenge/components/lights_screen';
import FiveWaysScreen from 'game-green-team-challenge/components/five_ways_screen';
import LevelScreen from 'game-green-team-challenge/components/level_screen_component';
import RecyclingChampion1InfoScreen from
    'game-green-team-challenge/components/recycling_champion_one_info_screen';
import RecyclingChampion1Screen from
    'game-green-team-challenge/components/recycling_champion_level_one_screen';
import RecyclingChampion2InfoScreen from
    'game-green-team-challenge/components/recycling_champion_two_info_screen';
import RecyclingChampion2Screen from
    'game-green-team-challenge/components/recycling_champion_level_two_screen';
import RecyclingChampion3InfoScreen from
    'game-green-team-challenge/components/recycling_champion_three_info_screen';
import RecyclingChampion3Screen from
    'game-green-team-challenge/components/recycling_champion_level_three_screen';
import RecyclingChampion4InfoScreen from
    'game-green-team-challenge/components/recycling_champion_four_info_screen';
import RecyclingChampion4Screen from
    'game-green-team-challenge/components/recycling_champion_level_four_screen';
import RecyclingChampion5InfoScreen from
    'game-green-team-challenge/components/recycling_champion_five_info_screen';
import RecyclingChampion5Screen from
    'game-green-team-challenge/components/recycling_champion_level_five_screen';
import LevelCompleteScreen from
    'game-green-team-challenge/components/level_complete_screen_component';
import QuitScreen from 'game-green-team-challenge/components/quit_screen';

import ItemsToSort from 'game-green-team-challenge/components/items_to_sort';

let binNames = [
    'recycle',
    'landfill',
    'compost',
];

let itemsToSort = _.filter(ItemsToSort, item => _.includes(binNames, item.bin));

let audioRefs = _.uniq(_.map(itemsToSort, v =>
    _.kebabCase(_.replace(v.name, /\d+/g, '')))
);

let audioArray = _.map(audioRefs, (v, k) => {
    return {
        type: skoash.Audio,
        ref: v,
        key: k,
        props: {
            type: 'voiceOver',
            src: `${CMWN.MEDIA.GAME + 'sound-assets/_vositems/' + v}.mp3`,
            checkReady: false,
            onPlay: function () {
                this.updateScreenData({
                    keys: ['item', 'new'],
                    data: false,
                });
            }
        },
    };
});

skoash.start(
    <skoash.Game
        config={config}
        loader={<Loader />}
        screenBufferAmount={2}
        screens={[
            iOSScreen,
            TitleScreen,
            HiThereScreen,
            KeyIsSortingScreen,
            LightsScreen,
            FiveWaysScreen,
            LevelScreen(1.0),
            RecyclingChampion1InfoScreen,
            RecyclingChampion1Screen,
            LevelScreen(1.1),
            RecyclingChampion2InfoScreen,
            RecyclingChampion2Screen,
            LevelScreen(1.2),
            RecyclingChampion3InfoScreen,
            RecyclingChampion3Screen,
            LevelScreen(1.3),
            RecyclingChampion4InfoScreen,
            RecyclingChampion4Screen,
            LevelScreen(1.4),
            RecyclingChampion5InfoScreen,
            RecyclingChampion5Screen,
            LevelScreen(1.5),
            LevelCompleteScreen(1),
        ]}
        menus={{
            quit: QuitScreen,
        }}
        assets={[
            <skoash.SpriteCSS
                src={`${CMWN.MEDIA.SPRITE}_recycle`}
                spriteClass="recycle-item"
            />,
            <skoash.SpriteCSS
                src={`${CMWN.MEDIA.SPRITE}_compost`}
                spriteClass="compost-item"
            />,
            <skoash.SpriteCSS
                src={`${CMWN.MEDIA.SPRITE}_landfill`}
                spriteClass="landfill-item"
            />,
            <skoash.Image className="hidden" src={`${CMWN.MEDIA.SPRITE}_recycle.png`} />,
            <skoash.Image className="hidden" src={`${CMWN.MEDIA.SPRITE}_compost.png`} />,
            <skoash.Image className="hidden" src={`${CMWN.MEDIA.SPRITE}_landfill.png`} />,
            <skoash.Image className="hidden" src={`${CMWN.MEDIA.IMAGE}purple.ribbon.png`} />,
            <skoash.Image className="hidden" src={`${CMWN.MEDIA.IMAGE}luggage.png`} />,
            <skoash.Image className="hidden" src={`${CMWN.MEDIA.SPRITE}sprite.star.png`} />,
            <skoash.Image className="hidden" src={`${CMWN.MEDIA.FRAME}frame.01.png`} />,
            <skoash.Image className="hidden" src={`${CMWN.MEDIA.FRAME}frame.02.png`} />,
            <skoash.Image className="hidden" src={`${CMWN.MEDIA.FRAME}transition.frame.png`} />,
            <skoash.Image className="hidden" src={`${CMWN.MEDIA.SPRITE}sprite.mainnav.png`} />,
            <skoash.Image className="hidden" src={`${CMWN.MEDIA.IMAGE}Img.anotherChance.png`} />,
            <skoash.Image className="hidden" src={`${CMWN.MEDIA.IMAGE}img.resort.png`} />,
            <skoash.Image className="hidden" src={`${CMWN.MEDIA.IMAGE}vertical.pipe.png`} />,
            <skoash.Image className="hidden" src={`${CMWN.MEDIA.IMAGE}pipe.meter.png`} />,
            <skoash.Image className="hidden" src={`${CMWN.MEDIA.IMAGE}container.png`} />,
            <skoash.Image className="hidden" src={`${CMWN.MEDIA.IMAGE}titlescrnbg.jpg`} />,
            <skoash.Image className="hidden" src={`${CMWN.MEDIA.IMAGE}background.01.jpg`} />,
            <skoash.Image className="hidden" src={`${CMWN.MEDIA.IMAGE}background.02.jpg`} />,
            <skoash.Image className="hidden" src={`${CMWN.MEDIA.IMAGE}background.03.jpg`} />,
            <skoash.Image className="hidden" src={`${CMWN.MEDIA.IMAGE}background.04.jpg`} />,
            <skoash.Image className="hidden" src={`${CMWN.MEDIA.IMAGE}quit.background.jpg`} />,
            <skoash.Audio type="sfx" ref="button" src={`${CMWN.MEDIA.EFFECT}ButtonClick.mp3`} />,
            <skoash.Audio
                type="sfx"
                ref="screen-complete"
                src={`${CMWN.MEDIA.EFFECT}NextAppear.mp3`}
                volume={3}
            />,
            <skoash.Audio ref="BKG0" type="background" src={`${CMWN.MEDIA.EFFECT}titlescreen.mp3`} loop />,
            <skoash.Audio ref="BKG1" type="background" src={`${CMWN.MEDIA.EFFECT}BKG1.mp3`} loop />,
            <skoash.Audio ref="BKG6" type="background" src={`${CMWN.MEDIA.EFFECT}BKG6.mp3`} loop />,
            <div className="background title" />,
            <div className="background bkg1" />,
            <div className="background bkg2" />,
            <div className="background bkg3" />,
            <div className="background bkg4" />,
            <div className="background trash" />,
            <div className="background transition" />,
            <div className="background quit" />,
        ].concat(audioArray)}
    />
);
        /*renderExtras={function () {
            return (
                <skoash.AudioSprite
                    ref="itemVOs"
                    type="voiceOver"
                    srcFolder={CMWN.MEDIA.VO}
                    dataSrc="items.json"
                    play={this.state.data.itemRef}
                    complete
                />
            );
        }}*/

if (module.hot) module.hot.accept();
