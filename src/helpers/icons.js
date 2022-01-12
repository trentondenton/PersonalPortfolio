import { library } from "@fortawesome/fontawesome-svg-core";
//import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
    fas,
    faTrash,
    faSignOutAlt,
    faEdit,
    faSpinner,
    faFeatherAlt,
    faPhone,
    faEnvelope,
    faMapMarkedAlt,
    faLock,
    faTimes,
    faChevronCircleDown,
    faBars
} from "@fortawesome/free-solid-svg-icons";

const Icons = () => {
    return library.add(
        fas,
        faTrash,
        faSignOutAlt,
        faEdit,
        faSpinner,
        faFeatherAlt,
        faPhone,
        faEnvelope,
        faMapMarkedAlt,
        faLock,
        faTimes,
        faChevronCircleDown,
        faBars,
        );
};

export default Icons;