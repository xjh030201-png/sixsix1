const ingredients = [
  "鸡蛋", "番茄", "鸡胸肉", "鸡腿肉", "猪里脊", "牛肉", "牛腩", "羊肉", "五花肉", "排骨", "肉末", "虾仁", "大虾", "鲈鱼", "黄鱼", "带鱼", "鳕鱼", "三文鱼", "鱿鱼", "花甲", "蛤蜊", "扇贝", "生蚝", "螃蟹", "豆腐", "腐竹", "牛奶", "酸奶", "奶酪", "西兰花", "菠菜", "生菜", "白菜", "娃娃菜", "菜心", "空心菜", "油麦菜", "芹菜", "韭菜", "酸菜", "丝瓜", "苦瓜", "秋葵", "荷兰豆", "冬瓜", "黄瓜", "茄子", "青椒", "红椒", "土豆", "红薯", "胡萝卜", "白萝卜", "洋葱", "玉米", "南瓜", "莲藕", "春笋", "山药", "芋头", "香菇", "口蘑", "木耳", "紫菜", "海带", "豌豆", "毛豆", "花生", "米饭", "面条", "意面", "粉丝", "年糕", "馒头", "面粉", "葱", "姜", "蒜"
];

const r = (name, emoji, cuisine, tags, minutes, kcal, protein, dishIngredients, steps) => ({ name, emoji, cuisine, tags: tags.split("、"), minutes, kcal, protein, ingredients: dishIngredients.split("|"), steps: steps.split("|") });
const recipes = [
  r("番茄滑蛋", "🍅", "家常", "鸡蛋、番茄", 12, 220, 15, "番茄 2 个|鸡蛋 3 个|葱 1 根|盐 2g|食用油 15ml", "番茄洗净去蒂，切成 1.5 厘米小块；鸡蛋加 1g 盐和 1 汤匙清水，顺着一个方向打散。|锅烧热后下 10ml 油，倒入蛋液，用锅铲从外往内推至半凝固，立刻盛出避免炒老。|原锅补少量油，下番茄中火炒 2 分钟，用锅铲轻压出汁；觉得偏酸可加半勺糖。|倒回鸡蛋快速翻炒 20 秒，让蛋块裹上番茄汁，撒葱花和余下的盐后关火装盘。"),
  r("黑椒鸡胸肉", "🍗", "轻食", "鸡胸肉、洋葱", 18, 286, 36, "鸡胸肉 250g|洋葱 1/4 个|黑胡椒 2g|生抽 10ml|淀粉 5g|蒜 2 瓣", "鸡胸肉逆纹切成 0.8 厘米厚片，用生抽、黑胡椒、淀粉和蒜末抓匀，静置 8 分钟。|平底锅中火预热，刷薄薄一层油；放入鸡肉后不要翻面，煎约 2 分钟至底部上色。|翻面后加入洋葱丝和 2 汤匙水，盖盖焖 3 分钟，让鸡肉中心熟透而不柴。|开盖收干水分，现磨少许黑胡椒；切开最厚的一块确认没有粉色肉汁后盛盘。"),
  r("蒜蓉西兰花", "🥦", "粤式", "西兰花、蒜", 10, 96, 5, "西兰花 1 颗|蒜 4 瓣|蚝油 10ml|盐 2g|食用油 10ml", "西兰花切小朵，用淡盐水浸泡 5 分钟后冲净；梗部削去外皮切薄片。|锅内水沸后加 1g 盐和几滴油，放西兰花焯 50 秒，捞出沥干。|热锅下油，转小火把蒜末炒出香味但不要焦黄；倒入西兰花转大火翻匀。|沿锅边淋蚝油和 2 汤匙热水，快速翻炒 40 秒，尝味后补盐即可。"),
  r("土豆烧豆腐", "🥔", "家常", "土豆、豆腐", 25, 310, 17, "老豆腐 1 块|土豆 1 个|葱 1 根|蒜 2 瓣|生抽 15ml|老抽 3ml", "土豆去皮切 1.5 厘米小块，豆腐切同等大小后用厨房纸吸干水分。|锅中放油，将豆腐各面煎至浅金色盛出；土豆入锅翻炒 2 分钟，边缘微透明即可。|下葱白和蒜末炒香，加入生抽、老抽和约 250ml 热水，水量没过土豆一半。|煮开后放回豆腐，盖盖中小火焖 10 分钟；土豆能轻松插入时开盖收汁，撒葱绿。"),
  r("青椒牛肉丝", "🫑", "川味", "牛肉、青椒", 16, 330, 30, "牛里脊 200g|青椒 2 个|姜 2 片|生抽 10ml|淀粉 5g|食用油 15ml", "牛肉逆纹切丝，加入生抽、淀粉和 1 汤匙水抓至吸收，最后拌半勺油锁住水分。|青椒去籽切丝；锅烧到微微冒烟后下油，牛肉铺开滑炒 45 秒，刚变色就盛出。|原锅下姜丝和青椒，大火快速翻炒约 1 分钟，青椒表面起皱但仍保持脆感。|倒回牛肉，沿锅边淋半勺生抽，翻炒 20 秒立即出锅，避免牛肉久炒变老。"),
  r("鲜虾豆腐羹", "🦐", "粤式", "虾仁、豆腐、鸡蛋", 15, 240, 26, "虾仁 150g|嫩豆腐 1 盒|鸡蛋 1 个|淀粉 10g|葱花少许|白胡椒少许", "虾仁擦干，加一小撮盐和白胡椒抓匀；嫩豆腐切 1.5 厘米方块，蛋液搅匀备用。|锅中加 500ml 清水烧开，先下虾仁煮至变红，再轻轻放入豆腐，转小火。|淀粉加 3 汤匙凉水调开，沿锅边缓慢倒入并轻推，汤汁变微稠时调入盐。|保持小火画圈淋入蛋液，等蛋花浮起后关火，撒葱花和少许香油。"),
  r("香菇菠菜面", "🍜", "家常", "香菇、菠菜、面条", 15, 390, 14, "鲜面条 200g|香菇 4 朵|菠菜 1 把|鸡蛋 1 个|葱花少许|生抽 10ml", "香菇去蒂切片，菠菜洗净；另起小碗调入生抽、盐和一点香油作为底味。|锅中烧开约 800ml 水，下香菇煮 2 分钟让鲜味释出，再放入面条轻轻拨散。|面条煮至八成熟时加入菠菜；喜欢溏心蛋可此时打入鸡蛋，转小火煮 2 分钟。|将面和汤倒入调味碗，拌匀后撒葱花；面条中心无硬芯即为熟。"),
  r("红烧茄子", "🍆", "家常", "茄子、青椒、蒜", 22, 260, 7, "茄子 2 根|青椒 1 个|蒜 4 瓣|生抽 15ml|蚝油 10ml|淀粉 5g", "茄子滚刀切块后撒少许盐静置 8 分钟，挤掉表面水分；青椒切块，蒜切末。|茄子拌半勺油，空气炸锅 190℃ 烤 12 分钟；没有空气炸锅可用少油煎软。|小碗调入生抽、蚝油、淀粉和 80ml 水；锅中爆香一半蒜末，放青椒炒 40 秒。|加入茄子和调味汁，中火翻至酱汁包裹；收汁后放剩余蒜末，翻两下即出锅。"),
  r("鱼香肉丝", "🥢", "川味", "猪里脊、木耳、胡萝卜、青椒", 20, 360, 28, "猪里脊 180g|木耳 40g|胡萝卜 1/2 根|青椒 1 个|郫县豆瓣 10g|醋 10ml", "里脊切细丝，用盐、淀粉和 1 汤匙水抓匀；木耳泡发切丝，胡萝卜和青椒切细丝。|调鱼香汁：生抽、醋、糖各约 10ml，加淀粉 5g 和清水 60ml 搅匀。|热锅下油把肉丝滑炒至刚变白盛出；原锅下豆瓣酱和蒜末，小火炒出红油。|下三丝大火炒 1 分钟，倒回肉丝和鱼香汁，快速翻炒至浓亮挂汁即可。"),
  r("宫保鸡丁", "🥜", "川味", "鸡腿肉、花生、黄瓜", 22, 410, 29, "去骨鸡腿肉 250g|黄瓜 1 根|熟花生 40g|干辣椒 5 个|生抽 15ml|陈醋 10ml", "鸡腿肉切 1.5 厘米小丁，用生抽、淀粉和少许油腌 10 分钟；黄瓜切同样大小的丁。|调汁：生抽、陈醋、糖各约 10ml，加淀粉 5g 和清水 50ml，搅到没有颗粒。|热锅多一点油，鸡丁滑炒至表面金黄后盛出；小火下干辣椒和花椒，闻到香味立即下一步。|倒黄瓜丁炒 30 秒，回锅鸡丁和调汁，大火收至亮汁，最后拌入花生保持酥脆。"),
  r("清蒸鲈鱼", "🐟", "粤式", "鲈鱼、葱、姜", 20, 180, 29, "鲈鱼 1 条约 500g|姜 15g|葱 2 根|蒸鱼豉油 20ml|食用油 15ml", "鲈鱼处理干净后，在最厚处划两刀；鱼身内外抹少许盐，鱼腹塞两片姜，静置 5 分钟。|蒸锅水必须完全沸腾后再放鱼，盘底架两根葱段让热气流通，盖盖大火蒸 8 分钟。|关火后不要马上开盖，焖 2 分钟；用筷子能轻松插入鱼背最厚处说明已熟。|倒掉盘中腥水，铺姜丝和葱丝，淋蒸鱼豉油；另烧热油浇在葱姜上激出香味。"),
  r("咖喱牛肉土豆", "🍛", "家常", "牛肉、土豆、胡萝卜、洋葱", 45, 450, 31, "牛肉 300g|土豆 2 个|胡萝卜 1 根|洋葱 1 个|咖喱块 2 块|米饭适量", "牛肉切 2 厘米块，冷水下锅，水沸后煮 2 分钟，捞出用温水洗去浮沫。|土豆和胡萝卜切滚刀块，洋葱切块；锅中少油先炒洋葱至透明，再放牛肉翻炒 2 分钟。|加热水没过食材，小火炖 25 分钟；放入土豆和胡萝卜再煮 12 分钟至能轻松插入。|关小火放入咖喱块搅匀，重新小火煮 3 分钟至浓稠；盛在热米饭旁即可。"),
  r("白菜炖粉条", "🥬", "家常", "白菜、五花肉、粉丝", 28, 340, 18, "白菜 300g|五花肉 100g|粉丝 1 把|葱姜少许|生抽 15ml|老抽 3ml", "粉丝用温水泡软；白菜帮和叶分开切，五花肉切薄片，葱姜切末。|锅内不放油，下五花肉中小火煸出油脂，加入葱姜和白菜帮炒至微软。|倒入生抽、老抽和 300ml 热水，煮开后放泡好的粉丝，盖盖小火炖 8 分钟。|加入白菜叶再炖 2 分钟，粉丝吸足汤汁后尝味补盐，保留少量汤汁更好吃。"),
  r("虾仁炒饭", "🍚", "家常", "虾仁、鸡蛋、米饭、胡萝卜、豌豆", 15, 470, 24, "隔夜米饭 2 碗|虾仁 120g|鸡蛋 2 个|胡萝卜 1/3 根|豌豆 50g|葱花少许", "米饭提前用手捏散；虾仁擦干，胡萝卜切小丁，豌豆焯水 1 分钟，蛋液打散。|热锅下油，先把虾仁炒至变红盛出；倒入蛋液炒成小碎块，盛在一旁。|锅中补少许油，胡萝卜丁炒 1 分钟，加入米饭用锅铲压散并不断翻炒 2 分钟。|回锅虾仁、鸡蛋和豌豆，沿锅边淋生抽，翻匀后撒葱花；饭粒干爽分明即可。"),
  r("奶香玉米浓汤", "🌽", "轻食", "玉米、牛奶、土豆", 25, 230, 9, "甜玉米 2 根|牛奶 250ml|土豆 1/2 个|洋葱 1/4 个|黄油 10g|盐少许", "玉米剥粒，土豆和洋葱切小丁；留少量完整玉米粒最后装饰。|小锅融化黄油，放洋葱炒到透明，再下土豆和玉米粒翻炒 2 分钟。|加 300ml 水煮 12 分钟至土豆绵软，用料理机打成细腻浓汤；没有料理机可压碎土豆。|倒回锅中加入牛奶，小火加热到冒热气即可，不要沸腾；用盐和黑胡椒调味。"),
  r("蘑菇奶油意面", "🍝", "轻食", "意面、口蘑、牛奶、奶酪", 22, 520, 20, "意面 180g|口蘑 200g|牛奶 200ml|奶酪碎 30g|蒜 2 瓣|黑胡椒少许", "锅中加足量水和一小勺盐，水沸后放意面，按包装时间少煮 1 分钟；保留半碗面汤。|口蘑擦净切片，蒜切末；平底锅下少许油，先炒香蒜末，再把口蘑煎至出水后收干。|倒入牛奶和奶酪碎，小火搅拌至奶酪融化；酱汁偏稠时加 2 汤匙面汤调开。|把沥干的意面倒进酱汁，翻拌 1 分钟让每根面挂汁，撒黑胡椒后立即食用。"),
  r("麻婆豆腐", "🌶️", "川味", "豆腐、肉末、葱", 18, 290, 20, "嫩豆腐 1 盒|猪肉末 100g|郫县豆瓣 15g|花椒粉少许|蒜 2 瓣|葱花少许", "豆腐切 1.5 厘米方块，放入加盐的热水中浸 2 分钟，能去豆腥且不易翻炒碎。|锅中下油炒散肉末，肉末变色后放豆瓣酱和蒜末，小火炒出红油和香味。|加入 200ml 热水煮开，轻轻滑入豆腐，中小火煮 5 分钟让豆腐吸味。|淀粉加水调匀，分两次勾薄芡；轻推豆腐避免弄碎，撒花椒粉和葱花后出锅。"),
  r("酸辣土豆丝", "🥔", "川味", "土豆、红椒、青椒", 12, 170, 4, "土豆 2 个|青椒 1 个|红椒 1 个|干辣椒 3 个|白醋 15ml|蒜 2 瓣", "土豆去皮切细丝，立刻放清水中淘洗两遍，洗掉表面淀粉后沥到尽量干。|青红椒切丝，蒜切片；锅烧热后下油，小火煸香干辣椒和蒜片，注意不要煳。|转大火倒入土豆丝，连续快速翻炒约 1 分钟；土豆丝刚变透明时加入青红椒丝。|沿锅边淋白醋，加盐后再炒 20 秒，保持脆爽口感，立刻关火出锅。"),
  r("番茄牛腩", "🍲", "家常", "牛腩、番茄、洋葱、土豆", 65, 390, 34, "牛腩 500g|番茄 3 个|土豆 1 个|洋葱 1/2 个|姜 3 片|番茄酱 15g", "牛腩切块冷水下锅，加两片姜；沸腾后撇净浮沫，再煮 3 分钟后捞出，用温水冲净。|两个番茄切块，一个番茄用开水烫后去皮打碎；锅中炒香洋葱，加入番茄块炒到出沙。|放牛腩、番茄酱和约 1L 热水，大火煮开后转小火加盖炖 45 分钟；高压锅可压 20 分钟。|放土豆和番茄碎继续炖 15 分钟，土豆软而不碎时加盐；静置 5 分钟让味道更融合。"),
  r("嫩滑鸡蛋羹", "🥚", "粤式", "鸡蛋、葱", 15, 150, 12, "鸡蛋 2 个|温水 220ml|生抽 5ml|香油 3ml|葱花少许", "鸡蛋充分打散后加入温水，蛋液与水约 1:1.5；加一小撮盐，轻轻搅匀不要打出太多泡沫。|用细筛过滤一次蛋液，倒入浅碗；撇去表面气泡，覆盖耐高温保鲜膜并扎小孔。|蒸锅水开后放入碗，转最小火蒸 8 分钟；关火焖 3 分钟，避免大火出现蜂窝。|取出后淋生抽和香油，撒葱花；轻晃碗身，蛋羹整体颤动但中心不流动即为刚好。"),
  r("辣椒炒肉", "🌶️", "川味", "五花肉、青椒、红椒", 16, 430, 23, "五花肉 180g|青椒 3 个|红椒 1 个|豆豉 10g|蒜 2 瓣|生抽 10ml", "五花肉冷冻 20 分钟后更好切薄片；青红椒拍松切段，蒜切片，豆豉略剁碎。|冷锅放肉片开中火慢慢煸，煸出部分油脂、边缘微卷时盛出；油太多可倒出一半。|用锅中余油下青红椒大火煸炒约 2 分钟，椒皮有虎皮纹时加入蒜片和豆豉。|倒回肉片，加入生抽，快速翻炒 30 秒；肉片重新变热且辣椒仍脆时关火。"),
  r("冬瓜丸子汤", "🍵", "家常", "冬瓜、肉末、葱、姜", 25, 210, 18, "冬瓜 300g|猪肉末 180g|鸡蛋 1/2 个|姜 5g|葱花少许|淀粉 5g", "冬瓜去皮去瓤切厚片；肉末加蛋液、姜末、盐和淀粉，顺一个方向搅到发黏。|锅中烧约 700ml 水至微沸，不要大开；手上沾水把肉馅挤成丸子，用勺子轻放入锅。|所有丸子浮起后撇去浮沫，转中小火煮 5 分钟，再放冬瓜片煮 6 分钟。|冬瓜变半透明时加盐和白胡椒，关火撒葱花；先喝汤再吃丸子口感最佳。"),
  r("三文鱼能量沙拉", "🥗", "轻食", "三文鱼、生菜、黄瓜、玉米、鸡蛋", 18, 350, 28, "三文鱼 150g|生菜 1 把|黄瓜 1/2 根|玉米粒 60g|鸡蛋 1 个|酸奶 30g", "三文鱼擦干后两面撒盐和黑胡椒；鸡蛋冷水下锅，水沸后煮 8 分钟，过凉水去壳。|平底锅中火预热，少油煎三文鱼，每面约 2 分钟；中心略带粉色可保持嫩度。|生菜洗净后务必甩干，黄瓜切片，玉米粒焯水；酸奶加少许盐、黑胡椒和柠檬汁调成酱。|所有蔬菜铺盘，放切块三文鱼和对半鸡蛋，最后淋酸奶酱；吃前再拌避免生菜出水。"),
  r("紫菜蛋花汤", "🍲", "家常", "紫菜、鸡蛋、豆腐", 8, 110, 10, "紫菜 5g|鸡蛋 1 个|嫩豆腐 100g|虾皮少许|葱花少许|香油 3ml", "紫菜撕小片，豆腐切小丁，鸡蛋打散；把紫菜、虾皮、盐和葱花先放入汤碗。|锅中加 500ml 水烧开，放豆腐丁煮 2 分钟；可加一点白胡椒提鲜。|转小火让水面保持微沸，用筷子搅出漩涡，蛋液沿着筷子缓慢细流倒入锅中。|等蛋花全部浮起后连汤倒入放好紫菜的碗里，淋香油，利用余温把紫菜泡开。"),
  r("鸡胸肉炒西兰花", "🥦", "轻食", "鸡胸肉、西兰花、胡萝卜", 18, 260, 38, "鸡胸肉 220g|西兰花 1/2 颗|胡萝卜 1/2 根|蒜 2 瓣|生抽 10ml", "鸡胸肉逆纹切片，用生抽、黑胡椒和淀粉抓匀；西兰花切小朵，胡萝卜切薄片。|西兰花和胡萝卜沸水焯 50 秒，捞出沥干，缩短后续炒制时间。|热锅下油，鸡肉平铺煎至两面发白后盛出；原锅下蒜末炒香。|倒入蔬菜和鸡肉，大火翻炒 1 分钟，沿锅边淋 2 汤匙水，收干后出锅。"),
  r("番茄鸡胸肉意面", "🍝", "轻食", "鸡胸肉、番茄、意面", 25, 460, 40, "鸡胸肉 180g|番茄 2 个|意面 160g|洋葱 1/4 个|蒜 2 瓣", "意面按包装时间煮至八成熟，留半碗面汤；鸡胸肉切丁，用盐和黑胡椒腌 5 分钟。|番茄去蒂切丁，洋葱和蒜切末；鸡胸肉在热锅中煎至表面金黄后盛出。|原锅炒香洋葱蒜末，下番茄中火压出汁，加少量面汤煮成浓稠酱汁。|倒回鸡肉和意面，大火翻拌 1 分钟使酱汁挂面，尝味后撒黑胡椒。"),
  r("土豆鸡蛋饼", "🫓", "家常", "土豆、鸡蛋、胡萝卜", 20, 280, 14, "土豆 1 个|鸡蛋 2 个|胡萝卜 1/3 根|面粉 30g|葱花少许", "土豆和胡萝卜擦细丝，清水冲去部分淀粉后挤干；葱切末。|碗中打入鸡蛋，加面粉、盐和少量清水，调成能缓慢流动的糊。|混入土豆丝和胡萝卜丝，确保每根蔬菜丝均匀裹上蛋糊。|平底锅刷油，摊成约 1 厘米厚的圆饼，小火每面煎 4 分钟至金黄熟透。"),
  r("菠菜豆腐蛋花汤", "🥬", "家常", "菠菜、豆腐、鸡蛋", 12, 160, 15, "菠菜 1 把|嫩豆腐 150g|鸡蛋 1 个|姜 2 片|香油少许", "菠菜洗净切段，豆腐切小块，鸡蛋打散；锅中加 600ml 水和姜片烧开。|先放豆腐小火煮 3 分钟，让汤底带出豆香，再加盐和白胡椒。|放入菠菜，等颜色转翠绿后保持微沸，不要久煮以免发黄。|沿锅边淋入蛋液，蛋花浮起后立刻关火，滴几滴香油即可。"),
  r("牛肉西兰花", "🥩", "粤式", "牛肉、西兰花、胡萝卜", 20, 310, 32, "牛肉 200g|西兰花 1/2 颗|胡萝卜 1/2 根|蚝油 10ml|蒜 2 瓣", "牛肉逆纹切片，用生抽、淀粉和少量油抓匀；西兰花和胡萝卜焯水 1 分钟。|热锅下油，牛肉滑炒到七成熟立刻盛出，保留锅内肉汁。|蒜末爆香后倒入西兰花和胡萝卜，大火翻炒 40 秒。|回锅牛肉，加入蚝油和 2 汤匙水，快速翻匀至汁液包裹食材。"),
  r("虾仁玉米炒蛋", "🦐", "家常", "虾仁、玉米、鸡蛋", 15, 290, 28, "虾仁 150g|玉米粒 100g|鸡蛋 3 个|葱花少许|牛奶 15ml", "虾仁擦干后用盐和白胡椒腌 5 分钟；鸡蛋加牛奶和少许盐打散。|玉米粒沸水焯 1 分钟后沥干，保证下锅后不出水。|热锅下油，虾仁炒到变红后加入玉米粒翻炒 30 秒。|转中小火倒入蛋液，用锅铲轻推至半凝固，撒葱花后余温焖 30 秒。"),
  r("香菇鸡腿焖饭", "🍚", "家常", "鸡腿肉、香菇、胡萝卜、米饭", 35, 510, 30, "鸡腿肉 250g|香菇 5 朵|胡萝卜 1/2 根|大米 2 杯|生抽 15ml", "大米淘净后按平时煮饭的水量浸泡 15 分钟；鸡腿肉去骨切丁，香菇和胡萝卜切丁。|鸡腿肉用生抽、姜末腌 10 分钟，锅中少油煎到表面金黄。|加入香菇和胡萝卜炒香，倒在米上，连同煎出的汁水一起加入电饭煲。|按煮饭键完成后焖 8 分钟再翻松，避免底部焦糊并让味道均匀。"),
  r("芹菜肉丝", "🥬", "家常", "芹菜、猪里脊、胡萝卜", 16, 270, 27, "芹菜 250g|猪里脊 180g|胡萝卜 1/3 根|姜 2 片|生抽 10ml", "芹菜撕去老筋切斜段，胡萝卜切丝；里脊逆纹切丝，用生抽和淀粉抓匀。|锅中烧水，把芹菜和胡萝卜焯 30 秒后迅速捞出，保留脆度。|热锅下油，姜丝炒香后放肉丝，大火滑炒至刚变色。|倒入芹菜和胡萝卜，快速翻炒 40 秒，补少许盐后马上出锅。"),
  r("黄瓜鸡蛋卷", "🥒", "轻食", "黄瓜、鸡蛋", 12, 180, 13, "黄瓜 1 根|鸡蛋 3 个|胡萝卜 1/4 根|盐少许|黑胡椒少许", "黄瓜和胡萝卜切极细丝，撒少许盐静置 3 分钟后挤干水分。|鸡蛋打散，加入一小撮盐，平底锅刷薄油，摊成两张薄蛋皮。|把黄瓜丝和胡萝卜丝均匀铺在蛋皮上，撒一点黑胡椒。|从一端卷紧后切成 3 厘米小段，切口朝上摆盘即可。"),
  r("南瓜牛奶羹", "🎃", "轻食", "南瓜、牛奶", 25, 210, 8, "南瓜 400g|牛奶 250ml|玉米粒 30g|盐少许|黑胡椒少许", "南瓜去皮去籽切薄片，上锅蒸 15 分钟至筷子轻碰即碎。|把蒸好的南瓜加一半牛奶打成细腻泥，喜欢颗粒口感可保留少量南瓜块。|南瓜泥倒入小锅，加入剩余牛奶和玉米粒，小火不断搅拌加热。|汤羹冒热气后用盐和黑胡椒调味，切勿煮沸以免牛奶结絮。"),
  r("海带豆腐汤", "🍵", "粤式", "海带、豆腐、胡萝卜", 20, 130, 11, "海带结 150g|豆腐 150g|胡萝卜 1/3 根|姜 2 片|葱花少许", "海带提前泡发后冲洗，切小段；豆腐切块，胡萝卜切薄片。|锅中加 700ml 水、姜片和海带，大火煮开后转小火煮 10 分钟。|加入胡萝卜和豆腐，保持小火再煮 5 分钟，避免沸腾过猛弄碎豆腐。|加盐和白胡椒调味，关火后撒葱花，静置 1 分钟再盛出。"),
  r("茄子肉末拌面", "🍜", "家常", "茄子、肉末、面条", 25, 480, 25, "茄子 1 根|猪肉末 150g|面条 200g|番茄 1 个|蒜 3 瓣", "茄子切小丁后拌少量油，微波炉高火 3 分钟或蒸软，减少吸油。|锅中炒散肉末，下蒜末炒香，再放番茄丁炒到出汁。|加入软茄子、生抽和半碗水，中小火煮 5 分钟至成为浓稠肉酱。|另锅煮面至熟，捞入肉酱锅中翻拌，让每根面条均匀挂汁后装盘。"),
  r("牛腩胡萝卜炖锅", "🍲", "家常", "牛腩、胡萝卜、洋葱", 60, 360, 33, "牛腩 400g|胡萝卜 2 根|洋葱 1 个|番茄 1 个|姜 3 片", "牛腩切块冷水下锅，水沸后撇去浮沫，捞出用温水冲洗干净。|锅中少油炒香洋葱和姜片，加入牛腩翻炒 2 分钟锁住香气。|加热水没过牛腩，小火盖盖炖 40 分钟；高压锅可缩短到 20 分钟。|放胡萝卜和番茄，再炖 15 分钟至胡萝卜软透，最后加盐调味。"),
  r("毛豆炒肉末", "🫛", "家常", "毛豆、肉末、红椒", 18, 320, 25, "毛豆仁 200g|猪肉末 150g|红椒 1 个|蒜 2 瓣|生抽 10ml", "毛豆仁沸水焯 2 分钟后沥干；红椒切小丁，蒜切末。|热锅下油，肉末用锅铲压散，炒至水分收干、边缘微焦。|加入蒜末和红椒炒香，再下毛豆仁翻炒 1 分钟。|加入生抽和 3 汤匙水，盖盖焖 3 分钟让毛豆熟透，开盖收汁。"),
  r("豆腐蔬菜沙拉", "🥗", "轻食", "豆腐、生菜、番茄、黄瓜", 15, 230, 16, "北豆腐 200g|生菜 1 把|番茄 1 个|黄瓜 1/2 根|酸奶 30g", "豆腐切块后用厨房纸吸干，平底锅少油煎至四面金黄，放凉备用。|生菜洗净彻底甩干，番茄切瓣，黄瓜切片，避免带太多水稀释酱汁。|酸奶加盐、黑胡椒和少许生抽搅匀，调成清爽的低脂酱汁。|把蔬菜和温热豆腐分层摆盘，食用前才淋酱并轻轻拌匀。"),
  r("莲藕排骨汤", "🍲", "家常", "莲藕、排骨、胡萝卜", 75, 350, 29, "排骨 500g|莲藕 300g|胡萝卜 1 根|姜 3 片|葱结 1 个", "排骨冷水下锅，加姜片煮开后焯 3 分钟，捞出用温水洗净血沫。|莲藕去皮切厚片，胡萝卜切滚刀块，莲藕切好后可泡清水防氧化。|排骨加约 1.5L 热水和姜片，大火煮开后转小火炖 45 分钟。|加入莲藕和胡萝卜再炖 25 分钟，最后 5 分钟加盐，关火后焖 10 分钟更香。"),
  r("白灼大虾", "🦐", "粤式", "大虾、姜、葱", 12, 190, 30, "大虾 400g|姜 15g|葱 2 根|料酒 10ml|生抽 15ml", "大虾剪去虾须和虾枪，冲洗干净；姜切片，葱切段，另取一部分葱姜切末调蘸料。|锅中加足量水、姜片、葱段和料酒，大火煮到水面持续翻滚。|放入大虾后计时 2 分钟，虾身弯曲变红立刻捞出，不要久煮以免肉质发柴。|用生抽、姜末和少许热油调蘸汁；大虾稍放凉后剥壳蘸食，鲜甜更明显。"),
  r("蛤蜊蒸蛋", "🥚", "粤式", "蛤蜊、鸡蛋、葱", 18, 170, 18, "蛤蜊 250g|鸡蛋 2 个|温水 220ml|姜丝少许|葱花少许", "蛤蜊放盐水中吐沙 30 分钟，冲洗后入沸水煮至刚开口，捞出摆在浅盘中。|鸡蛋打散后加温水和少许盐，过滤一遍去除泡沫，蛋液会更嫩滑。|将蛋液缓缓倒入蛤蜊盘，覆盖耐高温保鲜膜并扎小孔，防止水汽滴入。|水开后转小火蒸 8 分钟，关火焖 2 分钟；淋生抽和香油，撒葱花。"),
  r("蒜蓉粉丝蒸扇贝", "🦪", "粤式", "扇贝、粉丝、蒜", 20, 220, 24, "扇贝 6 个|粉丝 1 把|蒜 1 头|小米椒 1 个|生抽 15ml", "粉丝用温水泡软后剪成短段；扇贝刷洗干净，取肉保留一侧贝壳。|蒜末分两份，一半小火炸成金蒜，再与生蒜、少许盐和热油拌成蒜蓉酱。|贝壳上铺粉丝和扇贝肉，盖上蒜蓉，水沸后入锅大火蒸 5 分钟。|出锅后淋生抽，撒小米椒和葱花；另烧热油浇在蒜蓉上即可。"),
  r("姜葱炒蟹", "🦀", "粤式", "螃蟹、姜、葱", 25, 280, 26, "螃蟹 2 只|姜 30g|葱 3 根|淀粉 20g|料酒 10ml", "螃蟹刷洗后去腮去胃，切成大块；切口蘸一层薄淀粉，能锁住蟹肉汁水。|锅中油烧至六成热，蟹块切口朝下煎 1 分钟，翻面后盛出备用。|原锅留油，下姜片和葱白煸香，倒入蟹块，沿锅边淋料酒去腥。|加 3 汤匙热水，盖盖中火焖 5 分钟；开盖放葱绿，大火翻匀收汁。"),
  r("豉椒炒鱿鱼", "🦑", "粤式", "鱿鱼、青椒、洋葱", 18, 250, 28, "鲜鱿鱼 300g|青椒 2 个|洋葱 1/2 个|豆豉 10g|姜 2 片", "鱿鱼撕去外膜，横竖斜切花刀后切块；青椒和洋葱切片，豆豉略剁碎。|锅中水沸后下鱿鱼焯 20 秒，卷曲立刻捞出沥干，避免后续出水。|热锅下油爆香姜片和豆豉，加入洋葱、青椒大火炒到边缘微焦。|倒回鱿鱼，沿锅边淋生抽，快速翻炒 30 秒后立刻出锅，保持脆嫩。"),
  r("清蒸黄鱼", "🐟", "江南", "黄鱼、葱、姜", 18, 180, 28, "黄鱼 1 条约 500g|姜 15g|葱 2 根|蒸鱼豉油 20ml|食用油 10ml", "黄鱼处理干净后在鱼身两侧各划两刀，抹少许盐，鱼腹放姜片静置 5 分钟。|蒸锅水完全烧开后再放鱼，盘底垫两根葱段，保证蒸汽能从鱼底通过。|大火蒸 8 分钟后关火焖 2 分钟，用筷子能扎透最厚处说明熟透。|倒掉盘内腥水，铺葱姜丝，淋蒸鱼豉油，再用热油激出葱姜香味。"),
  r("花甲粉丝煲", "🍲", "闽南", "花甲、粉丝、蒜", 20, 260, 20, "花甲 350g|粉丝 1 把|蒜 8 瓣|金针菇 1 把|生抽 15ml", "花甲用盐水吐沙后刷洗；粉丝温水泡软，金针菇去根洗净，蒜切成细末。|砂锅底部铺金针菇和粉丝，花甲开口朝上摆好，尽量不要重叠。|锅中小火炒香蒜末，加生抽、蚝油和 150ml 热水煮开，淋到花甲上。|盖盖中火焖 6 分钟，花甲全开后立刻关火；未开口的花甲不要食用。"),
  r("生蚝煎蛋", "🦪", "闽南", "生蚝、鸡蛋、葱", 15, 260, 22, "生蚝肉 200g|鸡蛋 3 个|葱 2 根|地瓜粉 15g|白胡椒少许", "生蚝肉轻轻冲洗后沥干，避免用力搓洗损失鲜味；葱切成葱花。|鸡蛋加盐和白胡椒打散，地瓜粉加少量水调匀后拌入蛋液，口感更嫩。|热锅下稍多一点油，先放生蚝煎到边缘微缩，再均匀淋入蛋液。|中小火煎到边缘定型后翻面，另一面煎 1 分钟，撒葱花即可出锅。"),
  r("冬瓜虾仁", "🍵", "粤式", "冬瓜、虾仁、姜", 16, 160, 22, "冬瓜 350g|虾仁 150g|姜 2 片|葱花少许|淀粉 5g", "冬瓜去皮去瓤切薄片；虾仁擦干后加盐、白胡椒和淀粉抓匀。|锅中少油煸香姜片，下冬瓜翻炒 1 分钟，再加 150ml 热水煮开。|冬瓜变半透明时放虾仁，用锅铲轻推，虾仁变红后加盐调味。|开大火收至锅底留少量清汤，撒葱花，冬瓜软而不烂即可。"),
  r("丝瓜炒蛋", "🥒", "粤式", "丝瓜、鸡蛋、蒜", 12, 180, 13, "丝瓜 2 根|鸡蛋 3 个|蒜 2 瓣|盐少许|白胡椒少许", "丝瓜去皮切滚刀块，蒜切片；鸡蛋加一小撮盐和白胡椒打散。|热锅下油，先把蛋液炒至半凝固，盛出备用，保持蛋块嫩滑。|原锅下蒜片炒香，放丝瓜大火翻炒 1 分钟，沿锅边加 2 汤匙热水。|丝瓜变软后倒回鸡蛋，翻炒 20 秒，加盐调味后立即关火。"),
  r("白灼菜心", "🥬", "粤式", "菜心、蒜", 10, 90, 5, "菜心 300g|蒜 4 瓣|蚝油 10ml|食用油 10ml|盐少许", "菜心逐根洗净，粗梗纵向划一刀，让梗叶受热一致；蒜切成末。|锅中加足量水，沸腾后加入盐和几滴油，先放菜梗 20 秒再全部下锅。|焯约 50 秒后迅速捞出，整齐摆盘，避免继续受热发黄。|小锅热油炒香蒜末，加蚝油和 2 汤匙热水煮开，淋在菜心上。"),
  r("蚝油生菜", "🥗", "粤式", "生菜、蒜", 8, 80, 4, "生菜 1 颗|蒜 4 瓣|蚝油 15ml|淀粉 3g|食用油少许", "生菜掰成大叶后洗净，尽量沥干；蒜切末，淀粉加 2 汤匙水调开。|锅中水大沸后加少许油，放生菜烫 15 秒，叶片变软即捞出摆盘。|另起小锅炒香蒜末，加入蚝油和约 80ml 水煮开。|淋入水淀粉搅至微稠，酱汁均匀浇在生菜上，趁热食用。"),
  r("清炒空心菜", "🥬", "粤式", "空心菜、蒜", 10, 110, 6, "空心菜 400g|蒜 5 瓣|红椒 1/2 个|盐少许|食用油 15ml", "空心菜摘去老梗后洗净，切成两段；蒜拍碎，红椒切细丝。|锅烧至冒烟后下油，放蒜和红椒快速爆香，整个过程不超过 10 秒。|先下空心菜梗大火炒 20 秒，再放叶子，持续快速翻炒避免出水。|沿锅边淋 1 汤匙热水，加盐，炒到叶子刚软仍翠绿时立刻装盘。"),
  r("苦瓜炒蛋", "🥚", "家常", "苦瓜、鸡蛋", 15, 170, 14, "苦瓜 1 根|鸡蛋 3 个|蒜 2 瓣|盐少许|糖 2g", "苦瓜对半剖开，刮净白瓤后切薄片；加盐抓匀静置 5 分钟，挤掉苦水。|锅中水沸后把苦瓜焯 30 秒，捞出过凉水，既减苦又保持翠绿。|鸡蛋加少许盐打散，热锅炒至半凝固盛出；原锅爆香蒜末。|倒入苦瓜大火翻炒 1 分钟，加入鸡蛋和少许糖，翻匀即可。"),
  r("上汤娃娃菜", "🥬", "粤式", "娃娃菜、虾仁、姜", 18, 150, 18, "娃娃菜 2 棵|虾仁 100g|姜 2 片|牛奶 30ml|高汤 300ml", "娃娃菜纵向切四瓣，虾仁擦干后用少许盐腌 5 分钟，姜切丝。|锅中热油煸香姜丝，放虾仁炒到变红后盛出，避免久炒发老。|锅中加高汤烧开，放娃娃菜盖盖煮 5 分钟，菜梗变软后倒入牛奶。|回锅虾仁，加盐和白胡椒调味，煮 30 秒后连汤一起盛出。"),
  r("油焖春笋", "🎋", "江南", "春笋、葱", 25, 150, 5, "春笋 400g|葱 2 根|生抽 15ml|老抽 3ml|糖 8g", "春笋去壳切滚刀块，冷水下锅煮 8 分钟，捞出冲洗以去除涩味。|锅中放少许油，下笋块中火煸到边缘微微焦黄，口感会更香。|加入生抽、老抽、糖和约 150ml 热水，水量到笋块一半即可。|盖盖小火焖 12 分钟，开盖大火收至酱汁浓亮，撒葱花后出锅。"),
  r("江南红烧肉", "🥩", "江南", "五花肉、鸡蛋、葱、姜", 65, 520, 23, "五花肉 500g|鸡蛋 4 个|葱姜适量|冰糖 25g|生抽 20ml", "五花肉切 3 厘米方块，冷水下锅焯 3 分钟，冲洗干净；鸡蛋煮熟去壳备用。|锅中不放油，下五花肉煸出部分油脂，盛出多余油脂后放冰糖炒成浅琥珀色。|倒回肉块快速上色，加生抽、葱姜和热水没过肉，放入鸡蛋。|小火焖 45 分钟，最后开盖收汁，肉块颤动但不散时即可盛出。"),
  r("腌笃鲜", "🍲", "江南", "五花肉、春笋、豆腐", 55, 390, 24, "五花肉 250g|春笋 250g|豆腐 200g|姜 3 片|葱结 1 个", "五花肉切块焯水去浮沫；春笋切块煮 8 分钟去涩，豆腐切大块备用。|砂锅中放五花肉、姜片和约 1L 热水，大火烧开后转小火炖 30 分钟。|放春笋继续炖 15 分钟，让笋的鲜甜融入汤中；汤面有浮油可撇去一部分。|最后放豆腐煮 5 分钟，加盐和白胡椒调味，关火焖 5 分钟再食用。"),
  r("闽南姜母鸡", "🍗", "闽南", "鸡腿肉、姜、香菇", 45, 360, 32, "鸡腿肉 500g|老姜 80g|香菇 6 朵|米酒 80ml|麻油 15ml", "老姜不去皮切厚片，鸡腿肉切大块，香菇泡发后对半切开。|砂锅中下麻油，小火煸姜片约 5 分钟，煸到边缘微卷且香气浓郁。|放鸡块炒到表面变色，加入香菇和米酒，再加热水刚好没过食材。|煮开后小火焖 30 分钟，鸡肉用筷子能轻松穿透时加盐，静置 5 分钟。"),
  r("芋头蒸排骨", "🍖", "粤式", "芋头、排骨、蒜", 35, 380, 28, "小排 350g|芋头 250g|蒜 4 瓣|豆豉 10g|生抽 15ml", "小排切段泡清水 15 分钟去血水，沥干后用生抽、蒜末、豆豉和淀粉腌 20 分钟。|芋头去皮切 2 厘米块，锅中少油煎到表面微黄，蒸后不易碎。|盘底铺芋头，腌好的排骨均匀铺在上面，腌汁一并倒入。|水开后大火蒸 25 分钟，关火焖 3 分钟；排骨熟透、芋头绵软即可。"),
  r("锅包肉", "🥩", "北方", "猪里脊、胡萝卜", 30, 460, 29, "猪里脊 300g|胡萝卜 1/2 根|姜丝 8g|葱丝少许|淀粉 80g|白醋 25ml", "里脊切 0.5 厘米厚片，用少许盐和料酒抓匀；淀粉分次加水调成浓稠能挂住肉片的糊。|油温六成热时逐片下肉，炸到定型捞出；油温升高后复炸 30 秒，外壳酥脆立刻捞出。|白醋、糖、生抽和 3 汤匙水调成糖醋汁；胡萝卜、姜和葱全部切细丝。|锅中留少许油，倒入糖醋汁煮到起大泡，迅速下肉片和蔬菜丝颠匀，10 秒内出锅保持酥脆。"),
  r("地三鲜", "🍆", "北方", "茄子、土豆、青椒", 28, 350, 8, "茄子 1 根|土豆 1 个|青椒 1 个|蒜 4 瓣|生抽 15ml|淀粉 5g", "茄子和土豆切滚刀块，青椒切块；茄子拌少许盐静置 5 分钟后擦干，减少吸油。|锅中多放一点油，先把土豆煎至边缘金黄熟透，再煎茄子到表面软嫩，分别盛出。|生抽、蚝油、糖、淀粉和 100ml 水调成碗汁；蒜切末，青椒入锅大火炒 30 秒。|倒回土豆和茄子，淋碗汁快速翻匀，汤汁浓亮包裹食材时放蒜末，翻两下出锅。"),
  r("小鸡炖蘑菇", "🍲", "北方", "鸡腿肉、香菇、土豆", 50, 390, 32, "鸡腿肉 500g|香菇 200g|土豆 1 个|姜 3 片|葱 1 根|粉丝 1 把", "鸡腿肉剁大块，冷水下锅煮开后撇去浮沫，捞出用温水冲净；香菇泡发或鲜香菇切厚片。|锅中少油煸香葱姜，下鸡块炒到表皮微黄，加生抽和老抽炒匀上色。|倒入热水没过鸡肉，煮开后盖盖小火炖 25 分钟，再加入土豆块和香菇继续炖 12 分钟。|粉丝泡软后放入锅中煮 3 分钟，土豆能轻松插入时加盐；保留少量汤汁更适合拌饭。"),
  r("东北乱炖", "🥘", "北方", "五花肉、土豆、茄子、青椒", 40, 480, 20, "五花肉 180g|土豆 1 个|茄子 1 根|青椒 1 个|豆腐 1 块|葱姜蒜适量", "五花肉切薄片，土豆和茄子切大块，青椒切段，豆腐切块后煎至两面微黄。|锅中不放油煸五花肉至出油，下葱姜蒜炒香，再放土豆和茄子翻炒 2 分钟。|加入生抽、少许老抽和热水，水量到食材一半；煮开后放入煎豆腐，盖盖中火焖 15 分钟。|放青椒后再炖 3 分钟，土豆软糯、茄子入味时开盖略收汁，尝味补盐出锅。"),
  r("酸菜白肉", "🥬", "北方", "酸菜、五花肉、粉丝", 45, 410, 22, "东北酸菜 350g|五花肉 250g|粉丝 1 把|姜 4 片|葱 1 根|白胡椒少许", "五花肉整块冷水下锅，加姜片和葱煮开，撇浮沫后小火煮 25 分钟，捞出稍晾切薄片，肉汤留下。|酸菜切细丝后用清水冲一遍并攥干；粉丝温水泡软，避免直接下锅吸干汤汁。|锅中放酸菜和肉汤煮开，转小火煮 10 分钟，让酸香融入汤底。|铺入五花肉片和粉丝再煮 3 分钟，加盐和白胡椒调味；肉片刚热透就关火，蘸蒜酱更地道。"),
  r("京酱肉丝", "🥢", "北方", "猪里脊、黄瓜、葱", 20, 330, 28, "猪里脊 220g|黄瓜 1 根|大葱 1 根|甜面酱 25g|生抽 8ml|淀粉 8g", "里脊逆纹切细丝，加生抽、淀粉和 1 汤匙油抓匀腌 10 分钟；黄瓜和葱白切细丝。|甜面酱加 2 汤匙温水和少许糖搅开，酱汁会更容易均匀裹住肉丝。|热锅下油，肉丝快速滑炒至变白后盛出；原锅转小火放甜面酱炒出酱香。|倒回肉丝大火翻炒 30 秒至酱色均匀，盘边摆黄瓜葱丝，可卷豆腐皮或直接配米饭。"),
  r("老北京炸酱面", "🍜", "北方", "肉末、面条、黄瓜", 25, 520, 25, "猪肉末 180g|面条 250g|黄瓜 1 根|黄豆酱 30g|甜面酱 20g|葱姜适量", "黄豆酱和甜面酱加 80ml 温水调匀；黄瓜切细丝，葱姜切末备用。|锅中少油炒散肉末，肉末出油微焦后下葱姜炒香。|倒入调好的酱，小火不断搅拌熬 6 分钟，酱汁浓稠油亮时关火，避免糊底发苦。|面条入沸水煮熟，捞出过一次凉水后沥干；浇炸酱、码黄瓜丝，拌匀再吃。"),
  r("葱爆羊肉", "🥩", "北方", "羊肉、葱", 15, 360, 30, "羊肉片 250g|大葱 2 根|姜丝 5g|生抽 12ml|孜然粉少许|料酒 8ml", "羊肉片用料酒、生抽和少许淀粉抓匀；大葱斜切成较宽的片，葱白和葱绿分开放。|锅烧到微冒烟，放少许油和羊肉片，大火迅速划散，羊肉刚变色立刻盛出。|原锅下姜丝和葱白爆香，炒到边缘微焦、香味明显时倒回羊肉。|加入葱绿和孜然粉，大火翻炒 20 秒，羊肉全熟但仍嫩时立即出锅。"),
  r("孜然牛肉", "🥩", "北方", "牛肉、洋葱", 18, 350, 32, "牛肉 220g|洋葱 1/2 个|青椒 1 个|孜然粒 5g|辣椒粉少许|生抽 10ml", "牛肉逆纹切薄片，用生抽、淀粉和少许油抓匀；洋葱切丝，青椒切条。|锅烧热后下油，牛肉分散铺开，大火滑炒约 50 秒，刚变色便盛出。|原锅下孜然粒小火煸香，再放洋葱和青椒转大火炒至微微发软。|倒回牛肉，撒孜然粉和辣椒粉，快速翻炒 20 秒；闻到浓郁孜然香即出锅。"),
  r("韭菜鸡蛋盒子", "🫓", "北方", "韭菜、鸡蛋、面粉", 35, 310, 16, "韭菜 250g|鸡蛋 3 个|面粉 250g|粉丝 1 把|香油 8ml|盐少许", "面粉分次加温水揉成柔软面团，盖住醒 20 分钟；粉丝泡软切碎，韭菜洗净后一定彻底沥干。|鸡蛋炒成碎末放凉，和韭菜、粉丝、香油拌匀；包之前再加盐，避免韭菜提前出水。|面团分剂擀成中间厚边缘薄的圆皮，放足量馅料后对折捏紧，边缘压出花纹防漏。|平底锅刷油，小火每面煎 4 分钟，期间盖盖焖 2 分钟；外皮金黄、按压回弹即可。"),
  r("山西过油肉", "🥢", "北方", "猪里脊、木耳、青椒", 25, 340, 28, "猪里脊 220g|木耳 50g|青椒 1 个|洋葱 1/4 个|蒜 3 瓣|生抽 12ml", "里脊切薄片，加盐、淀粉和少许油抓匀；木耳泡发撕小朵，青椒和洋葱切片。|锅中油烧热，把肉片滑至八成熟捞出；木耳沸水焯 1 分钟沥干，口感更脆。|生抽、老抽、醋、糖、淀粉和半碗水调成碗汁；锅中爆香蒜末，下洋葱和青椒炒香。|倒入木耳和肉片，淋碗汁大火翻炒至汤汁浓亮挂住食材，马上出锅。"),
  r("糖醋里脊", "🍖", "北方", "猪里脊、青椒", 30, 440, 28, "猪里脊 300g|青椒 1 个|番茄酱 35g|白醋 20ml|淀粉 80g|白糖 20g", "里脊切条，加盐和料酒抓匀；淀粉加水调成能拉丝的厚糊，把肉条逐一裹匀。|油温六成热时下肉条炸至定型捞出，油温升高后再复炸 30 秒，炸到表面干爽酥脆。|番茄酱、白醋、白糖、生抽和 80ml 水调匀；青椒切小块，入锅快速翻炒 20 秒。|倒入糖醋汁煮至大泡浓稠，立即放肉条颠匀，酱汁刚挂满外皮就盛出。"),
  r("白菜羊肉锅", "🍲", "北方", "白菜、羊肉、粉丝", 28, 360, 31, "羊肉片 250g|白菜 350g|粉丝 1 把|姜 3 片|葱 1 根|白胡椒少许", "白菜帮和叶分开切，粉丝泡软；羊肉片提前放室温 5 分钟，姜切片、葱切段。|砂锅中加 700ml 热水和姜葱煮开，先下白菜帮煮 4 分钟至稍软。|放入白菜叶和粉丝，煮 2 分钟后把羊肉片一片片拨散放入，避免结团。|羊肉变色后加盐和白胡椒，最多再煮 1 分钟就关火；蘸芝麻酱或腐乳汁都很合适。"),
  r("拔丝红薯", "🍠", "北方", "红薯", 30, 320, 4, "红薯 2 个|白糖 100g|食用油适量|熟芝麻少许|清水 15ml", "红薯去皮切 2 厘米块，擦干表面水分；锅中油热后中火炸 6 至 8 分钟，筷子能轻松穿过时捞出。|把油温升高后复炸 20 秒，使表面金黄酥硬，捞出放在盘边备用。|另起干净锅，放白糖和清水，小火慢熬并不断晃锅，糖液由大泡转小泡、颜色变浅琥珀色。|迅速倒入红薯块关火翻匀，拉起糖丝能成细线时撒芝麻，趁热用凉水蘸筷子夹食。"),
  r("红烧带鱼", "🐟", "北方", "带鱼、葱、姜", 30, 310, 28, "带鱼 500g|葱 1 根|姜 15g|蒜 3 瓣|生抽 15ml|陈醋 10ml", "带鱼处理干净切段，用料酒、姜片和少许盐腌 10 分钟，之后擦干表面水分防溅油。|平底锅放油，把带鱼两面煎到金黄定型后盛出；不要频繁翻面以免鱼肉散碎。|锅中留底油炒香葱姜蒜，加入生抽、老抽、陈醋、糖和约 250ml 热水煮开。|轻放带鱼，盖盖中小火焖 10 分钟，再开盖收汁 2 分钟；汤汁浓亮后轻轻盛出。")
];

const savedState = JSON.parse(localStorage.getItem("today-eat-state") || "{}");
const state = { selected: Array.isArray(savedState.selected) ? savedState.selected : [], favorites: Array.isArray(savedState.favorites) ? savedState.favorites : [], goal: savedState.goal || "均衡营养", menuIndex: 0 };
const $ = (selector) => document.querySelector(selector);
const escapeHtml = (value) => String(value).replace(/[&<>'"]/g, (char) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", "'": "&#39;", '"': "&quot;" })[char]);
const saveState = () => localStorage.setItem("today-eat-state", JSON.stringify({ selected: state.selected, favorites: state.favorites, goal: state.goal }));
const syncIngredientButtons = () => document.querySelectorAll(".quick-chip").forEach((button) => button.classList.toggle("active", state.selected.includes(button.dataset.ingredient)));
const libraryGroups = {
  "肉蛋禽畜": ["鸡蛋", "鸡胸肉", "鸡腿肉", "猪里脊", "牛肉", "牛腩", "羊肉", "五花肉", "排骨", "肉末"],
  "海鲜水产": ["虾仁", "大虾", "鲈鱼", "黄鱼", "带鱼", "鳕鱼", "三文鱼", "鱿鱼", "花甲", "蛤蜊", "扇贝", "生蚝", "螃蟹"],
  "南方时蔬": ["菜心", "空心菜", "娃娃菜", "丝瓜", "苦瓜", "秋葵", "荷兰豆", "春笋", "山药", "芋头", "冬瓜", "茄子", "青椒", "红椒"],
  "北方家常": ["韭菜", "酸菜", "红薯", "白菜", "白萝卜", "土豆", "面粉", "馒头", "粉丝", "木耳"],
  "常用蔬菜菌菇": ["番茄", "西兰花", "菠菜", "生菜", "白菜", "芹菜", "黄瓜", "土豆", "胡萝卜", "白萝卜", "洋葱", "玉米", "南瓜", "莲藕", "香菇", "口蘑", "木耳", "紫菜", "海带"],
  "主食与豆乳": ["豆腐", "腐竹", "牛奶", "酸奶", "奶酪", "米饭", "面条", "意面", "粉丝", "年糕", "馒头", "花生", "豌豆"]
};

function renderSelected() {
  $("#selected-ingredients").innerHTML = state.selected.map((ingredient) => `<span class="selected-tag">${escapeHtml(ingredient)}<button type="button" data-remove="${escapeHtml(ingredient)}" aria-label="移除${escapeHtml(ingredient)}">×</button></span>`).join("");
  $("#selected-count").textContent = `已选 ${state.selected.length} 种`;
  syncIngredientButtons();
}

function addIngredient(rawIngredient) {
  const ingredient = rawIngredient.trim().replace(/\s+/g, " ").slice(0, 30);
  if (!ingredient) return;
  if (!state.selected.includes(ingredient)) state.selected.push(ingredient);
  saveState(); renderSelected(); $("#ingredient-search").value = ""; $("#ingredient-results").innerHTML = "";
}

function renderSearchResults(query) {
  const matches = ingredients.filter((item) => item.includes(query) && !state.selected.includes(item));
  const custom = !state.selected.includes(query) && !matches.includes(query);
  $("#ingredient-results").innerHTML = [...matches.map((item) => `<button class="ingredient-option" type="button" data-add="${escapeHtml(item)}">+ 添加 ${escapeHtml(item)}</button>`), custom ? `<button class="ingredient-option custom-option" type="button" data-add="${escapeHtml(query)}">+ 添加“${escapeHtml(query)}”到我的食材</button>` : ""].join("");
}

function recipeMatch(recipe) {
  const matched = recipe.tags.filter((tag) => state.selected.includes(tag));
  return { matched, missing: recipe.tags.filter((tag) => !state.selected.includes(tag)) };
}
function recipeScore(recipe, cuisine, covered = new Set()) {
  const { matched, missing } = recipeMatch(recipe);
  const cuisineMatch = cuisine === "不限" || cuisine === recipe.cuisine ? 2 : 0;
  const goalBoost = state.goal === "高蛋白" ? recipe.protein / 8 : state.goal === "减脂轻食" ? (recipe.kcal < 310 ? 3 : 0) : state.goal === "省时快手" ? (recipe.minutes <= 15 ? 3 : 0) : 1;
  const newCoverage = matched.filter((tag) => !covered.has(tag)).length;
  return matched.length * 12 + newCoverage * 8 - missing.length * 3 + cuisineMatch + goalBoost;
}
function chooseMenu() {
  const selectedMatches = recipes.filter((recipe) => recipe.tags.some((tag) => state.selected.includes(tag)));
  if (!selectedMatches.length) return [];
  const cuisine = $("#cuisine-select").value;
  const cuisineMatches = cuisine === "不限" ? selectedMatches : selectedMatches.filter((recipe) => recipe.cuisine === cuisine);
  const eligible = cuisineMatches.length ? cuisineMatches : selectedMatches;
  const remaining = [...eligible];
  const selected = [];
  const covered = new Set();
  const start = state.menuIndex % remaining.length;
  remaining.push(...remaining.splice(0, start));
  while (remaining.length && selected.length < 3) {
    let bestIndex = 0;
    for (let index = 1; index < remaining.length; index += 1) {
      if (recipeScore(remaining[index], cuisine, covered) > recipeScore(remaining[bestIndex], cuisine, covered)) bestIndex = index;
    }
    const [recipe] = remaining.splice(bestIndex, 1);
    selected.push(recipe);
    recipeMatch(recipe).matched.forEach((tag) => covered.add(tag));
  }
  return selected;
}

function renderRecommendation() {
  const menu = chooseMenu(), people = Number($("#people-select").value);
  if (!menu.length) {
    $("#menu-reason").textContent = state.selected.length ? `还没有收录能直接使用“${state.selected.join("、")}”的菜谱。请在食材库补充主要食材，或换一个已收录食材再试。` : "请先添加至少一种家中食材，我只会推荐与你已选食材有关的菜。";
    $("#dish-list").innerHTML = '<div class="empty-state">暂时没有相关菜谱。试试添加鸡蛋、番茄、牛肉、豆腐、青椒等食材。</div>';
    $("#nutrition-summary").classList.add("hidden"); $("#shopping-button").classList.add("hidden");
    $("#recommendation").classList.remove("hidden"); $("#recommendation").scrollIntoView({ behavior: "smooth", block: "start" });
    return;
  }
  const used = [...new Set(menu.flatMap((dish) => recipeMatch(dish).matched))];
  const missing = [...new Set(menu.flatMap((dish) => recipeMatch(dish).missing))];
  const kcal = menu.reduce((total, dish) => total + dish.kcal, 0) * people, protein = menu.reduce((total, dish) => total + dish.protein, 0) * people;
  $("#menu-reason").textContent = `这 ${menu.length} 道菜都直接使用了你已有的 ${used.join("、")}；共需补充 ${missing.length} 种辅助食材。`;
  $("#dish-list").innerHTML = menu.map((dish, index) => { const matched = recipeMatch(dish).matched.join("、"); return `<button class="dish-card" type="button" data-recipe="${index}"><span class="dish-emoji">${dish.emoji}</span><span><span class="dish-name">${dish.name}</span><span class="dish-meta">已用：${matched} · 还差 ${recipeMatch(dish).missing.length} 种主料</span></span><span class="dish-arrow">›</span></button>`; }).join("");
  $("#nutrition-summary").innerHTML = `<div><strong>${Math.round(kcal)}</strong><span>总热量 kcal</span></div><div><strong>${Math.round(protein)}g</strong><span>蛋白质</span></div><div><strong>${menu.reduce((total, dish) => total + dish.minutes, 0)} 分钟</strong><span>烹饪时间</span></div>`;
  $("#shopping-list").innerHTML = missing.length ? missing.map((item) => `<li>${item}</li>`).join("") : "<li>太棒了，现有食材已经足够！</li>";
  $("#nutrition-summary").classList.remove("hidden"); $("#shopping-button").classList.remove("hidden");
  $("#recommendation").classList.remove("hidden"); $("#recommendation").scrollIntoView({ behavior: "smooth", block: "start" });
  document.querySelectorAll(".dish-card").forEach((button) => button.addEventListener("click", () => openRecipe(menu[button.dataset.recipe])));
}
function openRecipe(recipe) {
  const isFavorited = state.favorites.includes(recipe.name);
  $("#recipe-content").innerHTML = `<div class="recipe-category">${recipe.cuisine.toUpperCase()} · ${state.goal}</div><h2 class="recipe-title">${recipe.emoji} ${recipe.name}</h2><p class="recipe-info">约 ${recipe.minutes} 分钟 · ${recipe.kcal} kcal / 人 · 蛋白质 ${recipe.protein}g</p><h3 class="recipe-section-title">所需食材</h3><ul class="recipe-ingredients">${recipe.ingredients.map((item) => `<li>${item}</li>`).join("")}</ul><h3 class="recipe-section-title">详细步骤</h3><ol class="recipe-steps">${recipe.steps.map((step) => `<li>${step}</li>`).join("")}</ol><button id="favorite-recipe" class="favorite-action ${isFavorited ? "is-favorited" : ""}" type="button">${isFavorited ? "♥ 已收藏这道菜" : "♡ 收藏这道菜"}</button>`;
  $("#favorite-recipe").addEventListener("click", () => toggleFavorite(recipe.name));
  if (!$("#recipe-dialog").open) $("#recipe-dialog").showModal();
}

function toggleFavorite(recipeName) {
  state.favorites = state.favorites.includes(recipeName) ? state.favorites.filter((name) => name !== recipeName) : [...state.favorites, recipeName];
  saveState(); renderFavorites();
  const recipe = recipes.find((item) => item.name === recipeName);
  if (recipe) openRecipe(recipe);
}

function renderFavorites() {
  const favoriteRecipes = state.favorites.map((name) => recipes.find((recipe) => recipe.name === name)).filter(Boolean);
  $("#favorites-count").textContent = `${favoriteRecipes.length} 道菜`;
  $("#favorites-list").innerHTML = favoriteRecipes.length ? favoriteRecipes.map((dish) => `<button class="dish-card" type="button" data-favorite="${escapeHtml(dish.name)}"><span class="dish-emoji">${dish.emoji}</span><span><span class="dish-name">${dish.name}</span><span class="dish-meta">${dish.minutes} 分钟 · ${dish.cuisine} · 点击查看做法</span></span><span class="dish-arrow">›</span></button>`).join("") : '<div class="empty-state">暂无收藏。打开任意菜谱详情，点击“收藏这道菜”即可保存在这里。</div>';
  document.querySelectorAll("[data-favorite]").forEach((button) => button.addEventListener("click", () => openRecipe(recipes.find((recipe) => recipe.name === button.dataset.favorite))));
}

function renderLibrary() {
  $("#library-list").innerHTML = Object.entries(libraryGroups).map(([group, foods]) => `<div class="library-group"><h3>${group}</h3><div class="library-chips">${foods.map((food) => `<button class="library-chip ${state.selected.includes(food) ? "is-added" : ""}" type="button" data-library-food="${food}">${state.selected.includes(food) ? "✓ " : "+ "}${food}</button>`).join("")}</div></div>`).join("");
  document.querySelectorAll("[data-library-food]").forEach((button) => button.addEventListener("click", () => { addIngredient(button.dataset.libraryFood); renderLibrary(); }));
}

function showView(view) {
  [".pantry-card", ".preferences", ".recommend-button", "#recommendation"].forEach((selector) => $(selector).classList.toggle("hidden", view !== "today"));
  $("#favorites-panel").classList.toggle("hidden", view !== "favorites");
  $("#library-panel").classList.toggle("hidden", view !== "library");
  document.querySelectorAll(".nav-item").forEach((button) => button.classList.toggle("active", button.dataset.view === view));
  if (view === "favorites") renderFavorites();
  if (view === "library") renderLibrary();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

$("#ingredient-search").addEventListener("input", (event) => { const query = event.target.value.trim(); if (query) renderSearchResults(query); else $("#ingredient-results").innerHTML = ""; });
$("#ingredient-search").addEventListener("keydown", (event) => { if (event.key === "Enter") { event.preventDefault(); addIngredient(event.target.value); } });
$("#ingredient-results").addEventListener("click", (event) => { if (event.target.dataset.add) addIngredient(event.target.dataset.add); });
$("#selected-ingredients").addEventListener("click", (event) => { const ingredient = event.target.dataset.remove; if (ingredient) { state.selected = state.selected.filter((item) => item !== ingredient); saveState(); renderSelected(); } });
document.querySelectorAll(".quick-chip").forEach((button) => button.addEventListener("click", () => addIngredient(button.dataset.ingredient)));
document.querySelectorAll(".goal-chip").forEach((button) => button.addEventListener("click", () => { state.goal = button.dataset.goal; saveState(); document.querySelectorAll(".goal-chip").forEach((chip) => chip.classList.toggle("active", chip === button)); }));
$("#recommend-button").addEventListener("click", renderRecommendation);
$("#refresh-button").addEventListener("click", () => { state.menuIndex = (state.menuIndex + 3) % recipes.length; renderRecommendation(); });
$("#shopping-button").addEventListener("click", () => $("#shopping-dialog").showModal());
document.querySelectorAll(".dialog-close").forEach((button) => button.addEventListener("click", () => button.closest("dialog").close()));
document.querySelectorAll("dialog").forEach((dialog) => dialog.addEventListener("click", (event) => { if (event.target === dialog) dialog.close(); }));
document.querySelectorAll(".nav-item").forEach((button) => button.addEventListener("click", () => showView(button.dataset.view)));
renderSelected(); renderFavorites(); renderLibrary(); document.querySelectorAll(".goal-chip").forEach((chip) => chip.classList.toggle("active", chip.dataset.goal === state.goal));
let installPrompt;
window.addEventListener("beforeinstallprompt", (event) => { event.preventDefault(); installPrompt = event; $("#install-button").classList.add("install-ready"); });
$("#install-button").addEventListener("click", async () => { if (!installPrompt) { alert("在浏览器菜单中选择“安装应用”或“添加到主屏幕”，即可像普通 App 一样使用。"); return; } installPrompt.prompt(); await installPrompt.userChoice; installPrompt = null; $("#install-button").classList.remove("install-ready"); });
if ("serviceWorker" in navigator && ["http:", "https:"].includes(location.protocol)) window.addEventListener("load", () => navigator.serviceWorker.register("./service-worker.js"));
