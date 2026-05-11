// TGA2025游戏大选 - 静态页面数据
// 页面数据已硬编码，无需接口请求

// ==================== rem 适配 ====================
(function() {
  var docEl = document.documentElement;

  function isPc() {
    var userAgent = navigator.userAgent;
    if( userAgent.match(/Android/i) || userAgent.match(/webOS/i) || userAgent.match(/iPhone/i) || userAgent.match(/iPad/i) || userAgent.match(/iPod/i) || userAgent.match(/BlackBerry/i) || userAgent.match(/Windows Phone/i) ){
      return false;
    } else {
      return true;
    }
  }

  function setRemUnit() {
    if (isPc()) {
      docEl.style.fontSize = "37.5px";
    } else {
      var rem = docEl.clientWidth / 10;
      docEl.style.fontSize = rem + 'px';
    }
  }
  setRemUnit();
  window.addEventListener('resize', setRemUnit);
  window.addEventListener('pageshow', function (e) {
    if (e.persisted) {
      setRemUnit();
    }
  });
})();

// ==================== 静态数据 ====================

// TGA奖项列表数据
const tgaAwardsData = [
  {
    id: 1,
    name: "年度最佳游戏",
    enName: "Game of the Year",
    pic: "images/award_game_of_year.png",
    selectedGameId: null,
    selectedGameName: null,
    voteUserNum: 9737,
    gameItems: [
      { gameName: "光与影：33号远征队", imageUrl: "images/game_1756210434.jpg", gameId: "11249" },
      { gameName: "死亡搁浅2：冥滩之上", imageUrl: "images/game_1734274218.jpg", gameId: "9157" },
      { gameName: "咚奇刚：蕉力全开", imageUrl: "images/game_1743665101.jpg", gameId: "11710" },
      { gameName: "哈迪斯2", imageUrl: "images/game_1756068405.jpg", gameId: "8490" },
      { gameName: "空洞骑士：丝之歌", imageUrl: "images/game_1756151156.jpg", gameId: "89" },
      { gameName: "天国：拯救2", imageUrl: "images/game_1755660215.jpg", gameId: "10483" }
    ]
  },
  {
    id: 2,
    name: "最佳游戏指导",
    enName: "Best Game Direction",
    pic: "images/award_best_game_direction.png",
    selectedGameId: null,
    selectedGameName: null,
    voteUserNum: 9737,
    gameItems: [
      { gameName: "光与影：33号远征队", imageUrl: "images/game_1756210434.jpg", gameId: "11249" },
      { gameName: "死亡搁浅2：冥滩之上", imageUrl: "images/game_1734274218.jpg", gameId: "9157" },
      { gameName: "羊蹄山之魂", imageUrl: "images/game_yangtishanzhihun.png", gameId: "11837" },
      { gameName: "哈迪斯2", imageUrl: "images/game_1756068405.jpg", gameId: "8490" },
      { gameName: "双影奇境", imageUrl: "images/game_1756233491.jpg", gameId: "10949" }
    ]
  },
  {
    id: 3,
    name: "最佳叙事游戏",
    enName: "Best Narrative",
    pic: "images/award_best_narrative.png",
    selectedGameId: null,
    selectedGameName: null,
    voteUserNum: 9737,
    gameItems: [
      { gameName: "光与影：33号远征队", imageUrl: "images/game_1756210434.jpg", gameId: "11249" },
      { gameName: "死亡搁浅2：冥滩之上", imageUrl: "images/game_1734274218.jpg", gameId: "9157" },
      { gameName: "羊蹄山之魂", imageUrl: "images/game_yangtishanzhihun.png", gameId: "11837" },
      { gameName: "天国：拯救2", imageUrl: "images/game_1755660215.jpg", gameId: "10949" },
      { gameName: "寂静岭f", imageUrl: "images/game_1755818766.jpg", gameId: "11593" }
    ]
  },
  {
    id: 4,
    name: "最佳艺术指导",
    enName: "Best Art Direction",
    pic: "images/award_best_art_direction.png",
    selectedGameId: null,
    selectedGameName: null,
    voteUserNum: 9737,
    gameItems: [
      { gameName: "光与影：33号远征队", imageUrl: "images/game_1756210434.jpg", gameId: "11249" },
      { gameName: "死亡搁浅2：冥滩之上", imageUrl: "images/game_1734274218.jpg", gameId: "9157" },
      { gameName: "哈迪斯2", imageUrl: "images/game_1756068405.jpg", gameId: "8490" },
      { gameName: "羊蹄山之魂", imageUrl: "images/game_yangtishanzhihun.png", gameId: "11837" },
      { gameName: "双影奇境", imageUrl: "images/game_1756233491.jpg", gameId: "10949" }
    ]
  },
  {
    id: 5,
    name: "最佳配乐/音乐",
    enName: "Best Score & Music",
    pic: "images/award_best_score.png",
    selectedGameId: null,
    selectedGameName: null,
    voteUserNum: 9737,
    gameItems: [
      { gameName: "空洞骑士：丝之歌", imageUrl: "images/game_1756151156.jpg", gameId: "89" },
      { gameName: "哈迪斯2", imageUrl: "images/game_1756068405.jpg", gameId: "8490" },
      { gameName: "光与影：33号远征队", imageUrl: "images/game_1756210434.jpg", gameId: "11249" },
      { gameName: "羊蹄山之魂", imageUrl: "images/game_yangtishanzhihun.png", gameId: "11837" },
      { gameName: "死亡搁浅2：冥滩之上", imageUrl: "images/game_1734274218.jpg", gameId: "9157" }
    ]
  },
  {
    id: 6,
    name: "最佳音效设计",
    enName: "Best Audio Design",
    pic: "images/award_best_audio.png",
    selectedGameId: null,
    selectedGameName: null,
    voteUserNum: 9737,
    gameItems: [
      { gameName: "战地风云6", imageUrl: "images/game_1755806260.jpg", gameId: "12576" },
      { gameName: "光与影：33号远征队", imageUrl: "images/game_1756210434.jpg", gameId: "11249" },
      { gameName: "羊蹄山之魂", imageUrl: "images/game_yangtishanzhihun.png", gameId: "11837" },
      { gameName: "死亡搁浅2：冥滩之上", imageUrl: "images/game_1734274218.jpg", gameId: "9157" },
      { gameName: "寂静岭f", imageUrl: "images/game_1755818766.jpg", gameId: "11593" }
    ]
  },
  {
    id: 8,
    name: "最佳无障碍创新",
    enName: "Innovation in Accessibility",
    pic: "images/award_innovation.png",
    selectedGameId: null,
    selectedGameName: null,
    voteUserNum: 9737,
    gameItems: [
      { gameName: "午夜以南", imageUrl: "images/game_1756218958.jpg", gameId: "11250" },
      { gameName: "刺客信条：影", imageUrl: "images/game_1755836743.jpg", gameId: "9113" },
      { gameName: "原子陨落", imageUrl: "images/game_1756004202.jpg", gameId: "11349" },
      { gameName: "毁灭战士：黑暗时代", imageUrl: "images/game_1755825058.jpg", gameId: "11200" },
      { gameName: "EA SPORTS FC™ 26", imageUrl: "images/game_1755859443.jpg", gameId: "12516" }
    ]
  },
  {
    id: 9,
    name: "最具影响力游戏",
    enName: "Games For Impact",
    pic: "images/award_games_impact.png",
    selectedGameId: null,
    selectedGameName: null,
    voteUserNum: 9737,
    gameItems: [
      { gameName: "遗失的记录：盛放与愤怒", imageUrl: "images/game_1756210338.jpg", gameId: "11311" },
      { gameName: "Consume Me", imageUrl: "images/game_1763429088.jpg", gameId: "13771" },
      { gameName: "despelote", imageUrl: "images/game_1756279688.jpg", gameId: "11944" },
      { gameName: "午夜以南", imageUrl: "images/game_1756218958.jpg", gameId: "11250" },
      { gameName: "漫游驿站", imageUrl: "images/game_1756098794.jpg", gameId: "11340" }
    ]
  },
  {
    id: 10,
    name: "最佳持续运营",
    enName: "Best Ongoing",
    pic: "images/award_best_ongoing.png",
    selectedGameId: null,
    selectedGameName: null,
    voteUserNum: 9737,
    gameItems: [
      { gameName: "最终幻想XIV", imageUrl: "images/game_1735011939.png", gameId: "11008" },
      { gameName: "堡垒之夜", imageUrl: "images/game_baixuni2.png", gameId: "13772" },
      { gameName: "绝地潜兵2", imageUrl: "images/game_1755955979.jpg", gameId: "7788" },
      { gameName: "漫威争锋", imageUrl: "images/game_1755802295.jpg", gameId: "9274" },
      { gameName: "无人深空", imageUrl: "images/game_1755904193.jpg", gameId: "29" }
    ]
  },
  {
    id: 11,
    name: "最佳社区支持",
    enName: "Best Community Support",
    pic: "images/award_default.png",
    selectedGameId: null,
    selectedGameName: null,
    voteUserNum: 9737,
    gameItems: [
      { gameName: "博德之门3", imageUrl: "images/game_1755519602.jpg", gameId: "2" },
      { gameName: "最终幻想XIV", imageUrl: "images/game_1735011939.png", gameId: "11008" },
      { gameName: "堡垒之夜", imageUrl: "images/game_baixuni2.png", gameId: "13772" },
      { gameName: "绝地潜兵2", imageUrl: "images/game_1755955979.jpg", gameId: "7788" },
      { gameName: "无人深空", imageUrl: "images/game_1755904193.jpg", gameId: "29" }
    ]
  },
  {
    id: 12,
    name: "最佳独立游戏",
    enName: "Best Independent Game",
    pic: "images/award_default.png",
    selectedGameId: null,
    selectedGameName: null,
    voteUserNum: 9737,
    gameItems: [
      { gameName: "绝对魔权", imageUrl: "images/game_1760489466.jpg", gameId: "13573" },
      { gameName: "球比伦战记", imageUrl: "images/game_1760165828.jpg", gameId: "13556" },
      { gameName: "蓝途王子", imageUrl: "images/game_1756151981.jpg", gameId: "11725" },
      { gameName: "光与影：33号远征队", imageUrl: "images/game_1756210434.jpg", gameId: "11249" },
      { gameName: "哈迪斯2", imageUrl: "images/game_1756068405.jpg", gameId: "8490" },
      { gameName: "空洞骑士：丝之歌", imageUrl: "images/game_1756151156.jpg", gameId: "89" }
    ]
  },
  {
    id: 13,
    name: "最佳首秀独立游戏",
    enName: "Best Debut Indie Game",
    pic: "images/award_default.png",
    selectedGameId: null,
    selectedGameName: null,
    voteUserNum: 9737,
    gameItems: [
      { gameName: "蓝途王子", imageUrl: "images/game_1756151981.jpg", gameId: "11725" },
      { gameName: "光与影：33号远征队", imageUrl: "images/game_1756210434.jpg", gameId: "11249" },
      { gameName: "Megabonk", imageUrl: "images/game_1763430027.jpg", gameId: "13773" },
      { gameName: "despelote", imageUrl: "images/game_1756279688.jpg", gameId: "11944" },
      { gameName: "Dispatch", imageUrl: "images/game_1761097263.jpg", gameId: "13641" }
    ]
  },
  {
    id: 14,
    name: "最佳移动游戏",
    enName: "Best Mobile Game",
    pic: "images/award_default.png",
    selectedGameId: null,
    selectedGameName: null,
    voteUserNum: 9737,
    gameItems: [
      { gameName: "Destiny: Rising", imageUrl: "images/game_destiny_rising.png", gameId: "13778" },
      { gameName: "女神异闻录：夜幕魅影", imageUrl: "images/game_1755879132.jpg", gameId: "11936" },
      { gameName: "索尼克大乱斗", imageUrl: "images/game_1745983786.jpg", gameId: "11987" },
      { gameName: "赛马娘", imageUrl: "images/game_1755745305.jpg", gameId: "9685" },
      { gameName: "鸣潮", imageUrl: "images/game_1732865905.jpg", gameId: "8885" }
    ]
  },
  {
    id: 15,
    name: "最佳VR/AR游戏",
    enName: "Best VR/AR Game",
    pic: "images/award_default.png",
    selectedGameId: null,
    selectedGameName: null,
    voteUserNum: 9737,
    gameItems: [
      { gameName: "Alien: Rogue Incursion", imageUrl: "images/game_alien_rogue.png", gameId: "13780" },
      { gameName: "Arken Age", imageUrl: "images/game_1756267994.jpg", gameId: "11052" },
      { gameName: "Ghost Town", imageUrl: "images/game_1757337130.jpg", gameId: "13779" },
      { gameName: "漫威死侍", imageUrl: "images/game_wulinsiwang.png", gameId: "13777" },
      { gameName: "午夜漫步", imageUrl: "images/game_1755811714.jpg", gameId: "11992" }
    ]
  },
  {
    id: 16,
    name: "最佳动作游戏",
    enName: "Best Action Game",
    pic: "images/award_default.png",
    selectedGameId: null,
    selectedGameName: null,
    voteUserNum: 9737,
    gameItems: [
      { gameName: "战地风云6", imageUrl: "images/game_1755806260.jpg", gameId: "12576" },
      { gameName: "毁灭战士：黑暗时代", imageUrl: "images/game_1755825058.jpg", gameId: "11200" },
      { gameName: "哈迪斯2", imageUrl: "images/game_1756068405.jpg", gameId: "8490" },
      { gameName: "忍者龙剑传4", imageUrl: "images/game_1755784521.jpg", gameId: "11232" },
      { gameName: "超级忍 反攻的斩击", imageUrl: "images/game_1756279051.jpg", gameId: "11834" }
    ]
  },
  {
    id: 17,
    name: "最佳动作冒险游戏",
    enName: "Best Action/Adventure Game",
    pic: "images/award_default.png",
    selectedGameId: null,
    selectedGameName: null,
    voteUserNum: 9737,
    gameItems: [
      { gameName: "死亡搁浅2：冥滩之上", imageUrl: "images/game_1734274218.jpg", gameId: "9157" },
      { gameName: "羊蹄山之魂", imageUrl: "images/game_yangtishanzhihun.png", gameId: "11837" },
      { gameName: "空洞骑士：丝之歌", imageUrl: "images/game_1756151156.jpg", gameId: "89" },
      { gameName: "夺宝奇兵：古老之圈", imageUrl: "images/game_1755792598.jpg", gameId: "10634" },
      { gameName: "双影奇境", imageUrl: "images/game_1756233491.jpg", gameId: "10949" }
    ]
  },
  {
    id: 18,
    name: "最佳角色扮演游戏",
    enName: "Best Role Playing Game",
    pic: "images/award_default.png",
    selectedGameId: null,
    selectedGameName: null,
    voteUserNum: 9737,
    gameItems: [
      { gameName: "宣誓", imageUrl: "images/game_1755763714.jpg", gameId: "10856" },
      { gameName: "光与影：33号远征队", imageUrl: "images/game_1756210434.jpg", gameId: "11249" },
      { gameName: "天国：拯救2", imageUrl: "images/game_1755660215.jpg", gameId: "10949" },
      { gameName: "天外世界2", imageUrl: "images/game_1756125712.jpg", gameId: "10945" },
      { gameName: "怪物猎人：荒野", imageUrl: "images/game_1756264950.jpg", gameId: "8569" }
    ]
  },
  {
    id: 19,
    name: "最佳格斗游戏",
    enName: "Best Fighting Game",
    pic: "images/award_default.png",
    selectedGameId: null,
    selectedGameName: null,
    voteUserNum: 9737,
    gameItems: [
      { gameName: "2XKO", imageUrl: "images/game_2xko.png", gameId: "13781" },
      { gameName: "卡普空对战格斗合集2", imageUrl: "images/game_1756283957.jpg", gameId: "12049" },
      { gameName: "饿狼传说：群狼之城", imageUrl: "images/game_1755767724.jpg", gameId: "10851" },
      { gameName: "真人快打：遗产合集", imageUrl: "images/game_1749093012.jpg", gameId: "12243" },
      { gameName: "VR战士5：终极对决", imageUrl: "images/game_1755832757.jpg", gameId: "11012" }
    ]
  },
  {
    id: 20,
    name: "最佳家庭游戏",
    enName: "Best Family Game",
    pic: "images/award_default.png",
    selectedGameId: null,
    selectedGameName: null,
    voteUserNum: 9737,
    gameItems: [
      { gameName: "咚奇刚：蕉力全开", imageUrl: "images/game_1743665101.jpg", gameId: "11710" },
      { gameName: "LEGO® Party!", imageUrl: "images/game_1756228296.jpg", gameId: "12682" },
      { gameName: "马里奥赛车：世界", imageUrl: "images/game_1743647274.jpg", gameId: "11704" },
      { gameName: "索尼克赛车 交叉世界", imageUrl: "images/game_1755767064.jpg", gameId: "11376" },
      { gameName: "双影奇境", imageUrl: "images/game_1756233491.jpg", gameId: "10949" }
    ]
  },
  {
    id: 21,
    name: "最佳模拟/策略游戏",
    enName: "Best Sim/Strategy Game",
    pic: "images/award_default.png",
    selectedGameId: null,
    selectedGameName: null,
    voteUserNum: 9737,
    gameItems: [
      { gameName: "多重人生", imageUrl: "images/game_1756157345.jpg", gameId: "11212" },
      { gameName: "最终幻想战略版", imageUrl: "images/game_1749089609.jpg", gameId: "12240" },
      { gameName: "侏罗纪世界：进化3", imageUrl: "images/game_1755819938.jpg", gameId: "12465" },
      { gameName: "席德·梅尔的文明Ⅶ", imageUrl: "images/game_1756098108.jpg", gameId: "10479" },
      { gameName: "风暴崛起", imageUrl: "images/game_1756136712.jpg", gameId: "10902" },
      { gameName: "双点博物馆", imageUrl: "images/game_1756256885.jpg", gameId: "10624" }
    ]
  },
  {
    id: 22,
    name: "最佳体育竞速游戏",
    enName: "Best Sports/Racing Game",
    pic: "images/award_default.png",
    selectedGameId: null,
    selectedGameName: null,
    voteUserNum: 9737,
    gameItems: [
      { gameName: "EA SPORTS FC™ 26", imageUrl: "images/game_1755859443.jpg", gameId: "12516" },
      { gameName: "F1® 25", imageUrl: "images/game_1755828487.jpg", gameId: "12005" },
      { gameName: "马里奥赛车：世界", imageUrl: "images/game_1743647274.jpg", gameId: "11704" },
      { gameName: "开球！REMATCH", imageUrl: "images/game_1756250225.jpg", gameId: "10950" },
      { gameName: "索尼克赛车 交叉世界", imageUrl: "images/game_1755767064.jpg", gameId: "11376" }
    ]
  },
  {
    id: 23,
    name: "最佳多人游戏",
    enName: "Best Multiplayer Game",
    pic: "images/award_default.png",
    selectedGameId: null,
    selectedGameName: null,
    voteUserNum: 9737,
    gameItems: [
      { gameName: "穹顶突击队", imageUrl: "images/game_aodong.png", gameId: "9020" },
      { gameName: "战地风云6", imageUrl: "images/game_1755806260.jpg", gameId: "12576" },
      { gameName: "艾尔登法环：黑夜君临", imageUrl: "images/game_1755783503.jpg", gameId: "10944" },
      { gameName: "巅峰", imageUrl: "images/game_1755871570.jpg", gameId: "12450" },
      { gameName: "双影奇境", imageUrl: "images/game_1756233491.jpg", gameId: "10949" }
    ]
  },
  {
    id: 24,
    name: "最佳改编作品",
    enName: "Best Adaptation",
    pic: "images/award_default.png",
    selectedGameId: null,
    selectedGameName: null,
    voteUserNum: 9737,
    gameItems: [
      { gameName: "我的世界", imageUrl: "images/game_1750749093.jpg", gameId: "9071" },
      { gameName: "鬼泣", imageUrl: "images/game_1755974259.jpg", gameId: "11823" },
      { gameName: "最后生还者2：重制版", imageUrl: "images/game_1755771821.jpg", gameId: "8933" },
      { gameName: "细胞分裂", imageUrl: "images/game_xibao.png", gameId: "13776" },
      { gameName: "直到黎明", imageUrl: "images/game_1755727352.jpg", gameId: "8587" }
    ]
  },
  {
    id: 25,
    name: "最受期待游戏",
    enName: "Most Anticipated Game",
    pic: "images/award_default.png",
    selectedGameId: null,
    selectedGameName: null,
    voteUserNum: 9737,
    gameItems: [
      { gameName: "007 初露锋芒", imageUrl: "images/game_1749088404.jpg", gameId: "12238" },
      { gameName: "侠盗猎车手6", imageUrl: "images/game_1734513304.png", gameId: "10970" },
      { gameName: "Marvel's Wolverine", imageUrl: "images/game_04ebc6f0.png", gameId: "13775" },
      { gameName: "生化危机：安魂曲", imageUrl: "images/game_1750987847.png", gameId: "12215" },
      { gameName: "巫师4", imageUrl: "images/game_1734052901.webp", gameId: "10942" }
    ]
  }
];

// 抽奖数据
const lotteryData = {
  id: 20,
  title: "TGA投票抽奖",
  contentText: "TGA投票抽大奖",
  joinNum: 91666,
  prizes: [
    { id: 309, title: "华硕RTX 5070显卡", picUrl: "images/prize_5070.png", remainStock: 0, showStock: 1 },
    { id: 310, title: "微星主板B860M GAMING PLUS", picUrl: "images/prize_zhuban.png", remainStock: 0, showStock: 2 },
    { id: 311, title: "华硕ROG吹雪主板", picUrl: "images/prize_rog_zhuban.png", remainStock: 0, showStock: 5 },
    { id: 312, title: "ROG夜魔98HE键盘", picUrl: "images/prize_rog_jianpan.png", remainStock: 0, showStock: 5 },
    { id: 313, title: "星弛87磁轴键盘", picUrl: "images/prize_qicaihong_jianpan.png", remainStock: 0, showStock: 3 },
    { id: 316, title: "ROG龙鳞2ACE鼠标", picUrl: "images/prize_shubiao.png", remainStock: 0, showStock: 9 },
    { id: 317, title: "ROG破风耳机", picUrl: "images/prize_erji.png", remainStock: 0, showStock: 9 },
    { id: 318, title: "感谢参与", picUrl: "images/prize_xiexie.png", remainStock: null, showStock: null }
  ],
  luckyDogInfos: [
    { avatar: "images/avatar_default.jpg", userName: "干净的毛豆", prizeTitle: "ROG龙鳞2ACE鼠标", prizeUrl: "images/prize_shubiao.png" },
    { avatar: "images/avatar_default.jpg", userName: "栗子叶", prizeTitle: "ROG龙鳞2ACE鼠标", prizeUrl: "images/prize_shubiao.png" },
    { avatar: "images/avatar_default.jpg", userName: "傲娇的显示器", prizeTitle: "ROG龙鳞2ACE鼠标", prizeUrl: "images/prize_shubiao.png" },
    { avatar: "images/avatar_default.jpg", userName: "开心的牛爷爷", prizeTitle: "七彩虹键盘", prizeUrl: "images/prize_qicaihong_jianpan.png" },
    { avatar: "images/avatar_default.jpg", userName: "忧郁的胖虎", prizeTitle: "ROG破风耳机", prizeUrl: "images/prize_erji.png" },
    { avatar: "images/avatar_default.jpg", userName: "过时的火1", prizeTitle: "七彩虹键盘", prizeUrl: "images/prize_qicaihong_jianpan.png" },
    { avatar: "images/avatar_default.jpg", userName: "滑稽兽o", prizeTitle: "ROG破风耳机", prizeUrl: "images/prize_erji.png" },
    { avatar: "images/avatar_default.jpg", userName: "会撒娇的高山10", prizeTitle: "ROG龙鳞2ACE鼠标", prizeUrl: "images/prize_shubiao.png" },
    { avatar: "images/avatar_default.jpg", userName: "针不戳针不戳捏", prizeTitle: "七彩虹键盘", prizeUrl: "images/prize_qicaihong_jianpan.png" }
  ],
  taskInfos: [
    { id: 107, title: "每日投票1次", picUrl: "images/icon_vote.png", awardNum: 1, status: 0, taskType: 40 },
    { id: 108, title: "每日分享此活动给好友", picUrl: "images/icon_share.png", awardNum: 1, status: 0, taskType: 3 },
    { id: 109, title: "说说你对TGA提名的看法", picUrl: "images/icon_publish.png", awardNum: 5, status: 0, taskType: 6 },
    { id: 113, title: "购买商城任意游戏", picUrl: "images/icon_shopping.png", awardNum: 10, status: 0, taskType: 35 }
  ],
  chanceNum: 0
};

// ==================== 状态管理 ====================

let activeTab = 'vote';
let currentCategory = null;
let selectedGameIdLocal = null;
let joinNum = 91666;
let chanceNum = 3; // 模拟抽奖次数
let isAnimating = false;
let voteSubmitLock = false;

// ==================== 初始化 ====================

document.addEventListener('DOMContentLoaded', function() {
  // 初始化抽奖次数显示
  document.getElementById('chanceCount').textContent = chanceNum;
  
  initVoteList();
  initTaskList();
  initEventListeners();
  
  // 延迟初始化 Swiper，确保 DOM 已渲染
  setTimeout(initSwipers, 100);
});

function initVoteList() {
  const container = document.getElementById('voteList');
  container.innerHTML = tgaAwardsData.map(card => `
    <div class="tga-card" data-id="${card.id}">
      <div class="card-left">
        <img src="${card.pic}" alt="${card.name}" class="trophy" 
             onerror="this.src='images/award_default.png'">
      </div>
      <div class="card-right">
        <div class="sub-en">${card.enName}</div>
        <div class="sub-cn">${card.name}</div>
        <div class="sub-desc">${card.selectedGameName ? '投给了：' + card.selectedGameName : ''}</div>
      </div>
      <div class="card-action">
        <button class="vote-btn ${card.selectedGameId ? 'done' : ''}" data-id="${card.id}">
          ${card.selectedGameId ? '已投票' : '投票'}
        </button>
      </div>
    </div>
  `).join('');
  
  // 绑定投票按钮点击事件
  container.querySelectorAll('.vote-btn').forEach(btn => {
    btn.addEventListener('click', function(e) {
      const id = parseInt(this.dataset.id);
      const card = tgaAwardsData.find(c => c.id === id);
      if (card) openVote(card);
    });
  });
}

function initTaskList() {
  const container = document.getElementById('taskList');
  // 使用 .prize-num-block 内的 .col 结构
  container.innerHTML = lotteryData.taskInfos.map(task => `
    <div class="col">
      <div class="prize-img-area">
        <img src="${task.picUrl}" onerror="this.src='images/icon_vote.png'" />
        ${task.title}<span>+${task.awardNum}</span>
      </div>
      <div class="go-btn ${task.status === 2 ? 'complete-btn' : (task.status === 1 ? 'unreceived-btn' : '')}" data-taskid="${task.id}">
        ${task.status === 2 ? '已领取' : (task.status === 1 ? '领取' : '去完成')}
      </div>
    </div>
  `).join('');
  
  // 绑定任务按钮点击事件 - 弹出下载引导弹窗
  container.querySelectorAll('.go-btn').forEach(btn => {
    btn.addEventListener('click', function() {
      if (this.classList.contains('complete-btn') || this.classList.contains('unreceived-btn')) return;
      openDownloadDialog();
    });
  });
}

function initEventListeners() {
  // Tab切换
  document.querySelectorAll('.tab').forEach(tab => {
    tab.addEventListener('click', function() {
      const tabName = this.dataset.tab;
      if (tabName === activeTab) return;
      switchTab(tabName);
    });
  });
  
  // 规则按钮 - 滚动到规则区域
  document.getElementById('ruleBtn').addEventListener('click', function() {
    switchTab('lottery');
    setTimeout(() => {
      document.querySelector('.rule-content-area').scrollIntoView({ behavior: 'smooth' });
    }, 100);
  });
  
  // 投票弹层关闭
  document.getElementById('votePopClose').addEventListener('click', function() {
    closeVotePopup();
  });
  
  document.getElementById('votePopupOverlay').addEventListener('click', function() {
    closeVotePopup();
  });
  
  // 投票提交
  document.getElementById('voteSubmitBtn').addEventListener('click', function() {
    if (this.classList.contains('disabled')) return;
    submitVote();
  });
  
  // 底部按钮
  document.getElementById('bottomBtn').addEventListener('click', function() {
    const newTab = activeTab === 'vote' ? 'lottery' : 'vote';
    switchTab(newTab);
  });
  
  // 抽奖按钮
  document.getElementById('lotteryBtn').addEventListener('click', function() {
    doLottery();
  });
  
  // 中奖弹窗关闭
  document.getElementById('winCloseBtn').addEventListener('click', function() {
    document.getElementById('winOverlay').classList.remove('show');
  });

  document.getElementById('winOverlay').addEventListener('click', function(e) {
    if (e.target === this || e.target.classList.contains('wrapper')) {
      this.classList.remove('show');
    }
  });

  // 抽奖记录按钮 - 弹出下载引导弹窗
  document.getElementById('recordBtn').addEventListener('click', function() {
    openDownloadDialog();
  });

  // 收件地址按钮 - 弹出下载引导弹窗
  document.getElementById('addressBtn').addEventListener('click', function() {
    openDownloadDialog();
  });

  // 下载引导弹窗关闭
  document.getElementById('downloadCloseBtn').addEventListener('click', function() {
    document.getElementById('downloadOverlay').classList.remove('show');
  });

  document.getElementById('downloadOverlay').addEventListener('click', function(e) {
    if (e.target === this) {
      this.classList.remove('show');
    }
  });

  // 下载按钮点击事件
  document.getElementById('handle-download-btn').addEventListener('click', function() {
    goToApp();
  });

  // 分享按钮点击 - 弹出下载引导弹窗
  document.getElementById('shareBtn').addEventListener('click', function() {
    openDownloadDialog();
  });
}

// ==================== Swiper 初始化 ====================

function initSwipers() {
  // 初始化奖品轮播
  initBannerSwiper();
  
  // 初始化中奖滚动
  initNoticeSwiper();
}

// 按品牌分组排序（参考 Vue 组件）
function brandOf(title) {
  const t = String(title || '').trim().toUpperCase();
  if (!t) return '其他';
  if (t.startsWith('ROG')) return 'ROG';
  if (t.startsWith('七彩虹')) return '七彩虹';
  if (t.startsWith('华硕')) return '华硕';
  if (t.startsWith('微星')) return '微星';
  return '其他';
}

function initBannerSwiper() {
  const container = document.getElementById('prize-swiper-wrapper');
  if (!container) return;
  
  const list = lotteryData.prizes.slice();
  const groupsOrder = ['ROG', '七彩虹', '华硕', '微星', '其他'];
  const buckets = { ROG: [], 七彩虹: [], 华硕: [], 微星: [], 其他: [] };

  list.forEach(item => {
    if (item.title === '感谢参与') return; // 跳过感谢参与
    const key = brandOf(item.title);
    buckets[key].push(item);
  });
  
  // 按 sort 排序
  const bySort = (a, b) => (a.sort || 9999) - (b.sort || 9999);
  const sortedPrizes = [];
  groupsOrder.forEach(k => {
    sortedPrizes.push(...(buckets[k] || []).sort(bySort));
  });
  
  // 复制 slides 使 loop 模式正常工作（需要 slidesPerView * 2 + 2 个以上的 slides）
  // 7个奖品 * 4倍复制 = 28个slides，满足 loop 需求
  const slidesToRender = [...sortedPrizes, ...sortedPrizes, ...sortedPrizes, ...sortedPrizes];
  
  // 渲染轮播
  container.innerHTML = slidesToRender.map((item, index) => `
    <div class="swiper-slide">
      <div class="banner-item-img">
        <img src="${item.picUrl}" alt="${item.title}">
        <p class="prize-txt">${item.title}</p>
      </div>
    </div>
  `).join('');
  
  // 初始化 Swiper（参考 wukong 案例）
  if (typeof Swiper !== 'undefined') {
    // 销毁已存在的 Swiper 实例
    const existingSwiper = document.querySelector('#prize-swiper').swiper;
    if (existingSwiper) {
      existingSwiper.destroy(true, true);
    }
    
    new Swiper('#prize-swiper', {
      slidesPerView: 3.6,
      slidesPerGroup: 1,
      spaceBetween: 12,
      loop: true,
      initialSlide: 0,
      speed: 500,
      autoplay: {
        delay: 2000,
        disableOnInteraction: false
      }
    });
  }
}

function initNoticeSwiper() {
  const container = document.getElementById('notice-swiper-wrapper');
  if (!container) return;
  
  const winners = lotteryData.luckyDogInfos;
  if (!winners || winners.length === 0) return;
  
  // 复制中奖名单使 loop 正常工作（需要至少2个以上）
  const winnersToRender = [...winners, ...winners, ...winners];
  
  // 渲染中奖名单
  container.innerHTML = winnersToRender.map((w) => `
    <div class="swiper-slide notice-item">
      <span class="notice-name"> 恭喜${w.userName}获得</span>
      <span class="notice-prize-name">  ${w.prizeTitle}</span>
    </div>
  `).join('');
  
  // 初始化 Swiper 垂直滚动（参考 wukong 案例）
  if (typeof Swiper !== 'undefined') {
    // 销毁已存在的 Swiper 实例
    const existingSwiper = document.querySelector('#notice-swiper').swiper;
    if (existingSwiper) {
      existingSwiper.destroy(true, true);
    }
    
    new Swiper('#notice-swiper', {
      direction: 'vertical',
      loop: true,
      autoplay: {
        delay: 3000,
        disableOnInteraction: false
      },
      height: 40
    });
  }
}

// ==================== 功能函数 ====================

function switchTab(tabName) {
  activeTab = tabName;
  
  // 更新Tab样式
  document.querySelectorAll('.tab').forEach(tab => {
    tab.classList.toggle('active', tab.dataset.tab === tabName);
  });
  
  // 切换内容
  const voteList = document.getElementById('voteList');
  const lotterySection = document.getElementById('lotterySection');
  const bottomBtn = document.getElementById('bottomBtn');
  
  if (tabName === 'vote') {
    voteList.style.display = 'block';
    lotterySection.style.display = 'none';
    bottomBtn.textContent = '投完票去抽奖';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  } else {
    voteList.style.display = 'none';
    lotterySection.style.display = 'block';
    bottomBtn.textContent = '抽完奖去投票';
    window.scrollTo({ top: 0, behavior: 'smooth' });
    
    // 切换到抽奖 tab 后延迟重新初始化 Swiper，确保 DOM 已渲染
    setTimeout(initSwipers, 50);
  }
}

function openVote(card) {
  // 站外版本：模拟投票流程体验
  currentCategory = JSON.parse(JSON.stringify(card)); // 深拷贝避免修改原数据
  selectedGameIdLocal = currentCategory.selectedGameId || null;
  
  document.getElementById('votePopupTitle').textContent = card.name;
  
  const grid = document.getElementById('votePopGrid');
  grid.innerHTML = card.gameItems.map(g => `
    <div class="vote-pop-item ${selectedGameIdLocal == g.gameId ? 'selected' : ''}" data-gameid="${g.gameId}">
      <img src="${g.imageUrl}" class="vote-pop-img ${selectedGameIdLocal && selectedGameIdLocal != g.gameId ? 'dimmed' : ''}" 
           onerror="this.src='images/award_default.png'">
      <div class="vote-pop-name">${g.gameName}</div>
      ${card.selectedGameId == g.gameId ? '<div class="vote-pop-badge">已投</div>' : ''}
    </div>
  `).join('');
  
  // 绑定选择事件
  grid.querySelectorAll('.vote-pop-item').forEach(item => {
    item.addEventListener('click', function() {
      if (currentCategory.selectedGameId) return; // 已投票不可更改
      const gameId = this.dataset.gameid;
      selectGame(gameId);
    });
  });
  
  // 更新按钮状态
  const submitBtn = document.getElementById('voteSubmitBtn');
  if (currentCategory.selectedGameId) {
    submitBtn.classList.add('disabled');
    submitBtn.textContent = '已投票';
  } else {
    submitBtn.classList.remove('disabled');
    submitBtn.textContent = '投票';
  }
  
  // 显示遮罩并播放动画
  const overlay = document.getElementById('votePopupOverlay');
  const popup = document.getElementById('votePopup');
  overlay.style.display = 'block';
  popup.style.display = 'block';
  // 强制重绘以触发动画
  popup.offsetHeight;
  overlay.classList.add('animate-in');
  popup.classList.add('animate-in');
}

function selectGame(gameId) {
  selectedGameIdLocal = gameId;
  
  const grid = document.getElementById('votePopGrid');
  grid.querySelectorAll('.vote-pop-item').forEach(item => {
    const isSelected = item.dataset.gameid === gameId;
    item.classList.toggle('selected', isSelected);
    const img = item.querySelector('.vote-pop-img');
    img.classList.toggle('dimmed', !isSelected);
  });
  
  document.getElementById('voteSubmitBtn').classList.remove('disabled');
}

function submitVote() {
  if (!selectedGameIdLocal) {
    alert('请先选择游戏');
    return;
  }
  
  if (voteSubmitLock) {
    alert('操作太频繁，请稍候');
    return;
  }
  
  voteSubmitLock = true;
  
  // 模拟投票成功
  alert('投票成功！');
  
  // 更新本地数据
  const game = currentCategory.gameItems.find(g => g.gameId === selectedGameIdLocal);
  currentCategory.selectedGameId = selectedGameIdLocal;
  currentCategory.selectedGameName = game ? game.gameName : '';
  
  // 更新列表显示
  const card = document.querySelector(`.tga-card[data-id="${currentCategory.id}"]`);
  if (card) {
    card.querySelector('.vote-btn').classList.add('done');
    card.querySelector('.vote-btn').textContent = '已投票';
    card.querySelector('.sub-desc').textContent = '投给了：' + currentCategory.selectedGameName;
  }
  
  closeVotePopup();
  
  // 增加抽奖次数
  chanceNum++;
  document.getElementById('chanceCount').textContent = chanceNum;
  
  setTimeout(() => { voteSubmitLock = false; }, 1500);
}

function closeVotePopup() {
  const overlay = document.getElementById('votePopupOverlay');
  const popup = document.getElementById('votePopup');

  // 播放退出动画
  overlay.classList.remove('animate-in');
  popup.classList.remove('animate-in');
  overlay.classList.add('animate-out');
  popup.classList.add('animate-out');

  // 动画结束后隐藏
  setTimeout(() => {
    overlay.style.display = 'none';
    popup.style.display = 'none';
    overlay.classList.remove('animate-out');
    popup.classList.remove('animate-out');
    currentCategory = null;
    selectedGameIdLocal = null;
  }, 250);
}

// 打开下载引导弹窗
function openDownloadDialog() {
  document.getElementById('downloadOverlay').classList.add('show');
}

// 关闭下载引导弹窗
function closeDownloadDialog() {
  document.getElementById('downloadOverlay').classList.remove('show');
}

// ==================== 工具函数 ====================
const utils = {
  getPhoneType: () => {
    if (/(iPhone|iPad|iPod|ios)/i.test(navigator.userAgent)) return 2;
    if (/(Android)/i.test(navigator.userAgent)) return 1;
    return 0;
  },
  isWeixin: () => /micromessenger/i.test(navigator.userAgent.toLowerCase()),
  isPc: () => !/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
};

// 跳转 APP 逻辑
function goToApp() {
  if (utils.isPc()) {
    window.open("https://www.3dmgame.com/app.html");
    return;
  }

  const phoneType = utils.getPhoneType();
  const isWeixin = utils.isWeixin();

  if (phoneType === 1) { // Android
    if (isWeixin) {
      // 尝试使用应用宝跳转
      const urlArrage = window.location.href.split('?');
      let twoUrl = urlArrage[1] ? urlArrage[1] + '&type=2&isMustlogin=true' : 'type=2&isMustlogin=true';
      const urlencode = encodeURIComponent(`dm://dmgame:8888/from?url=${urlArrage[0]}&${twoUrl}`);
      window.location.href = `https://a.app.qq.com/o/simple.jsp?pkgname=com.ws3dm.game&android_schema=${urlencode}`;
    } else {
      const urlArrage = window.location.href.split('?');
      let twoUrl = urlArrage[1] ? urlArrage[1] + '&type=2&isMustlogin=true' : 'type=2&isMustlogin=true';
      window.location.href = `dm://dmgame:8888/from?url=${urlArrage[0]}&${twoUrl}`;
      setTimeout(() => {
        let hidden = document.hidden || document.webkitHidden;
        if (!hidden) {
            window.location.href = "https://www.3dmgame.com/app.html";
        }
      }, 1500);
    }
  } else if (phoneType === 2) { // iOS
    const url = window.location.href;
    let ulinkId = 'usr14020l7a1dkau';
    if (url.indexOf('h5.3dmgame.com') > -1) {
      ulinkId = 'usr1b693t194ch9r';
    }

    if (typeof ULink === 'undefined') {
        window.location.href = `https://www.3dmgame.com/news/app?type=2&isMustlogin=true&url=${url}`;
        return;
    }

    ULink([{
      id: ulinkId,
      data: {
        url: url
      },
      selector: "",
      auto: true,
      timeout: 5000,
      lazy: false,
      proxyOpenDownload: function (defaultAction, LinkInstance) {
        if (LinkInstance.solution.type === "scheme") {
          if (ULink.isWechat || ULink.isQQ) {
            defaultAction();
          } else {
            window.location.href = LinkInstance.solution.downloadUrl;
          }
        }
      }
    }]);
  }
}

function doLottery() {
  if (isAnimating) return;
  
  if (chanceNum <= 0) {
    alert('抽奖次数已用完，请先完成任务获取更多次数！');
    return;
  }
  
  isAnimating = true;
  chanceNum--;
  document.getElementById('chanceCount').textContent = chanceNum;
  
  // 九宫格奖品数据索引（与 HTML 中的 data-index 对应）
  // 布局: 0 1 2 / 3 [4] 5 / 6 7 8
  // 顺时针顺序: 0->1->2->5->8->7->6->3
  const prizeSort = [0, 1, 2, 5, 8, 7, 6, 3];
  
  // 抽奖状态管理
  const lotter = {
    currentRunCount: 0,
    speed: 50,          // 初始速度（毫秒）
    timerIns: null,
    prizeId: 0,
    targetPrizeIndex: 0
  };
  
  // 随机中奖位置（0-7，对应 prizeSort 中的索引）
  const targetPrizeIndex = Math.floor(Math.random() * 8);
  const targetIndex = prizeSort[targetPrizeIndex]; // 实际的 data-index 值
  
  // 总步数 = 固定圈数 * 8 + 到达目标的位置
  lotter.totalRunCount = 56 + targetPrizeIndex; // 约7圈 + 到达目标
  
  // 获取所有奖品格子
  const prizeItems = document.querySelectorAll('.prize-area .prize-item');
  
  // 高亮指定索引的格子
  function updateHighlight(currentPrizeIndex) {
    prizeItems.forEach(item => item.classList.remove('prize-item-active'));
    const targetDataIndex = prizeSort[currentPrizeIndex];
    prizeItems[targetDataIndex].classList.add('prize-item-active');
  }
  
  // 开始抽奖动画
  function startRunAnimation() {
    // 清除之前的定时器
    if (lotter.timerIns) {
      clearTimeout(lotter.timerIns);
      lotter.timerIns = null;
    }
    
    // 检查是否到达终点
    if (lotter.currentRunCount >= lotter.totalRunCount) {
      isAnimating = false;
      updateHighlight(targetPrizeIndex);
      showWinResult(targetIndex);
      return;
    }
    
    // 更新高亮
    const currentPrizeIndex = lotter.currentRunCount % 8;
    updateHighlight(currentPrizeIndex);
    
    // 减速逻辑：后半段开始逐步增加延迟（参考 horseyear）
    if (lotter.currentRunCount > Math.floor((lotter.totalRunCount * 2) / 3)) {
      // 速度 = 当前速度 + 当前步数/3，形成明显减速
      lotter.speed = lotter.speed + Math.floor(lotter.currentRunCount / 3);
    }
    
    lotter.currentRunCount++;
    lotter.timerIns = setTimeout(startRunAnimation, lotter.speed);
  }
  
  // 重置并开始动画
  lotter.currentRunCount = 0;
  lotter.speed = 50;
  startRunAnimation();
}

function showWinResult(index) {
  isAnimating = false;
  
  // 九宫格位置与奖品 id 的映射（与 HTML 中 data-index 对应）
  // 布局: 0 1 2 / 3 [4] 5 / 6 7 8
  const indexToPrizeId = {
    0: 309,  // 华硕RTX 5070显卡
    1: 310,  // 微星主板
    2: 311,  // 华硕ROG吹雪主板
    3: 312,  // ROG夜魔键盘
    5: 313,  // 星弛87磁轴键盘
    6: 316,  // ROG龙鳞2ACE鼠标
    7: 317,  // ROG破风耳机
    8: 318   // 感谢参与
  };
  
  // 根据停下来的格子位置获取奖品
  const prizeId = indexToPrizeId[index];
  const prize = lotteryData.prizes.find(p => p.id === prizeId) || lotteryData.prizes[7];
  
  // 判断是否中奖（id 不等于 318 感谢参与）
  const isWin = prize.id !== 318;
  
  document.getElementById('winPrizeImg').innerHTML = `<img src="${prize.picUrl}" alt="">`;
  
  // 获取弹窗元素
  const prizeTitleWin = document.getElementById('prizeTitleWin');
  const prizeTitleMiss = document.getElementById('prizeTitleMiss');
  const addressBtnArea = document.getElementById('addressBtnArea');
  const winPrizeTip = document.getElementById('winPrizeTip');
  const winPrizeName = document.getElementById('winPrizeName');
  
  if (isWin) {
    // 中奖时显示
    prizeTitleWin.style.display = 'flex';
    prizeTitleMiss.style.display = 'none';
    prizeTitleWin.querySelector('.prize-title-text').textContent = '恭喜获得';
    winPrizeName.textContent = prize.title;
    addressBtnArea.style.display = 'flex';
    winPrizeTip.style.display = 'block';
  } else {
    // 未中奖时显示 - 保持和中奖一样的布局结构，文字在图片下方
    prizeTitleWin.style.display = 'flex';
    prizeTitleMiss.style.display = 'none';
    prizeTitleWin.querySelector('.prize-title-text').textContent = '与大奖擦肩而过';
    winPrizeName.textContent = '下次好运加倍';
    addressBtnArea.style.display = 'none';
    winPrizeTip.style.display = 'none';
  }
  
  const winOverlay = document.getElementById('winOverlay');
  winOverlay.classList.add('show');
}
