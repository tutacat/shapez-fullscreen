// @ts-nocheck
const METADATA = {
    website: "",
    author: "tutacat",
    name: "Fullscreen Binding",
    version: "1.0.0",
    id: "fullscreen-binding",
    description: "Adds a keybinding for fullscreen mode",
    minimumGameVersion: ">=1.5.0",

    // You can specify this parameter if savegames will still work
    // after your mod has been uninstalled
    doesNotAffectSavegame: true,
};

class Mod extends shapez.Mod {
    init() {
        // Register keybinding
        this.modInterface.registerIngameKeybinding({
            id: "mod_fullscreen",
            keyCode: 122,
            translation: "Toggle Fullscreen",
            handler: root => {
                this.app.settings.updateSetting("fullscreen",!this.app.settings.getSetting("fullscreen"));
                return shapez.STOP_PROPAGATION;
            },
        });
    }
}
