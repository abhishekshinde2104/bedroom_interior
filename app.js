(function () {
  'use strict';

  // ---------------------------------------------------------------------
  // Data
  // ---------------------------------------------------------------------

  var PALETTES = [
    { id: '1a', name: 'Nordic Dawn', wall: '#F6F3ED', closet: '#F2EEE6', panel: '#D9C9A8', flute: '#A8B49A', loft: '#D9C9A8', desk: '#FFFFFF', pillow: '#A8B49A',
      closetDesc: 'Frosty white matte, handle-less', panelDesc: 'Light oak woodgrain', fluteDesc: 'Sage green fluted band', loftDesc: 'Light oak, matches bed wall', deskDesc: 'Pure white, oak edge band' },
    { id: '1b', name: 'Cloud & Ash', wall: '#F3F3F2', closet: '#FAFAF8', panel: '#C9C6C0', flute: '#3A3A38', loft: '#C9C6C0', desk: '#FFFFFF', pillow: '#3A3A38',
      closetDesc: 'Snow white super-matte', panelDesc: 'Grey-washed ash woodgrain', fluteDesc: 'Charcoal fluted band', loftDesc: 'Grey-washed ash', deskDesc: 'White top, charcoal drawer face' },
    { id: '1c', name: 'Fresh Linen', wall: '#F7F5F0', closet: '#EFE9DD', panel: '#B9CFDD', flute: '#E4D6B8', loft: '#EFE9DD', desk: '#FFFFFF', pillow: '#B9CFDD',
      closetDesc: 'Linen-textured off-white', panelDesc: 'Powder blue matte panel', fluteDesc: 'Pale sand fluted band', loftDesc: 'Linen off-white', deskDesc: 'Warm white, sand edge' },
    { id: '1d', name: 'Terra Soft', wall: '#F8F4EF', closet: '#FBF8F3', panel: '#CE8A6B', flute: '#E7D5BE', loft: '#E7D5BE', desk: '#E7D5BE', pillow: '#CE8A6B',
      closetDesc: 'Ivory matte, groove handles', panelDesc: 'Muted terracotta fluted panel', fluteDesc: 'Pale beech fluted band', loftDesc: 'Pale beech woodgrain', deskDesc: 'Pale beech woodgrain' },
    { id: '1e', name: 'Olive Grove', wall: '#F6F4EC', closet: '#7E8464', panel: '#FBF9F2', flute: '#7E8464', loft: '#D8B98A', desk: '#D8B98A', pillow: '#7E8464',
      closetDesc: 'Deep olive matte — hero surface', panelDesc: 'Warm white slatted panel', fluteDesc: 'Olive fluted band', loftDesc: 'Honey oak woodgrain', deskDesc: 'Honey oak, brass handles' },
    { id: '1f', name: 'Morning Mist', wall: '#F2F4F4', closet: '#E8EAEA', panel: '#8FB5B0', flute: '#E0D2B4', loft: '#E8EAEA', desk: '#FFFFFF', pillow: '#8FB5B0',
      closetDesc: 'Mist grey super-matte', panelDesc: 'Dusty aqua panel', fluteDesc: 'Pale oak fluted band', loftDesc: 'Mist grey', deskDesc: 'White top, pale-oak apron' },
    { id: '1g', name: 'Butter & Bone', wall: '#FAF7EF', closet: '#F4EFE3', panel: '#E3D3AC', flute: '#F0DFA4', loft: '#F0DFA4', desk: '#FFFFFF', pillow: '#F0DFA4',
      closetDesc: 'Bone white matte', panelDesc: 'Pale sand woodgrain', fluteDesc: 'Butter yellow fluted band', loftDesc: 'Butter yellow soft-gloss', deskDesc: 'White, yellow drawer faces' },
    { id: '1h', name: 'Slate Minimal', wall: '#F4F4F1', closet: '#FBFAF7', panel: '#6E7F8D', flute: '#D8C7A5', loft: '#FBFAF7', desk: '#D8C7A5', pillow: '#6E7F8D',
      closetDesc: 'Warm white, continuous grain', panelDesc: 'Slate blue matte panel', fluteDesc: 'Natural oak fluted band', loftDesc: 'Warm white matte', deskDesc: 'Natural oak top, white body' },
    { id: '1i', name: 'Blush Calm', wall: '#F9F4F1', closet: '#F7EDE7', panel: '#DBAA9A', flute: '#B08968', loft: '#F7EDE7', desk: '#B08968', pillow: '#DBAA9A',
      closetDesc: 'Blush-tinted off-white', panelDesc: 'Dusty rose fluted panel', fluteDesc: 'Light walnut fluted band', loftDesc: 'Blush off-white', deskDesc: 'Light walnut top' },
    { id: '1j', name: 'Monochrome Warm', wall: '#F3F1EC', closet: '#DCD6C9', panel: '#FBF9F5', flute: '#2E2C29', loft: '#DCD6C9', desk: '#FFFFFF', pillow: '#2E2C29',
      closetDesc: 'Greige matte, one plane', panelDesc: 'Warm white micro-groove', fluteDesc: 'Black matte fluted band', loftDesc: 'Greige matte', deskDesc: 'White, black legs/edge' },
    { id: '2a', name: 'Denim Day', wall: '#F4F5F4', closet: '#FBFBF9', panel: '#5C7290', flute: '#D8CDB8', loft: '#FBFBF9', desk: '#FFFFFF', pillow: '#5C7290',
      closetDesc: 'Crisp white matte', panelDesc: 'Denim blue matte panel', fluteDesc: 'Warm greige fluted band', loftDesc: 'Crisp white', deskDesc: 'White, denim drawer face' },
    { id: '2b', name: 'Lilac Haze', wall: '#F7F5F8', closet: '#F2EEF3', panel: '#B8A9C4', flute: '#E5DEEA', loft: '#F2EEF3', desk: '#FFFFFF', pillow: '#B8A9C4',
      closetDesc: 'Lilac-tinted off-white', panelDesc: 'Soft lilac matte panel', fluteDesc: 'Pale lavender fluted band', loftDesc: 'Lilac off-white', deskDesc: 'White with lilac edge' },
    { id: '2c', name: 'Forest & Cream', wall: '#F5F4EC', closet: '#F8F5EA', panel: '#4E6B58', flute: '#C9BD9C', loft: '#F8F5EA', desk: '#C9BD9C', pillow: '#4E6B58',
      closetDesc: 'Cream matte, handle-less', panelDesc: 'Deep forest green panel', fluteDesc: 'Raffia-tone fluted band', loftDesc: 'Cream matte', deskDesc: 'Raffia woodgrain top' },
    { id: '2d', name: 'Coral Dawn', wall: '#FAF5F0', closet: '#FCF8F3', panel: '#E8A48F', flute: '#F2D9C8', loft: '#FCF8F3', desk: '#FFFFFF', pillow: '#E8A48F',
      closetDesc: 'Warm white matte', panelDesc: 'Soft coral matte panel', fluteDesc: 'Peach-sand fluted band', loftDesc: 'Warm white', deskDesc: 'White, coral drawer faces' }
  ];

  var ROLES = [
    { key: 'closet', label: 'Closet' },
    { key: 'panel', label: 'Bed wall' },
    { key: 'flute', label: 'Accent flutes' },
    { key: 'loft', label: 'Loft cabinet' },
    { key: 'desk', label: 'Study / desk' }
  ];

  var VIEWS = [
    { id: 'front', name: 'Bed wall (front)' },
    { id: 'side', name: 'Window side' },
    { id: 'entry', name: 'Wardrobe wall' },
    { id: 'threeD', name: '3D room' }
  ];

  // ---------------------------------------------------------------------
  // View templates (front / side / entry / 3D) — geometry preserved from
  // the original render, only fill colors are data-driven.
  // ---------------------------------------------------------------------

  function frontView(sel, scale) {
    return (
      '<div style="position: relative; width: 960px; height: 560px; border-radius: 12px; overflow: hidden; border: 1px solid #E4E0D8; background: ' + sel.wall + '; transition: background 0.4s; transform: scale(' + scale + '); transform-origin: top left">' +
        '<div style="position: absolute; left: 0; right: 0; bottom: 0; height: 58px; background: linear-gradient(#EFEDE8, #E6E3DC)"></div>' +
        '<div style="position: absolute; top: -70px; left: 330px; width: 430px; height: 110px; border-radius: 50%; background: rgba(255,255,255,0.55); box-shadow: 0 18px 34px rgba(255,244,224,0.5)"></div>' +
        '<div style="position: absolute; left: 22px; top: 70px; width: 92px; height: 434px; background: linear-gradient(100deg, #C09A6B, #A8814F); border-radius: 3px"></div>' +
        '<div style="position: absolute; left: 100px; top: 275px; width: 4px; height: 34px; background: #3A3530; border-radius: 2px"></div>' +
        '<div style="position: absolute; left: 132px; top: 56px; width: 196px; height: 448px; background: ' + sel.closet + '; transition: background 0.4s; box-shadow: inset -1px 0 0 rgba(0,0,0,0.07)"></div>' +
        '<div style="position: absolute; left: 196px; top: 56px; width: 1px; height: 448px; background: rgba(0,0,0,0.10)"></div>' +
        '<div style="position: absolute; left: 262px; top: 56px; width: 1px; height: 448px; background: rgba(0,0,0,0.10)"></div>' +
        '<div style="position: absolute; left: 282px; top: 130px; width: 58px; height: 240px; border-radius: 29px; background: linear-gradient(160deg, #EAF0F2, #CDD8DC 60%, #E6EEF0); border: 3px solid #2E2C29"></div>' +
        '<div style="position: absolute; left: 348px; top: 40px; width: 420px; height: 464px; background: repeating-linear-gradient(90deg, ' + sel.flute + ' 0px, ' + sel.flute + ' 7px, ' + sel.fluteDark + ' 7px, ' + sel.fluteDark + ' 9px); transition: background 0.4s"></div>' +
        '<div style="position: absolute; left: 368px; top: 74px; width: 380px; height: 430px; background: ' + sel.panel + '; border-radius: 0 110px 0 0; transition: background 0.4s; box-shadow: 0 0 24px rgba(255,250,240,0.45)"></div>' +
        '<div style="position: absolute; left: 494px; top: 96px; width: 1px; height: 240px; background: rgba(0,0,0,0.12)"></div>' +
        '<div style="position: absolute; left: 620px; top: 96px; width: 1px; height: 240px; background: rgba(0,0,0,0.12)"></div>' +
        '<div style="position: absolute; left: 726px; top: 210px; width: 2px; height: 84px; background: #B99B6B; transform: rotate(14deg)"></div>' +
        '<div style="position: absolute; left: 712px; top: 262px; width: 16px; height: 16px; border-radius: 50%; background: #FFF7E6; box-shadow: 0 0 14px rgba(255,240,200,0.9)"></div>' +
        '<div style="position: absolute; left: 736px; top: 300px; width: 13px; height: 13px; border-radius: 50%; background: #FFF7E6; box-shadow: 0 0 12px rgba(255,240,200,0.9)"></div>' +
        '<div style="position: absolute; left: 780px; top: 40px; width: 158px; height: 86px; background: ' + sel.loft + '; transition: background 0.4s; box-shadow: inset 0 -1px 0 rgba(0,0,0,0.08)"></div>' +
        '<div style="position: absolute; left: 858px; top: 40px; width: 1px; height: 86px; background: rgba(0,0,0,0.10)"></div>' +
        '<div style="position: absolute; left: 780px; top: 140px; width: 158px; height: 210px; background: repeating-linear-gradient(90deg, ' + sel.flute + ' 0px, ' + sel.flute + ' 6px, ' + sel.fluteDark + ' 6px, ' + sel.fluteDark + ' 8px); transition: background 0.4s"></div>' +
        '<div style="position: absolute; left: 780px; top: 158px; width: 158px; height: 10px; background: ' + sel.desk + '; box-shadow: 0 6px 12px rgba(255,248,225,0.55); transition: background 0.4s"></div>' +
        '<div style="position: absolute; left: 780px; top: 292px; width: 158px; height: 26px; background: ' + sel.desk + '; transition: background 0.4s; box-shadow: 0 2px 4px rgba(0,0,0,0.10)"></div>' +
        '<div style="position: absolute; left: 780px; top: 380px; width: 158px; height: 124px; background: ' + sel.closet + '; transition: background 0.4s"></div>' +
        '<div style="position: absolute; left: 780px; top: 372px; width: 158px; height: 26px; border-radius: 6px; background: #8D7568"></div>' +
        '<div style="position: absolute; left: 800px; top: 352px; width: 34px; height: 26px; border-radius: 5px; background: ' + sel.pillow + '; transition: background 0.4s"></div>' +
        '<div style="position: absolute; left: 428px; top: 296px; width: 260px; height: 74px; border-radius: 12px 12px 0 0; background: #8D7A72"></div>' +
        '<div style="position: absolute; left: 446px; top: 322px; width: 62px; height: 42px; border-radius: 8px; background: #F7F4EE; box-shadow: 0 2px 3px rgba(0,0,0,0.08)"></div>' +
        '<div style="position: absolute; left: 606px; top: 322px; width: 62px; height: 42px; border-radius: 8px; background: #F7F4EE; box-shadow: 0 2px 3px rgba(0,0,0,0.08)"></div>' +
        '<div style="position: absolute; left: 516px; top: 330px; width: 52px; height: 38px; border-radius: 8px; background: ' + sel.pillow + '; transition: background 0.4s; box-shadow: 0 2px 3px rgba(0,0,0,0.10)"></div>' +
        '<div style="position: absolute; left: 560px; top: 336px; width: 48px; height: 34px; border-radius: 8px; background: #FBF9F4; box-shadow: 0 2px 3px rgba(0,0,0,0.08)"></div>' +
        '<div style="position: absolute; left: 414px; top: 368px; width: 288px; height: 22px; background: #FDFCF9; border-radius: 3px"></div>' +
        '<div style="position: absolute; left: 408px; top: 388px; width: 300px; height: 74px; border-radius: 6px 6px 10px 10px; background: linear-gradient(#DCC9AE, #CDB897)"></div>' +
        '<div style="position: absolute; left: 408px; top: 460px; width: 300px; height: 44px; background: #F2EEE6; border-radius: 0 0 4px 4px; box-shadow: inset 0 4px 6px rgba(0,0,0,0.05)"></div>' +
      '</div>'
    );
  }

  function sideView(sel, scale) {
    return (
      '<div style="position: relative; width: 960px; height: 560px; border-radius: 12px; overflow: hidden; border: 1px solid #E4E0D8; background: ' + sel.wall + '; transition: background 0.4s; transform: scale(' + scale + '); transform-origin: top left">' +
        '<div style="position: absolute; left: 0; right: 0; bottom: 0; height: 58px; background: linear-gradient(#EFEDE8, #E6E3DC)"></div>' +
        '<div style="position: absolute; left: 0px; top: 30px; width: 320px; height: 474px; background: ' + sel.panel + '; border-radius: 0 90px 0 0; transition: background 0.4s"></div>' +
        '<div style="position: absolute; left: 100px; top: 60px; width: 1px; height: 230px; background: rgba(0,0,0,0.12)"></div>' +
        '<div style="position: absolute; left: 200px; top: 60px; width: 1px; height: 230px; background: rgba(0,0,0,0.12)"></div>' +
        '<div style="position: absolute; left: 320px; top: 30px; width: 80px; height: 474px; background: repeating-linear-gradient(90deg, ' + sel.flute + ' 0px, ' + sel.flute + ' 7px, ' + sel.fluteDark + ' 7px, ' + sel.fluteDark + ' 9px); transition: background 0.4s"></div>' +
        '<div style="position: absolute; left: 348px; top: 170px; width: 2px; height: 80px; background: #B99B6B; transform: rotate(12deg)"></div>' +
        '<div style="position: absolute; left: 336px; top: 220px; width: 15px; height: 15px; border-radius: 50%; background: #FFF7E6; box-shadow: 0 0 14px rgba(255,240,200,0.9)"></div>' +
        '<div style="position: absolute; left: 16px; top: 268px; width: 84px; height: 128px; border-radius: 12px 12px 0 0; background: #8D7A72"></div>' +
        '<div style="position: absolute; left: 92px; top: 296px; width: 58px; height: 44px; border-radius: 8px; background: #F7F4EE; box-shadow: 0 2px 3px rgba(0,0,0,0.08)"></div>' +
        '<div style="position: absolute; left: 132px; top: 306px; width: 48px; height: 38px; border-radius: 8px; background: ' + sel.pillow + '; transition: background 0.4s"></div>' +
        '<div style="position: absolute; left: 96px; top: 344px; width: 420px; height: 24px; background: #FDFCF9; border-radius: 0 6px 0 0"></div>' +
        '<div style="position: absolute; left: 96px; top: 366px; width: 430px; height: 92px; border-radius: 0 10px 8px 0; background: linear-gradient(#DCC9AE, #CDB897)"></div>' +
        '<div style="position: absolute; left: 96px; top: 456px; width: 430px; height: 48px; background: #F2EEE6; box-shadow: inset 0 4px 6px rgba(0,0,0,0.05)"></div>' +
        '<div style="position: absolute; left: 420px; top: 30px; width: 240px; height: 130px; background: ' + sel.loft + '; transition: background 0.4s; box-shadow: inset 0 -1px 0 rgba(0,0,0,0.08)"></div>' +
        '<div style="position: absolute; left: 500px; top: 30px; width: 1px; height: 130px; background: rgba(0,0,0,0.10)"></div>' +
        '<div style="position: absolute; left: 580px; top: 30px; width: 1px; height: 130px; background: rgba(0,0,0,0.10)"></div>' +
        '<div style="position: absolute; left: 420px; top: 176px; width: 240px; height: 210px; background: repeating-linear-gradient(90deg, ' + sel.flute + ' 0px, ' + sel.flute + ' 6px, ' + sel.fluteDark + ' 6px, ' + sel.fluteDark + ' 8px); transition: background 0.4s"></div>' +
        '<div style="position: absolute; left: 420px; top: 196px; width: 240px; height: 10px; background: ' + sel.desk + '; transition: background 0.4s; box-shadow: 0 6px 12px rgba(255,248,225,0.55)"></div>' +
        '<div style="position: absolute; left: 420px; top: 330px; width: 240px; height: 28px; background: ' + sel.desk + '; transition: background 0.4s; box-shadow: 0 2px 4px rgba(0,0,0,0.10)"></div>' +
        '<div style="position: absolute; left: 530px; top: 340px; width: 1px; height: 18px; background: rgba(0,0,0,0.10)"></div>' +
        '<div style="position: absolute; left: 680px; top: 30px; width: 260px; height: 474px; background: color-mix(in oklab, ' + sel.wall + ', white 30%)"></div>' +
        '<div style="position: absolute; left: 700px; top: 50px; width: 220px; height: 290px; background: linear-gradient(#D9D3C5, #CCC5B4); border-radius: 2px; box-shadow: inset 0 -8px 14px rgba(0,0,0,0.08)"></div>' +
        '<div style="position: absolute; left: 700px; top: 316px; width: 220px; height: 8px; border-radius: 0 0 6px 6px; background: #C2BAA8"></div>' +
        '<div style="position: absolute; left: 700px; top: 328px; width: 220px; height: 34px; background: #9FB4C4"></div>' +
        '<div style="position: absolute; left: 680px; top: 430px; width: 260px; height: 74px; background: ' + sel.closet + '; transition: background 0.4s"></div>' +
        '<div style="position: absolute; left: 680px; top: 404px; width: 260px; height: 30px; border-radius: 6px; background: #8D7568"></div>' +
        '<div style="position: absolute; left: 706px; top: 378px; width: 40px; height: 30px; border-radius: 5px; background: ' + sel.pillow + '; transition: background 0.4s"></div>' +
        '<div style="position: absolute; left: 752px; top: 382px; width: 36px; height: 26px; border-radius: 5px; background: #F7F4EE"></div>' +
      '</div>'
    );
  }

  function entryView(sel, scale) {
    return (
      '<div style="position: relative; width: 960px; height: 560px; border-radius: 12px; overflow: hidden; border: 1px solid #E4E0D8; background: ' + sel.wall + '; transition: background 0.4s; transform: scale(' + scale + '); transform-origin: top left">' +
        '<div style="position: absolute; left: 0; right: 0; bottom: 0; height: 58px; background: linear-gradient(#EFEDE8, #E6E3DC)"></div>' +
        '<div style="position: absolute; top: -74px; left: 300px; width: 400px; height: 110px; border-radius: 50%; background: rgba(255,255,255,0.6); box-shadow: 0 16px 30px rgba(255,244,224,0.5)"></div>' +
        '<div style="position: absolute; left: 150px; top: 36px; width: 560px; height: 96px; background: ' + sel.loft + '; transition: background 0.4s; box-shadow: inset 0 -1px 0 rgba(0,0,0,0.08)"></div>' +
        '<div style="position: absolute; left: 290px; top: 36px; width: 1px; height: 96px; background: rgba(0,0,0,0.10)"></div>' +
        '<div style="position: absolute; left: 430px; top: 36px; width: 1px; height: 96px; background: rgba(0,0,0,0.10)"></div>' +
        '<div style="position: absolute; left: 570px; top: 36px; width: 1px; height: 96px; background: rgba(0,0,0,0.10)"></div>' +
        '<div style="position: absolute; left: 150px; top: 150px; width: 120px; height: 354px; background: linear-gradient(100deg, #C09A6B, #A8814F); border-radius: 3px"></div>' +
        '<div style="position: absolute; left: 254px; top: 320px; width: 4px; height: 30px; background: #3A3530; border-radius: 2px"></div>' +
        '<div style="position: absolute; left: 286px; top: 150px; width: 424px; height: 354px; background: ' + sel.closet + '; transition: background 0.4s"></div>' +
        '<div style="position: absolute; left: 498px; top: 150px; width: 2px; height: 354px; background: rgba(0,0,0,0.14)"></div>' +
        '<div style="position: absolute; left: 400px; top: 150px; width: 190px; height: 220px; border-radius: 0 0 70px 70px; background: ' + sel.flute + '; transition: background 0.4s; opacity: 0.85"></div>' +
        '<div style="position: absolute; left: 710px; top: 36px; width: 54px; height: 468px; background: repeating-linear-gradient(90deg, #EDF0F0 0px, #EDF0F0 5px, #DCE2E2 5px, #DCE2E2 7px); border: 2px solid #3A3530; box-sizing: border-box"></div>' +
        '<div style="position: absolute; left: 776px; top: 60px; width: 96px; height: 444px; background: ' + sel.panel + '; border-radius: 0 60px 0 0; transition: background 0.4s"></div>' +
        '<div style="position: absolute; left: 872px; top: 36px; width: 68px; height: 468px; background: repeating-linear-gradient(90deg, ' + sel.flute + ' 0px, ' + sel.flute + ' 7px, ' + sel.fluteDark + ' 7px, ' + sel.fluteDark + ' 9px); transition: background 0.4s"></div>' +
        '<div style="position: absolute; left: 790px; top: 268px; width: 74px; height: 130px; border-radius: 12px 12px 0 0; background: #8D7A72"></div>' +
        '<div style="position: absolute; left: 726px; top: 300px; width: 54px; height: 42px; border-radius: 8px; background: #F7F4EE; box-shadow: 0 2px 3px rgba(0,0,0,0.08)"></div>' +
        '<div style="position: absolute; left: 686px; top: 310px; width: 46px; height: 36px; border-radius: 8px; background: ' + sel.pillow + '; transition: background 0.4s"></div>' +
        '<div style="position: absolute; left: 400px; top: 346px; width: 396px; height: 22px; background: #FDFCF9; border-radius: 6px 0 0 0"></div>' +
        '<div style="position: absolute; left: 390px; top: 366px; width: 410px; height: 90px; border-radius: 10px 0 0 8px; background: linear-gradient(#DCC9AE, #CDB897)"></div>' +
        '<div style="position: absolute; left: 390px; top: 454px; width: 410px; height: 34px; background: #F2EEE6; box-shadow: inset 0 4px 6px rgba(0,0,0,0.05)"></div>' +
        '<div style="position: absolute; left: 390px; top: 488px; width: 410px; height: 16px; background: ' + sel.flute + '; transition: background 0.4s"></div>' +
      '</div>'
    );
  }

  function threeDView(sel, scale, yaw, pitch) {
    return (
      '<div id="orbitStage" style="position: relative; width: 960px; height: 560px; border-radius: 12px; overflow: hidden; border: 1px solid #E4E0D8; background: linear-gradient(#FBFAF7, #EFECE5); transform: scale(' + scale + '); transform-origin: top left; perspective: 1000px; perspective-origin: 50% 42%; cursor: grab; touch-action: none; user-select: none">' +
        '<div id="orbitGroup" style="position: absolute; left: 50%; top: 50%; width: 0; height: 0; transform-style: preserve-3d; transform: translateZ(180px) rotateX(' + pitch + 'deg) rotateY(' + yaw + 'deg)">' +

          '<div style="position: absolute; left: -450px; top: -250px; width: 900px; height: 500px; transform: translateZ(-450px); background: ' + sel.wall + '; transition: background 0.4s">' +
            '<div style="position: absolute; left: 150px; top: 0; width: 600px; height: 500px; background: repeating-linear-gradient(90deg, ' + sel.flute + ' 0px, ' + sel.flute + ' 8px, ' + sel.fluteDark + ' 8px, ' + sel.fluteDark + ' 10px); transition: background 0.4s"></div>' +
            '<div style="position: absolute; left: 185px; top: 36px; width: 530px; height: 464px; background: ' + sel.panel + '; border-radius: 0 90px 0 0; transition: background 0.4s; box-shadow: 0 0 26px rgba(255,250,240,0.4)"></div>' +
            '<div style="position: absolute; left: 360px; top: 60px; width: 1px; height: 220px; background: rgba(0,0,0,0.12)"></div>' +
            '<div style="position: absolute; left: 540px; top: 60px; width: 1px; height: 220px; background: rgba(0,0,0,0.12)"></div>' +
            '<div style="position: absolute; left: 310px; top: 288px; width: 280px; height: 112px; border-radius: 14px 14px 0 0; background: #8D7A72"></div>' +
            '<div style="position: absolute; left: 330px; top: 330px; width: 66px; height: 46px; border-radius: 9px; background: #F7F4EE"></div>' +
            '<div style="position: absolute; left: 504px; top: 330px; width: 66px; height: 46px; border-radius: 9px; background: #F7F4EE"></div>' +
            '<div style="position: absolute; left: 402px; top: 338px; width: 56px; height: 42px; border-radius: 9px; background: ' + sel.pillow + '; transition: background 0.4s"></div>' +
            '<div style="position: absolute; left: 700px; top: 160px; width: 2px; height: 80px; background: #B99B6B; transform: rotate(14deg)"></div>' +
            '<div style="position: absolute; left: 688px; top: 208px; width: 15px; height: 15px; border-radius: 50%; background: #FFF7E6; box-shadow: 0 0 16px rgba(255,240,200,0.95)"></div>' +
          '</div>' +

          '<div style="position: absolute; left: -450px; top: -250px; width: 900px; height: 500px; transform: rotateY(90deg) translateZ(-450px); background: ' + sel.wall + '; transition: background 0.4s">' +
            '<div style="position: absolute; inset: 0; background: linear-gradient(rgba(0,0,0,0.05), rgba(0,0,0,0.02))"></div>' +
            '<div style="position: absolute; left: 60px; top: 90px; width: 110px; height: 410px; background: linear-gradient(100deg, #C09A6B, #A8814F); border-radius: 3px"></div>' +
            '<div style="position: absolute; left: 220px; top: 60px; width: 560px; height: 440px; background: ' + sel.closet + '; transition: background 0.4s"></div>' +
            '<div style="position: absolute; left: 406px; top: 60px; width: 1px; height: 440px; background: rgba(0,0,0,0.10)"></div>' +
            '<div style="position: absolute; left: 592px; top: 60px; width: 1px; height: 440px; background: rgba(0,0,0,0.10)"></div>' +
            '<div style="position: absolute; left: 300px; top: 60px; width: 150px; height: 200px; border-radius: 0 0 60px 60px; background: ' + sel.flute + '; transition: background 0.4s; opacity: 0.85"></div>' +
            '<div style="position: absolute; left: 650px; top: 140px; width: 56px; height: 230px; border-radius: 28px; background: linear-gradient(160deg, #EAF0F2, #CDD8DC 60%, #E6EEF0); border: 3px solid #2E2C29"></div>' +
          '</div>' +

          '<div style="position: absolute; left: -450px; top: -250px; width: 900px; height: 500px; transform: rotateY(-90deg) translateZ(-450px); background: ' + sel.wall + '; transition: background 0.4s">' +
            '<div style="position: absolute; inset: 0; background: linear-gradient(rgba(0,0,0,0.05), rgba(0,0,0,0.02))"></div>' +
            '<div style="position: absolute; left: 70px; top: 30px; width: 360px; height: 110px; background: ' + sel.loft + '; transition: background 0.4s; box-shadow: inset 0 -1px 0 rgba(0,0,0,0.08)"></div>' +
            '<div style="position: absolute; left: 190px; top: 30px; width: 1px; height: 110px; background: rgba(0,0,0,0.10)"></div>' +
            '<div style="position: absolute; left: 310px; top: 30px; width: 1px; height: 110px; background: rgba(0,0,0,0.10)"></div>' +
            '<div style="position: absolute; left: 70px; top: 155px; width: 360px; height: 200px; background: repeating-linear-gradient(90deg, ' + sel.flute + ' 0px, ' + sel.flute + ' 6px, ' + sel.fluteDark + ' 6px, ' + sel.fluteDark + ' 8px); transition: background 0.4s"></div>' +
            '<div style="position: absolute; left: 70px; top: 175px; width: 360px; height: 10px; background: ' + sel.desk + '; transition: background 0.4s"></div>' +
            '<div style="position: absolute; left: 70px; top: 300px; width: 360px; height: 26px; background: ' + sel.desk + '; transition: background 0.4s; box-shadow: 0 2px 4px rgba(0,0,0,0.10)"></div>' +
            '<div style="position: absolute; left: 490px; top: 40px; width: 340px; height: 280px; background: linear-gradient(#D9D3C5, #CCC5B4); border-radius: 2px; box-shadow: inset 0 -8px 14px rgba(0,0,0,0.08)"></div>' +
            '<div style="position: absolute; left: 490px; top: 320px; width: 340px; height: 30px; background: #9FB4C4"></div>' +
            '<div style="position: absolute; left: 490px; top: 420px; width: 340px; height: 80px; background: ' + sel.closet + '; transition: background 0.4s"></div>' +
            '<div style="position: absolute; left: 490px; top: 394px; width: 340px; height: 30px; border-radius: 6px; background: #8D7568"></div>' +
            '<div style="position: absolute; left: 520px; top: 368px; width: 42px; height: 30px; border-radius: 5px; background: ' + sel.pillow + '; transition: background 0.4s"></div>' +
          '</div>' +

          '<div style="position: absolute; left: -450px; top: -450px; width: 900px; height: 900px; transform: rotateX(90deg) translateZ(-250px); background: linear-gradient(135deg, #F1EFEA 0%, #E8E5DE 55%, #EFEDE7 100%)">' +
            '<div style="position: absolute; inset: 0; background: repeating-linear-gradient(0deg, transparent 0px, transparent 148px, rgba(0,0,0,0.05) 148px, rgba(0,0,0,0.05) 150px), repeating-linear-gradient(90deg, transparent 0px, transparent 148px, rgba(0,0,0,0.05) 148px, rgba(0,0,0,0.05) 150px)"></div>' +
          '</div>' +

          '<div style="position: absolute; left: -450px; top: -450px; width: 900px; height: 900px; transform: rotateX(-90deg) translateZ(-250px); background: #FBFAF6">' +
            '<div style="position: absolute; left: 250px; top: 280px; width: 400px; height: 340px; border-radius: 50%; background: #F3F0E9; box-shadow: 0 0 40px rgba(255,238,200,0.8), inset 0 0 30px rgba(255,238,200,0.6)"></div>' +
          '</div>' +

          '<div style="position: absolute; left: -70px; top: -180px; width: 140px; height: 360px; transform: translate3d(380px, 50px, -200px) rotateX(90deg); background: ' + sel.desk + '; transition: background 0.4s; border-radius: 4px 0 0 4px; box-shadow: inset 6px 0 10px rgba(0,0,0,0.06)"></div>' +
          '<div style="position: absolute; left: -180px; top: -13px; width: 360px; height: 26px; transform: translate3d(310px, 63px, -200px) rotateY(90deg); background: color-mix(in oklab, ' + sel.desk + ', black 8%); transition: background 0.4s"></div>' +
          '<div style="position: absolute; left: -70px; top: -13px; width: 140px; height: 26px; transform: translate3d(380px, 63px, -20px); background: color-mix(in oklab, ' + sel.desk + ', black 5%); transition: background 0.4s"></div>' +

          '<div style="position: absolute; left: -150px; top: -190px; width: 300px; height: 380px; transform: translate3d(0px, 140px, -250px) rotateX(90deg); background: linear-gradient(#FDFCF9 0%, #FDFCF9 18%, #DCC9AE 18%, #CDB897 100%); border-radius: 4px 4px 10px 10px"></div>' +
          '<div style="position: absolute; left: -150px; top: -55px; width: 300px; height: 110px; transform: translate3d(0px, 195px, -60px); background: linear-gradient(#D5C2A6, #F2EEE6 60%); border-radius: 0 0 6px 6px"></div>' +
          '<div style="position: absolute; left: -190px; top: -55px; width: 380px; height: 110px; transform: translate3d(-150px, 195px, -250px) rotateY(90deg); background: linear-gradient(#D0BD9F, #EDE8DD 60%)"></div>' +
          '<div style="position: absolute; left: -190px; top: -55px; width: 380px; height: 110px; transform: translate3d(150px, 195px, -250px) rotateY(-90deg); background: linear-gradient(#D0BD9F, #EDE8DD 60%)"></div>' +

        '</div>' +
      '</div>'
    );
  }

  // ---------------------------------------------------------------------
  // App
  // ---------------------------------------------------------------------

  var state = {
    selId: '1c',
    overrides: {},
    view: 'front',
    yaw: -16,
    pitch: 6,
    stageScale: 1
  };

  var drag = null;

  var els = {
    title: document.getElementById('title'),
    chips: document.getElementById('chips'),
    viewBtns: document.getElementById('viewBtns'),
    stageWrap: document.getElementById('stageWrap'),
    stage: document.getElementById('stage'),
    orbitHint: document.getElementById('orbitHint'),
    resetMix: document.getElementById('resetMix'),
    mixerList: document.getElementById('mixerList'),
    surfaceGrid: document.getElementById('surfaceGrid')
  };

  function computeSel() {
    var base = PALETTES.filter(function (p) { return p.id === state.selId; })[0] || PALETTES[0];
    var ov = state.overrides || {};
    var sel = Object.assign({}, base, ov);
    if (ov.flute && !ov.pillow) sel.pillow = ov.flute;
    ROLES.forEach(function (r) {
      if (ov[r.key]) sel[r.key + 'Desc'] = 'Custom pick';
    });
    sel.fluteDark = 'color-mix(in oklab, ' + sel.flute + ', black 14%)';
    return sel;
  }

  function renderChips(sel) {
    var html = PALETTES.map(function (p) {
      var active = p.id === state.selId;
      return (
        '<button class="chip' + (active ? ' active' : '') + '" data-action="pick-palette" data-id="' + p.id + '">' +
          '<span class="chip-swatches">' +
            '<span class="chip-swatch" style="background:' + p.closet + '"></span>' +
            '<span class="chip-swatch" style="background:' + p.panel + '"></span>' +
            '<span class="chip-swatch" style="background:' + p.flute + '"></span>' +
          '</span>' +
          '<span>' + p.id + ' &middot; ' + p.name + '</span>' +
        '</button>'
      );
    }).join('');
    els.chips.innerHTML = html;
  }

  function renderViewBtns() {
    var html = VIEWS.map(function (v) {
      var active = v.id === state.view;
      return '<button class="view-btn' + (active ? ' active' : '') + '" data-action="pick-view" data-id="' + v.id + '">' + v.name + '</button>';
    }).join('');
    els.viewBtns.innerHTML = html;
  }

  function renderStage(sel) {
    var html;
    if (state.view === 'front') html = frontView(sel, state.stageScale);
    else if (state.view === 'side') html = sideView(sel, state.stageScale);
    else if (state.view === 'entry') html = entryView(sel, state.stageScale);
    else html = threeDView(sel, state.stageScale, state.yaw, state.pitch);

    els.stage.innerHTML = html;
    els.orbitHint.hidden = state.view !== 'threeD';
    els.stageWrap.style.height = Math.round(560 * state.stageScale) + 'px';

    if (state.view === 'threeD') {
      var orbitStage = document.getElementById('orbitStage');
      orbitStage.addEventListener('pointerdown', onOrbitDown);
      orbitStage.addEventListener('pointermove', onOrbitMove);
      orbitStage.addEventListener('pointerup', onOrbitUp);
      orbitStage.addEventListener('pointerleave', onOrbitUp);
    }
  }

  function renderMixer(sel) {
    var html = ROLES.map(function (r) {
      var seen = {};
      var swatches = PALETTES
        .map(function (p) { return { color: p[r.key], from: p.name }; })
        .filter(function (s) {
          var key = s.color.toLowerCase();
          if (seen[key]) return false;
          seen[key] = true;
          return true;
        })
        .map(function (s) {
          var selectedClass = sel[r.key].toLowerCase() === s.color.toLowerCase() ? ' selected' : '';
          return '<button class="mixer-swatch' + selectedClass + '" title="' + s.from + '" data-action="pick-swatch" data-role="' + r.key + '" data-color="' + s.color + '" style="background:' + s.color + '"></button>';
        })
        .join('');
      return (
        '<div class="mixer-group">' +
          '<div class="mixer-label">' + r.label + '</div>' +
          '<div class="mixer-swatches">' + swatches + '</div>' +
        '</div>'
      );
    }).join('');
    els.mixerList.innerHTML = html;
  }

  function renderSurfaceGrid(sel) {
    var html = ROLES.map(function (r) {
      var descLabel = r.key === 'desk' ? 'Study / dresser' : r.label;
      return (
        '<div class="surface-item">' +
          '<div class="surface-item-head">' +
            '<span class="surface-swatch" style="background:' + sel[r.key] + '"></span>' +
            '<span class="surface-label">' + descLabel + '</span>' +
          '</div>' +
          '<div class="surface-desc">' + sel[r.key + 'Desc'] + '</div>' +
        '</div>'
      );
    }).join('');
    els.surfaceGrid.innerHTML = html;
  }

  function render() {
    var sel = computeSel();
    var base = PALETTES.filter(function (p) { return p.id === state.selId; })[0] || PALETTES[0];
    els.title.textContent = 'Palette visualizer \u2014 ' + base.name;
    renderChips(sel);
    renderViewBtns();
    renderStage(sel);
    renderMixer(sel);
    renderSurfaceGrid(sel);
  }

  // ---------------------------------------------------------------------
  // Orbit drag (3D view)
  // ---------------------------------------------------------------------

  function onOrbitDown(e) {
    drag = { x: e.clientX, y: e.clientY, yaw: state.yaw, pitch: state.pitch };
  }

  function onOrbitMove(e) {
    if (!drag) return;
    var yaw = Math.max(-38, Math.min(38, drag.yaw + (e.clientX - drag.x) * 0.09));
    var pitch = Math.max(-6, Math.min(18, drag.pitch - (e.clientY - drag.y) * 0.05));
    state.yaw = yaw;
    state.pitch = pitch;
    var group = document.getElementById('orbitGroup');
    if (group) {
      group.style.transform = 'translateZ(180px) rotateX(' + pitch + 'deg) rotateY(' + yaw + 'deg)';
    }
  }

  function onOrbitUp() {
    drag = null;
  }

  // ---------------------------------------------------------------------
  // Fit stage width to container (matches ResizeObserver behavior)
  // ---------------------------------------------------------------------

  function fitStage() {
    var w = els.stageWrap.clientWidth;
    var s = Math.min(1, w / 960);
    if (Math.abs(s - state.stageScale) > 0.005) {
      state.stageScale = s;
      render();
    }
  }

  var ro = new ResizeObserver(fitStage);
  ro.observe(els.stageWrap);

  // ---------------------------------------------------------------------
  // Event delegation
  // ---------------------------------------------------------------------

  document.body.addEventListener('click', function (e) {
    var target = e.target.closest('[data-action]');
    if (!target) return;
    var action = target.getAttribute('data-action');
    if (action === 'pick-palette') {
      state.selId = target.getAttribute('data-id');
      state.overrides = {};
      render();
    } else if (action === 'pick-view') {
      state.view = target.getAttribute('data-id');
      render();
    } else if (action === 'pick-swatch') {
      var role = target.getAttribute('data-role');
      var color = target.getAttribute('data-color');
      var patch = {};
      patch[role] = color;
      state.overrides = Object.assign({}, state.overrides, patch);
      render();
    }
  });

  els.resetMix.addEventListener('click', function () {
    state.overrides = {};
    render();
  });

  // ---------------------------------------------------------------------
  // Init
  // ---------------------------------------------------------------------

  fitStage();
  render();
})();
