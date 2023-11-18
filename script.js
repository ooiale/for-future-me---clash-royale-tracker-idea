// List of all card icons
const allIcons = [
    /*'https://www.noff.gg/clash-royale/res/img/cards/mirror.png',*/
    'https://th.bing.com/th/id/OIP.a-nV_uFY1Dbw8UriYekMDQHaI9?pid=ImgDet&rs=1',
    'https://th.bing.com/th/id/OIP.plEuyV6KGeGV92RefyS45gAAAA?w=152&h=183&c=7&r=0&o=5&dpr=1.3&pid=1.7',
    'https://th.bing.com/th/id/OIP.Ngx9ZUbOsPHxO70vX_4M9wAAAA?w=147&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7',
    'https://th.bing.com/th/id/OIP.CpEU-fvs0J6ci3VyZMS9PAAAAA?w=146&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7',
    'https://www.noff.gg/clash-royale/res/img/cards/heal_spirit.png',
    'https://www.noff.gg/clash-royale/res/img/cards/bats.png',
    'https://www.noff.gg/clash-royale/res/img/cards/goblins.png',
    'https://www.noff.gg/clash-royale/res/img/cards/wall_breakers.png',
    'https://www.noff.gg/clash-royale/res/img/cards/spear_goblins.png',
    'https://www.noff.gg/clash-royale/res/img/cards/ice_golem.png',
    'https://www.noff.gg/clash-royale/res/img/cards/bomber.png',
    'https://www.noff.gg/clash-royale/res/img/cards/rage.png',
    'https://www.noff.gg/clash-royale/res/img/cards/giant_snowball.png',
    'https://www.noff.gg/clash-royale/res/img/cards/barbarian_barrel.png',
    'https://www.noff.gg/clash-royale/res/img/cards/zap.png',
    'https://www.noff.gg/clash-royale/res/img/cards/the_log.png',
    'https://www.noff.gg/clash-royale/res/img/cards/dart_goblin.png',
    'https://www.noff.gg/clash-royale/res/img/cards/miner.png',
    'https://www.noff.gg/clash-royale/res/img/cards/archers.png',
    'https://www.noff.gg/clash-royale/res/img/cards/knight.png',
    'https://www.noff.gg/clash-royale/res/img/cards/goblin_gang.png',
    'https://www.noff.gg/clash-royale/res/img/cards/bandit.png',
    'https://www.noff.gg/clash-royale/res/img/cards/guards.png',
    'https://www.noff.gg/clash-royale/res/img/cards/royal_ghost.png',
    'https://www.noff.gg/clash-royale/res/img/cards/skeleton_barrel.png',
    'https://www.noff.gg/clash-royale/res/img/cards/fisherman.png',
    'https://www.noff.gg/clash-royale/res/img/cards/firecracker.png',
    'https://www.noff.gg/clash-royale/res/img/cards/elixir_golem.png',
    'https://www.noff.gg/clash-royale/res/img/cards/princess.png',
    'https://www.noff.gg/clash-royale/res/img/cards/mega_minion.png',
    'https://www.noff.gg/clash-royale/res/img/cards/ice_wizard.png',
    'https://www.noff.gg/clash-royale/res/img/cards/skeleton_army.png',
    'https://www.noff.gg/clash-royale/res/img/cards/minions.png',
    'littleprince.png',
    'https://www.noff.gg/clash-royale/res/img/cards/royal_delivery.png',
    'https://www.noff.gg/clash-royale/res/img/cards/tornado.png',
    'https://www.noff.gg/clash-royale/res/img/cards/goblin_barrel.png',
    'https://www.noff.gg/clash-royale/res/img/cards/earthquake.png',
    'https://www.noff.gg/clash-royale/res/img/cards/arrows.png',
    /*'https://www.noff.gg/clash-royale/res/img/cards/clone.png',*/
    'https://www.noff.gg/clash-royale/res/img/cards/cannon.png',
    'https://www.noff.gg/clash-royale/res/img/cards/tombstone.png',
    'https://www.noff.gg/clash-royale/res/img/cards/skeleton_king.png',
    'https://www.noff.gg/clash-royale/res/img/cards/valkyrie.png',
    'https://www.noff.gg/clash-royale/res/img/cards/night_witch.png',
    'https://www.noff.gg/clash-royale/res/img/cards/musketeer.png',
    'https://www.noff.gg/clash-royale/res/img/cards/mighty_miner.png',
    'https://www.noff.gg/clash-royale/res/img/cards/hunter.png',
    'https://www.noff.gg/clash-royale/res/img/cards/electro_wizard.png',
    'https://www.noff.gg/clash-royale/res/img/cards/flying_machine.png',
    'https://www.noff.gg/clash-royale/res/img/cards/battle_healer.png',
    'https://www.noff.gg/clash-royale/res/img/cards/baby_dragon.png',
    'https://www.noff.gg/clash-royale/res/img/cards/zappies.png',
    'https://www.noff.gg/clash-royale/res/img/cards/inferno_dragon.png',
    'https://www.noff.gg/clash-royale/res/img/cards/battle_ram.png',
    'https://www.noff.gg/clash-royale/res/img/cards/lumberjack.png',
    'https://www.noff.gg/clash-royale/res/img/cards/magic_archer.png',
    'https://www.noff.gg/clash-royale/res/img/cards/golden_knight.png',
    'https://www.noff.gg/clash-royale/res/img/cards/skeleton_dragons.png',
    'https://www.noff.gg/clash-royale/res/img/cards/hog_rider.png',
    /*'https://www.noff.gg/clash-royale/res/img/cards/mother_witch.png',*/
    'https://www.noff.gg/clash-royale/res/img/cards/pheonix.png',
    'https://www.noff.gg/clash-royale/res/img/cards/dark_prince.png',
    'https://www.noff.gg/clash-royale/res/img/cards/mini_pekka.png',
    'https://www.noff.gg/clash-royale/res/img/cards/fireball.png',
    'https://www.noff.gg/clash-royale/res/img/cards/freeze.png',
    'https://www.noff.gg/clash-royale/res/img/cards/poison.png',
    'https://www.noff.gg/clash-royale/res/img/cards/mortar.png',
    'https://www.noff.gg/clash-royale/res/img/cards/bomb_tower.png',
    'https://www.noff.gg/clash-royale/res/img/cards/tesla.png',
    /*'https://www.noff.gg/clash-royale/res/img/cards/furnace.png',*/
    'https://www.noff.gg/clash-royale/res/img/cards/goblin_cage.png',
    'https://www.noff.gg/clash-royale/res/img/cards/goblin_drill.png',
    'https://www.noff.gg/clash-royale/res/img/cards/electro_dragon.png',
    'https://www.noff.gg/clash-royale/res/img/cards/witch.png',
    'https://www.noff.gg/clash-royale/res/img/cards/monk.png',
    'https://www.noff.gg/clash-royale/res/img/cards/balloon.png',
    'https://www.noff.gg/clash-royale/res/img/cards/archer_queen.png',
    'https://www.noff.gg/clash-royale/res/img/cards/giant.png',
    'https://www.noff.gg/clash-royale/res/img/cards/royal_hogs.png',
    'https://www.noff.gg/clash-royale/res/img/cards/ram_rider.png',
    'https://www.noff.gg/clash-royale/res/img/cards/barbarians.png',
    'https://www.noff.gg/clash-royale/res/img/cards/executioner.png',
    'https://www.noff.gg/clash-royale/res/img/cards/minion_horde.png',
    'https://www.noff.gg/clash-royale/res/img/cards/bowler.png',
    'https://www.noff.gg/clash-royale/res/img/cards/prince.png',
    /*'https://www.noff.gg/clash-royale/res/img/cards/wizard.png',*/
    /*'https://www.noff.gg/clash-royale/res/img/cards/rascals.png',*/
    'https://www.noff.gg/clash-royale/res/img/cards/cannon_cart.png',
    'https://www.noff.gg/clash-royale/res/img/cards/graveyard.png',
    /*'https://www.noff.gg/clash-royale/res/img/cards/goblin_hut.png',*/
    'https://www.noff.gg/clash-royale/res/img/cards/inferno_tower.png',
    'https://www.noff.gg/clash-royale/res/img/cards/elite_barbarians.png',
    'https://www.noff.gg/clash-royale/res/img/cards/sparky.png',
    'https://www.noff.gg/clash-royale/res/img/cards/giant_skeleton.png',
    'https://www.noff.gg/clash-royale/res/img/cards/goblin_giant.png',
    'https://www.noff.gg/clash-royale/res/img/cards/royal_giant.png',
    'https://www.noff.gg/clash-royale/res/img/cards/lightning.png',
    /*'https://www.noff.gg/clash-royale/res/img/cards/rocket.png',*/
    'https://www.noff.gg/clash-royale/res/img/cards/elixir_collector.png',
    'https://www.noff.gg/clash-royale/res/img/cards/x_bow.png',
    'https://www.noff.gg/clash-royale/res/img/cards/royal_recruits.png',
    'https://www.noff.gg/clash-royale/res/img/cards/mega_knight.png',
    'https://www.noff.gg/clash-royale/res/img/cards/pekka.png',
    'https://www.noff.gg/clash-royale/res/img/cards/electro_giant.png',
    'https://www.noff.gg/clash-royale/res/img/cards/lava_hound.png',
    /*'https://www.noff.gg/clash-royale/res/img/cards/barbarian_hut.png',*/
    'https://www.noff.gg/clash-royale/res/img/cards/golem.png',
    /*'https://www.noff.gg/clash-royale/res/img/cards/three_musketeers.png',*/

];

let selectedIcons = [];

function toggleSelect(icon) {
    const index = selectedIcons.indexOf(icon);

    if (index === -1) {
        // Icon not selected, add it to the selectedIcons array
        selectedIcons.push(icon);
    } else {
        // Icon already selected, remove it from the selectedIcons array
        selectedIcons.splice(index, 1);
    }

    // Update the display
    updateDisplay();
}

function updateDisplay() {
    // Get all card elements
    const cards = document.querySelectorAll('.card');

    // Check if exactly 8 icons are selected
    const displayBig = selectedIcons.length === 8;

    // Iterate over each card and update its display based on selection
    cards.forEach((card, index) => {
        const icon = allIcons[index];

        if (selectedIcons.includes(icon) && displayBig) {
            // If the icon is selected and exactly 8 icons are selected, add the 'selected' and 'big' class
            card.classList.add('selected', 'big');
        } else {
            // If the icon is not selected or more/less than 8 icons are selected, remove the 'selected' and 'big' class
            card.classList.remove('selected', 'big');
        }

        // Add the 'highlight' class to the clicked card
        if (selectedIcons.includes(icon)) {
            card.classList.add('highlight');
        } else {
            card.classList.remove('highlight');
        }
    });

    // Optionally, hide unselected cards when exactly 8 icons are selected
    if (displayBig) {
        cards.forEach((card, index) => {
            if (!selectedIcons.includes(allIcons[index])) {
                card.style.display = 'none';
            } else {
                card.style.display = ''; // Show selected cards
            }
        });
    } else {
        // Show all cards when the number of selected icons is not 8
        cards.forEach(card => {
            card.style.display = '';
        });
    }
}

// Create card elements and add them to the body
allIcons.forEach(icon => {
    const card = document.createElement('div');
    card.classList.add('card');
    card.style.backgroundImage = `url('${icon}')`;
    card.addEventListener('click', () => toggleSelect(icon));
    document.body.appendChild(card);
});
