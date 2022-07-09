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
        OPEN_USER_MENU: "OPEN_USER_MENU",
        GO_TO_LOGIN: "GO_TO_LOGIN",
        CLOSE_SESSION: "CLOSE_SESSION",
        GO_TO_CREATE_ACCOUNT: "GO_TO_CREATE_ACCOUNT",
        GO_TO_ADMIN: "GO_TO_ADMIN",
        GO_TO_HELP: "GO_TO_HELP",
        VIEW_SKIN: "VIEW_SKIN",
        TOGGLE_THEME: "TOGGLE_THEME",
        SUCCESSFULLY_LOGIN: "SUCCESSFULLY_LOGIN",
    }
};

export default Mixpanel;