var model;
var handlers;

$(document).ready(function () {

    function IconAtlasViewModel() {
        var self = this;

        self.strategicIconSource = function (string) { return 'img/strategic_icons/' + 'icon_si_' + string + '.png' }
        self.strategicIcons = ko.observableArray([
            'blip',
            'metal_splat_02',
            'control_point_01',
            'celestial_object',
            'artillery_short',
            'artillery_long',
            'land_barrier',
            'commander',
			'anti_missile_system',
			'wraith',
			'lancer',
            'metal_extractor',     
            'metal_extractor_adv',   
            'air_factory_adv',
            'air_factory',
            'bot_factory_adv',
            'bot_factory',
            'vehicle_factory_adv',
            'vehicle_factory',
            'naval_factory_adv',
            'naval_factory',
            'energy_plant_adv',
            'energy_plant',
            'radar_adv',
            'radar',
            'energy_storage_adv',
            'energy_storage',
            'metal_storage_adv',
            'metal_storage',
            'laser_defense_adv',
            'laser_defense',
            'laser_defense_single',
            'air_defense',
            'air_defense_adv',
            'fighter',
            'fighter_adv',
            'bomber_adv',
            'bomber',
            'fabrication_aircraft_adv',
            'fabrication_aircraft',
            'unit_air_generic_adv',
            'unit_air_generic',
            'air_scout',
            'assault_bot_adv',
            'assault_bot',
            'bot_artillery_adv',
            'bot_artillery',
            'fabrication_bot_adv',
            'fabrication_bot',
            'bot_aa',
            'battleship',
            'destroyer',
            'frigate',
            'missile_ship',
            'fabrication_ship_adv',
            'fabrication_ship',
            'sea_scout',
            'attack_sub',
            'fabrication_sub',
            'nuclear_sub',
            'sea_mine',
            'tank_laser_adv',
            'tank_light_laser',
            'tank_heavy_mortar',
            'fabrication_vehicle_adv',
            'fabrication_vehicle',
            'aa_missile_vehicle',
            'land_scout',
            'sonar',
            'sonar_adv',
            'torpedo_launcher',
            'torpedo_launcher_adv',
			'orbital_mine',
            'orbital_laser',
            'radar_satellite',
            'radar_satellite_adv',
            'solar_array',
            'orbital_launcher',
            'orbital_fighter',
            'orbital_lander',
            'deep_space_radar',
            'ion_defense',
            'delta_v_engine',
            'tactical_missile_launcher',
            'commander',
            'nuke_launcher',
            'anti_nuke_launcher',
            'nuke_launcher_ammo',
            'anti_nuke_launcher_ammo',
            'avatar',
            'teleporter',
            'orbital_fabrication_bot',
            'gunship',
            'defense_satellite',
            'tank_armor',
            'tank_heavy_armor',
            'fabrication_bot_combat',
            'fabrication_bot_combat_adv',
            'bot_grenadier',
            'bot_sniper',
            'bot_tactical_missile',
            'bot_bomb',
            'land_mine',
            'orbital_factory',
            'transport',
            'control_module',
            'control_point',
            'mining_platform',
			'excal',
			'hammerhead',
			'hailfire',
			'sentinel',
			'missile_platform',
			'tesla'

        ]);

        self.sendIconList = function () {
            var list = model.strategicIcons();
            engine.call('handle_icon_list', list, 52);
        }
    }
    model = new IconAtlasViewModel();
    handlers = {};

    // inject per scene mods
    if (scene_mod_list['icon_atlas'])
        loadMods(scene_mod_list['icon_atlas']);

    // setup send/recv messages and signals
    app.registerWithCoherent(model, handlers);

    // Activates knockout.js
    ko.applyBindings(model);

    model.sendIconList();

});
