let builds = [
  {
    tier: "s",
    name: "(S-) Heimer Blackrose",
    champion_icon: "Heimerdinger",
    itemization: `Heimer = Blue + AP items<br>
    Garen = Tank items (HP)<br>
    Malzahar = Leftover AP items<br>
    Item priority = Heimer > Garen > Malzahar`,
    strategy: `Ideally played from a loss streak as the best ap item holders are more of the expensive unit however early blackrose can win streak.<br><br>
    If loss streak, do not level and prioritise gold then at stage 3-2, level to 6 and roll for watchers + dominators/black rose units to stabilise, stay above 30 gold.<br><br>
    After getting a couple of upgrades, save econ up and slowly push levels.<br><br>
    If you can ideally you level to 8 at stage 4-2 with 30-40 gold to roll with, if not wait till stage 4-5 before rolling.<br><br>
    This comp benefits a lot from econ augments as it is very contested so being able to roll before everyone else is super valuable.<br><br>
    The black rose board is super flexible as multiple other carries use it as well so can flex into different comps.`,
    options: `Flex into all the other black rose variations`,
    lvl9: `Cap out by adding leblanc at 9`,
    conditions: `Black rose spat, Crowns will, Powered Shield`,
    augments: ``,
    anomaly: `Heimer > Garen`,
  },
  {
    tier: "s",
    name: "Silco Dominator",
    champion_icon: "Silco",
    itemization: `Silco = Shojin + 2 AP items<br>
                Mundo/Garen = Tank items<br>
                Mordekaiser = Leftover items<br>
                Item priority = Silco > Mundo`,
    strategy: `Ideally played from a loss streak as the early dominators are 2-3 cost so lose streak all of stage 2 then at stage 3-2 level to 6 and ideally roll for a board with ziggs + bruisers/watchers/blackrose.<br><br>
             Then look to push levels and level to 8 at either 4-2 or 4-5 and then roll for the board (need at least 40 gold leftover if you want to go lvl 8).<br><br>
             If you do not find Mordekaiser than look to play 4 Dominators + more blackrose units.<br><br>
             Silco benefits a lot from attack speed items to cast more often, even double shojin works well.<br><br>
             Morello is not good on him, Red buff is okay because of the attack speed.`,
    options: `Can play 6 Dominator instead. Can also play Garen as main tank`,
    lvl9: `Can cap out with either Malzahar at 9 or Leblanc at 9. And drop Blitz for Mordekaiser. Can drop all the blackrose as well for just 4 dominator + legendaries`,
    conditions: `Early tear/rod or tank item slam`,
    augments: `Powered Shield, Blackrose spat, Long distance Pals`,
    anomaly: `Silco > Mundo`,
  },
  {
    tier: "b",
    name: "Ezreal Reroll",
    champion_icon: "Ezreal",
    itemization: `Ezreal = IE + Academy items<br>
  Leona = Tank/Academy items<br>
  Heimerdinger = Leftover AP items<br>
  Item priority = Ezreal > Leona > Heimer`,
    strategy: `You must first check what the academy items are, if any of the 3 items are items that are good for Ezreal (Infinity edge, Runaans hurricane, Red,, Deathblade, Last Whisper) then you are able to play the line, even better if 2 of 3 items are academy items.<br><br>
  Ideally with reroll strategies you want to build up as much econ as you can so look to lose streak all of stage 2 holding all copies of leona and ezreal with sentinels. If you have a couple of copies of Leona and Ezreal before stage 3-2, I recommend leveling to 6 at stage 3-2 and roll to hit Ez 2 and Leona 2.<br><br>
  If you do not have a couple, keep lose streaking until stage 3-5 and lvl to 7 and roll for upgrades. Once you hit majority of the board 2 star, look to regain gold back to 50 and slow roll excess gold until 3 star. If you are far from leona 3, just switch items to Illaoi 2 lategame.<br><br>
  IMPORTANT = Every game academy has 3 different items, if those items are built and given to academy units they will gain damage amp + reduction, it is NOT only the academy items given from the trait. Therefore double up on the same academy items can be good.<br><br>
  Ezreal ideally wants IE + 1 Atk spd item + Academy<br>
  Leona ideally wants Redemption + Academy items`,
    options: `If you get sentinel spat, can look to play 6 sentinel at 8`,
    lvl9: `Caps out adding Jayce`,
    conditions: `Good academy items`,
    augments: `Academy spat, Investment strategy, Ghost of the past`,
    anomaly: `Ezreal > Leona`,
  },
];
console.log(builds);
let tier_s = $("#s_tier");
let tier_a = $("#a_tier");
let tier_b = $("#b_tier");

for (let i = 0; i < builds.length; i++) {
  let build_obj = builds[i];
  let {
    tier,
    name,
    champion_icon,
    itemization,
    strategy,
    options,
    lvl9,
    conditions,
    augments,
    anomaly,
  } = build_obj;

  function showbuild(build) {
    // Get data from the hovered button using dataset
    const name = build.dataset.name;
    const tier = build.dataset.tier;
    const champion_icon = build.dataset.champion_icon;
    const itemization = build.dataset.itemization;
    const strategy = build.dataset.strategy;
    const options = build.dataset.options;
    const lvl9 = build.dataset.lvl9;
    const conditions = build.dataset.conditions;
    const augments = build.dataset.augments;
    const anomaly = build.dataset.anomaly;

    const currentChild = build.parentElement;

    // Check if any build information div is currently open
    let openBuild = document.querySelector(".build_open");
    if (openBuild) {
      openBuild.remove();
    }

    // Check if the new div already exists

    const build_open = document.createElement("div");
    build_open.className = "build_open";
    build_open.id = name;
    build_open.innerHTML = `
    <h1>
    ${name}
    </h1>
   <img src="assets/builds/garen_tank.png" alt="" srcset="">
   <div class="build_info">

        <h3 class="build_topic">
  <img src="assets/icons/itemization.png" alt="Itemization Icon">
  Itemization:
</h3>
<p class="build_topic_info">${itemization}</p>

<h3 class="build_topic">
  <img src="assets/icons/strategy.png" alt="Strategy Icon">
  Strategy:
</h3>
<p class="build_topic_info">${strategy}</p>

<h3 class="build_topic">
  <img src="assets/icons/options.png" alt="Options Icon">
  Options:
</h3>
<p class="build_topic_info">${options}</p>

<h3 class="build_topic">
  <img src="assets/icons/lvl9.png" alt="Level 9 Icon">
  Level 9:
</h3>
<p class="build_topic_info">${lvl9}</p>

<h3 class="build_topic">
  <img src="assets/icons/conditions.png" alt="Conditions Icon">
  Conditions:
</h3>
<p class="build_topic_info">${conditions}</p>

<h3 class="build_topic">
  <img src="assets/icons/augments.png" alt="Augments Icon">
  Augments:
</h3>
<p class="build_topic_info">${augments}</p>

<h3 class="build_topic">
  <img src="assets/icons/anomaly.png" alt="Anomaly Icon">
  Anomaly:
</h3>
<p class="build_topic_info">${anomaly}</p>

  </div>
  
    `;

    currentChild.insertAdjacentElement("afterend", build_open);
  }

  // Generate the buttons and store data in data-* attributes
  const build_button = `
  
  <button 
  onmouseover="showbuild(this)" 
  class="Comp_icon" 
  data-tier="${tier}" 
  data-name="${name}" 
  data-champion_icon="${champion_icon}" 
  data-itemization="${itemization}" 
  data-strategy="${strategy}" 
  data-options="${options}" 
  data-lvl9="${lvl9}" 
  data-conditions="${conditions}" 
  data-augments="${augments}" 
  data-anomaly="${anomaly}">
   <div class="hover_square"></div>
  <img src="assets/champ_icons/${champion_icon}.png" alt="${champion_icon}" />
  </button>`;

  if (tier == "s") {
    tier_s.append(build_button);
  } else if (tier == "a+") {
    tier_a.append(build_button);
  } else if (tier == "a-") {
    tier_a.append(build_button);
  } else if (tier == "b") {
    tier_b.append(build_button);
  }
}
