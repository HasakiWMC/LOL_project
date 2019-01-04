const spell = {
    "type": "summoner",
    "version": "8.24.1",
    "data": {
        "SummonerBarrier": {
            "id": "SummonerBarrier",
            "name": "屏障",
            "description": "为你的英雄套上护盾，吸收115-455（取决于英雄等级）伤害，持续2秒。",
            "tooltip": "暂时为你的英雄套上持续2秒的护盾，抵挡{{ f1 }}伤害",
            "maxrank": 1,
            "cooldown": [180],
            "cooldownBurn": "180",
            "cost": [0],
            "costBurn": "0",
            "datavalues": {},
            "effect": [null, [95], [20], [0], [0], [0], [0], [0], [0], [0], [0]],
            "effectBurn": [null, "95", "20", "0", "0", "0", "0", "0", "0", "0", "0"],
            "vars": [],
            "key": "21",
            "summonerLevel": 4,
            "modes": ["ARAM", "CLASSIC", "TUTORIAL", "ODIN", "ASCENSION", "FIRSTBLOOD", "ASSASSINATE", "URF", "ARSR", "DOOMBOTSTEEMO", "STARGUARDIAN", "PROJECT", "ONEFORALL", "GAMEMODEX", "PRACTICETOOL"],
            "costType": "无消耗",
            "maxammo": "-1",
            "range": [1200],
            "rangeBurn": "1200",
            "image": {
                "full": "SummonerBarrier.png",
                "sprite": "spell0.png",
                "group": "spell",
                "x": 0,
                "y": 0,
                "w": 48,
                "h": 48
            },
            "resource": "无消耗"
        },
        "SummonerBoost": {
            "id": "SummonerBoost",
            "name": "净化",
            "description": "移除身上的所有限制效果（压制效果和击飞效果除外）和召唤师技能的减益效果，并且若在接下来的3秒里再次被施加限制效果时，新效果的持续时间会减少65%。",
            "tooltip": "移除你的英雄身上的所有限制效果（压制效果和击飞效果除外）和召唤师技能的减益效果，并且若在接下来的{{ f1 }}秒里再次被施加以上效果时，新效果的持续时间将减少65%。",
            "maxrank": 1,
            "cooldown": [210],
            "cooldownBurn": "210",
            "cost": [0],
            "costBurn": "0",
            "datavalues": {},
            "effect": [null, [0.65], [3], [0], [0], [0], [0], [0], [0], [0], [0]],
            "effectBurn": [null, "0.65", "3", "0", "0", "0", "0", "0", "0", "0", "0"],
            "vars": [{"link": "@text", "coeff": 3, "key": "f1"}],
            "key": "1",
            "summonerLevel": 9,
            "modes": ["CLASSIC", "ODIN", "TUTORIAL", "ARAM", "ASCENSION", "FIRSTBLOOD", "URF", "ARSR", "DOOMBOTSTEEMO", "PROJECT", "ONEFORALL", "GAMEMODEX", "PRACTICETOOL"],
            "costType": "无消耗",
            "maxammo": "-1",
            "range": [200],
            "rangeBurn": "200",
            "image": {
                "full": "SummonerBoost.png",
                "sprite": "spell0.png",
                "group": "spell",
                "x": 48,
                "y": 0,
                "w": 48,
                "h": 48
            },
            "resource": "无消耗"
        },
        "SummonerDarkStarChampSelect1": {
            "id": "SummonerDarkStarChampSelect1",
            "name": "已禁用召唤师技能",
            "description": "召唤师技能在这个模式下不可用。",
            "tooltip": "",
            "maxrank": 1,
            "cooldown": [0],
            "cooldownBurn": "0",
            "cost": [0],
            "costBurn": "0",
            "datavalues": {},
            "effect": [null, [0], [0], [0], [0], [0], [0], [0], [0], [0], [0]],
            "effectBurn": [null, "0", "0", "0", "0", "0", "0", "0", "0", "0", "0"],
            "vars": [],
            "key": "35",
            "summonerLevel": 1,
            "modes": ["DARKSTAR"],
            "costType": "",
            "maxammo": "-1",
            "range": [2500],
            "rangeBurn": "2500",
            "image": {
                "full": "SummonerDarkStarChampSelect1.png",
                "sprite": "spell0.png",
                "group": "spell",
                "x": 96,
                "y": 0,
                "w": 48,
                "h": 48
            }
        },
        "SummonerDarkStarChampSelect2": {
            "id": "SummonerDarkStarChampSelect2",
            "name": "已禁用召唤师技能",
            "description": "召唤师技能在这个模式下不可用。",
            "tooltip": "",
            "maxrank": 1,
            "cooldown": [0],
            "cooldownBurn": "0",
            "cost": [0],
            "costBurn": "0",
            "datavalues": {},
            "effect": [null, [0], [0], [0], [0], [0], [0], [0], [0], [0], [0]],
            "effectBurn": [null, "0", "0", "0", "0", "0", "0", "0", "0", "0", "0"],
            "vars": [],
            "key": "36",
            "summonerLevel": 1,
            "modes": ["DARKSTAR"],
            "costType": "",
            "maxammo": "-1",
            "range": [2500],
            "rangeBurn": "2500",
            "image": {
                "full": "SummonerDarkStarChampSelect2.png",
                "sprite": "spell0.png",
                "group": "spell",
                "x": 144,
                "y": 0,
                "w": 48,
                "h": 48
            }
        },
        "SummonerDot": {
            "id": "SummonerDot",
            "name": "引燃",
            "description": "引燃是对单体敌方目标施放的持续性伤害技能，在5秒的持续时间里造成80-505（取决于英雄等级）真实伤害，获得目标的视野，并减少目标所受的治疗和回复效果。",
            "tooltip": "引燃目标敌人，在5秒的持续时间里造成共<span class=\"colorFEFCFF\">{{ f1 }}</span>真实伤害，获得目标视野，并在持续期间为目标施加重伤效果。<br /><br /><rules>（重伤效果会使目标所受的治疗效果降低40%。这个视野不会暴露潜行的敌人。）</rules>",
            "maxrank": 1,
            "cooldown": [210],
            "cooldownBurn": "210",
            "cost": [0],
            "costBurn": "0",
            "datavalues": {},
            "effect": [null, [5], [11], [5], [100], [0], [0], [0], [0], [0], [0]],
            "effectBurn": [null, "5", "11", "5", "100", "0", "0", "0", "0", "0", "0"],
            "vars": [{
                "link": "@player.level",
                "coeff": [70, 90, 110, 130, 150, 170, 190, 210, 230, 250, 270, 290, 310, 330, 350, 370, 390, 410],
                "key": "f1"
            }],
            "key": "14",
            "summonerLevel": 9,
            "modes": ["CLASSIC", "ODIN", "TUTORIAL", "ARAM", "ASCENSION", "FIRSTBLOOD", "ASSASSINATE", "URF", "ARSR", "DOOMBOTSTEEMO", "ONEFORALL", "GAMEMODEX", "PRACTICETOOL"],
            "costType": "无消耗",
            "maxammo": "-1",
            "range": [600],
            "rangeBurn": "600",
            "image": {
                "full": "SummonerDot.png",
                "sprite": "spell0.png",
                "group": "spell",
                "x": 192,
                "y": 0,
                "w": 48,
                "h": 48
            },
            "resource": "无消耗"
        },
        "SummonerExhaust": {
            "id": "SummonerExhaust",
            "name": "虚弱",
            "description": "虚弱目标敌方英雄，降低目标英雄30%的移动速度，并使他们所造成的伤害减少40%，持续2.5秒。",
            "tooltip": "虚弱目标英雄，降低目标{{ f3 }}%的移动速度和攻击速度，并使目标造成的伤害减少{{ f2 }}%，持续2.5秒。",
            "maxrank": 1,
            "cooldown": [210],
            "cooldownBurn": "210",
            "cost": [0],
            "costBurn": "0",
            "datavalues": {},
            "effect": [null, [2.5], [40], [0], [0], [30], [0], [0], [0], [0], [0]],
            "effectBurn": [null, "2.5", "40", "0", "0", "30", "0", "0", "0", "0", "0"],
            "vars": [],
            "key": "3",
            "summonerLevel": 4,
            "modes": ["CLASSIC", "ODIN", "TUTORIAL", "ARAM", "ASCENSION", "FIRSTBLOOD", "URF", "ARSR", "DOOMBOTSTEEMO", "ONEFORALL", "GAMEMODEX", "PRACTICETOOL"],
            "costType": "无消耗",
            "maxammo": "-1",
            "range": [650],
            "rangeBurn": "650",
            "image": {
                "full": "SummonerExhaust.png",
                "sprite": "spell0.png",
                "group": "spell",
                "x": 240,
                "y": 0,
                "w": 48,
                "h": 48
            },
            "resource": "无消耗"
        },
        "SummonerFlash": {
            "id": "SummonerFlash",
            "name": "闪现",
            "description": "使英雄朝着你的指针所停的区域瞬间传送一小段距离。",
            "tooltip": "使英雄朝着你的指针所停的区域瞬间传送一小段距离。",
            "maxrank": 1,
            "cooldown": [300],
            "cooldownBurn": "300",
            "cost": [0],
            "costBurn": "0",
            "datavalues": {},
            "effect": [null, [400], [0], [0], [0], [0], [0], [0], [0], [0], [0]],
            "effectBurn": [null, "400", "0", "0", "0", "0", "0", "0", "0", "0", "0"],
            "vars": [],
            "key": "4",
            "summonerLevel": 7,
            "modes": ["CLASSIC", "ODIN", "TUTORIAL", "ARAM", "ASCENSION", "FIRSTBLOOD", "ASSASSINATE", "URF", "ARSR", "DOOMBOTSTEEMO", "STARGUARDIAN", "PROJECT", "SNOWURF", "ONEFORALL", "GAMEMODEX", "PRACTICETOOL"],
            "costType": "无消耗",
            "maxammo": "-1",
            "range": [425],
            "rangeBurn": "425",
            "image": {
                "full": "SummonerFlash.png",
                "sprite": "spell0.png",
                "group": "spell",
                "x": 288,
                "y": 0,
                "w": 48,
                "h": 48
            },
            "resource": "无消耗"
        },
        "SummonerHaste": {
            "id": "SummonerHaste",
            "name": "幽灵疾步",
            "description": "你的英雄获得移动速度加成并能在移动时无视单位的碰撞体积，持续10秒。在2秒的加速过程后，移动速度加成会增加至最大值28-45%（基于英雄等级）。",
            "tooltip": "你的英雄获得移动速度加成并能在移动时无视单位的碰撞体积，持续10秒。这个移动速度加成会在2秒里持续加速至最大值{{ f1 }}%。",
            "maxrank": 1,
            "cooldown": [180],
            "cooldownBurn": "180",
            "cost": [0],
            "costBurn": "0",
            "datavalues": {},
            "effect": [null, [27], [0], [2], [0], [0], [0], [0], [0], [0], [0]],
            "effectBurn": [null, "27", "0", "2", "0", "0", "0", "0", "0", "0", "0"],
            "vars": [{"link": "@text", "coeff": 27, "key": "f1"}],
            "key": "6",
            "summonerLevel": 1,
            "modes": ["CLASSIC", "ODIN", "TUTORIAL", "ARAM", "ASCENSION", "FIRSTBLOOD", "ASSASSINATE", "URF", "ARSR", "DOOMBOTSTEEMO", "STARGUARDIAN", "PROJECT", "ONEFORALL", "TUTORIAL_MODULE_1", "TUTORIAL_MODULE_2", "GAMEMODEX", "PRACTICETOOL"],
            "costType": "无消耗",
            "maxammo": "-1",
            "range": [200],
            "rangeBurn": "200",
            "image": {
                "full": "SummonerHaste.png",
                "sprite": "spell0.png",
                "group": "spell",
                "x": 336,
                "y": 0,
                "w": 48,
                "h": 48
            },
            "resource": "无消耗"
        },
        "SummonerHeal": {
            "id": "SummonerHeal",
            "name": "治疗术",
            "description": "为你和目标友军英雄回复95-345（取决于英雄等级）生命值，并为你和目标友军英雄提供30%移动速度加成，持续1秒。若目标近期已受到过其它治疗术的影响，则治疗术对目标产生的治疗效果减半。",
            "tooltip": "为你的英雄和目标友军英雄回复{{ f1 }}（取决于英雄等级）生命值，并提供30%移动速度加成，持续1秒。若目标近期已受到过其它治疗术的影响，则治疗术对目标产生的治疗效果减半。<br /><br /><span class=\"colorFFFF00\">如果这个技能无法找到目标，就会作用于范围内伤势最重的一位友军英雄。</span>",
            "maxrank": 1,
            "cooldown": [240],
            "cooldownBurn": "240",
            "cost": [0],
            "costBurn": "0",
            "datavalues": {},
            "effect": [null, [0.3], [75], [15], [0.5], [826], [0.5], [0], [0], [0], [0]],
            "effectBurn": [null, "0.3", "75", "15", "0.5", "826", "0.5", "0", "0", "0", "0"],
            "vars": [{
                "link": "@player.level",
                "coeff": [90, 105, 120, 135, 150, 165, 180, 195, 210, 225, 240, 255, 270, 285, 300, 315, 330, 345],
                "key": "f1"
            }],
            "key": "7",
            "summonerLevel": 1,
            "modes": ["CLASSIC", "ODIN", "TUTORIAL", "ARAM", "ASCENSION", "FIRSTBLOOD", "ASSASSINATE", "URF", "ARSR", "DOOMBOTSTEEMO", "STARGUARDIAN", "PROJECT", "ONEFORALL", "TUTORIAL_MODULE_1", "TUTORIAL_MODULE_2", "GAMEMODEX", "PRACTICETOOL"],
            "costType": "无消耗",
            "maxammo": "-1",
            "range": [850],
            "rangeBurn": "850",
            "image": {
                "full": "SummonerHeal.png",
                "sprite": "spell0.png",
                "group": "spell",
                "x": 384,
                "y": 0,
                "w": 48,
                "h": 48
            },
            "resource": "无消耗"
        },
        "SummonerMana": {
            "id": "SummonerMana",
            "name": "清晰术",
            "description": "为你的英雄回复50%的最大法力值。也会为周围的友军回复25%的最大法力值",
            "tooltip": "为你的英雄回复{{ f1 }}%的最大法力值，并为周围友军回复{{ f2 }}%最大法力值。",
            "maxrank": 1,
            "cooldown": [240],
            "cooldownBurn": "240",
            "cost": [0],
            "costBurn": "0",
            "datavalues": {},
            "effect": [null, [50], [25], [0], [0], [0], [0], [0], [0], [0], [0]],
            "effectBurn": [null, "50", "25", "0", "0", "0", "0", "0", "0", "0", "0"],
            "vars": [{
                "link": "@player.level",
                "coeff": [190, 220, 250, 280, 310, 340, 370, 400, 430, 460, 490, 520, 550, 580, 610, 640, 670, 700],
                "key": "f1"
            }, {
                "link": "@player.level",
                "coeff": [95, 110, 125, 140, 155, 170, 185, 200, 215, 230, 245, 260, 275, 290, 305, 320, 335, 350],
                "key": "f2"
            }],
            "key": "13",
            "summonerLevel": 6,
            "modes": ["ODIN", "ARAM", "ASCENSION", "FIRSTBLOOD"],
            "costType": "无消耗",
            "maxammo": "-1",
            "range": [600],
            "rangeBurn": "600",
            "image": {
                "full": "SummonerMana.png",
                "sprite": "spell0.png",
                "group": "spell",
                "x": 432,
                "y": 0,
                "w": 48,
                "h": 48
            },
            "resource": "无消耗"
        },
        "SummonerOdysseyFlash": {
            "id": "SummonerOdysseyFlash",
            "name": "折跃",
            "description": "冲破时空，在你快速移动至一个位置的同时，暂时变为不可被选取和免疫伤害状态。",
            "tooltip": "暂时变为<attention>不可被选取</attention>和<attention>免疫伤害</attention>状态 ，并冲向一个位置。<br /><br /><rules>请让你的手脚一直呆在虫洞里。</rules>",
            "maxrank": 1,
            "cooldown": [0.5],
            "cooldownBurn": "0.5",
            "cost": [0],
            "costBurn": "0",
            "datavalues": {},
            "effect": [null, [1000], [0], [0], [0], [0], [0], [0], [0], [0], [0]],
            "effectBurn": [null, "1000", "0", "0", "0", "0", "0", "0", "0", "0", "0"],
            "vars": [],
            "key": "52",
            "summonerLevel": 1,
            "modes": ["ODYSSEY"],
            "costType": "无消耗",
            "maxammo": "3",
            "range": [825],
            "rangeBurn": "825",
            "image": {
                "full": "SummonerOdysseyFlash.png",
                "sprite": "spell0.png",
                "group": "spell",
                "x": 0,
                "y": 48,
                "w": 48,
                "h": 48
            },
            "resource": "无消耗"
        },
        "SummonerOdysseyGhost": {
            "id": "SummonerOdysseyGhost",
            "name": "幽灵疾步",
            "description": "你的英雄获得移动速度加成并能在移动时无视单位的碰撞体积，持续10秒。在2秒的加速过程后，移动速度加成会增加至最大值28-45%（基于英雄等级）。",
            "tooltip": "你的英雄获得移动速度加成并能在移动时无视单位的碰撞体积，持续10秒。这个移动速度加成会在2秒里持续加速至最大值{{ f1 }}%。",
            "maxrank": 1,
            "cooldown": [120],
            "cooldownBurn": "120",
            "cost": [0],
            "costBurn": "0",
            "datavalues": {},
            "effect": [null, [40], [0], [2], [0], [0], [0], [0], [0], [0], [0]],
            "effectBurn": [null, "40", "0", "2", "0", "0", "0", "0", "0", "0", "0"],
            "vars": [],
            "key": "51",
            "summonerLevel": 1,
            "modes": [],
            "costType": "无消耗",
            "maxammo": "-1",
            "range": [200],
            "rangeBurn": "200",
            "image": {
                "full": "SummonerOdysseyGhost.png",
                "sprite": "spell0.png",
                "group": "spell",
                "x": 48,
                "y": 48,
                "w": 48,
                "h": 48
            },
            "resource": "无消耗"
        },
        "SummonerOdysseyRevive": {
            "id": "SummonerOdysseyRevive",
            "name": "复苏",
            "description": "待在一名倒下的友军身边2秒，以将其复活。提前离开该区域不会消耗你的冷却时间。 ",
            "tooltip": "<keywordWard>复活</keywordWard>一名倒下的机组成员，方法是待在其身边<attention>2</attention>秒。<br /><br /><rules>提前离开该区域不会消耗你的冷却时间。</rules>",
            "maxrank": 1,
            "cooldown": [100],
            "cooldownBurn": "100",
            "cost": [0],
            "costBurn": "0",
            "datavalues": {},
            "effect": [null, [1], [2], [0], [0], [0], [0], [0], [0], [0], [0]],
            "effectBurn": [null, "1", "2", "0", "0", "0", "0", "0", "0", "0", "0"],
            "vars": [],
            "key": "50",
            "summonerLevel": 1,
            "modes": ["ODYSSEY"],
            "costType": "无消耗",
            "maxammo": "-1",
            "range": [350],
            "rangeBurn": "350",
            "image": {
                "full": "SummonerOdysseyRevive.png",
                "sprite": "spell0.png",
                "group": "spell",
                "x": 96,
                "y": 48,
                "w": 48,
                "h": 48
            },
            "resource": "无消耗"
        },
        "SummonerPoroRecall": {
            "id": "SummonerPoroRecall",
            "name": "护驾！",
            "description": "快速位移到魄罗之王旁边。",
            "tooltip": "<span class=\"colorFFE076\">被动：</span>用魄罗命中一个敌方英雄，会为你的队伍提供一层魄罗印记。当魄罗印记达到10层时，你的队伍就可以召唤出魄罗之王来与你们并肩作战。在魄罗之王处于活跃状态时，双方队伍都无法获得魄罗印记。<br /><br /><span class=\"colorFFE076\">主动：</span>快速冲刺到魄罗之王的身旁。只能在己方召唤了魄罗之王时施放。 <br /><br /><i><span class=\"colorFDD017\">“魄罗们才是扣人心弦的焦点。而你们只是抱大腿的。”</span></i>",
            "maxrank": 1,
            "cooldown": [10],
            "cooldownBurn": "10",
            "cost": [0],
            "costBurn": "0",
            "datavalues": {},
            "effect": [null, [3000], [0], [0], [0], [0], [0], [0], [0], [0], [0]],
            "effectBurn": [null, "3000", "0", "0", "0", "0", "0", "0", "0", "0", "0"],
            "vars": [],
            "key": "30",
            "summonerLevel": 1,
            "modes": ["KINGPORO"],
            "costType": "无消耗",
            "maxammo": "-1",
            "range": [200],
            "rangeBurn": "200",
            "image": {
                "full": "SummonerPoroRecall.png",
                "sprite": "spell0.png",
                "group": "spell",
                "x": 144,
                "y": 48,
                "w": 48,
                "h": 48
            },
            "resource": "无消耗"
        },
        "SummonerPoroThrow": {
            "id": "SummonerPoroThrow",
            "name": "魄罗投掷",
            "description": "把一个魄罗投向你的敌人。如果它命中了一名敌人，那么你接下来就可以快速位移到被命中的敌人旁边。",
            "tooltip": "将一个魄罗投向远处，对命中的第一个敌方单位造成{{ f2 }}真实伤害，并提供目标的<span class=\"coloree91d7\">真实视野</span>。<br /><br />如果这个技能命中了一个敌人，那么在接下来的3秒里可以再次施放此技能，来冲到被命中的目标旁边，多造成{{ f2 }}真实伤害，并缩短下一个【魄罗投掷】{{ e4 }}秒冷却时间。<br /><br />魄罗们不会被法术护盾或各种墙体所格挡，因为它们是萌萌哒小动物，而不是技能！<br /><br /><i><span class=\"colorFDD017\">“魄罗们是符文大陆空气动力学的一个科研模型。”</span></i>",
            "maxrank": 1,
            "cooldown": [20],
            "cooldownBurn": "20",
            "cost": [0],
            "costBurn": "0",
            "datavalues": {},
            "effect": [null, [20], [10], [3], [5], [0], [0], [0], [0], [0], [0]],
            "effectBurn": [null, "20", "10", "3", "5", "0", "0", "0", "0", "0", "0"],
            "vars": [],
            "key": "31",
            "summonerLevel": 1,
            "modes": ["KINGPORO"],
            "costType": "无消耗",
            "maxammo": "-1",
            "range": [2500],
            "rangeBurn": "2500",
            "image": {
                "full": "SummonerPoroThrow.png",
                "sprite": "spell0.png",
                "group": "spell",
                "x": 192,
                "y": 48,
                "w": 48,
                "h": 48
            },
            "resource": "无消耗"
        },
        "SummonerSiegeChampSelect1": {
            "id": "SummonerSiegeChampSelect1",
            "name": "枢纽攻防战：围城武器栏",
            "description": "在枢纽攻防战中，召唤师技能会被围城武器栏所代替。花费水晶碎片在商店中购买一次性使用的围城武器，然后用你的召唤师技能热键来激活它们！",
            "tooltip": "",
            "maxrank": 1,
            "cooldown": [0],
            "cooldownBurn": "0",
            "cost": [0],
            "costBurn": "0",
            "datavalues": {},
            "effect": [null, [0], [0], [0], [0], [0], [0], [0], [0], [0], [0]],
            "effectBurn": [null, "0", "0", "0", "0", "0", "0", "0", "0", "0", "0"],
            "vars": [],
            "key": "33",
            "summonerLevel": 1,
            "modes": ["SIEGE"],
            "costType": "",
            "maxammo": "-1",
            "range": [2500],
            "rangeBurn": "2500",
            "image": {
                "full": "SummonerSiegeChampSelect1.png",
                "sprite": "spell0.png",
                "group": "spell",
                "x": 240,
                "y": 48,
                "w": 48,
                "h": 48
            }
        },
        "SummonerSiegeChampSelect2": {
            "id": "SummonerSiegeChampSelect2",
            "name": "枢纽攻防战：围城武器栏",
            "description": "在枢纽攻防战中，召唤师技能会被围城武器栏所代替。花费水晶碎片在商店中购买一次性使用的围城武器，然后用你的召唤师技能热键来激活它们！",
            "tooltip": "",
            "maxrank": 1,
            "cooldown": [0],
            "cooldownBurn": "0",
            "cost": [0],
            "costBurn": "0",
            "datavalues": {},
            "effect": [null, [0], [0], [0], [0], [0], [0], [0], [0], [0], [0]],
            "effectBurn": [null, "0", "0", "0", "0", "0", "0", "0", "0", "0", "0"],
            "vars": [],
            "key": "34",
            "summonerLevel": 1,
            "modes": ["SIEGE"],
            "costType": "",
            "maxammo": "-1",
            "range": [2500],
            "rangeBurn": "2500",
            "image": {
                "full": "SummonerSiegeChampSelect2.png",
                "sprite": "spell0.png",
                "group": "spell",
                "x": 288,
                "y": 48,
                "w": 48,
                "h": 48
            }
        },
        "SummonerSmite": {
            "id": "SummonerSmite",
            "name": "惩戒",
            "description": "对目标史诗野怪、大型野怪、中型野怪或敌方小兵造成390-1000（取决于英雄等级）真实伤害。在用在野怪身上时，回复一部分最大生命值。",
            "tooltip": "对目标史诗野怪、大型野怪、中型野怪或敌方小兵造成<span class=\"colorFEFCFF\">{{ f1 }}</span>点真实伤害。对野怪时，额外回复<span class=\"colorFFFFFF\">{{ f6 }}</span><span class=\"colorFF6666\">(+{{ f7 }})</span>生命值。<br /><br />【惩戒】每{{ ammorechargetime }}秒获得一层充能，最多可保持2层充能。",
            "maxrank": 1,
            "cooldown": [15],
            "cooldownBurn": "15",
            "cost": [0],
            "costBurn": "0",
            "datavalues": {},
            "effect": [null, [15], [0], [0], [0], [0], [0], [0], [0], [0], [0]],
            "effectBurn": [null, "15", "0", "0", "0", "0", "0", "0", "0", "0", "0"],
            "vars": [{
                "link": "@player.level",
                "coeff": [390, 410, 430, 450, 480, 510, 540, 570, 600, 640, 680, 720, 760, 800, 850, 900, 950, 1000],
                "key": "f1"
            }],
            "key": "11",
            "summonerLevel": 9,
            "modes": ["CLASSIC", "TUTORIAL", "FIRSTBLOOD", "URF", "ARSR", "DOOMBOTSTEEMO", "ONEFORALL", "PRACTICETOOL", "GAMEMODEX"],
            "costType": "无消耗",
            "maxammo": "2",
            "range": [500],
            "rangeBurn": "500",
            "image": {
                "full": "SummonerSmite.png",
                "sprite": "spell0.png",
                "group": "spell",
                "x": 336,
                "y": 48,
                "w": 48,
                "h": 48
            },
            "resource": "无消耗"
        },
        "SummonerSnowURFSnowball_Mark": {
            "id": "SummonerSnowURFSnowball_Mark",
            "name": "终极标记",
            "description": "它是雪球！它是魄罗！它是……呃……众中之一。",
            "tooltip": "扔出一个雪球，雪球最多可飞行1个真远单位那么远，并对命中的第一个敌方单位造成{{ f1 }}真实伤害并提供该目标的<span class=\"coloree91d7\">真实视野</span>。<br /><br />如果你的【终极标记】命中了一个敌人，那么这个技能可以在{{ e3 }}秒里重新施放以冲刺到被标记的单位旁，造成额外的{{ f1 }}真实伤害并让你的气势提升一百万个百分点。<br /><br />如果有魄罗跟随你，那么你可以扔出魄罗而不是雪球，因为我们是坏人。",
            "maxrank": 1,
            "cooldown": [80],
            "cooldownBurn": "80",
            "cost": [0],
            "costBurn": "0",
            "datavalues": {},
            "effect": [null, [10], [5], [3], [0.25], [0], [0], [0], [0], [0], [0]],
            "effectBurn": [null, "10", "5", "3", "0.25", "0", "0", "0", "0", "0", "0"],
            "vars": [],
            "key": "39",
            "summonerLevel": 6,
            "modes": ["SNOWURF"],
            "costType": "无消耗",
            "maxammo": "-1",
            "range": [8000],
            "rangeBurn": "8000",
            "image": {
                "full": "SummonerSnowURFSnowball_Mark.png",
                "sprite": "spell0.png",
                "group": "spell",
                "x": 384,
                "y": 48,
                "w": 48,
                "h": 48
            },
            "resource": "无消耗"
        },
        "SummonerSnowball": {
            "id": "SummonerSnowball",
            "name": "标记",
            "description": "沿直线扔出一个雪球。如果雪球命中了一个敌人，那么这个敌人会被【标记】，提供真实视野，并且你的英雄接下来可以快速突进到被【标记】的目标旁边。",
            "tooltip": "扔出一个长程雪球，对命中的第一个敌方单位造成{{ f1 }}真实伤害并提供目标的<span class=\"coloree91d7\">真实视野</span>。如果雪球命中了一个敌人，那么这个技能可以在{{ e3 }}秒里再次施放，用来让英雄【冲刺】到目标单位旁边，同时造成额外的{{ f1 }}真实伤害。在【冲刺】到目标旁边的同时，【标记】的冷却时间会减少{{ e4 }}%。<br /><br /><span class=\"colorFFFF00\">【标记】的飞行道具不会被法术护盾或者飞行道具拦截技（亚索的【W风之障壁】、布隆的【E坚不可摧】）所阻挡。</span>",
            "maxrank": 1,
            "cooldown": [80],
            "cooldownBurn": "80",
            "cost": [0],
            "costBurn": "0",
            "datavalues": {},
            "effect": [null, [10], [5], [3], [25], [0], [0], [0], [0], [0], [0]],
            "effectBurn": [null, "10", "5", "3", "25", "0", "0", "0", "0", "0", "0"],
            "vars": [],
            "key": "32",
            "summonerLevel": 6,
            "modes": ["ARAM", "FIRSTBLOOD"],
            "costType": "无消耗",
            "maxammo": "-1",
            "range": [1600],
            "rangeBurn": "1600",
            "image": {
                "full": "SummonerSnowball.png",
                "sprite": "spell0.png",
                "group": "spell",
                "x": 432,
                "y": 48,
                "w": 48,
                "h": 48
            },
            "resource": "无消耗"
        },
        "SummonerTeleport": {
            "id": "SummonerTeleport",
            "name": "传送",
            "description": "在引导4秒后，将英雄传送到友方建筑物、小兵或守卫旁边。",
            "tooltip": "在吟唱{{ f1 }}秒后，将英雄传送到友方建筑物、小兵或守卫旁边。",
            "maxrank": 1,
            "cooldown": [360],
            "cooldownBurn": "360",
            "cost": [0],
            "costBurn": "0",
            "datavalues": {},
            "effect": [null, [4], [240], [0], [0], [0], [0], [0], [0], [0], [0]],
            "effectBurn": [null, "4", "240", "0", "0", "0", "0", "0", "0", "0", "0"],
            "vars": [{"link": "@text", "coeff": 4, "key": "f1"}],
            "key": "12",
            "summonerLevel": 7,
            "modes": ["CLASSIC", "TUTORIAL", "ASSASSINATE", "URF", "ARSR", "DOOMBOTSTEEMO", "ONEFORALL", "PRACTICETOOL", "GAMEMODEX"],
            "costType": "无消耗",
            "maxammo": "-1",
            "range": [25000],
            "rangeBurn": "25000",
            "image": {
                "full": "SummonerTeleport.png",
                "sprite": "spell0.png",
                "group": "spell",
                "x": 0,
                "y": 96,
                "w": 48,
                "h": 48
            },
            "resource": "无消耗"
        }
    }
};

module.exports = {
    spell
};