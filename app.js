const ingredients = [
  "鸡蛋", "番茄", "鸡胸肉", "土豆", "豆腐", "西兰花", "虾仁", "牛肉", "青椒", "茄子", "香菇", "菠菜", "胡萝卜", "玉米", "面条", "米饭"
];

const recipes = [
  {
    name: "番茄滑蛋", emoji: "🍅", cuisine: "家常", tags: ["鸡蛋", "番茄"], minutes: 10, kcal: 220, protein: 15,
    ingredients: ["番茄 2 个", "鸡蛋 3 个", "葱花少许", "盐、食用油"],
    steps: ["番茄切小块；鸡蛋加少许盐打散。", "热锅倒油，鸡蛋炒至半凝固后盛出。", "番茄炒出汁，倒回鸡蛋翻匀，撒葱花即可。"]
  },
  {
    name: "黑椒鸡胸肉", emoji: "🍗", cuisine: "轻食", tags: ["鸡胸肉"], minutes: 15, kcal: 286, protein: 36,
    ingredients: ["鸡胸肉 250g", "黑胡椒 1 小勺", "生抽 1 小勺", "蒜末少许"],
    steps: ["鸡胸肉切片，用黑胡椒、生抽和蒜末腌 5 分钟。", "不粘锅少油，中火煎至两面微焦。", "加少量清水焖 2 分钟，收汁后装盘。"]
  },
  {
    name: "蒜蓉西兰花", emoji: "🥦", cuisine: "粤式", tags: ["西兰花"], minutes: 8, kcal: 96, protein: 5,
    ingredients: ["西兰花 1 颗", "蒜 3 瓣", "盐少许", "蚝油 1 小勺"],
    steps: ["西兰花切小朵，盐水浸泡后焯水 1 分钟。", "热油爆香蒜末，倒入西兰花大火翻炒。", "加蚝油和少许盐，翻匀即可。"]
  },
  {
    name: "土豆烧豆腐", emoji: "🥔", cuisine: "家常", tags: ["土豆", "豆腐"], minutes: 20, kcal: 310, protein: 17,
    ingredients: ["土豆 1 个", "老豆腐 1 块", "生抽 1 勺", "葱蒜少许"],
    steps: ["土豆切小块，豆腐切块后煎至表面金黄。", "爆香葱蒜，加土豆翻炒后加半碗水。", "土豆将熟时加入豆腐和生抽，焖 5 分钟。"]
  },
  {
    name: "青椒牛肉丝", emoji: "🫑", cuisine: "川味", tags: ["牛肉", "青椒"], minutes: 15, kcal: 330, protein: 30,
    ingredients: ["牛肉 200g", "青椒 2 个", "生抽 1 勺", "淀粉少许"],
    steps: ["牛肉切丝，用生抽和淀粉抓匀。", "青椒切丝，热锅快速滑炒牛肉至变色盛出。", "炒香青椒，倒回牛肉大火翻炒 30 秒即可。"]
  },
  {
    name: "鲜虾豆腐羹", emoji: "🦐", cuisine: "粤式", tags: ["虾仁", "豆腐", "鸡蛋"], minutes: 12, kcal: 240, protein: 26,
    ingredients: ["虾仁 150g", "嫩豆腐 1 盒", "鸡蛋 1 个", "淀粉少许"],
    steps: ["虾仁焯水，豆腐切丁。", "锅中加水煮开，放入豆腐和虾仁调味。", "勾薄芡后淋入蛋液，轻推至成蛋花。"]
  },
  {
    name: "香菇菠菜面", emoji: "🍜", cuisine: "家常", tags: ["香菇", "菠菜", "面条"], minutes: 12, kcal: 390, protein: 14,
    ingredients: ["鲜面条 200g", "香菇 4 朵", "菠菜 1 把", "鸡蛋 1 个"],
    steps: ["香菇切片，菠菜洗净。", "煮面至八成熟，加入香菇和菠菜。", "打入鸡蛋煮熟，调入盐和香油即可。"]
  }
];

const savedState = JSON.parse(localStorage.getItem("today-eat-state") || "{}");
const state = {
  selected: Array.isArray(savedState.selected) ? savedState.selected : [],
  goal: savedState.goal || "均衡营养",
  menuIndex: 0
};
const $ = (selector) => document.querySelector(selector);

function saveState() {
  localStorage.setItem("today-eat-state", JSON.stringify({ selected: state.selected, goal: state.goal }));
}

function syncIngredientButtons() {
  document.querySelectorAll(".quick-chip").forEach((button) => {
    button.classList.toggle("active", state.selected.includes(button.dataset.ingredient));
  });
}

function renderSelected() {
  const target = $("#selected-ingredients");
  target.innerHTML = state.selected.map((ingredient) => `
    <span class="selected-tag">${ingredient}<button type="button" data-remove="${ingredient}" aria-label="移除${ingredient}">×</button></span>
  `).join("");
  $("#selected-count").textContent = `已选 ${state.selected.length} 种`;
  syncIngredientButtons();
}

function addIngredient(ingredient) {
  if (!state.selected.includes(ingredient)) state.selected.push(ingredient);
  saveState();
  renderSelected();
  $("#ingredient-search").value = "";
  $("#ingredient-results").innerHTML = "";
}

function recipeScore(recipe, cuisine) {
  const matches = recipe.tags.filter((tag) => state.selected.includes(tag)).length;
  const cuisineMatch = cuisine === "不限" || cuisine === recipe.cuisine ? 2 : 0;
  const goalBoost = state.goal === "高蛋白" ? recipe.protein / 8 : state.goal === "减脂轻食" ? (recipe.kcal < 300 ? 3 : 0) : state.goal === "省时快手" ? (recipe.minutes <= 12 ? 3 : 0) : 1;
  return matches * 5 + cuisineMatch + goalBoost;
}

function chooseMenu() {
  const cuisine = $("#cuisine-select").value;
  const ranked = [...recipes].sort((a, b) => recipeScore(b, cuisine) - recipeScore(a, cuisine));
  const shifted = ranked.slice(state.menuIndex).concat(ranked.slice(0, state.menuIndex));
  const menu = [];
  for (const recipe of shifted) {
    if (!menu.some((picked) => picked.name === recipe.name)) menu.push(recipe);
    if (menu.length === 3) break;
  }
  return menu;
}

function renderRecommendation() {
  const menu = chooseMenu();
  const people = Number($("#people-select").value);
  const used = [...new Set(menu.flatMap((dish) => dish.tags).filter((tag) => state.selected.includes(tag)))];
  const missing = [...new Set(menu.flatMap((dish) => dish.tags).filter((tag) => !state.selected.includes(tag)))];
  const totalKcal = menu.reduce((total, dish) => total + dish.kcal, 0) * people;
  const totalProtein = menu.reduce((total, dish) => total + dish.protein, 0) * people;
  const reason = used.length ? `优先用了你已有的 ${used.join("、")}，并配成一份${state.goal}的 ${people} 人餐。` : `按${state.goal}目标为你搭配了一份 ${people} 人餐，食材可以灵活替换。`;

  $("#menu-reason").textContent = reason;
  $("#dish-list").innerHTML = menu.map((dish, index) => `
    <button class="dish-card" type="button" data-recipe="${index}">
      <span class="dish-emoji">${dish.emoji}</span>
      <span><span class="dish-name">${dish.name}</span><span class="dish-meta">${dish.minutes} 分钟 · ${dish.kcal} kcal · ${dish.protein}g 蛋白质</span></span>
      <span class="dish-arrow">›</span>
    </button>
  `).join("");
  $("#nutrition-summary").innerHTML = `
    <div><strong>${Math.round(totalKcal)}</strong><span>总热量 kcal</span></div>
    <div><strong>${Math.round(totalProtein)}g</strong><span>蛋白质</span></div>
    <div><strong>${menu.reduce((total, dish) => total + dish.minutes, 0)} 分钟</strong><span>烹饪时间</span></div>
  `;
  $("#shopping-list").innerHTML = missing.length ? missing.map((item) => `<li>${item}</li>`).join("") : "<li>太棒了，现有食材已经足够！</li>";
  $("#recommendation").classList.remove("hidden");
  $("#recommendation").scrollIntoView({ behavior: "smooth", block: "start" });

  document.querySelectorAll(".dish-card").forEach((button) => button.addEventListener("click", () => openRecipe(menu[button.dataset.recipe])));
}

function openRecipe(recipe) {
  $("#recipe-content").innerHTML = `
    <div class="recipe-category">${recipe.cuisine.toUpperCase()} · ${state.goal}</div>
    <h2 class="recipe-title">${recipe.emoji} ${recipe.name}</h2>
    <p class="recipe-info">约 ${recipe.minutes} 分钟 · ${recipe.kcal} kcal / 人 · 蛋白质 ${recipe.protein}g</p>
    <h3 class="recipe-section-title">所需食材</h3>
    <ul class="recipe-ingredients">${recipe.ingredients.map((item) => `<li>${item}</li>`).join("")}</ul>
    <h3 class="recipe-section-title">制作步骤</h3>
    <ol class="recipe-steps">${recipe.steps.map((step) => `<li>${step}</li>`).join("")}</ol>
  `;
  $("#recipe-dialog").showModal();
}

$("#ingredient-search").addEventListener("input", (event) => {
  const query = event.target.value.trim();
  const results = query ? ingredients.filter((item) => item.includes(query) && !state.selected.includes(item)) : [];
  $("#ingredient-results").innerHTML = results.map((item) => `<button class="ingredient-option" type="button" data-add="${item}">+ 添加 ${item}</button>`).join("");
});

$("#ingredient-results").addEventListener("click", (event) => {
  if (event.target.dataset.add) addIngredient(event.target.dataset.add);
});
$("#selected-ingredients").addEventListener("click", (event) => {
  const ingredient = event.target.dataset.remove;
  if (ingredient) { state.selected = state.selected.filter((item) => item !== ingredient); saveState(); renderSelected(); }
});
document.querySelectorAll(".quick-chip").forEach((button) => button.addEventListener("click", () => addIngredient(button.dataset.ingredient)));
document.querySelectorAll(".goal-chip").forEach((button) => button.addEventListener("click", () => {
  state.goal = button.dataset.goal;
  saveState();
  document.querySelectorAll(".goal-chip").forEach((chip) => chip.classList.toggle("active", chip === button));
}));
$("#recommend-button").addEventListener("click", renderRecommendation);
$("#refresh-button").addEventListener("click", () => { state.menuIndex = (state.menuIndex + 2) % recipes.length; renderRecommendation(); });
$("#shopping-button").addEventListener("click", () => $("#shopping-dialog").showModal());
document.querySelectorAll(".dialog-close").forEach((button) => button.addEventListener("click", () => button.closest("dialog").close()));
document.querySelectorAll("dialog").forEach((dialog) => dialog.addEventListener("click", (event) => { if (event.target === dialog) dialog.close(); }));
renderSelected();
document.querySelectorAll(".goal-chip").forEach((chip) => chip.classList.toggle("active", chip.dataset.goal === state.goal));

let installPrompt;
window.addEventListener("beforeinstallprompt", (event) => {
  event.preventDefault();
  installPrompt = event;
  $("#install-button").classList.add("install-ready");
});
$("#install-button").addEventListener("click", async () => {
  if (!installPrompt) {
    alert("在浏览器菜单中选择“安装应用”或“添加到主屏幕”，即可像普通 App 一样使用。");
    return;
  }
  installPrompt.prompt();
  await installPrompt.userChoice;
  installPrompt = null;
  $("#install-button").classList.remove("install-ready");
});
if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => navigator.serviceWorker.register("./service-worker.js"));
}
