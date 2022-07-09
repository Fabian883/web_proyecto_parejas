import mixpanel from "mixpanel-browser";

mixpanel.init("9dc4347d2a95728cf15848ba70d1b54e", {debug: true, ignore_dnt: true});

const Mixpanel = {
    identify: (id) => {
        mixpanel.identify(id);
    },
    alias: (id) => {
        mixpanel.alias(id);
    },
    track: (name, props) => {
        mixpanel.track(name, props);
    },
    people: {
        set: (props) => {
            mixpanel.people.set(props);
        }
    },
    TYPES: {
        VIEW_SKIN: "VIEW_SKIN",
        VIEW_CHAMP: "VIEW_CHAMP",
        OPEN_SKINS_MENU: "OPEN_SKINS_MENU",
        OPEN_CHAMPS_MENU: "OPEN_CHAMPS_MENU",
        BUY_SKIN: "BUY_SKIN",
    }
};

export default Mixpanel;